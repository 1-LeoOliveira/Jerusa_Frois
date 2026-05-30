import { Star } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GoogleIcon from "@/components/ui/GoogleIcon";

const WHATSAPP_CORP =
  "https://wa.me/5531998403394?text=Olá! Gostaria de solicitar uma proposta para minha empresa.";

const avatarColors = [
  "bg-teal-500",
  "bg-purple-500",
  "bg-rose-500",
  "bg-amber-500",
  "bg-emerald-500",
  "bg-blue-500",
  "bg-indigo-500",
];

const corporateReviews = [
  {
    name: "Karine Goncalves",
    text: "Jerusa é uma profissional muito competente, humana, assertiva em suas considerações, excelente ouvinte e atua sem julgamentos. Há alguns meses, promovemos em minha empresa uma ação para trabalhar alguns pontos de evolução profissional com a equipe, tendo como foco, auto responsabilização e maturidade profissional. A Jerusa foi a responsável por esta ação, criou o escopo de atividades e pautas, e guiou com maestria, totalmente dentro da nossa expectativa. Recomendo muito o trabalho dela.",
  },
  {
    name: "Daisy Rezende",
    role: "Consultora de gente e gestão",
    text: "Recomendo o trabalho da Jerusa. Profissional qualificada, comprometida e sempre atenciosa no relacionamento com clientes e parceiros.",
  },
  {
    name: "Qualidade Expolumen",
    text: "Trabalho excelente! Linguagem acessível e com abordagem muito prática! Gostamos muito da palestra!",
  },
  {
    name: "Yuri Lopes",
    text: "Excelente profissional, e ótima palestrante.",
  },
];

const services = [
  {
    title: "Palestras",
    desc: "Temas relevantes sobre saúde mental e bem-estar no trabalho",
  },
  {
    title: "Rodas de conversa",
    desc: "Espaços de escuta e reflexão para equipes",
  },
  {
    title: "Avaliação psicossocial",
    desc: "Diagnóstico de riscos conforme NR1",
  },
  {
    title: "Desenvolvimento humano",
    desc: "Programas de fortalecimento emocional",
  },
];

export default function CorporateSection() {
  return (
    <>
      <section id="empresas" className="section-padding bg-charcoal text-white">
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection className="order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-black">
                <video
                  className="w-full max-h-[500px] object-contain mx-auto"
                  controls
                  poster="https://019e64ef-0cb7-7e67-a915-216a90413591.mochausercontent.com/palestra-corporativa.jpg"
                >
                  <source
                    src="https://019e64ef-0cb7-7e67-a915-216a90413591.mochausercontent.com/Jerusa.mp4"
                    type="video/mp4"
                  />
                  Seu navegador não suporta vídeos.
                </video>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                {services.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
                  >
                    <h4 className="heading-serif text-lg text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-white/60">{item.desc}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150} className="order-1 lg:order-2">
              <p className="text-sage-light text-sm tracking-[0.2em] mb-4">
                EMPRESAS • NR1
              </p>
              <h2 className="heading-serif text-3xl md:text-4xl lg:text-5xl mb-8">
                Saúde mental no ambiente corporativo
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                Desenvolvo projetos de saúde mental para empresas, com foco na
                prevenção ao adoecimento emocional, desenvolvimento humano e
                adequação às novas exigências da NR1.
              </p>
              <p className="text-white/70 leading-relaxed mb-8">
                Um olhar ampliado para as relações de trabalho, promovendo
                ambientes mais saudáveis e colaboradores mais engajados e
                emocionalmente equilibrados.
              </p>
              <a
                href={WHATSAPP_CORP}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Solicitar proposta
              </a>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Corporate Reviews */}
      <section className="section-padding bg-charcoal/95 text-white">
        <div className="container-premium">
          <AnimatedSection className="text-center mb-12">
            <p className="text-sage-light text-sm tracking-[0.2em] mb-4">
              DEPOIMENTOS CORPORATIVOS
            </p>
            <h2 className="heading-serif text-3xl md:text-4xl lg:text-5xl mb-4">
              O que as empresas dizem
            </h2>
            <div className="flex items-center justify-center gap-2 mt-6">
              <GoogleIcon className="w-5 h-5" />
              <span className="text-white/70 text-sm">Avaliações do Google</span>
              <div className="flex items-center gap-1 ml-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-white font-medium ml-1">5.0</span>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {corporateReviews.map((review, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed mb-6">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-medium text-sm ${avatarColors[i % avatarColors.length]}`}
                    >
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-white text-sm">
                        {review.name}
                      </p>
                      {"role" in review && review.role && (
                        <p className="text-white/50 text-xs">{review.role}</p>
                      )}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
