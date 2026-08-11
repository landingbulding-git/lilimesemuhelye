export interface FaqItem {
  question: string;
  /** One entry per paragraph; may contain inline <strong> emphasis. */
  answer: string[];
}

export interface FaqGroup {
  /** Quiet eyebrow above a run of questions. The opening run has none. */
  heading?: string;
  items: FaqItem[];
}

export const faqGroups: FaqGroup[] = [
  {
    items: [
      {
        question: 'Mi van, ha ez az egész meseterápia nem működik nekem?',
        answer: [
          'Pontosan ezért hoztuk létre az „Ítélkezésmentes Menedék Garanciát”. Az első alkalom <strong>teljesen ingyenes és kockázatmentes</strong>, így saját magad tapasztalhatod meg a biztonságos közeget, mielőtt elköteleződnél.',
        ],
      },
    ],
  },
  {
    heading: 'Általános információk a foglalkozásról',
    items: [
      {
        question: 'Miért kizárólag népmesékkel dolgozunk?',
        answer: [
          'Azért használunk kizárólag népmeséket — azoknak is a lehető legeredetibb variációit —, mert a népmese nem egyszerű szórakoztató történet. A népmesékben az emberi és a kollektív tudás gyűlik össze; szimbólumaik életutakat mutatnak be, és olyan intuitív belső tudást hordoznak, amely <strong>megoldást és kiutat kínálhat</strong> az élethelyzeteinkre, ha a szimbólumokat megfelelően alkalmazzuk.',
        ],
      },
      {
        question:
          'Hasznos lehet ez akkor is, ha engem eddig nem érdekeltek a mesék?',
        answer: [
          'Igen, a mese mindenkire hatással van. Nem feltétel a korábbi, mesék iránti rajongás — a mesézés működik, ha nem gátoljuk a folyamatot, és felismerjük, hogy a mesék nem merülnek ki királylányok és királyfiak történetében, hanem <strong>fejlődési utat mutatnak</strong>.',
        ],
      },
    ],
  },
  {
    heading: 'Az online esemény menete és a rajzolás',
    items: [
      {
        question:
          'Félek, hogy nem tudok elég jól rajzolni, és itt is teljesítenem kell.',
        answer: [
          'Tisztázzuk rögtön az elején: <strong>itt nincs rossz rajz, és nincs elrontott feladat</strong>. Nem a művészi érték számít, hanem a te belső megélésed. Leveheted a teljesítménykényszer maszkját.',
        ],
      },
      {
        question: 'Pontosan mi történik az online eseményen?',
        answer: [
          'Az elején elhangzik néhány bevezető mondat arról, hogyan értelmezzük a meséket, és milyen szimbolikus erővel bírnak. Ezután következik a mese — egy gazdag szimbolikájú&nbsp; népmese, amelyet személyre szabottan választok ki neked.',
          'A mesét egy általam vezetett testi relaxáció követi, csukott szemmel. Közben újra elhangzanak a mese kulcselemei és szimbólumai, majd spontán lerajzolod a benned kialakult képet. A rajzot lefotózod, feltöltöd egy megadott linkre, és <strong>együtt megbeszéljük</strong>, amit látunk rajta.',
        ],
      },
      {
        question: 'Hogyan döntsem el, mit rajzoljak? Mi van, ha nem láttam semmit?',
        answer: [
          'A legjobb, ha egyáltalán nem foglalkozol ezzel tudatosan, és elfelejted a tervezgetést. Engedni kell, hogy a mese átmossa a lelket, és az általa választott kép formájában törjön utat magának.',
          'Ha nem látsz semmit a relaxáció alatt, az teljesen természetes — talán kevésbé vizuálisan működsz. A döntő pillanat az, amikor visszatérve <strong>egyszerűen a krétákhoz nyúlsz</strong>, és elkezdesz vonalakat húzni; a kép magától összeáll. Az is előfordul, hogy valaki végig egy fix képet lát — akár egy rózsaszín kutyát —, ami látszólag nem kapcsolódik a meséhez, mégis helye van ott.',
        ],
      },
      {
        question: 'Jelentkezhetek, ha nem tudok rajzolni?',
        answer: [
          'Igen, a rajztudás egyáltalán nem számít. A belső képeket amúgy sem lehet pontosan ugyanúgy papírra vetni, ahogy belül láttuk. Nem művészi alkotásra van szükség: <strong>a pálcikaember vagy a maszatolás is tökéletesen megfelel</strong>. A lényeg, hogy a kréta nyomot hagyjon, amin elkezdhetünk haladni.',
        ],
      },
    ],
  },
  {
    heading: 'Téma és célközönség',
    items: [
      {
        question: 'Mi a foglalkozás pontos témája?',
        answer: [
          'A téma mindig az, amivel te most foglalkozni szeretnél — ami a leginkább hat az életedre. Néha mély sérülésekről és sebekről szól, máskor külső vagy belső változásokról, és olyan is van, hogy a közös mesézés egyszerűen menedék a mindennapok zajától: <strong>egy biztonságos tér, ahol nem kell a legjobb formádat hoznod</strong>.',
          'Olyan férfiaknak és nőknek szól — a felnőttkorba lépéstől kezdve —, akik szeretnék teljesebbé tenni az életüket, és készen állnak mélyebbre ásni önmagukban egy megbélyegzés- és ítélkezésmentes közegben.',
        ],
      },
      {
        question: 'Van életkori határa a részvételnek?',
        answer: [
          'Felső korhatár nincs; a betöltött 20. év felett bárki jöhet, aki érdeklődik. Akár 70–80 évesen is aktuális és hasznos ez a munka. Amíg lélegzünk, jó esetben előre haladunk és fejlődünk — <strong>az önmagunkkal való kapcsolatot idősebb korban sem érdemes letenni</strong>.',
        ],
      },
    ],
  },
  {
    heading: 'Technikai és gyakorlati tudnivalók',
    items: [
      {
        question:
          'Mi van, ha a foglalkozás közben hív az idős édesanyám, vagy bejön a gyerekem a szobába?',
        answer: [
          'Nincs ebből stressz. Ez egy életszerű tér, ezért bevezettük a „Szünet” gombot. Ha menned kell pár percre, megvárjuk — <strong>nem veszik el az időd</strong>, és nem ítélünk el érte.',
        ],
      },
      {
        question: 'Milyen eszközökre és környezetre lesz szükségem?',
        answer: [
          '<strong>Papír:</strong> a legjobb az A3-as méret, mert a nagyobb felületen nagyobb mozdulatokkal, mélyebb beleéléssel lehet rajzolni. Ha nincs más, az A4 is megteszi.',
          '<strong>Rajzeszköz:</strong> kréta — olyan, ami erősebb nyomot hagy, például olajpasztell. A színes ceruza túl gyenge, a golyóstoll túl merev vonalat hagy. Egy 12 vagy 24 darabos készlet ideális; a túl sok színben könnyű elveszni.',
          '<strong>Technika:</strong> egy telefon, amivel a kész rajzot lefotózod és feltöltöd.',
          '<strong>Környezet:</strong> egy nyugodt, háborítatlan helyiség, ahol egyedül vagy — a relaxációt és a belső folyamatokat zavarja mások jelenléte.',
        ],
      },
      {
        question: 'Mennyi ideig tart a foglalkozás?',
        answer: [
          'Körülbelül 2 óra, egy előre megosztott Google Meet linken. Ha a végén olyan téma nyílik meg a rajz kapcsán, ami érett a feldolgozásra, nem zárom le mereven a beszélgetést az időkeret miatt — <strong>elvisszük addig a pontig, amíg megnyugvást találsz</strong>.',
        ],
      },
    ],
  },
  {
    heading: 'Biztonság, félelmek és hatások',
    items: [
      {
        question:
          'Bűntudatom van, ha magamra költök pénzt és időt a családom helyett.',
        answer: [
          'Gondolj erre így: azzal, hogy feltöltöd a saját raktáraidat és feldolgozod a frusztrációidat, a családod egy sokkal <strong>türelmesebb, békésebb és boldogabb</strong> anyát, feleséget kap vissza. Ez nekik is a legjobb befektetés.',
        ],
      },
      {
        question: 'Természetes, ha tartok tőle vagy félek a kezdés előtt?',
        answer: [
          'Teljesen természetes — alig találkozom olyan emberrel, aki ne félne egy kicsit a kezdés előtt. A félelem jön és megy, de ha átadjuk neki az irányítást, fontos dolgokról maradhatunk le. A tartózkodás oka általában az, hogy tudjuk: a tudattalanban lévő dolgokkal való szembenézéshez erő kell.',
          'Jobb tudni, mi lakik bennünk, mint hagyni, hogy a letagadott belső tartalmak váratlan pillanatokban okozzanak galibát a kapcsolatainkban. A folyamat során <strong>semmi végzetes vagy önidegen dologra nem fogsz rájönni</strong> — csak arra, aki vagy. Jól vezetett foglalkozással nem lehet kárt okozni, bár hozhat szomorúságot vagy megrázó felismeréseket.',
        ],
      },
      {
        question: 'Miben más az online forma, mint egy személyes találkozó?',
        answer: [
          'Személyes találkozókat jelenleg nem tartok. Az online forma azért ideális, mert így akár külföldről, akár egy távolabbi magyarországi helyről is részt vehetsz, az utazás és a logisztika terhe nélkül. <strong>A mese és a kapcsolódás online is teljes értékűen működik.</strong>',
        ],
      },
      {
        question: 'Mire számíthatok az eseményt követő napokban, hetekben?',
        answer: [
          'A mese a foglalkozás után is dolgozik benned. Hetekig előfordulhatnak intenzívebb belső megélések, sűrűbb vagy szokatlan álmok, amelyek összefüggésbe hozhatók a mese élményével. Sokan számolnak be váratlan találkozásokról vagy külső eseményekről, amelyek összeköthetők a folyamattal — <strong>a tudattalannak hatalmas mozgósító ereje van</strong>.',
        ],
      },
      {
        question: 'Kiknek nem javasolt a részvétel?',
        answer: [
          'Nem javasolt azoknak, akik pszichiátriai gyógyszereket vagy mentális zavarra felírt gyógyszert szednek.',
        ],
      },
    ],
  },
];
