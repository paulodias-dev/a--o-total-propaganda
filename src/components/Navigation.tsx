import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";
import Logo from "./Logo";

interface NavigationProps {
  activePage: string;
  onNavigate: (page: string) => void;
  announcementOffset?: number;
}

export default function Navigation({ activePage, onNavigate, announcementOffset = 0 }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(72);
  const [scrollY, setScrollY] = useState(0);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrollY(currentScrollY);

      if (currentScrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const header = headerRef.current;

    if (!header) {
      return;
    }

    const updateHeaderHeight = () => {
      setHeaderHeight(header.getBoundingClientRect().height);
    };

    updateHeaderHeight();

    const resizeObserver = new ResizeObserver(updateHeaderHeight);
    resizeObserver.observe(header);
    window.addEventListener("resize", updateHeaderHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateHeaderHeight);
    };
  }, [isScrolled]);

  const navLinks = [
    { name: "Início", page: "home" },
    { name: "Quem Somos", page: "sobre" },
    { name: "Como Divulgar", page: "servicos" },
    { name: "Ouvir Exemplos", page: "demos" },
    { name: "Orçamento", page: "orcamento" },
    { name: "Atendimento", page: "contato" },
  ];

  const handleLinkClick = (page: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(page);
  };

  const visibleAnnouncementOffset = Math.max(announcementOffset - scrollY, 0);

  return (
    <>
      <motion.header
        ref={headerRef}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{ top: visibleAnnouncementOffset }}
        className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-midnight-carbon/90 backdrop-blur-md border-b border-white/5 py-3.5 shadow-lg shadow-black/40"
            : "bg-transparent py-5 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <button
            onClick={() => handleLinkClick("home")}
            className="flex items-center cursor-pointer focus:outline-none"
            id="nav-logo"
            aria-label="Ir para o início"
          >
            <Logo size="md" showSubtitle={false} className="origin-left scale-[0.9] md:scale-100" />
          </button>

          <nav className="hidden md:flex items-center space-x-6" id="nav-desktop-menu" aria-label="Menu principal">
            {navLinks.map((link) => {
              const isActive = activePage === link.page;
              return (
                <button
                  key={link.page}
                  onClick={() => handleLinkClick(link.page)}
                  className={`relative text-[11px] font-bold uppercase tracking-widest transition-colors duration-200 cursor-pointer group py-1 ${
                    isActive ? "text-brand-yellow" : "text-slate-300 hover:text-brand-yellow"
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-brand-yellow transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}></span>
                </button>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center" id="nav-desktop-cta">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleLinkClick("orcamento")}
              className="bg-brand-yellow hover:bg-[#ffd633] text-black px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-brand-yellow/10 hover:shadow-brand-yellow/20 transition-all duration-300 cursor-pointer flex items-center gap-1"
            >
              Pedir atendimento
              <ArrowRight className="w-3.5 h-3.5 text-black stroke-[3]" />
            </motion.button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white hover:text-brand-yellow transition-colors p-2 focus:outline-none"
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            id="nav-mobile-toggle"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{ top: visibleAnnouncementOffset + headerHeight }}
            className="fixed inset-x-0 bottom-0 z-30 bg-midnight-carbon/98 backdrop-blur-2xl md:hidden flex flex-col justify-start p-8 border-t border-white/5"
            id="nav-mobile-menu"
          >
            <div className="flex flex-col space-y-5">
              {navLinks.map((link, idx) => {
                const isActive = activePage === link.page;
                return (
                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    key={link.page}
                    onClick={() => handleLinkClick(link.page)}
                    className={`text-left text-base font-extrabold border-b border-white/5 pb-2.5 w-full cursor-pointer uppercase tracking-wider ${
                      isActive ? "text-brand-yellow" : "text-slate-100 hover:text-brand-yellow"
                    }`}
                  >
                    {link.name}
                  </motion.button>
                );
              })}

              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                onClick={() => handleLinkClick("orcamento")}
                className="w-full bg-brand-yellow hover:bg-[#ffd633] text-black py-3.5 rounded-xl text-center font-extrabold uppercase tracking-wider shadow-lg shadow-brand-yellow/10 cursor-pointer flex items-center justify-center gap-2"
              >
                Quero divulgar minha empresa
                <ArrowRight className="w-4 h-4 text-black stroke-[3]" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
