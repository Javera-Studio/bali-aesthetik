import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/bali/Navbar";
import { Footer } from "@/components/bali/Footer";

export const Route = createFileRoute("/impressum")({
  component: Impressum,
});

function Impressum() {
  return (
    <div className="min-h-screen bg-[color:var(--cream)] text-[color:var(--ink)]">
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 sm:px-8 py-20 md:py-28">
        <p className="text-xs tracking-[0.32em] uppercase text-[color:var(--gold)] mb-5">
          Rechtliches
        </p>
        <h1 className="font-display text-4xl md:text-5xl leading-tight mb-10">Impressum</h1>

        <div className="space-y-8 text-[color:var(--ink-soft)] leading-relaxed">
          <section>
            <h2 className="font-display text-xl text-[color:var(--ink)] mb-2">
              Angaben gemäß § 5 TMG
            </h2>
            <p>
              BALI ÄSTHETIK by Angelina Balizki
              <br />
              Bitburger Straße 2
              <br />
              54636 Rittersdorf
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-[color:var(--ink)] mb-2">Kontakt</h2>
            <p>
              Telefon: [Telefonnummer ergänzen]
              <br />
              E-Mail: [E-Mail-Adresse ergänzen]
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-[color:var(--ink)] mb-2">
              Umsatzsteuer-ID
            </h2>
            <p>[USt-IdNr. bzw. Hinweis auf Kleinunternehmerregelung ergänzen]</p>
          </section>

          <section>
            <h2 className="font-display text-xl text-[color:var(--ink)] mb-2">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p>Angelina Balizki, Bitburger Straße 2, 54636 Rittersdorf</p>
          </section>

          <section>
            <h2 className="font-display text-xl text-[color:var(--ink)] mb-2">
              EU-Streitschlichtung
            </h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
              bereit: [Link zur OS-Plattform ergänzen]. Unsere E-Mail-Adresse finden Sie oben im
              Impressum. Wir sind nicht verpflichtet und nicht bereit, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
