import AnimatedSection from "@/components/ui/AnimatedSection";

const WHATSAPP_LINK =
  "https://wa.me/5531998403394?text=Olá! Gostaria de agendar uma consulta.";

export default function AboutSection() {
  return (
    <section id="sobre" className="section-padding bg-off-white">
      <div className="container-premium">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/jerusa2.jpg"
                alt="Jerusa Frois - Psicóloga"
                className="rounded-[2rem] w-full object-cover shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-soft-brown text-white rounded-2xl px-8 py-6 shadow-xl">
                <p className="heading-serif text-3xl">5+</p>
                <p className="text-sm text-white/80">anos de experiência</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <p className="text-sage text-sm tracking-[0.2em] mb-4">SOBRE MIM</p>
            <h2 className="heading-serif text-3xl md:text-4xl lg:text-5xl text-charcoal mb-8">
              Olá, sou Jerusa Frois
            </h2>
            <div className="space-y-5 text-warm-gray leading-relaxed">
              <p>
                Sou psicóloga clínica com formação em Psicanálise, orientada por
                uma{" "}
                <strong className="text-charcoal">
                  escuta cuidadosa e genuína
                </strong>
                . Acredito que cada pessoa é singular e merece um espaço seguro
                para explorar suas emoções sem julgamentos.
              </p>
              <p>
                Minha atuação clínica é influenciada por autores como{" "}
                <em>Winnicott, Melanie Klein e Ferenczi</em>, que me inspiram a
                compreender a complexidade das relações humanas e o
                desenvolvimento emocional.
              </p>
              <p>
                Atendo adolescentes a partir de 13 anos e adultos, além de atuar
                na área de{" "}
                <strong className="text-charcoal">
                  saúde mental corporativa
                </strong>
                , desenvolvendo projetos de prevenção ao adoecimento emocional e
                adequação à NR1.
              </p>
            </div>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8"
            >
              Vamos conversar?
            </a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
