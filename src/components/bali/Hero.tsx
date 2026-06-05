const studio = "/images/studio.jpeg";
import { WHATSAPP_URL, WHATSAPP_CTA, STUDIO_LOCATION } from "@/lib/contact";
import { Pampas } from "./Pampas";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden flex items-center min-h-[88vh] md:min-h-[100vh]"
    >
      {/* Full-bleed background image */}
      <img
        src={studio}
        alt="BALI Ästhetik Studio mit warmer Beleuchtung"
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover object-[62%_center] md:object-[58%_center]"
      />

      {/* Desktop: soft left-to-right fade */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            "linear-gradient(to right, #FAF7F2 0%, #FAF7F2 28%, rgba(250,247,242,0.72) 50%, rgba(250,247,242,0.0) 72%)",
        }}
      />

      {/* Mobile: cream overlay so text stays readable */}
      <div
        className="absolute inset-0 md:hidden"
        style={{
          background:
            "linear-gradient(to bottom, rgba(250,247,242,0.93) 0%, rgba(250,247,242,0.82) 70%, rgba(250,247,242,0.60) 100%)",
        }}
      />

      <Pampas side="left" />
      <Pampas side="right" />

      {/* Text content */}
      <div className="relative z-10 mx-auto max-w-7xl w-full px-5 sm:px-10 py-24 md:py-36">
        <div className="max-w-[520px] animate-fade-up">
          <p className="text-xs tracking-[0.32em] uppercase text-[color:var(--gold)] mb-6">
            Lashes &amp; Brows · {STUDIO_LOCATION}
          </p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl leading-[0.95] text-[color:var(--ink)]">
            BALI
            <br />
            <span className="text-[color:var(--brown)]">ÄSTHETIK</span>
          </h1>
          <p className="font-script text-3xl md:text-4xl text-[color:var(--gold)] mt-5">
            by Angelina Balizki
          </p>
          <p className="mt-7 text-base md:text-lg text-[color:var(--ink-soft)] max-w-md leading-relaxed">
            Wimpernverlängerung mit Liebe zum Detail – für einen Look, der natürlich, elegant und
            individuell zu dir passt.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#4A3427] text-white h-[52px] px-10 text-[14px] font-[400] tracking-[0.03em] leading-[1.4] hover:bg-[#5A4031] transition-colors"
            >
              {WHATSAPP_CTA}
            </a>
            <a
              href="#leistungen"
              className="inline-flex items-center justify-center rounded-full border border-[#D8C7B7] bg-transparent text-[#7A6454] h-[52px] px-10 text-[14px] font-[400] tracking-[0.03em] leading-[1.4] hover:bg-[#F5F0EA] transition-colors"
            >
              Preise ansehen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
