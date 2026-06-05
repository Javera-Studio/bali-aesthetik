import studio from "@/assets/studio.jpeg.asset.json";
import { WHATSAPP_URL, WHATSAPP_CTA, STUDIO_LOCATION } from "@/lib/contact";
import { Pampas } from "./Pampas";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[color:var(--cream)]">
      <Pampas
        side="left"
        className="left-0 top-0 h-[500px] w-auto"
        opacity={0.35}
        blur={1}
      />
      <Pampas
        side="right"
        className="right-0 top-20 h-[560px] w-auto"
        opacity={0.35}
        blur={1}
      />

      {/* huge translucent BALI wordmark */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center select-none"
      >
        <span
          className="font-display text-[28vw] leading-none tracking-[-0.05em] text-[color:var(--beige)]"
          style={{ opacity: 0.18, fontWeight: 500 }}
        >
          BALI
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 pt-12 pb-20 md:pt-20 md:pb-32 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="animate-fade-up">
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
              className="inline-flex items-center justify-center rounded-full bg-[color:var(--ink)] text-[color:var(--cream)] px-7 py-4 text-sm tracking-[0.14em] uppercase hover:bg-[color:var(--brown)] transition-colors shadow-warm-sm"
            >
              {WHATSAPP_CTA}
            </a>
            <a
              href="#leistungen"
              className="inline-flex items-center justify-center rounded-full border border-[color:var(--brown)]/40 text-[color:var(--ink)] px-7 py-4 text-sm tracking-[0.14em] uppercase hover:bg-[color:var(--sand)] transition-colors"
            >
              Preise ansehen
            </a>
          </div>
        </div>

        <div className="relative animate-fade-up" style={{ animationDelay: "120ms" }}>
          <div className="relative rounded-[2rem] overflow-hidden gold-frame">
            <img
              src={studio.url}
              alt="BALI Ästhetik Studio mit warmer Beleuchtung"
              width={900}
              height={1200}
              fetchPriority="high"
              className="w-full h-[460px] md:h-[640px] object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden md:block bg-[color:var(--cream)] rounded-2xl px-5 py-4 shadow-warm-sm border border-[color:var(--border)]">
            <p className="font-script text-2xl text-[color:var(--gold)] leading-none">welcome</p>
            <p className="text-xs tracking-[0.2em] uppercase text-[color:var(--ink-soft)] mt-1">
              warm · ruhig · privat
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
