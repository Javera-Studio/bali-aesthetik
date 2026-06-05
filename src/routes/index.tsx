import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/bali/Navbar";
import { Hero } from "@/components/bali/Hero";
import { Studio } from "@/components/bali/Studio";
import { Leistungen } from "@/components/bali/Leistungen";
import { Techniken } from "@/components/bali/Techniken";
import { Ergebnisse } from "@/components/bali/Ergebnisse";
import { AboutComingSoon } from "@/components/bali/AboutComingSoon";
import { Reviews } from "@/components/bali/Reviews";
import { CtaBanner } from "@/components/bali/CtaBanner";
import { Footer } from "@/components/bali/Footer";
import studio from "@/assets/studio.jpeg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BALI ÄSTHETIK – Lashes & Brows by Angelina Balizki · Wien" },
      {
        name: "description",
        content:
          "Premium Wimpernverlängerung in Wien & Umgebung. Classic, Hybrid, Volume und Wispy Lashes mit UV-System – individuell, hygienisch und mit Liebe zum Detail.",
      },
      { property: "og:title", content: "BALI ÄSTHETIK – Lashes & Brows by Angelina Balizki" },
      {
        property: "og:description",
        content:
          "Warmes Bali-Spa-Studio in Wien. Wimpernverlängerung, Hybrid, Volume, Wispy und Mega Volume – individuell beraten und sauber gearbeitet.",
      },
      { property: "og:image", content: studio.url },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: studio.url },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Great+Vibes&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-[color:var(--cream)] text-[color:var(--ink)]">
      <Navbar />
      <main>
        <Hero />
        <Studio />
        <Leistungen />
        <Techniken />
        <Ergebnisse />
        <AboutComingSoon />
        <Reviews />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
