import AnimatedSection from "@/components/ui/AnimatedSection";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

const WHATSAPP_LINK =
  "https://wa.me/5531998403394?text=Olá! Gostaria de agendar uma consulta.";

export default function CTASection() {
  return (
    <section className="section-padding bg-gradient-to-br from-soft-brown via-soft-brown to-soft-brown-dark text-white text-center">
      <div className="container-premium">
        <AnimatedSection>
          <h2 className="heading-serif text-3xl md:text-4xl lg:text-5xl mb-6">
            Você não precisa enfrentar tudo sozinho.
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            O primeiro passo pode parecer difícil, mas você não precisa dar ele
            sozinho. Estou aqui para te acolher e caminhar ao seu lado nessa
            jornada de autoconhecimento.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-soft-brown px-10 py-5 rounded-full font-medium text-lg transition-all hover:bg-white/90 hover:-translate-y-1 hover:shadow-xl"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Agendar atendimento
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
