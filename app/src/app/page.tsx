import Image from "next/image";
import Link from "next/link";
import { FaqAccordion, type FaqItem } from "@/components/FaqAccordion";
import { Reveal } from "@/components/ui/Reveal";

const WHATSAPP_HREF =
  "https://wa.me/5562992218107?text=Gostaria%20de%20saber%20mais%20sobre%20as%20consultas!";

export default function Home() {
  return (
    <main className="bg-paper text-ink">
      <Nav />
      <Hero />
      <Sintomas />
      <Sobre />
      <ProvaSocial />
      <PerguntasFrequentes />
      <Localizacao />
      <CtaFinal />
      <Footer />
    </main>
  );
}

/* ─────────────────────────── NAV ─────────────────────────── */

function Nav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-line-dark bg-ink/95 px-6 py-4 backdrop-blur-sm md:px-10">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-10">
        <Logo dark />
        <div className="hidden items-center gap-7 md:flex">
          <a href="#sintomas" className="text-sm font-semibold uppercase tracking-wide text-paper/70 transition-colors hover:text-cyan">
            Sintomas
          </a>
          <a href="#sobre" className="text-sm font-semibold uppercase tracking-wide text-paper/70 transition-colors hover:text-cyan">
            Sobre
          </a>
          <a href="#depoimentos" className="text-sm font-semibold uppercase tracking-wide text-paper/70 transition-colors hover:text-cyan">
            Depoimentos
          </a>
          <a href="#faq" className="text-sm font-semibold uppercase tracking-wide text-paper/70 transition-colors hover:text-cyan">
            Dúvidas
          </a>
          <a href="#localizacao" className="text-sm font-semibold uppercase tracking-wide text-paper/70 transition-colors hover:text-cyan">
            Como Chegar
          </a>
        </div>
        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md bg-cyan px-4 py-2.5 text-sm font-bold text-ink transition-colors hover:bg-white"
        >
          Agendar Avaliação
        </a>
      </div>
    </nav>
  );
}

/* ─────────────────────────── HERO ─────────────────────────── */

const outcomes = [
  { title: "Alívio da dor", sub: "com segurança" },
  { title: "Recuperação", sub: "mais rápida" },
  { title: "Mais qualidade", sub: "de vida" },
];

