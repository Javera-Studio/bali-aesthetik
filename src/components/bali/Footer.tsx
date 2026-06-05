import logo from "@/assets/logo.png.asset.json";
import { STUDIO_LOCATION, WHATSAPP_URL } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="bg-[color:var(--cream)] border-t border-[color:var(--border)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <img src={logo.url} alt="BALI ÄSTHETIK" className="h-14 w-auto" />
          <p className="mt-5 text-sm text-[color:var(--ink-soft)] leading-relaxed">
            BALI ÄSTHETIK by Angelina Balizki
            <br />
            Lashes &amp; Brows · {STUDIO_LOCATION}
          </p>
        </div>
        <div>
          <p className="text-xs tracking-[0.28em] uppercase text-[color:var(--gold)] mb-4">
            Navigation
          </p>
          <ul className="space-y-2.5 text-sm text-[color:var(--ink-soft)]">
            <li><a href="#leistungen" className="hover:text-[color:var(--ink)] transition-colors">Preise</a></li>
            <li><a href="#techniken" className="hover:text-[color:var(--ink)] transition-colors">Techniken</a></li>
            <li><a href="#about" className="hover:text-[color:var(--ink)] transition-colors">Über mich</a></li>
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[color:var(--ink)] transition-colors">
                Kontakt
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs tracking-[0.28em] uppercase text-[color:var(--gold)] mb-4">
            Kontakt
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[color:var(--ink)] text-[color:var(--cream)] px-5 py-2.5 text-xs tracking-[0.18em] uppercase hover:bg-[color:var(--brown)] transition-colors"
          >
            WhatsApp schreiben
          </a>
        </div>
      </div>
      <div className="border-t border-[color:var(--border)]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[color:var(--ink-soft)]">
          <p>© {new Date().getFullYear()} BALI ÄSTHETIK · Alle Rechte vorbehalten.</p>
          <p>
            Website Demo by{" "}
            <a
              href="https://javera-studio.at"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[color:var(--gold)] hover:text-[color:var(--brown)] transition-colors"
            >
              JAVERA Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
