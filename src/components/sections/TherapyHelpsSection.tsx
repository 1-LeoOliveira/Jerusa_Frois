import { Check } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const WHATSAPP_LINK =
  "https://wa.me/5531998403394?text=Olá! Gostaria de agendar uma consulta.";

const benefits = [
  "Sair do automático e se reconectar consigo",
  "Compreender emoções e padrões de comportamento",
  "Fortalecer a autoestima e a autoconfiança",
  "Aprender a estabelecer limites saudáveis",
  "Melhorar a qualidade dos relacionamentos",
  "Reduzir o sofrimento emocional",
  "Lidar melhor com cobranças internas e externas",
];

export default function TherapyHelpsSection() {
  return (
    <section className="section-padding bg-soft-brown text-white">
      <div className="container-premium">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <p className="text-white/60 text-sm tracking-[0.2em] mb-4">
              TERAPIA
            </p>
            <h2 className="heading-serif text-3xl md:text-4xl lg:text-5xl mb-8">
              Como a terapia pode ajudar
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              A psicoterapia é um processo de autoconhecimento que permite sair
              do automático, compreender suas emoções e desenvolver recursos
              internos para lidar com os desafios da vida.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-soft-brown px-8 py-4 rounded-full font-medium transition-all hover:bg-white/90 hover:-translate-y-1"
            >
              Iniciar minha jornada
            </a>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <div className="space-y-5">
              {benefits.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-white/10 rounded-xl p-4"
                >
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-white/90">{item}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
