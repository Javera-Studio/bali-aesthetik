import studio from "@/assets/studio.jpeg.asset.json";
import { Reveal } from "./Reveal";

const values = [
  { title: "Qualität", text: "Premium-Materialien und das UV-System für lange Haltbarkeit." },
  { title: "Sauberkeit", text: "Hygiene auf medizinischem Niveau – jedes Werkzeug steril." },
  { title: "Individuell", text: "Ausführliche Beratung. Dein Look wird zu deinem Auge gemacht." },
];

export function Studio() {
  return (
    <section id="studio" className="relative bg-[color:var(--sand)]">
      <div className="relative w-full">
        <img
          src={studio.url}
          alt="Empfangsbereich des BALI Studios"
          width={1920}
          height={900}
          loading="lazy"
          className="w-full h-[60vh] md:h-[80vh] object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(59,42,31,0) 40%, rgba(59,42,31,0.55) 100%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-5xl px-5 sm:px-8 py-20 md:py-28 text-center">
        <Reveal>
          <p className="text-xs tracking-[0.32em] uppercase text-[color:var(--gold)] mb-5">
            Das Studio
          </p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            Ein Ort zum <span className="font-script text-[color:var(--gold)]">Wohlfühlen</span>
          </h2>
          <p className="mt-6 text-[color:var(--ink-soft)] text-lg leading-relaxed max-w-2xl mx-auto">
            Warme Naturtöne, sanftes Licht und eine ruhige Atmosphäre schaffen eine kleine Auszeit
            vom Alltag. Bei BALI ÄSTHETIK steht nicht nur das Ergebnis im Mittelpunkt, sondern auch
            das Gefühl, sich gut aufgehoben zu fühlen.
          </p>
          <div className="mt-12 grid sm:grid-cols-3 gap-5">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl bg-[color:var(--cream)] border border-[color:var(--border)] p-6 text-left"
              >
                <p className="font-display text-xl text-[color:var(--ink)]">{v.title}</p>
                <div className="h-px w-8 bg-[color:var(--gold)] my-3" />
                <p className="text-sm text-[color:var(--ink-soft)] leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
