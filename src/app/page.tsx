import Header from "@/components/Header";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";

const services = [
  {
    title: "Orientação Metodológica",
    description:
      "Acompanhamento especializado na definição de metodologias de pesquisa, estruturação de projetos e desenvolvimento de argumentação científica sólida.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1}
        stroke="currentColor"
        className="h-10 w-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
        />
      </svg>
    ),
  },
  {
    title: "Revisão & Estruturação Textual",
    description:
      "Revisão aprofundada de conteúdo acadêmico, adequação às normas ABNT, APA e Vancouver, e aprimoramento da coesão e coerência textual.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1}
        stroke="currentColor"
        className="h-10 w-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
        />
      </svg>
    ),
  },
  {
    title: "Mentoria Acadêmica",
    description:
      "Acompanhamento personalizado durante toda a jornada acadêmica, desde a concepção do tema até a defesa final, com reuniões regulares e feedback contínuo.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1}
        stroke="currentColor"
        className="h-10 w-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
        />
      </svg>
    ),
  },
  {
    title: "Suporte à Pesquisa",
    description:
      "Auxílio na busca bibliográfica, análise de dados, elaboração de referencial teórico e construção de frameworks conceituais para sua investigação.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1}
        stroke="currentColor"
        className="h-10 w-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
    ),
  },
];

const steps = [
  {
    number: "01",
    title: "Consulta Inicial",
    description:
      "Conversamos sobre suas necessidades, prazos e objetivos acadêmicos para entender como posso melhor apoiá-lo.",
  },
  {
    number: "02",
    title: "Planejamento",
    description:
      "Desenvolvemos juntos um plano de trabalho personalizado, com cronograma claro e metas definidas.",
  },
  {
    number: "03",
    title: "Desenvolvimento",
    description:
      "Acompanho seu progresso com reuniões regulares, fornecendo orientação, revisões e feedback detalhado.",
  },
  {
    number: "04",
    title: "Entrega & Refinamento",
    description:
      "Realizamos ajustes finais para garantir que o trabalho atenda aos mais altos padrões de qualidade acadêmica.",
  },
];

