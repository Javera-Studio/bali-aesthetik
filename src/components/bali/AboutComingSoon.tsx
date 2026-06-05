const angelina = "/images/angelina.jpeg";
import { Reveal } from "./Reveal";
import { Pampas } from "./Pampas";

const upcoming = ["Augenbrauen", "Wimpernlifting", "Henna Brows"];

export function AboutComingSoon() {
  return (
    <section id="about" className="relative overflow-hidden bg-[color:var(--sand)] py-24 md:py-32">
      <Pampas
        side="left"
        className="left-0 top-10 h-[560px] lg:h-[680px] w-auto"
        opacity={0.65}
        blur={1}
      />
      <Pampas
        side="right"
        className="right-0 bottom-0 h-[480px] lg:h-[580px] w-auto"
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
            Ich bin Angelina, Beauty-Expertin mit Leidenschaft für Ästhetik und Perfektion. Mit
            viel Liebe zum Detail helfe ich meinen Kundinnen, ihre natürliche Schönheit zu
            unterstreichen und sich selbstbewusst sowie wohl in ihrer Haut zu fühlen. Qualität,
            Professionalität und individuelle Betreuung stehen bei mir dabei immer an erster
            Stelle.
          </p>

          <div className="mt-10 rounded-2xl bg-[color:var(--cream)] border border-[color:var(--border)] p-7">
            <p className="text-xs tracking-[0.28em] uppercase text-[color:var(--gold)] mb-3">
              Ab August neu
            </p>
            <p className="text-[color:var(--ink-soft)] leading-relaxed">
              Aktuell liegt mein Fokus auf Wimpernverlängerung. Ab August erweitere ich mein
              Angebot um Augenbrauen, Wimpernlifting und Henna Brows.
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
