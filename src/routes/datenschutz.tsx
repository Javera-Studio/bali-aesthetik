import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/bali/Navbar";
import { Footer } from "@/components/bali/Footer";

export const Route = createFileRoute("/datenschutz")({
  component: Datenschutz,
});

function Datenschutz() {
  return (
    <div className="min-h-screen bg-[color:var(--cream)] text-[color:var(--ink)]">
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 sm:px-8 py-20 md:py-28">
        <p className="text-xs tracking-[0.32em] uppercase text-[color:var(--gold)] mb-5">
          Rechtliches
        </p>
        <h1 className="font-display text-4xl md:text-5xl leading-tight mb-10">
          Datenschutzerklärung
        </h1>

        <div className="space-y-8 text-[color:var(--ink-soft)] leading-relaxed">
          <section>
            <h2 className="font-display text-xl text-[color:var(--ink)] mb-2">
              1. Verantwortliche Stelle
            </h2>
            <p>
              BALI ÄSTHETIK by Angelina Balizki
              <br />
              Bitburger Straße 2, 54636 Rittersdorf
              <br />
              E-Mail: [E-Mail-Adresse ergänzen]
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-[color:var(--ink)] mb-2">
              2. Erhebung und Verarbeitung von Daten
            </h2>
            <p>
              Beim Besuch dieser Website werden durch den Hosting-Anbieter automatisch
              Informationen (z. B. IP-Adresse, Browsertyp, Zugriffszeit) in Server-Logfiles
              gespeichert. [Details zum Hosting-Anbieter ergänzen]
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-[color:var(--ink)] mb-2">
              3. Kontaktaufnahme per WhatsApp
            </h2>
            <p>
              Über die WhatsApp-Buttons auf dieser Website gelangen Sie in einen direkten Chat mit
              WhatsApp (Meta Platforms Ireland Limited). Es gelten die Datenschutzbestimmungen von
              WhatsApp/Meta. [Link zur WhatsApp-Datenschutzrichtlinie ergänzen]
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-[color:var(--ink)] mb-2">
              4. Cookies &amp; Tracking
            </h2>
            <p>
              [Angaben zu eingesetzten Cookies, Analyse- oder Tracking-Tools ergänzen, sobald
              diese aktiv sind – inkl. Cookie-Consent-Hinweis]
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-[color:var(--ink)] mb-2">
              5. Ihre Rechte
            </h2>
            <p>
              Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung
              der Verarbeitung Ihrer personenbezogenen Daten sowie ein Beschwerderecht bei der
              zuständigen Aufsichtsbehörde. [Zuständige Aufsichtsbehörde ergänzen]
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