function Hero() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-paper md:flex md:min-h-[720px] md:flex-col lg:aspect-[12/5] lg:min-h-[800px]">
        {/* Mobile: image sits above the copy, not behind it */}
        <div className="relative aspect-[4/5] w-full md:hidden">
          <Image
            src="/images/hero-mobile.png"
            alt="Everton Carlos, fisioterapeuta e quiropraxista, em seu consultório"
            fill
            priority
            sizes="100vw"
            className="object-cover object-top"
          />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-ink to-transparent" />
        </div>

        {/* Desktop / tablet: full-bleed background with copy overlaid */}
        <Image
          src="/images/hero-bg.png"
          alt="Everton Carlos, fisioterapeuta e quiropraxista, em seu consultório"
          fill
          priority
          sizes="100vw"
          className="hidden object-cover object-[66%_38%] md:block"
        />

        <div className="relative z-10 px-6 pb-10 pt-2 md:flex md:flex-1 md:flex-col md:justify-center md:px-10 md:py-28">
          <div className="mx-auto w-full max-w-6xl">
            <div className="max-w-xl">
              <Reveal direction="down" duration={900}>
                <h1 className="text-4xl font-display font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-[3.6rem] lg:text-7xl">
                  Movimento
                  <br />
                  sem dor.
                  <br />
                  <span className="relative inline-block text-cyan">
                    Performance sem limites.
                    <span className="absolute -bottom-2 left-0 h-[3px] w-2/3 bg-cyan" />
                  </span>
                </h1>
              </Reveal>

              <Reveal direction="up" delay={200} duration={800}>
                <p className="mt-7 max-w-md text-base leading-relaxed text-paper/75 md:text-lg">
                  Agende sua avaliação e descubra o motivo real da sua dor — e o
                  caminho pra resolver sem depender de cirurgia.
                </p>
              </Reveal>

              <Reveal direction="up" delay={350} duration={800}>
                <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                  <a
                    href={WHATSAPP_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-cyan px-7 py-4 text-base font-bold text-ink transition-all hover:bg-white hover:shadow-[0_0_24px_rgba(0,191,244,0.6)]"
                  >
                    Agendar Avaliação
                    <ArrowIcon />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <Reveal className="relative z-10 border-t border-white/10 bg-ink text-paper">
        <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-line-dark px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0 md:px-10">
          {outcomes.map((o) => (
            <div key={o.title} className="flex items-center gap-3 py-5 sm:justify-center sm:py-6">
              <span className="text-base font-bold text-white">{o.title}</span>
              <span className="text-sm text-paper/55">{o.sub}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </>
  );
}

/* ─────────────────────────── SINTOMAS ─────────────────────────── */

const symptoms = [
  {
    slug: "costas",
    label: "Dor nas Costas",
    sub: "lombar, meio das costas, ciático",
    img: "/images/costas-fit.png",
    tag: "L1–L5 · LOMBAR",
    pos: "object-[38%_50%]",
  },
  {
    slug: "cervical",
    label: "Pescoço e Cervical",
    sub: "rigidez, dor ao virar o pescoço",
    img: "/images/cervical-fit.png",
    tag: "C1–C7 · CERVICAL",
    pos: "object-center",
  },
  {
    slug: "esportiva",
    label: "Lesão Esportiva",
    sub: "treino, corrida, jogo",
    img: "/images/esportiva-fit.png",
    tag: "MMII · ARTICULAR",
    pos: "object-[55%_50%]",
  },
  {
    slug: "hernia",
    label: "Hérnia de Disco",
    sub: "diagnóstico já feito",
    img: "/images/hernia-fit.png",
    tag: "L4–L5 · DISCO",
    pos: "object-center",
    wide: true,
  },
  {
    slug: "outro",
    label: "Não sei bem",
    sub: "quero orientação",
    img: "/images/outro-fit.png",
    tag: "AVALIAÇÃO · LIVRE",
    pos: "object-center",
    wide: true,
  },
  {
    slug: "eletrodry",
    label: "Eletroterapia & Dry Needling",
    sub: "alívio profundo da dor crônica",
    img: "/images/eletrodry-fit.png",
    tag: "DOR · ELETROESTIMULAÇÃO",
    pos: "object-center",
  },
  {
    slug: "ventosaterapia",
    label: "Ventosaterapia",
    sub: "circulação e descompressão muscular",
    img: "/images/ventosaterapia-fit.png",
    tag: "MIOFASCIAL · RECUPERAÇÃO",
    pos: "object-center",
  },
  {
    slug: "infiltracao",
    label: "Infiltração com Ácido Hialurônico",
    sub: "viscossuplementação articular",
    img: "/images/infiltracao-fit.png",
    tag: "INJETÁVEIS · ARTICULAÇÃO",
    pos: "object-center",
  },
];

function Sintomas() {
  return (
    <section id="sintomas" className="bg-paper px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-xl">
          <PrecisionTag label="Onde dói, exatamente?" className="text-slate" />
          <h2 className="mt-4 text-4xl font-display font-extrabold leading-[1.05] text-ink md:text-5xl">
            Sua dor tem nome.
            <br />
            <span className="text-cyan-deep">E tem solução.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate">
            Toque no que mais parece com o que você sente e agende sua
            avaliação diretamente pelo WhatsApp.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {symptoms.map((s, idx) => (
            <Reveal
              key={s.slug}
              direction="up"
              delay={idx * 120}
              className={`group relative aspect-[4/3] overflow-hidden rounded-2xl bg-ink ${
                s.wide ? "sm:col-span-2 lg:col-span-3" : "lg:col-span-2"
              }`}
            >
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 block"
              >
                <Image
                  src={s.img}
                  alt={s.label}
                  fill
                  sizes="(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw"
                  className={`object-cover ${s.pos} transition-transform duration-500 ease-out group-hover:scale-105`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/15 to-transparent transition-opacity group-hover:from-ink/85" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 transition-colors group-hover:ring-cyan/60" />

                <div className="absolute left-4 top-4">
                  <PrecisionTag label={s.tag} dark />
                </div>

                <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-paper opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                  <ArrowIcon />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-lg font-bold text-white md:text-xl">{s.label}</p>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-paper/60">
                    {s.sub}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── SOBRE ─────────────────────────── */

const credentials = [
  "CREFITO — registro ativo",
  "Atende atletas de alta performance",
  "Metodologia própria de avaliação",
];

function Sobre() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-ink px-6 py-24 text-paper md:px-10 md:py-32">
      <SpineLine className="pointer-events-none absolute -left-6 bottom-0 h-[80%] w-10 text-cyan/10" />

      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.05fr_1fr] md:gap-16">
        <Reveal direction="left" duration={900} className="relative">
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl border-l-2 border-cyan">
            <Image
              src="/images/about-fit.png"
              alt="Everton Carlos em seu consultório, ao lado de um modelo anatômico de coluna"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-[58%_50%]"
            />
            <div className="absolute bottom-4 left-4">
              <PrecisionTag label="Metodologia própria" dark />
            </div>
          </div>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-wider text-paper/40">
            Consultório próprio
          </p>
        </Reveal>

        <Reveal direction="right" delay={150} duration={900} className="flex flex-col justify-center">
          <PrecisionTag label="Quem cuida de você" className="text-cyan" />
          <h2 className="mt-4 text-4xl font-display font-extrabold leading-tight md:text-5xl">
            Everton Carlos.
          </h2>
          <p className="mt-1 text-paper/60">Fisioterapeuta · Quiropraxista Desportivo</p>

          <p className="mt-6 max-w-xl leading-relaxed text-paper/80">
            Anos de clínica e de esporte de alto rendimento ensinaram uma coisa:
            dor crônica quase sempre tem uma causa mecânica identificável — e
            raramente a solução é parar de se mover. O trabalho aqui é
            encontrar a origem real do problema antes de qualquer protocolo.
          </p>

          <blockquote className="mt-8 max-w-xl border-l-2 border-cyan pl-5 text-2xl font-display font-extrabold leading-snug text-white md:text-3xl">
            Cirurgia deveria ser o <span className="text-cyan">último recurso</span>.
            Não o primeiro conselho.
          </blockquote>

          <ul className="mt-10 flex flex-col gap-3 border-t border-line-dark pt-6 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-2">
            {credentials.map((c) => (
              <li key={c} className="font-mono text-[11px] uppercase tracking-wide text-paper/55">
                {c}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────────────── PROVA SOCIAL ─────────────────────────── */

const sessionVideos = [
  { src: "/videos/sessao-1.mp4", poster: "/images/sessao-1-poster.png" },
  { src: "/videos/sessao-2.mp4", poster: "/images/sessao-2-poster.png" },
  { src: "/videos/sessao-3.mp4", poster: "/images/sessao-3-poster.png" },
];

function ProvaSocial() {
  return (
    <section id="depoimentos" className="bg-paper px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-xl">
          <PrecisionTag label="Quem já sentiu a diferença" className="text-slate" />
          <h2 className="mt-4 text-4xl font-display font-extrabold leading-[1.05] text-ink md:text-5xl">
            Resultado que se sente.
            <br />
            <span className="text-cyan-deep">Não que se promete.</span>
          </h2>
        </Reveal>

        <Reveal className="mt-10 flex flex-wrap gap-x-12 gap-y-6 border-y border-line py-8">
          <div>
            <p className="font-mono text-4xl font-bold text-ink md:text-5xl">
              10 mil<span className="text-cyan-deep">+</span>
            </p>
            <p className="mt-1 text-sm text-slate">seguidores acompanham o trabalho</p>
          </div>
          <div>
            <p className="font-mono text-4xl font-bold text-ink md:text-5xl">
              500<span className="text-cyan-deep">+</span>
            </p>
            <p className="mt-1 text-sm text-slate">pacientes já atendidos</p>
          </div>
        </Reveal>

        <div className="mt-12">
          <Reveal>
            <PrecisionTag label="Direto do consultório" className="text-slate" />
            <h3 className="mt-4 text-2xl font-display font-extrabold text-ink md:text-3xl">
              Sessões reais, sem cortes.
            </h3>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {sessionVideos.map((v, idx) => (
              <Reveal
                key={v.src}
                direction="up"
                delay={idx * 160}
                className="relative aspect-[9/12.8] overflow-hidden rounded-2xl bg-ink"
              >
                <video
                  src={v.src}
                  poster={v.poster}
                  controls
                  playsInline
                  preload="none"
                  className="h-full w-full object-cover"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── PERGUNTAS FREQUENTES ─────────────────────────── */

const faqItems: FaqItem[] = [
  {
    question: "Como a Quiropraxia pode ajudar na dor?",
    answer:
      "A quiropraxia atua corrigindo disfunções mecânicas e restrições de mobilidade na coluna e nas articulações. Com ajustes precisos, reduzimos a sobrecarga muscular, aliviamos a compressão sobre nervos e restauramos o movimento natural — tratando a causa da dor sem depender de cirurgia.",
  },
  {
    question: "O que são injetáveis na dor?",
    answer:
      "São procedimentos minimamente invasivos e direcionados — como infiltrações articulares, viscossuplementação e terapia neural — que atuam diretamente no foco inflamatório ou articular. Eles aceleram o controle da dor e permitem evoluir com mais segurança na reabilitação funcional.",
  },
  {
    question: "Como funcionam a Liberação Miofascial e a Reabilitação funcional?",
    answer:
      "A liberação miofascial desfaz pontos de tensão e aderências na musculatura e na fáscia, devolvendo flexibilidade imediata. Em seguida, a reabilitação funcional corrige padrões de movimento e fortalece as estruturas envolvidas para prevenir novas lesões.",
  },
  {
    question: "Preciso ter exames prontos antes da primeira avaliação?",
    answer:
      "Não é obrigatório. Na primeira consulta realizamos uma avaliação clínica e de movimento detalhada para identificar a origem do seu quadro. Caso você já tenha ressonância, raio-X ou laudos anteriores, basta trazê-los para complementar a análise.",
  },
];

function PerguntasFrequentes() {
  return (
    <section id="faq" className="border-t border-line bg-paper px-6 py-24 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
        <Reveal direction="left" duration={900} className="max-w-md">
          <PrecisionTag label="Tire suas dúvidas" className="text-slate" />
          <h2 className="mt-4 text-4xl font-display font-extrabold leading-[1.05] text-ink md:text-5xl">
            Perguntas
            <br />
            <span className="text-cyan-deep">frequentes.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate">
            Entenda como funcionam os tratamentos e o que esperar da sua avaliação no consultório.
          </p>
        </Reveal>

        <Reveal direction="right" delay={200} duration={900}>
          <FaqAccordion items={faqItems} />
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────────────── COMO CHEGAR / LOCALIZAÇÃO ─────────────────────────── */

const GOOGLE_MAPS_LINK =
  "https://maps.google.com/?q=Cl%C3%ADnica+de+Fisioterapia+e+Quiropraxia+em+An%C3%A1polis+%E2%80%93+Tratamento+da+Dor+e+Escoliose+%7C+Dr.+Everton+Rocha";

function Localizacao() {
  return (
    <section id="localizacao" className="relative overflow-hidden bg-ink px-6 py-24 text-paper md:px-10 md:py-32">
      {/* Detalhes de luz de fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-cyan/10 blur-3xl"
      />

      <div className="mx-auto max-w-6xl">
        <Reveal direction="down" className="mx-auto max-w-2xl text-center">
          <PrecisionTag label="Onde estamos" className="text-cyan justify-center" />
          <h2 className="mt-4 text-4xl font-display font-extrabold leading-[1.1] text-white md:text-5xl">
            Como chegar à clínica
          </h2>
          <p className="mt-4 text-base leading-relaxed text-paper/75 md:text-lg">
            Estamos em Anápolis, em um ambiente acolhedor e preparado para o seu conforto e reabilitação.
            Toque em &quot;Abrir rota&quot; para navegar diretamente no seu aplicativo de mapas.
          </p>
        </Reveal>

        <Reveal direction="up" delay={200} className="mt-14 overflow-hidden rounded-3xl border border-line-dark bg-white/[0.03] shadow-2xl backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Cartão de informações do local */}
            <div className="flex flex-col justify-between p-8 sm:p-10 lg:col-span-5 lg:p-12">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-3.5 py-1 text-xs font-semibold text-cyan">
                  <span className="h-2 w-2 rounded-full bg-cyan animate-pulse" />
                  Atendimento com hora marcada
                </div>

                <h3 className="mt-6 text-2xl font-display font-extrabold text-white md:text-3xl">
                  Dr. Everton Rocha
                </h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-wider text-cyan">
                  Fisioterapia &amp; Quiropraxia Desportiva
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-3.5 text-paper/85">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-cyan">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">Anápolis — Goiás</p>
                      <p className="text-sm text-paper/65">
                        Clínica de Fisioterapia e Quiropraxia — Tratamento da Dor e Escoliose
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 text-paper/85">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-cyan">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">Horário de funcionamento</p>
                      <p className="text-sm text-paper/65">Segunda a Sexta · Conforme agendamento</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={GOOGLE_MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan px-6 py-3.5 text-sm font-bold text-ink shadow-[0_0_20px_rgba(0,191,244,0.35)] transition-all hover:bg-white hover:shadow-[0_0_25px_rgba(0,191,244,0.6)]"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} className="h-4 w-4">
                    <polygon points="3 11 22 2 13 21 11 13 3 11" />
                  </svg>
                  Como chegar
                </a>

                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-line-dark bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition-all hover:border-cyan/50 hover:bg-white/10"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </div>

            {/* Iframe do Google Maps integrado */}
            <div className="relative min-h-[380px] w-full border-t border-line-dark lg:col-span-7 lg:min-h-[460px] lg:border-l lg:border-t-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254.86278870922146!2d-48.94629956955773!3d-16.334373342586886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ea5a6b7f7ac1d%3A0x4e4836475916956b!2sCl%C3%ADnica%20de%20Fisioterapia%20e%20Quiropraxia%20em%20An%C3%A1polis%20%E2%80%93%20Tratamento%20da%20Dor%20e%20Escoliose%20%7C%20Dr.%20Everton%20Rocha!5e0!3m2!1spt-BR!2sbr!4v1794580213530!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="absolute inset-0 h-full w-full grayscale-[0.15] contrast-[1.08] transition-all duration-300 hover:grayscale-0"
                title="Localização da Clínica de Fisioterapia e Quiropraxia - Dr. Everton Rocha"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────────────── CTA FINAL ─────────────────────────── */

function CtaFinal() {
  return (
    <section className="relative overflow-hidden bg-ink text-paper md:flex md:min-h-[80svh] md:items-center md:px-10">
      {/* Mobile: image above copy */}
      <div className="relative aspect-[4/5] w-full md:hidden">
        <Image
          src="/images/final-cta-mobile.png"
          alt="Estúdio de reabilitação Everton Carlos"
          fill
          sizes="100vw"
          className="object-cover object-top"
        />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-ink to-transparent" />
      </div>

      {/* Desktop / tablet: full-bleed background with copy overlaid */}
      <Image
        src="/images/final-cta-bg.png"
        alt="Estúdio de reabilitação Everton Carlos"
        fill
        sizes="100vw"
        className="hidden object-cover object-[66%_20%] md:block"
      />
      <div className="absolute inset-0 hidden bg-gradient-to-r from-ink from-0% via-ink/45 via-30% to-transparent to-52% md:block" />
      <SpineLine className="pointer-events-none absolute right-10 top-1/2 hidden h-[120%] w-16 -translate-y-1/2 text-cyan/15 lg:block" />

      <Reveal direction="up" duration={900} className="relative z-10 mx-auto w-full max-w-6xl px-6 py-12 md:px-0 md:py-0">
        <PrecisionTag label="Invista em você" className="text-cyan" />
        <h2 className="mt-5 max-w-2xl text-4xl font-display font-extrabold leading-[1.05] md:text-6xl">
          Volte a andar, trabalhar
          <br />e <span className="text-cyan">dormir sem dor.</span>
        </h2>
        <p className="mt-6 max-w-md text-paper/70">
          Agende sua avaliação diretamente pelo WhatsApp e dê o primeiro passo
          para viver sem dor.
        </p>

        <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-cyan px-8 py-4 text-base font-bold text-ink transition-colors hover:bg-white"
          >
            Agendar Avaliação
            <ArrowIcon />
          </a>
        </div>
      </Reveal>
    </section>
  );
}

/* ─────────────────────────── FOOTER ─────────────────────────── */

function Footer() {
  return (
    <footer className="border-t border-line-dark bg-ink px-6 py-10 text-paper md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 md:flex-row md:items-center md:justify-between">
        <Logo dark />
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-wide text-paper/50">
          <a href="#sintomas" className="hover:text-cyan transition-colors">
            Sintomas
          </a>
          <a href="#sobre" className="hover:text-cyan transition-colors">
            Sobre
          </a>
          <a href="#depoimentos" className="hover:text-cyan transition-colors">
            Depoimentos
          </a>
          <a href="#faq" className="hover:text-cyan transition-colors">
            Dúvidas
          </a>
          <a href="#localizacao" className="hover:text-cyan transition-colors">
            Como Chegar
          </a>
          <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="hover:text-cyan transition-colors">
            Agendar Avaliação
          </a>
        </div>
        <p className="font-mono text-[10px] text-paper/35">
          © {new Date().getFullYear()} Everton Carlos
        </p>
      </div>
    </footer>
  );
}

/* ─────────────────────────── UI ATOMS ─────────────────────────── */

function Logo({
  dark = false,
  className = "h-11 sm:h-12 md:h-14",
}: {
  dark?: boolean;
  className?: string;
}) {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src={dark ? "/images/logo-mark-dark.svg" : "/images/logo-mark-light.svg"}
        alt="Everton Carlos — Fisioterapia e Quiropraxia Desportiva"
        width={472}
        height={94}
        className={`${className} w-auto transition-transform hover:scale-[1.02]`}
        priority
      />
    </Link>
  );
}

function PrecisionTag({
  label,
  className = "",
  dark = false,
}: {
  label: string;
  className?: string;
  dark?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] ${
        dark
          ? "rounded-full bg-ink/80 px-2.5 py-1 text-paper backdrop-blur-sm"
          : ""
      } ${className}`}
    >
      <CrosshairIcon className="h-3 w-3 shrink-0" />
      {label}
    </span>
  );
}

function CrosshairIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
      <circle cx="12" cy="12" r="6.5" />
      <path d="M12 1v4M12 19v4M1 12h4M19 12h4" strokeLinecap="round" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} className="h-4 w-4">
      <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SpineLine({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 400" fill="none" preserveAspectRatio="none" className={className}>
      <path
        d="M20 0 C34 40 6 80 20 120 C34 160 6 200 20 240 C34 280 6 320 20 360 C28 380 18 400 20 400"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      {Array.from({ length: 11 }).map((_, i) => (
        <circle key={i} cx={20 + (i % 2 === 0 ? 9 : -9)} cy={10 + i * 38} r="2.5" fill="currentColor" />
      ))}
    </svg>
  );
}
