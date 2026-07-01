import React, { useState, useEffect, useRef } from "react";
import Navigation from "./components/Navigation";
import HomeView from "./views/HomeView";
import AboutView from "./views/AboutView";
import ServicesView from "./views/ServicesView";
import DemosView from "./views/DemosView";
import QuoteView from "./views/QuoteView";
import ContactView from "./views/ContactView";
import ContactFooter from "./components/ContactFooter";
import FloatingWhatsapp from "./components/FloatingWhatsapp";
import ScrollToTop from "./components/ScrollToTop";
import { Sparkles } from "lucide-react";

export default function App() {
  const [activePage, setActivePage] = useState<string>("home");
  const [selectedSubService, setSelectedSubService] = useState<string | undefined>(undefined);
  const [announcementHeight, setAnnouncementHeight] = useState(0);
  const announcementRef = useRef<HTMLDivElement | null>(null);

  // Sync state with hash routing in URL
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (["home", "sobre", "servicos", "demos", "orcamento", "contato"].includes(hash)) {
        setActivePage(hash);
      } else {
        setActivePage("home");
      }
      window.scrollTo({ top: 0, behavior: "instant" as any });
    };

    window.addEventListener("hashchange", handleHashChange);
    // Initial sync
    handleHashChange();

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    const banner = announcementRef.current;

    if (!banner) {
      return;
    }

    const updateAnnouncementHeight = () => {
      setAnnouncementHeight(banner.getBoundingClientRect().height);
    };

    updateAnnouncementHeight();

    const resizeObserver = new ResizeObserver(updateAnnouncementHeight);
    resizeObserver.observe(banner);
    window.addEventListener("resize", updateAnnouncementHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateAnnouncementHeight);
    };
  }, []);

  const handleNavigate = (page: string, subServiceId?: string) => {
    if (subServiceId) {
      setSelectedSubService(subServiceId);
    } else {
      setSelectedSubService(undefined);
    }
    window.location.hash = page;
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderActiveView = () => {
    switch (activePage) {
      case "sobre":
        return <AboutView />;
      case "servicos":
        return <ServicesView initialActiveServiceId={selectedSubService} onNavigate={handleNavigate} />;
      case "demos":
        return <DemosView />;
      case "orcamento":
        return <QuoteView />;
      case "contato":
        return <ContactView />;
      case "home":
      default:
        return <HomeView onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-midnight-carbon text-white antialiased selection:bg-brand-yellow/30 selection:text-white relative">
      {/* Dynamic top announcement banner */}
      <div
        ref={announcementRef}
        className="bg-gradient-to-r from-brand-yellow to-[#FFE066] text-black py-2.5 px-4 text-center text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 z-50 relative shadow-md"
      >
        <Sparkles className="w-4 h-4 animate-spin-slow text-black" />
        <span>PROMOÇÃO DE INVERNO: Ganhe a produção de 1 Spot de Rádio Corporativa ao contratar qualquer solução volante!</span>
        <button
          onClick={() => handleNavigate("orcamento")}
          className="underline hover:text-neutral-800 transition-colors cursor-pointer ml-1.5 font-bold"
        >
          Aproveitar Oferta
        </button>
      </div>

      {/* 1. Sticky Navigation Bar */}
      <Navigation
        activePage={activePage}
        onNavigate={handleNavigate}
        announcementOffset={announcementHeight}
      />

      {/* Semantic Main Content Block with fade in transition */}
      <main className="transition-opacity duration-300">
        {renderActiveView()}
      </main>

      {/* 2. Conditionally rendered Contact Section & Semantic Footer */}
      {activePage !== "contato" && (
        <ContactFooter onNavigate={handleNavigate} />
      )}

      {/* 3. Floating Action WhatsApp Button */}
      <FloatingWhatsapp />

      {/* 4. Scroll To Top Button */}
      <ScrollToTop />
    </div>
  );
}
