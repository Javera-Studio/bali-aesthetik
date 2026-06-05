import { STUDIO_LOCATION, WHATSAPP_URL } from "@/lib/contact";

const logo = "/images/logo.png";

export function Footer() {
  return (
    <footer className="bg-[color:var(--cream)] border-t border-[color:var(--border)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 grid md:grid-cols-2 gap-10">
        <div>
          <img src={logo} alt="BALI ÄSTHETIK" className="h-[73px] w-auto" />
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
      </div>
      <div className="border-t border-[color:var(--border)]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[color:var(--ink-soft)]">
          <p>© {new Date().getFullYear()} BALI ÄSTHETIK · Alle Rechte vorbehalten.</p>
        </div>
      </div>
      <div className="border-t border-[color:var(--border)]/40 py-5 px-5">
        <a
          href="https://javera-studio.at"
          target="_blank"
          rel="noopener noreferrer"
          className="group mx-auto flex w-fit items-center gap-2.5 opacity-40 hover:opacity-70 transition-opacity duration-500"
          aria-label="Webdesign by JAVERA STUDIO"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[color:var(--ink)] group-hover:text-[color:var(--gold)] transition-colors duration-500 shrink-0"
            aria-hidden="true"
          >
            <path
              d="M16 2L28 8.5V23.5L16 30L4 23.5V8.5L16 2Z"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M16 2V30M4 8.5L28 23.5M28 8.5L4 23.5"
              stroke="currentColor"
              strokeWidth="0.75"
              opacity="0.4"
            />
          </svg>
          <span className="text-[10px] tracking-[0.22em] uppercase text-[color:var(--ink-soft)] group-hover:text-[color:var(--ink)] transition-colors duration-500 font-light">
            Webdesign by{" "}
            <span className="tracking-[0.3em] font-normal">JAVERA STUDIO</span>
          </span>
        </a>
      </div>
    </footer>
  );
}
