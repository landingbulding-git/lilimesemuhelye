// Vercel serverless function (Node runtime). Forwards a browser-side CTA
// click to Meta's Conversions API as a server-side "Purchase" event, using
// the same event_id as the paired fbq('track', 'Purchase', ...) call so
// Meta deduplicates the two into one event.
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { eventId, eventSourceUrl, fbp, fbc, userAgent, value, currency } =
    req.body ?? {};

  if (!eventId || !eventSourceUrl) {
    res.status(400).json({ error: 'Missing eventId or eventSourceUrl' });
    return;
  }

  const pixelId = process.env.META_PIXEL_ID;
  const accessToken = process.env.META_CONVERSIONS_API_TOKEN;

  if (!pixelId || !accessToken) {
    res.status(500).json({ error: 'Conversions API is not configured' });
    return;
  }

  const forwardedFor = req.headers['x-forwarded-for'];
  const clientIp = Array.isArray(forwardedFor)
    ? forwardedFor[0]
    : forwardedFor?.split(',')[0]?.trim();

  const userData = {
    client_ip_address: clientIp,
    client_user_agent: userAgent || req.headers['user-agent'],
  };
  if (fbp) userData.fbp = fbp;
  if (fbc) userData.fbc = fbc;

  const payload = {
    data: [
      {
        event_name: 'Purchase',
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventId,
        event_source_url: eventSourceUrl,
        action_source: 'website',
        user_data: userData,
        custom_data: {
          currency: currency || 'HUF',
          value: typeof value === 'number' ? value : 0,
        },
      },
    ],
  };

  try {
    const metaResponse = await fetch(
      `https://graph.facebook.com/v21.0/${pixelId}/events?access_token=${accessToken}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      },
    );

    const result = await metaResponse.json();

    if (!metaResponse.ok) {
      res.status(502).json({ error: 'Meta rejected the event', details: result });
      return;
    }

    res.status(200).json({ ok: true });
  } catch {
    res.status(502).json({ error: 'Failed to reach Meta' });
  }
}
