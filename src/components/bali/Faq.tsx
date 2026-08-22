import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "Wie lange hält eine Wimpernverlängerung?",
    a: "Die Extensions begleiten deine Naturwimpern durch ihren natürlichen Wachstumszyklus und fallen gemeinsam mit ihnen aus. Wie lange dein Set schön und gleichmäßig aussieht, hängt von deinem individuellen Wimpernwachstum und der richtigen Pflege ab. Für einen dauerhaft gepflegten Look sind regelmäßige Auffülltermine sinnvoll.",
  },
  {
    q: "Wie oft sollte ich meine Wimpern auffüllen lassen?",
    a: "In der Regel empfiehlt sich ein Refill etwa alle 2–4 Wochen. Der ideale Abstand ist individuell und hängt unter anderem davon ab, wie schnell deine Naturwimpern wachsen und wie gut die Extensions gepflegt werden.",
  },
  {
    q: "Schädigen Extensions meine Naturwimpern?",
    a: "Bei einer fachgerechten Applikation werden Länge und Gewicht der Extensions individuell an deine Naturwimpern angepasst, damit diese nicht unnötig belastet werden. Wichtig ist außerdem, die Extensions nicht selbst abzuziehen oder zu entfernen.",
  },
  {
    q: "Wie bereite ich mich auf meinen Termin vor?",
    a: "Komm am besten ohne Mascara und Augen-Make-up und mit gründlich gereinigten Wimpern zu deinem Termin. Ölhaltige Produkte rund um die Augen sollten vorher vermieden werden. Kontaktlinsen bitte vor der Behandlung herausnehmen.",
  },
  {
    q: "Wie pflege ich meine Wimpernverlängerung richtig?",
    a: "Reinige und bürste deine Extensions regelmäßig und sanft. Starkes Reiben oder Ziehen sollte vermieden werden. Verzichte außerdem möglichst auf ölhaltige Pflege- und Abschminkprodukte im Augenbereich, da diese die Haltbarkeit beeinträchtigen können.",
  },
  {
    q: "Kann ich selbst entscheiden, wie natürlich oder auffällig meine Wimpern werden?",
    a: "Ja. Länge, Dichte und Styling werden individuell an deine Augenform, deine Naturwimpern und deinen gewünschten Look angepasst – von dezent und natürlich bis ausdrucksstark und voluminös.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="relative overflow-hidden bg-[color:var(--cream)] py-24 md:py-32">
      <div className="relative z-10 mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal>
          <div className="text-center max-w-xl mx-auto">
            <p className="text-xs tracking-[0.32em] uppercase text-[color:var(--gold)] mb-5">
              Gut zu wissen
            </p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Noch Fragen zu deinen{" "}
              <span className="font-script text-[color:var(--gold)]">Lashes</span>?
            </h2>
            <p className="mt-5 text-[color:var(--ink-soft)] text-lg leading-relaxed">
              Hier findest du Antworten auf die wichtigsten Fragen rund um deine
              Wimpernverlängerung, Haltbarkeit und Pflege.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <AccordionPrimitive.Root type="single" collapsible className="mt-14 md:mt-16">
            {faqs.map((item, i) => (
              <AccordionPrimitive.Item
                key={item.q}
                value={`item-${i}`}
                className="border-b border-[color:var(--border)] first:border-t"
              >
                <AccordionPrimitive.Header>
                  <AccordionPrimitive.Trigger className="group flex w-full items-center justify-between gap-6 py-6 md:py-7 text-left cursor-pointer">
                    <span className="font-display text-lg md:text-xl leading-snug text-[color:var(--ink)]">
                      {item.q}
                    </span>
                    <span className="relative h-6 w-6 shrink-0 text-[color:var(--gold)]">
                      <span className="absolute left-1/2 top-1/2 h-[1px] w-4 -translate-x-1/2 -translate-y-1/2 bg-current" />
                      <span className="absolute left-1/2 top-1/2 h-4 w-[1px] -translate-x-1/2 -translate-y-1/2 bg-current transition-transform duration-300 group-data-[state=open]:rotate-90 group-data-[state=open]:scale-0" />
                    </span>
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionPrimitive.Content className="overflow-hidden text-[color:var(--ink-soft)] leading-relaxed data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <p className="pb-6 md:pb-7 pr-10 md:pr-16">{item.a}</p>
                </AccordionPrimitive.Content>
              </AccordionPrimitive.Item>
            ))}
          </AccordionPrimitive.Root>
        </Reveal>
      </div>
    </section>
  );
}
