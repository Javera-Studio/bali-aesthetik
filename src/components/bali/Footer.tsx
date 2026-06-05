import { WHATSAPP_URL } from "@/lib/contact";

const logo = "/images/logo.png";

const MAPS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Bitburger+Stra%C3%9Fe+2,+54636+Rittersdorf,+Germany";

const navLinks = [
  { label: "Studio", href: "#studio" },
  { label: "Preise", href: "#leistungen" },
  { label: "Lash Styles", href: "#looks" },
  { label: "Ergebnisse", href: "#ergebnisse" },
  { label: "Über mich", href: "#about" },
  { label: "Kontakt", href: WHATSAPP_URL, external: true },
];

export function Footer() {
  return (
    <footer className="bg-[color:var(--cream)] border-t border-[color:var(--border)]">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20 grid md:grid-cols-3 gap-14 md:gap-10 items-start">

        {/* Spalte 1 – Marke */}
        <div className="flex flex-col gap-5">
          <img src={logo} alt="BALI ÄSTHETIK" className="h-[68px] w-auto" />
          <div className="text-sm text-[color:var(--ink-soft)] leading-relaxed space-y-1">
            <p className="text-[color:var(--ink)] font-[500]">BALI ÄSTHETIK by Angelina Balizki</p>
            <p>Lashes &amp; Brows</p>
            <p>Bitburger Straße 2, 54636 Rittersdorf</p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center justify-center rounded-full bg-[#6B4A36] text-[#F8F4EE] h-[48px] px-7 text-[14px] font-[500] tracking-[0.02em] leading-[1.4] hover:bg-[#7A5540] transition-colors duration-300"
          >
            WhatsApp
          </a>
        </div>

        {/* Spalte 2 – Navigation */}
        <div>
          <p className="text-[11px] tracking-[0.28em] uppercase text-[color:var(--gold)] mb-6">
            Navigation
          </p>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="text-sm text-[color:var(--ink-soft)] hover:text-[color:var(--ink)] transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Spalte 3 – Standort */}
        <div>
          <p className="text-[11px] tracking-[0.28em] uppercase text-[color:var(--gold)] mb-6">
            Standort
          </p>
          <div className="text-sm text-[color:var(--ink-soft)] leading-relaxed space-y-2">
            <p>Bitburger Straße 2<br />54636 Rittersdorf</p>
            <p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[color:var(--ink)] transition-colors duration-200"
              >
                WhatsApp
              </a>
            </p>
            <p className="text-[color:var(--ink-soft)]/70 text-xs tracking-wide">
              Nach Terminvereinbarung
            </p>
          </div>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-5 text-xs tracking-[0.08em] text-[color:var(--gold)] hover:text-[color:var(--brown)] transition-colors duration-200"
          >
            Route öffnen
            <span aria-hidden>→</span>
          </a>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-[color:var(--border)]">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-6 flex flex-col items-center gap-3 text-center">
          <p className="text-xs text-[color:var(--ink-soft)]">
            © {new Date().getFullYear()} BALI ÄSTHETIK · Alle Rechte vorbehalten.
          </p>
          <a
            href="https://javera-studio.at"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 opacity-40 hover:opacity-70 transition-opacity duration-500"
            aria-label="Webdesign by JAVERA STUDIO"
          >
            <svg
              width="14"
              height="14"
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
      </div>
    </footer>
  );
}
