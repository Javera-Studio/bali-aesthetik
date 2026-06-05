import { Reveal } from "./Reveal";

const looks = [
  {
    id: "classic",
    image: "/images/look_classic.jpg",
    heading: "Classic",
    sub: "Natürlich & zeitlos",
    text: "Die perfekte Wahl für Kundinnen, die ihre eigenen Wimpern dezent betonen möchten. Leicht, elegant und alltagstauglich für einen natürlichen Look.",
    imageRight: true,
  },
  {
    id: "hybrid",
    image: "/images/look_hybrid.jpg",
    heading: "Hybrid",
    sub: "Die perfekte Balance",
    text: "Eine Kombination aus klassischen und Volumen-Wimpern. Mehr Fülle und Definition, ohne künstlich zu wirken. Besonders beliebt für einen weichen und femininen Look.",
    imageRight: false,
  },
  {
    id: "volumen",
    image: "/images/look_volumen.jpg",
    heading: "Volumen",
    sub: "Ausdrucksstark & weich",
    text: "Feine Volumen-Fächer sorgen für mehr Dichte und einen intensiveren Blick. Ideal für Kundinnen, die ihre Augen stärker betonen möchten.",
    imageRight: true,
  },
  {
    id: "megavolumen",
    image: "/images/look_megavolumen.jpg",
    heading: "Mega Volumen",
    sub: "Maximale Intensität",
    text: "Für alle, die einen glamourösen und auffälligen Look lieben. Besonders dicht, dunkel und ausdrucksstark mit maximaler Wirkung.",
    imageRight: false,
  },
  {
    id: "wispy",
    image: "/images/look_wispy.jpg",
    heading: "Wispy",
    sub: "Modern & trendbewusst",
    text: "Unterschiedliche Längen erzeugen einen luftigen, strukturierten Look mit besonderer Tiefe. Perfekt für Kundinnen, die einen modernen und individuellen Stil bevorzugen.",
    imageRight: true,
  },
];

export function SignatureLooks() {
  return (
    <section id="looks" className="bg-[#F5F0EA] py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        {/* Header */}
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20 md:mb-28">
            <p className="text-xs tracking-[0.32em] uppercase text-[color:var(--gold)] mb-5">
              Eyelash Styles
            </p>
            <h2 className="font-display text-4xl md:text-6xl leading-tight text-[color:var(--ink)]">
              Unsere Signature Looks
            </h2>
            <div className="mx-auto mt-6 h-px w-16 bg-[color:var(--gold)]/50" />
            <p className="mt-6 text-[color:var(--ink-soft)] text-lg leading-relaxed">
              Jeder Look wird individuell auf deine Augenform, natürliche
              Wimpernstruktur und deinen persönlichen Stil abgestimmt.
            </p>
          </div>
        </Reveal>

        {/* Zig-Zag Blocks */}
        <div className="space-y-20 md:space-y-28">
          {looks.map((look, i) => (
            <Reveal key={look.id} delay={80}>
              <div
                className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
                  look.imageRight ? "" : "md:[&>*:first-child]:order-2"
                }`}
              >
                {/* Text */}
                <div className="flex flex-col justify-center">
                  <p className="text-xs tracking-[0.32em] uppercase text-[color:var(--gold)] mb-3">
                    0{i + 1}
                  </p>
                  <h3 className="font-display text-4xl md:text-5xl text-[color:var(--ink)] leading-tight">
                    {look.heading}
                  </h3>
                  <p className="font-script text-2xl text-[color:var(--gold)] mt-2 leading-none">
                    {look.sub}
                  </p>
                  <div className="mt-5 h-px w-12 bg-[color:var(--gold)]/40" />
                  <p className="mt-5 text-[color:var(--ink-soft)] leading-relaxed text-base md:text-lg max-w-md">
                    {look.text}
                  </p>
                </div>

                {/* Image */}
                <div
                  className={`rounded-[2rem] overflow-hidden gold-frame bg-[color:var(--sand)] aspect-[4/5] ${
                    look.imageRight ? "" : "md:order-1"
                  }`}
                >
                  <img
                    src={look.image}
                    alt={`Wimpernverlängerung ${look.heading}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
