const angelina = "/images/angelina.jpeg";
import { Reveal } from "./Reveal";
import { Pampas } from "./Pampas";

const upcoming = ["Augenbrauenlifting", "Wimpernlifting", "Henna Brows"];

export function AboutComingSoon() {
  return (
    <section id="about" className="relative overflow-hidden bg-[color:var(--sand)] py-24 md:py-32">
      <Pampas
        side="left"
        className="left-0 top-10 w-[48vw] h-auto"
        opacity={0.65}
        blur={1}
      />
      <Pampas
        side="right"
        className="right-0 bottom-0 w-[48vw] h-auto"
        opacity={0.6}
        blur={1}
      />
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 grid md:grid-cols-5 gap-12 md:gap-16 items-center">
        <Reveal className="md:col-span-2">
          <div className="relative">
            <div className="relative rounded-[2rem] overflow-hidden gold-frame">
              <img
                src={angelina}
                alt="Angelina Balizki – Gründerin von BALI Ästhetik"
                width={800}
                height={1000}
                loading="lazy"
                className="w-full h-[520px] md:h-[640px] object-cover"
              />
            </div>
          </div>
        </Reveal>
        <Reveal delay={120} className="relative z-10 md:col-span-3">
          <p className="text-xs tracking-[0.32em] uppercase text-[color:var(--gold)] mb-5">
            Über mich
          </p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            Ich bin <span className="font-script text-[color:var(--gold)]">Angelina</span>
          </h2>
          <p className="mt-6 text-[color:var(--ink-soft)] text-lg leading-relaxed">
            Seit über 7 Jahren habe ich mich auf professionelle Wimpernverlängerungen spezialisiert
            – eine Leidenschaft, die mich bis heute jeden Tag begeistert.
          </p>
          <p className="mt-4 text-[color:var(--ink-soft)] text-lg leading-relaxed">
            Mit viel Liebe zum Detail, hochwertigen Produkten und einem geschulten Blick für
            Ästhetik unterstreiche ich die natürliche Schönheit meiner Kundinnen und kreiere Looks,
            die individuell zur Augenform und Persönlichkeit passen.
          </p>
          <p className="mt-4 text-[color:var(--ink-soft)] text-lg leading-relaxed">
            Neben präziser Arbeit und höchsten Qualitätsstandards ist mir vor allem eines wichtig:
            Dass du dich bei jedem Termin rundum wohlfühlst. In meinem Studio erwartet dich eine
            entspannte Atmosphäre, in der du dem Alltag für einen Moment entfliehen und deine
            persönliche Auszeit genießen kannst.
          </p>

          <div className="mt-10 rounded-2xl bg-[color:var(--cream)] border border-[color:var(--border)] p-7">
            <p className="text-xs tracking-[0.28em] uppercase text-[color:var(--gold)] mb-3">
              Ab August neu
            </p>
            <p className="text-[color:var(--ink-soft)] leading-relaxed">
              Mein Angebot wächst weiter. Neben professionellen Wimpernverlängerungen erwarten dich
              schon bald weitere Treatments für einen gepflegten, natürlichen und harmonischen Look.
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {upcoming.map((u) => (
                <span
                  key={u}
                  className="rounded-full bg-[color:var(--sand-deep)] text-[color:var(--ink)] px-4 py-2 text-xs tracking-[0.18em] uppercase"
                >
                  {u}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
