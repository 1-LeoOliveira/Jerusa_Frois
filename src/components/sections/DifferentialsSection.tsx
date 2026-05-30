import AnimatedSection from "@/components/ui/AnimatedSection";

const differentials = [
  {
    title: "Escuta humanizada",
    desc: "Cada pessoa é única. Ofereço uma escuta genuína, sem julgamentos, respeitando seu tempo e história.",
  },
  {
    title: "Olhar além do sintoma",
    desc: "Busco compreender as raízes do sofrimento, não apenas seus sintomas aparentes.",
  },
  {
    title: "Experiência clínica",
    desc: "Anos de prática clínica com adolescentes e adultos em diferentes contextos.",
  },
  {
    title: "Atuação corporativa",
    desc: "Experiência em saúde mental no trabalho, palestras e adequação à NR1.",
  },
  {
    title: "Flexibilidade",
    desc: "Atendimento presencial em Betim ou online, adaptando-se à sua rotina.",
  },
  {
    title: "Acolhimento genuíno",
    desc: "Um espaço seguro onde você pode ser você, sem máscaras ou expectativas.",
  },
];

export default function DifferentialsSection() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-premium">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sage text-sm tracking-[0.2em] mb-4">
            DIFERENCIAIS
          </p>
          <h2 className="heading-serif text-3xl md:text-4xl lg:text-5xl text-charcoal">
            Por que me escolher
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item, i) => (
            <AnimatedSection key={i} delay={i * 75}>
              <div className="card-premium hover-lift h-full">
                <h3 className="heading-serif text-xl text-charcoal mb-3">
                  {item.title}
                </h3>
                <p className="text-warm-gray leading-relaxed">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
