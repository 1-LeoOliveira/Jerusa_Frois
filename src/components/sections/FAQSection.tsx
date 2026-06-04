"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const WHATSAPP_LINK =
  "https://wa.me/5531998403394?text=Olá! Gostaria de agendar uma consulta.";

const faqs: { question: string; answer: React.ReactNode }[] = [
  {
    question: "Como funciona a terapia?",
    answer:
      "A terapia é um processo de autoconhecimento guiado, onde você pode falar livremente sobre suas questões em um ambiente seguro e confidencial. Juntos, vamos compreender seus padrões emocionais e desenvolver recursos para lidar com os desafios da vida.",
  },
  {
    question: "A terapia online funciona?",
    answer:
      "Sim! Estudos mostram que a terapia online é tão eficaz quanto a presencial. O importante é o vínculo terapêutico e o comprometimento com o processo. Muitos pacientes preferem o conforto e praticidade de estar em seu próprio espaço.",
  },
  {
    question: "Qual a duração da sessão?",
    answer:
      "Cada sessão tem duração de aproximadamente 50 minutos. A frequência ideal é semanal, mas isso pode ser ajustado de acordo com suas necessidades e disponibilidade.",
  },
  {
    question: "Vocês atendem convênio?",
    answer:
      "O atendimento é particular, mas forneço recibo para que você possa solicitar reembolso junto ao seu convênio. Muitos planos oferecem cobertura parcial ou total para psicoterapia.",
  },
  {
    question: "Como agendar uma consulta?",
    answer:
      "Você pode entrar em contato pelo WhatsApp para agendar sua primeira sessão. Respondo rapidamente e podemos encontrar o melhor horário para você.",
  },
  {
    question: "Como funciona o reembolso?",
    answer:
      "Após cada sessão, disponibilizo o recibo para solicitação de reembolso junto ao convênio. As regras e valores reembolsados variam conforme o plano contratado.",
  },
  {
    question: "Qual o valor da consulta?",
    answer: (
      <>
        O Conselho Regional de Psicologia (CRP) não permite a divulgação de
        preços como forma de promoção profissional. Para saber mais sobre
        valores e disponibilidade de horários, entre em contato pelo WhatsApp{" "}
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="text-soft-brown underline hover:text-soft-brown/80 transition-colors"
        >
          clicando aqui
        </a>
        . Ficarei feliz em atendê-lo(a).
      </>
    ),
  },
];

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="section-padding bg-cream">
      <div className="container-premium">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <p className="text-sage text-sm tracking-[0.2em] mb-4">FAQ</p>
            <h2 className="heading-serif text-3xl md:text-4xl lg:text-5xl text-charcoal">
              Dúvidas frequentes
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl border border-nude/30 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-cream/50 transition-colors"
                  >
                    <span className="font-medium text-charcoal pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-soft-brown transition-transform duration-300 flex-shrink-0 ${
                        openFaq === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaq === i ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <p className="px-6 pb-6 text-warm-gray leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
