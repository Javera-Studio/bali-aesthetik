import { WHATSAPP_URL } from "@/lib/contact";

const logo = "/images/logo.png";

const links = [
  { href: "#studio", label: "Studio" },
  { href: "#leistungen", label: "Preise" },
  { href: "#techniken", label: "Techniken" },
  { href: "#ergebnisse", label: "Ergebnisse" },
  { href: "#about", label: "Über mich" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[color:var(--cream)]/80 border-b border-[color:var(--border)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-20 flex items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-3 shrink-0">
          <img src={logo} alt="BALI ÄSTHETIK Logo" className="h-[62px] w-auto md:h-[74px]" />
        </a>
        <nav className="hidden md:flex items-center gap-9 text-sm tracking-[0.14em] uppercase text-[color:var(--ink-soft)]">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-[color:var(--gold)] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[color:var(--ink)] text-[color:var(--cream)] px-5 py-2.5 text-xs tracking-[0.18em] uppercase hover:bg-[color:var(--brown)] transition-colors"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}
