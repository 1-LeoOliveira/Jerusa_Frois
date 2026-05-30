import {
  Brain,
  Building2,
  Heart,
  Lightbulb,
  MessageCircle,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const areas = [
  {
    icon: Brain,
    title: "Ansiedade",
    desc: "Compreenda os sinais do seu corpo e encontre formas de lidar com a ansiedade no dia a dia.",
  },
  {
    icon: Heart,
    title: "Depressão",
    desc: "Um espaço acolhedor para atravessar momentos difíceis e reencontrar o sentido.",
  },
  {
    icon: Users,
    title: "Relacionamentos",
    desc: "Construa vínculos mais saudáveis e aprenda a se comunicar de forma mais assertiva.",
  },
  {
    icon: Sparkles,
    title: "Autoestima",
    desc: "Fortaleça a relação consigo mesma e desenvolva uma autoimagem mais positiva.",
  },
  {
    icon: Zap,
    title: "Burnout",
    desc: "Reconheça os limites do esgotamento e recupere o equilíbrio entre vida e trabalho.",
  },
  {
    icon: MessageCircle,
    title: "Sobrecarga emocional",
    desc: "Aprenda a gerenciar emoções intensas e encontre mais leveza no cotidiano.",
  },
  {
    icon: Lightbulb,
    title: "TDAH",
    desc: "Estratégias para organização, foco e autocompreensão no contexto do TDAH.",
  },
  {
    icon: Building2,
    title: "Estresse no trabalho",
    desc: "Desenvolva recursos para lidar com pressões e cobranças do ambiente profissional.",
  },
];

export default function AreasSection() {
  return (
    <section id="areas" className="section-padding bg-cream">
      <div className="container-premium">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sage text-sm tracking-[0.2em] mb-4">
            ÁREAS DE ATUAÇÃO
          </p>
          <h2 className="heading-serif text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6">
            Posso ajudar você com
          </h2>
          <p className="text-warm-gray max-w-2xl mx-auto">
            Cada jornada é única. Conheça algumas das questões que podemos
            trabalhar juntos em um espaço seguro e acolhedor.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, i) => (
            <AnimatedSection key={i} delay={i * 75}>
              <div className="card-premium hover-lift h-full">
                <div className="w-12 h-12 bg-sage-muted/30 rounded-xl flex items-center justify-center mb-5">
                  <area.icon className="w-6 h-6 text-sage" />
                </div>
                <h3 className="heading-serif text-xl text-charcoal mb-3">
                  {area.title}
                </h3>
                <p className="text-sm text-warm-gray leading-relaxed">
                  {area.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
