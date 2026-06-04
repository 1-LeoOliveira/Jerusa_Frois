import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

const WHATSAPP_TERAPIA =
  "https://wa.me/5531998403394?text=Olá! Quero iniciar minha terapia.";
const WHATSAPP_CORP =
  "https://wa.me/5531998403394?text=Olá! Gostaria de solicitar uma proposta para minha empresa.";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 lg:pt-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream-warm to-beige/30" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-sage-muted/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-nude/30 rounded-full blur-3xl" />

      <div className="container-premium relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-12 lg:py-0">
          <div className="order-2 lg:order-1">
            <p
              className="text-soft-brown text-sm tracking-[0.2em] mb-6 animate-fade-in"
              style={{ animationDelay: "0s" }}
            >
              PSICÓLOGA CLÍNICA • CRP 04/68220
            </p>

            <h1
              className="heading-serif text-4xl md:text-5xl lg:text-6xl text-charcoal mb-8 animate-fade-in-up"
              style={{ animationDelay: "0.1s", opacity: 0 }}
            >
              Um espaço seguro para compreender suas emoções, fortalecer sua
              autoestima e viver com mais leveza.
            </h1>

            <p
              className="text-warm-gray text-lg md:text-xl leading-relaxed mb-10 animate-fade-in-up"
              style={{ animationDelay: "0.2s", opacity: 0 }}
            >
              Atendimento psicológico para adolescentes, adultos e empresas, com
              um olhar humanizado e acolhedor.
            </p>

            <div
              className="flex flex-wrap gap-4 mb-10 animate-fade-in-up"
              style={{ animationDelay: "0.3s", opacity: 0 }}
            >
              <a
                href={WHATSAPP_TERAPIA}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Quero iniciar minha terapia
                <WhatsAppIcon className="w-4 h-4" />
              </a>
              <a href={WHATSAPP_CORP} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Sou empresa
              </a>
            </div>

            <div
              className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-warm-gray animate-fade-in-up"
              style={{ animationDelay: "0.4s", opacity: 0 }}
            >
              {["Online e presencial", "Atendimento particular", "Reembolso por convênio"].map(
                (item, i) => (
                  <span key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sage" />
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          <div
            className="order-1 lg:order-2 flex justify-center lg:justify-end animate-scale-in"
            style={{ animationDelay: "0.2s", opacity: 0 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-sage-muted/30 to-nude/50 rounded-[2rem] blur-2xl" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/Jerusa.jpg"
                alt="Jerusa Frois - Psicóloga"
                className="relative w-full max-w-md lg:max-w-lg rounded-[2rem] object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
