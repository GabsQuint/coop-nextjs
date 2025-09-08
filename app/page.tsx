import "./globals.css";
import Newsletter from "../components/Newsletter";

type Social = { name: string; href: string; label: string };
type Member = { name: string; handle: string; role: string; bio: string; };

export default function Page() {
  const socials: Social[] = [
    { name: "YouTube", href: "https://youtube.com/@coop", label: "YouTube" },
    { name: "TikTok", href: "https://tiktok.com/@coop", label: "TikTok" },
    { name: "Twitch", href: "https://twitch.tv/coop", label: "Twitch" },
    { name: "Spotify", href: "https://open.spotify.com/show/coop", label: "Spotify" },
    { name: "Instagram", href: "https://instagram.com/coop", label: "Instagram" },
    { name: "X", href: "https://x.com/coop", label: "X" },
  ];

  const team: Member[] = [
    { name: "Moud", handle: "@Moud", role: "Competitivo FPS", bio: "Sabe bastante de competitivo FPS." },
    { name: "GabsQuint", handle: "@GabsQuint", role: "Luta (FGC)", bio: "Sabe bastante de competitivo de jogos de luta." },
    { name: "H3llheim", handle: "@H3llheim", role: "Indies", bio: "Sabe bastante de jogos indies." },
    { name: "Moud", handle: "@Moud", role: "História & Narrativa", bio: "Sabe bastante de jogos de história." },
  ];

  const topics = [
    "Reviews honestas (PC/Console/Mobile)",
    "Cobertura de eventos e lançamentos",
    "Podcasts semanais com convidados",
    "Tecnologia gamer: hardware, periféricos e setup",
    "Cultura gamer e bastidores de criação de conteúdo",
  ];

  return (
    <div className="min-h-screen coop-bg text-zinc-100 selection:bg-yellow-400/30">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0b0f]/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="group inline-flex items-center gap-3">
            <img src="/coop-logo.png" alt="COOP" className="h-8 w-8 rounded-md" />
            <span className="text-xl font-extrabold tracking-tight">COOP</span>
          </a>
          <nav className="hidden gap-6 md:flex text-sm text-zinc-300">
            <a href="#sobre" className="hover:text-white">Sobre</a>
            <a href="#time" className="hover:text-white">Time</a>
            <a href="#podcast" className="hover:text-white">Podcast</a>
            <a href="#contato" className="hover:text-white">Contato</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="#inscrever" className="rounded-xl border border-white/15 px-3 py-1.5 text-sm font-medium hover:bg-white/5">Assinar novidades</a>
          </div>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden scroll-mt-24 md:scroll-mt-32">
        <Decor />
        <div className="relative mx-auto max-w-7xl px-4 py-24 md:py-28">
          <div className="max-w-3xl reveal">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-300">
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
              Novo projeto — Games & Podcast
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight md:text-6xl">
              Coop mode: <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-400">jogos, conversa e cultura gamer</span>
            </h1>
            <p className="mt-4 text-lg text-zinc-300 md:text-xl">
              Somos 4 criadores apaixonados por games. Reviews sinceras, entrevistas com a comunidade e um podcast direto ao ponto, toda semana.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#podcast" className="rounded-2xl bg-gradient-to-r from-yellow-400 to-blue-500 px-5 py-3 font-semibold text-black shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:opacity-95">Ouvir o Podcast</a>
              <a href="#sobre" className="rounded-2xl border border-white/15 px-5 py-3 font-semibold hover:bg-white/5">Saiba mais</a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-zinc-400">
              {socials.map((s) => (
                <a key={s.name} href={s.href} className="underline-offset-4 hover:underline" target="_blank" rel="noreferrer">
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="mx-auto max-w-7xl px-4 py-20 scroll-mt-24 md:scroll-mt-32">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Sobre o COOP</h2>
            <p className="mt-4 text-zinc-300">
              COOP é um hub de conteúdo gamer. Além de gameplay e reviews, trazemos discussões que importam: acessibilidade, indústria, criação de conteúdo e a vida real por trás das telas. Tudo com bom humor e aquele clima de squad.
            </p>
            <ul className="mt-6 space-y-3 text-zinc-300">
              {topics.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-md bg-yellow-400/10 ring-1 ring-yellow-400/30">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-yellow-400"><path d="M20.285 6.709a1 1 0 0 0-1.414-1.414L9 15.168l-3.871-3.87a1 1 0 1 0-1.415 1.414l4.578 4.579a1 1 0 0 0 1.414 0l10.579-10.572Z"/></svg>
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative glass rounded-3xl p-6 reveal-2">
            <div className="mb-4 flex items-center gap-3">
              <img src="/coop-logo.png" alt="COOP" className="h-10 w-10 rounded-md" />
              <div>
                <p className="text-sm uppercase tracking-widest text-zinc-400">Brand Kit</p>
                <p className="text-lg font-semibold">Cores & Estilo</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <Swatch label="#0b0b0f" className="bg-[#0b0b0f]"/>
              <Swatch label="#FFD54A" className="bg-yellow-400"/>
              <Swatch label="#4AA3FF" className="bg-blue-400"/>
            </div>
            <p className="mt-4 text-sm text-zinc-300">O logotipo está em <span className="font-semibold">/public/coop-logo.png</span>. Ajuste as cores se quiser.</p>
          </div>
        </div>
      </section>

      <section id="time" className="mx-auto max-w-7xl px-4 py-20 scroll-mt-24 md:scroll-mt-32">
        <div className="mb-10">
          <h2 className="text-3xl font-bold md:text-4xl">Nosso squad</h2>
          <p className="mt-2 text-zinc-300">Quatro integrantes, um só objetivo: conversar e jogar no modo cooperativo.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 reveal">
          {team.map((p, idx) => (
            <div key={idx} className="group glass rounded-3xl p-6 transition hover:-translate-y-1">
              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-b from-yellow-400 to-blue-500 font-extrabold text-black shadow-inner">
                  {p.handle}
                </div>
                <div>
                  <p className="font-semibold">{p.name}</p>
                  <p className="text-sm text-zinc-400">{p.role}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-zinc-300">{p.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="podcast" className="mx-auto max-w-7xl px-4 py-20 scroll-mt-24 md:scroll-mt-32">
        <div className="mb-10">
          <h2 className="text-3xl font-bold md:text-4xl">Podcast & Conteúdos</h2>
          <p className="mt-2 text-zinc-300">Em breve: primeiro episódio. Enquanto isso, segue a grade do que vem por aí.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3 reveal">
          {[
            { title: "#001 — Quem somos & setups", tag: "Podcast", desc: "Apresentação do COOP, setups, expectativas e nossas regras do jogo." },
            { title: "Review cooperativo: Lançamento da semana", tag: "Review", desc: "Quatro pontos de vista, uma nota final. Sem fanboyice." },
            { title: "Convidado da comunidade", tag: "Entrevista", desc: "Criadores, devs e gente que soma na cena gamer BR." },
          ].map((ep) => (
            <article key={ep.title} className="glass rounded-3xl p-6">
              <div className="mb-3 inline-flex items-center gap-2 text-xs text-zinc-300">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" /> {ep.tag}
              </div>
              <h3 className="text-lg font-semibold">{ep.title}</h3>
              <p className="mt-2 text-sm text-zinc-300">{ep.desc}</p>
              <div className="mt-4 flex gap-3">
                <a className="rounded-xl border border-white/15 px-3 py-1.5 text-sm hover:bg-white/5" href="#">Ouvir</a>
                <a className="rounded-xl border border-white/15 px-3 py-1.5 text-sm hover:bg-white/5" href="#">Ver no YouTube</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="inscrever" className="mx-auto max-w-7xl px-4 pb-24 scroll-mt-24 md:scroll-mt-32">
        <div className="glass rounded-3xl p-8 md:p-12 reveal">
          <h2 className="text-2xl font-bold md:text-3xl">Receba os episódios e drops primeiro</h2>
          <p className="mt-2 max-w-2xl text-zinc-300">Deixe seu e-mail para ser avisado quando o COOP for ao ar. Nada de spam, só conteúdo top.</p>
          <Newsletter />
        </div>
      </section>

      <footer id="contato" className="border-t border-white/10 bg-black/40">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="flex items-center gap-3">
              <img src="/coop-logo.png" alt="COOP" className="h-7 w-7 rounded-md" />
              <p className="text-sm text-zinc-400">© {new Date().getFullYear()} COOP — Games & Podcast</p>
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-zinc-300">
              <a href="mailto:contato@coop.gg" className="underline-offset-4 hover:underline">contato@coop.gg</a>
              <span className="opacity-40">•</span>
              <a href="#sobre" className="underline-offset-4 hover:underline">Sobre</a>
              <a href="#time" className="underline-offset-4 hover:underline">Time</a>
              <a href="#podcast" className="underline-offset-4 hover:underline">Podcast</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Swatch({ label, className }: { label: string; className?: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
      <div className={"h-8 w-8 rounded-xl " + (className || "")} />
      <span className="text-sm text-zinc-300">{label}</span>
    </div>
  );
}

function Decor() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-0 opacity-[0.25]">
        <div className="h-full w-full bg-[radial-gradient(circle_at_10%_10%,rgba(255,213,74,0.08)_0,transparent_40%),radial-gradient(circle_at_80%_20%,rgba(74,163,255,0.08)_0,transparent_40%),radial-gradient(circle_at_30%_80%,rgba(255,213,74,0.06)_0,transparent_40%),radial-gradient(circle_at_80%_80%,rgba(74,163,255,0.06)_0,transparent_40%)]" />
      </div>
    </div>
  );
}
