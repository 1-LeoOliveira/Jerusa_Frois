"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

const WHATSAPP_LINK =
  "https://wa.me/5531998403394?text=Olá! Gostaria de agendar uma consulta.";

const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Áreas de atuação", href: "#areas" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Empresas", href: "#empresas" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-cream/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container-premium">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <a href="#" className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://019e64ef-0cb7-7e67-a915-216a90413591.mochausercontent.com/logo.png"
              alt="Jerusa Frois"
              className="h-9 lg:h-10 w-auto"
            />
            <span
              className="text-xl lg:text-2xl text-charcoal/90 tracking-wide"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 400,
              }}
            >
              Jerusa Frois
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-10 text-sm">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-charcoal/70 hover:text-soft-brown transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex btn-primary"
          >
            Agendar atendimento
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2"
            aria-label="Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-cream/98 backdrop-blur-md border-t border-nude/50">
          <div className="container-premium py-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-charcoal/80 hover:text-soft-brown transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full mt-4 flex items-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Agendar atendimento
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
