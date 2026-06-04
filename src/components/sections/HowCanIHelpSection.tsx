import { Building2, Check, User } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const WHATSAPP_LINK =
  "https://wa.me/5531998403394?text=Olá! Gostaria de agendar uma consulta.";

export default function HowCanIHelpSection() {
  return (
    <section className="section-padding bg-off-white">
      <div className="container-premium">
        <AnimatedSection className="text-center mb-16">
          <p className="text-soft-brown text-sm tracking-[0.2em] mb-4">
            ESCOLHA SEU CAMINHO
          </p>
          <h2 className="heading-serif text-3xl md:text-4xl lg:text-5xl text-charcoal">
            Como posso te ajudar?
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Para Você */}
          <AnimatedSection delay={100} className="h-full">
            <div className="bg-cream rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
              <div className="h-56 lg:h-64">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/consultorio.jpeg"
                  alt="Consultório - Atendimento Presencial"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 lg:p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-sage-muted/30 flex items-center justify-center">
                    <User className="w-5 h-5 text-soft-brown" />
                  </div>
                  <div>
                    <h3 className="heading-serif text-xl lg:text-2xl text-charcoal">
                      PARA VOCÊ
                    </h3>
                    <p className="text-warm-gray text-sm">
                      Psicoterapia e cuidado emocional
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 mb-6 flex-1">
                  {[
                    "Psicoterapia para adolescentes e adultos",
                    "Ansiedade, autoestima e autoconhecimento",
                    "Relações, conflitos e desenvolvimento emocional",
                    "Escuta acolhedora e ética profissional",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-warm-gray text-sm"
                    >
                      <Check className="w-4 h-4 text-sage mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-beige text-charcoal rounded-full text-sm font-medium hover:bg-beige/80 transition-colors w-fit"
                >
                  Iniciar atendimento
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Para Empresas */}
          <AnimatedSection delay={200} className="h-full">
            <div className="bg-cream rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
              <div className="h-56 lg:h-64">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/palestra-corporativa.jpg"
                  alt="Palestra Corporativa"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 lg:p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-sage-muted/30 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-soft-brown" />
                  </div>
                  <div>
                    <h3 className="heading-serif text-xl lg:text-2xl text-charcoal">
                      PARA EMPRESAS
                    </h3>
                    <p className="text-warm-gray text-sm">
                      Saúde mental no trabalho
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 mb-6 flex-1">
                  {[
                    "Palestras e ações psicoeducativas",
                    "Rodas de conversa e escuta coletiva",
                    "Fatores psicossociais e saúde organizacional",
                    "Desenvolvimento humano e liderança",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-warm-gray text-sm"
                    >
                      <Check className="w-4 h-4 text-sage mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#empresas"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-soft-brown text-white rounded-full text-sm font-medium hover:bg-soft-brown/90 transition-colors w-fit"
                >
                  Conhecer soluções
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
