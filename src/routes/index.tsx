import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/bali/Navbar";
import { Hero } from "@/components/bali/Hero";
import { Studio } from "@/components/bali/Studio";
import { Leistungen } from "@/components/bali/Leistungen";
import { SignatureLooks } from "@/components/bali/SignatureLooks";
import { Ergebnisse } from "@/components/bali/Ergebnisse";
import { AboutComingSoon } from "@/components/bali/AboutComingSoon";
import { Reviews } from "@/components/bali/Reviews";
import { CtaBanner } from "@/components/bali/CtaBanner";
import { Footer } from "@/components/bali/Footer";

const grasLeft = "/images/gras_left.png";
const grasRight = "/images/gras_right.png";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      {/* Pampas — fixed at screen edges, outside all content containers */}
      <div
        className="fixed inset-0 pointer-events-none overflow-hidden"
        style={{ zIndex: 50 }}
        aria-hidden
      >
        <img src={grasLeft} alt="" loading="lazy" className="pampas-deco pampas-deco-left" />
        <img src={grasRight} alt="" loading="lazy" className="pampas-deco pampas-deco-right" />
      </div>

      <div className="min-h-screen bg-[color:var(--cream)] text-[color:var(--ink)]">
        <Navbar />
        <main>
          <Hero />
          <Studio />
          <Leistungen />
          <SignatureLooks />
          <Ergebnisse />
          <AboutComingSoon />
          <Reviews />
          <CtaBanner />
        </main>
        <Footer />
      </div>
    </>
  );
}
