"use client";

import { useState } from "react";
import { WHATSAPP_URL } from "@/lib/contact";

const logo = "/images/logo.png";

const links = [
  { href: "#studio", label: "Studio" },
  { href: "#leistungen", label: "Preise" },
  { href: "#looks", label: "Lash Styles" },
  { href: "#ergebnisse", label: "Ergebnisse" },
  { href: "#about", label: "Über mich" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[color:var(--cream)]/80 border-b border-[color:var(--border)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-20 md:h-24 flex items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-3 shrink-0">
          <img src={logo} alt="BALI ÄSTHETIK Logo" className="h-[88px] w-auto md:h-[107px] translate-y-[5px]" />
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
          className="hidden sm:inline-flex items-center justify-center rounded-full bg-[#6B4A36] text-[#F8F4EE] h-[52px] px-8 text-[15px] font-[500] tracking-[0.02em] leading-[1.4] hover:bg-[#7A5540] transition-colors duration-300"
        >
          WhatsApp
        </a>
        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={isOpen}
          className="md:hidden inline-flex flex-col items-center justify-center gap-[6px] h-11 w-11 shrink-0"
        >
          <span
            className={`block h-[2px] w-6 bg-[color:var(--ink-soft)] transition-transform duration-300 ${
              isOpen ? "translate-y-[8px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-[color:var(--ink-soft)] transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-[color:var(--ink-soft)] transition-transform duration-300 ${
              isOpen ? "-translate-y-[8px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden border-t border-[color:var(--border)] bg-[color:var(--cream)] px-5 py-6 flex flex-col gap-5 text-sm tracking-[0.14em] uppercase text-[color:var(--ink-soft)]">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setIsOpen(false)}
              className="hover:text-[color:var(--gold)] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center justify-center rounded-full bg-[#6B4A36] text-[#F8F4EE] h-[52px] px-8 text-[15px] font-[500] tracking-[0.02em] leading-[1.4] hover:bg-[#7A5540] transition-colors duration-300 normal-case"
          >
            WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
