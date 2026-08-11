import { useId, useState } from 'react';
import type { FaqGroup } from '../data/faq';

interface Props {
  groups: FaqGroup[];
}

/**
 * The only interactive piece on the page, so it is the only React island.
 * Astro renders it to static HTML at build time and hydrates it on `client:visible`
 * — every answer is in the markup for crawlers even before the JS lands.
 *
 * One panel open at a time, matching the design's single-`open` state.
 */
export default function FaqAccordion({ groups }: Props) {
  const [openKey, setOpenKey] = useState<string | null>(null);
  const baseId = useId();

  // Flat, stable indices across groups so each panel has a unique key/id.
  let index = -1;

  return (
    <div className="flex flex-col border-t border-hairline">
      {groups.map((group, groupIndex) => (
        <div key={group.heading ?? `group-${groupIndex}`} className="contents">
          {group.heading && (
            <div className="pt-[clamp(30px,3.5vw,46px)] pb-[14px]">
              <h3 className="m-0 font-body text-[14px] font-light tracking-[1.2px] opacity-70">
                {group.heading}
              </h3>
            </div>
          )}

          {group.items.map((item) => {
            index += 1;
            const key = `${baseId}-${index}`;
            const isOpen = openKey === key;

            return (
              <div key={key} className="border-b border-hairline">
                <h4 className="m-0">
                  <button
                    type="button"
                    id={`${key}-trigger`}
                    aria-expanded={isOpen}
                    aria-controls={`${key}-panel`}
                    onClick={() => setOpenKey(isOpen ? null : key)}
                    className="flex w-full cursor-pointer items-baseline justify-between gap-6 border-0 bg-none py-[22px] text-left font-display text-[clamp(17px,1.5vw,22px)] leading-[1.3] font-normal text-inherit transition-opacity duration-100 hover:opacity-70"
                  >
                    <span className="text-pretty">{item.question}</span>
                    <span aria-hidden="true" className="flex-none text-[20px] leading-none">
                      {isOpen ? '–' : '+'}
                    </span>
                  </button>
                </h4>

                <div
                  id={`${key}-panel`}
                  role="region"
                  aria-labelledby={`${key}-trigger`}
                  hidden={!isOpen}
                >
                  {item.answer.map((paragraph, paragraphIndex) => (
                    <p
                      // eslint-disable-next-line react/no-array-index-key -- static content
                      key={paragraphIndex}
                      className="m-0 max-w-[66ch] pb-[26px] text-[clamp(15px,1.1vw,17px)] leading-[1.6] tracking-[0.16px] text-pretty last:pb-[26px] [&:not(:last-child)]:pb-[18px]"
                      dangerouslySetInnerHTML={{ __html: paragraph }}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
