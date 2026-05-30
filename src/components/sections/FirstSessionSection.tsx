import { Clock, Heart, MapPin } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const sessionInfo = [
  { icon: Clock, label: "Duração", value: "50 minutos" },
  { icon: MapPin, label: "Modalidade", value: "Online ou Presencial" },
  { icon: Heart, label: "Ambiente", value: "Seguro e acolhedor" },
];

export default function FirstSessionSection() {
  return (
    <section id="como-funciona" className="section-padding bg-beige/30">
      <div className="container-premium">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <p className="text-sage text-sm tracking-[0.2em] mb-4">
              PRIMEIRA SESSÃO
            </p>
            <h2 className="heading-serif text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6">
              Como funciona a primeira sessão
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-lg border border-nude/30">
              <p className="text-warm-gray text-lg leading-relaxed mb-6">
                A primeira sessão é um momento especial de{" "}
                <strong className="text-charcoal">
                  construção do vínculo terapêutico
                </strong>
                . É natural chegar com dúvidas ou ansiedade — isso faz parte do
                processo.
              </p>
              <p className="text-warm-gray leading-relaxed mb-8">
                Nesse encontro, ofereço uma{" "}
                <strong className="text-charcoal">
                  escuta sem julgamentos
                </strong>
                , onde você pode falar livremente sobre o que está sentindo.
                Vamos conversar sobre sua história, suas relações e o que te
                motivou a buscar ajuda. Respeito o{" "}
                <strong className="text-charcoal">
                  tempo e a forma de cada pessoa
                </strong>{" "}
                se expressar.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                {sessionInfo.map((item, i) => (
                  <div key={i} className="text-center p-5 bg-cream rounded-xl">
                    <item.icon className="w-6 h-6 text-sage mx-auto mb-3" />
                    <p className="text-xs text-warm-gray mb-1">{item.label}</p>
                    <p className="font-medium text-charcoal">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
