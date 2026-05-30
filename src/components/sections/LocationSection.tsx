import { Check, MapPin, MessageCircle } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const WHATSAPP_LINK =
  "https://wa.me/5531998403394?text=Olá! Gostaria de agendar uma consulta.";

export default function LocationSection() {
  return (
    <section id="contato" className="section-padding bg-off-white">
      <div className="container-premium">
        <AnimatedSection className="text-center mb-12">
          <p className="text-sage text-sm tracking-[0.2em] mb-4">
            ATENDIMENTO
          </p>
          <h2 className="heading-serif text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6">
            Onde te atendo
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8">
          <AnimatedSection>
            <div className="card-premium h-full">
              <div className="w-14 h-14 bg-sage-muted/30 rounded-xl flex items-center justify-center mb-6">
                <MapPin className="w-7 h-7 text-sage" />
              </div>
              <h3 className="heading-serif text-2xl text-charcoal mb-4">
                Atendimento Presencial
              </h3>
              <p className="text-warm-gray mb-6">
                Consultório localizado em ambiente tranquilo e acolhedor,
                pensado para proporcionar conforto e privacidade.
              </p>
              <div className="rounded-xl overflow-hidden mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://019e64ef-0cb7-7e67-a915-216a90413591.mochausercontent.com/consultorio.jpeg"
                  alt="Consultório - ambiente acolhedor"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="bg-cream rounded-xl p-5">
                <p className="font-medium text-charcoal">Rua Santa Cruz, 612</p>
                <p className="text-warm-gray">Centro — Betim/MG</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <div className="card-premium h-full">
              <div className="w-14 h-14 bg-sage-muted/30 rounded-xl flex items-center justify-center mb-6">
                <MessageCircle className="w-7 h-7 text-sage" />
              </div>
              <h3 className="heading-serif text-2xl text-charcoal mb-4">
                Atendimento Online
              </h3>
              <p className="text-warm-gray mb-6">
                Sessões por videochamada com a mesma qualidade do atendimento
                presencial. Ideal para quem busca praticidade sem abrir mão do
                cuidado.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Mesmo acolhimento do presencial",
                  "Flexibilidade de horários",
                  "Conforto do seu espaço",
                  "Plataforma segura e sigilosa",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-warm-gray">
                    <Check className="w-5 h-5 text-sage" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center"
              >
                Agendar sessão online
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
