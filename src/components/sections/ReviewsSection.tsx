import { Star } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GoogleIcon from "@/components/ui/GoogleIcon";

const avatarColors = [
  "bg-teal-500",
  "bg-purple-500",
  "bg-rose-500",
  "bg-amber-500",
  "bg-emerald-500",
  "bg-blue-500",
  "bg-indigo-500",
];

function getAvatarColor(name: string) {
  const charCode = name.charCodeAt(0);
  return avatarColors[charCode % avatarColors.length];
}

const reviews = [
  {
    name: "Elias Shalon",
    text: "Estou sendo acompanhado por ela e tem sido uma experiência muito positiva. Suas observações são bem certeiras e me ajudam a perceber coisas que eu mesmo não tinha notado. Mesmo sendo minha primeira vez fazendo terapia, me senti à vontade logo no começo — entrei meio nervoso, mas ela foi atenciosa e isso me tranquilizou. Recomendo, porque sinto que esse acompanhamento está realmente me ajudando.",
    rating: 5,
  },
  {
    name: "Bianca Alves",
    text: "Fiz terapia com a Jerusa há 2 anos, parei por um tempo e, agora que voltei, só podia ser com ela novamente. Profissional incrível, super atenciosa, e sempre me sinto mais leve depois de cada sessão!",
    rating: 5,
  },
  {
    name: "Sueli Aparecida",
    text: "Gostaria de compartilhar o quanto foi importante, cuidadoso e valioso o processo terapêutico que meu filho recebeu por mais de 1 ano e o resultado sendo muito significativo. Foi possível perceber o amadurecimento e crescimento junto a profissional maravilhosa Jerusa. Só tenho a agradecer pelo carinho, cuidado e zelo.",
    rating: 5,
  },
  {
    name: "Tais Prado",
    text: "Jerusa me acompanhou quando descobri a gravidez e tive dificuldades em aceitar, me acompanhou na gestação toda e no pós parto e até hoje 2 anos depois. Foi muitooooo importante pra mim esse acompanhamento, pois é realmente uma nova descoberta de como viver após ser mãe. Ela é sensacional!",
    rating: 5,
  },
  {
    name: "Tassya Lurdes",
    text: "Uma das melhores psicólogas que já conheci. Iniciei meu tratamento com ela no estágio e desde o início sempre foi muito prestativa, dedicada e empática. Me ajudou a superar muitas coisas. Só tenho a agradecer sempre. Marcou minha vida 🙏🏻💜",
    rating: 5,
  },
  {
    name: "Andrea Moura",
    text: "Fiz terapia com a Jerusa após o fim do meu casamento. Ela me ouviu sem julgamentos, me acolheu, me senti confortável em confiar nela. Mais que um profissional, um ser humano amável, incrível, levo pra vida ❤️",
    rating: 5,
  },
  {
    name: "Alicia Andrade",
    text: "A Jerusa é acolhedora, sabe dizer as palavras certas sempre que precisa. Estou muito contente com o tratamento!",
    rating: 5,
  },
];

export default function ReviewsSection() {
  return (
    <section className="section-padding bg-off-white">
      <div className="container-premium">
        <AnimatedSection className="text-center mb-12">
          <p className="text-sage text-sm tracking-[0.2em] mb-4">
            AVALIAÇÕES DO GOOGLE
          </p>
          <h2 className="heading-serif text-3xl md:text-4xl lg:text-5xl text-charcoal mb-4">
            O que dizem sobre o atendimento
          </h2>
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
            <span className="text-charcoal font-medium text-lg">5.0</span>
          </div>
          <a
            href="https://www.google.com/search?q=Psicóloga+Jerusa+Frois+Betim"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-warm-gray hover:text-soft-brown transition-colors text-sm"
          >
            <GoogleIcon className="w-4 h-4" />
            Ver todas as avaliações no Google
          </a>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <div className="card-premium h-full flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-lg ${getAvatarColor(review.name)}`}
                  >
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-charcoal">{review.name}</p>
                    <div className="flex gap-0.5">
                      {[...Array(review.rating)].map((_, j) => (
                        <Star
                          key={j}
                          className="w-4 h-4 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-warm-gray leading-relaxed text-sm flex-1">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
