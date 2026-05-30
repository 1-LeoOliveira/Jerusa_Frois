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
              src="https://019e64ef-0cb7-7e67-a915-216a90413591.mochausercontent.com/logo.png"
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
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-white transition-colors"
            >
              @jerusafrois.psi
            </a>
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