const testimonials = [
  {
    quote:
      "A orientação da Beatris foi fundamental para a conclusão da minha dissertação. Sua expertise em metodologia transformou completamente a qualidade do meu trabalho.",
    author: "Marina S.",
    role: "Mestrado em Educação",
  },
  {
    quote:
      "Profissional excepcional. A mentoria acadêmica me deu a segurança que eu precisava para defender minha tese com confiança.",
    author: "Carlos R.",
    role: "Doutorado em Administração",
  },
  {
    quote:
      "Atendimento impecável e resultados que superaram minhas expectativas. Recomendo a todos que buscam excelência acadêmica.",
    author: "Juliana M.",
    role: "Mestrado em Psicologia",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative flex h-screen items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2090&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="animate-fade-in mb-6 text-sm tracking-[0.3em] uppercase text-white/80">
            Consultoria & Mentoria Acadêmica
          </p>
          <h1 className="animate-fade-in-up font-serif text-4xl leading-tight font-light text-white md:text-6xl lg:text-7xl">
            Transformando ideias em
            <br />
            <em className="text-accent-light">excelência acadêmica</em>
          </h1>
          <p className="animate-fade-in-up animate-delay-400 mt-8 max-w-2xl mx-auto text-lg leading-relaxed text-white/85 md:text-xl">
            Orientação especializada para teses, dissertações e artigos
            científicos com o rigor e a dedicação que seu trabalho merece.
          </p>
          <div className="animate-fade-in-up animate-delay-600 mt-12">
            <a
              href="#contato"
              className="inline-block border border-white/40 px-10 py-4 text-sm tracking-[0.2em] uppercase text-white transition-all duration-300 hover:border-accent-light hover:bg-accent-light/10 hover:text-accent-light"
            >
              Agende uma Consulta
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="white"
            className="h-6 w-6 opacity-60"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </section>

      {/* About */}
      <section id="sobre" className="bg-cream py-28 lg:py-36">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-12">
          <ScrollReveal>
            <p className="mb-4 text-sm tracking-[0.3em] uppercase text-accent">
              Sobre
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <h2 className="font-serif text-3xl leading-snug font-light text-primary md:text-4xl lg:text-5xl">
              Um compromisso com a excelência na produção do conhecimento
              acadêmico.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="mx-auto mt-10 max-w-2xl space-y-6 text-lg leading-relaxed text-warm-gray">
              <p>
                Com anos de experiência no universo acadêmico, ofereço uma
                consultoria que vai além do convencional. Minha abordagem une
                rigor metodológico, sensibilidade textual e um profundo respeito
                pela singularidade de cada pesquisador.
              </p>
              <p>
                Acredito que todo trabalho acadêmico carrega uma história única
                — e minha missão é ajudá-lo a contá-la com clareza, precisão e
                impacto.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Decorative Image Band */}
      <div className="relative h-[50vh] overflow-hidden lg:h-[60vh]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2128&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-primary/20" />
        </div>
      </div>

      {/* Services */}
      <section id="servicos" className="bg-white py-28 lg:py-36">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center">
              <p className="mb-4 text-sm tracking-[0.3em] uppercase text-accent">
                Serviços
              </p>
              <h2 className="font-serif text-3xl font-light text-primary md:text-4xl lg:text-5xl">
                Como posso ajudá-lo
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-20 grid gap-12 md:grid-cols-2">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.12}>
                <div className="group border-t border-primary/10 pt-8 transition-all">
                  <div className="mb-5 text-accent transition-colors group-hover:text-accent-light">
                    {service.icon}
                  </div>
                  <h3 className="font-serif text-2xl font-light text-primary">
                    {service.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-warm-gray">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="processo" className="bg-primary py-28 text-white lg:py-36">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center">
              <p className="mb-4 text-sm tracking-[0.3em] uppercase text-accent-light">
                Processo
              </p>
              <h2 className="font-serif text-3xl font-light md:text-4xl lg:text-5xl">
                Uma jornada clara e estruturada
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-20 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 0.12}>
                <div className="text-center lg:text-left">
                  <span className="font-serif text-5xl font-light text-accent-light/40">
                    {step.number}
                  </span>
                  <h3 className="mt-4 font-serif text-xl font-light">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="bg-cream py-28 lg:py-36">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center">
              <p className="mb-4 text-sm tracking-[0.3em] uppercase text-accent">
                Depoimentos
              </p>
              <h2 className="font-serif text-3xl font-light text-primary md:text-4xl lg:text-5xl">
                O que dizem nossos alunos
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-20 grid gap-10 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.author} delay={i * 0.12}>
                <div className="flex h-full flex-col justify-between rounded-sm bg-white p-10 shadow-sm">
                  <div>
                    <span className="font-serif text-5xl leading-none text-accent/30">
                      &ldquo;
                    </span>
                    <p className="mt-2 leading-relaxed text-warm-gray italic">
                      {t.quote}
                    </p>
                  </div>
                  <div className="mt-8 border-t border-primary/10 pt-6">
                    <p className="font-serif text-lg text-primary">
                      {t.author}
                    </p>
                    <p className="mt-1 text-sm text-warm-gray">{t.role}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contato" className="bg-white py-28 lg:py-36">
        <div className="mx-auto max-w-4xl px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center">
              <p className="mb-4 text-sm tracking-[0.3em] uppercase text-accent">
                Contato
              </p>
              <h2 className="font-serif text-3xl font-light text-primary md:text-4xl lg:text-5xl">
                Vamos conversar sobre seu projeto
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-warm-gray">
                Entre em contato para uma consulta inicial gratuita. Terei prazer
                em entender suas necessidades e propor a melhor solução.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <ContactForm />
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary/10 bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-12">
          <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <p className="font-serif text-xl tracking-[0.15em] uppercase text-primary">
                Beatris Michels
              </p>
              <p className="mt-2 text-sm text-warm-gray">
                Consultoria & Mentoria Acadêmica
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 text-sm text-warm-gray md:items-end">
              <a
                href="mailto:beatris.michels@outlook.com"
                className="transition-colors hover:text-accent"
              >
                beatris.michels@outlook.com
              </a>
            </div>
          </div>
          <div className="mt-12 border-t border-primary/10 pt-8 text-center text-xs text-warm-gray/60">
            &copy; {new Date().getFullYear()} Beatris Michels. Todos os direitos
            reservados.
          </div>
        </div>
      </footer>
    </>
  );
}
