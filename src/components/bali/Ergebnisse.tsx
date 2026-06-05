import { Reveal } from "./Reveal";

const gallery = [
  { src: "/images/lash1.png", alt: "Wimpernverlängerung Ergebnis 1" },
  { src: "/images/lash2.png", alt: "Wimpernverlängerung Ergebnis 2" },
  { src: "/images/lash3.png", alt: "Wimpernverlängerung Ergebnis 3" },
  { src: "/images/lash4.png", alt: "Wimpernverlängerung Ergebnis 4" },
];

export function Ergebnisse() {
  return (
    <section id="ergebnisse" className="bg-[color:var(--cream)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs tracking-[0.32em] uppercase text-[color:var(--gold)] mb-5">
              Ergebnisse
            </p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Feine Arbeit.{" "}
              <span className="font-script text-[color:var(--gold)]">Sichtbarer</span> Unterschied.
            </h2>
            <p className="mt-5 text-[color:var(--ink-soft)] text-lg leading-relaxed">
              Jede Behandlung wird individuell auf Augenform, Wunschlook und natürliche Wimpern
              abgestimmt.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {gallery.map((g, i) => (
            <Reveal key={g.src} delay={i * 80}>
              <div className="rounded-[1.5rem] overflow-hidden gold-frame bg-[color:var(--sand)] aspect-[4/5]">
                <img
                  src={g.src}
                  alt={g.alt}
                  width={600}
                  height={750}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.04]"
                />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="mt-6 md:mt-8 rounded-[1.75rem] overflow-hidden gold-frame">
            <img
              src="/images/looks.jpeg"
              alt="Übersicht verschiedener Lash-Looks von Angelina"
              width={1600}
              height={900}
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
