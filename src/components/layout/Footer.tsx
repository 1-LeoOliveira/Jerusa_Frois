import { MapPin, Phone } from "lucide-react";

const WHATSAPP_LINK =
  "https://wa.me/5531998403394?text=Olá! Gostaria de agendar uma consulta.";

export default function Footer() {
  return (
    <footer className="py-12 bg-charcoal text-white/80">
      <div className="container-premium">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="Jerusa Frois"
              className="h-12 mb-4 brightness-0 invert opacity-80"
            />
            <p className="text-sm text-white/50">Psicóloga CRP 04/68220</p>
          </div>
          <div>
            <h4 className="font-medium text-white mb-4">Contato</h4>
            <div className="space-y-3 text-sm">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" /> (31) 99840-3394
              </a>
              <p className="flex items-center gap-3">
                <MapPin className="w-4 h-4" /> Rua Santa Cruz, 612 — Centro,
                Betim/MG
              </p>
            </div>
          </div>
          <div>
            <h4 className="font-medium text-white mb-4">Redes Sociais</h4>
            <div className="flex flex-col gap-3">
              <a href="https://www.instagram.com/jerusafrois?igsh=MWgyaHF4N2t0MmN4dQ==" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                @jerusafrois
              </a>
              <a href="https://www.linkedin.com/in/jerusa-frois-6aaa41119" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                Jerusa Frois
              </a>
            </div>
          </div>
        </div>

        <div className="mb-10 rounded-xl overflow-hidden h-48">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.0!2d-44.2!3d-19.96!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDU3JzM2LjAiUyA0NMKwMTInMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(30%) brightness(0.8)" }}
            allowFullScreen
            loading="lazy"
            title="Localização do consultório"
          />
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/40">
          <p>
            © {new Date().getFullYear()} Jerusa Frois · Todos os direitos
            reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
