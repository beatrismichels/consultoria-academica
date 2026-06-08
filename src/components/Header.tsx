"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#processo", label: "Processo" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`flex items-center gap-2 text-sm tracking-[0.2em] uppercase transition-colors ${
              scrolled ? "text-primary" : "text-white"
            }`}
            aria-label="Menu"
          >
            <span className="flex flex-col gap-[5px]">
              <span
                className={`block h-[1.5px] w-6 transition-all duration-300 ${
                  scrolled ? "bg-primary" : "bg-white"
                } ${menuOpen ? "translate-y-[6.5px] rotate-45" : ""}`}
              />
              <span
                className={`block h-[1.5px] w-6 transition-all duration-300 ${
                  scrolled ? "bg-primary" : "bg-white"
                } ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-[1.5px] w-6 transition-all duration-300 ${
                  scrolled ? "bg-primary" : "bg-white"
                } ${menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""}`}
              />
            </span>
            <span className="hidden sm:inline">Menu</span>
          </button>

          <a
            href="#"
            className={`font-serif text-xl tracking-[0.15em] uppercase transition-colors lg:text-2xl ${
              scrolled ? "text-primary" : "text-white"
            }`}
          >
            Michels & Co. Acadêmico
          </a>

          <a
            href="#contato"
            className={`hidden text-sm tracking-[0.2em] uppercase transition-colors sm:inline-block ${
              scrolled ? "text-primary" : "text-white"
            }`}
          >
            Contato
          </a>
          <span className="w-6 sm:hidden" />
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-primary/95 backdrop-blur-sm"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="font-serif text-3xl tracking-wider text-white transition-colors hover:text-accent-light lg:text-4xl"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
