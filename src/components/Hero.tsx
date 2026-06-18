import { SCHOOL } from '../lib/content';

const LINES = [
  { text: 'Préparer', italic: false },
  { text: 'les esprits,', italic: false },
  { text: 'transformer', italic: true },
  { text: 'les vies.', italic: true },
];

/**
 * Hero — a statement set in type, with the courtyard seen through a tall
 * aperture. The entrance is pure CSS, gated by `ready` (the loader lifting):
 * once `.hero-ready` lands, the masked lines, meta and aperture animate in and
 * always finish — no runtime timeline to strand them.
 */
export function Hero({ ready }: { ready: boolean }) {
  return (
    <section
      id="top"
      className={`relative min-h-[100svh] overflow-hidden ${ready ? 'hero-ready' : ''}`}
    >
      {/* drifting light wash */}
      <div
        className="hero-light pointer-events-none absolute -inset-x-40 -top-1/3 h-[120vh] opacity-60"
        style={{
          background:
            'radial-gradient(60% 50% at 30% 20%, rgba(91,138,166,0.18), transparent 70%), radial-gradient(50% 40% at 80% 30%, rgba(192,101,74,0.10), transparent 70%)',
        }}
        aria-hidden
      />

      <div className="relative mx-auto grid min-h-[100svh] max-w-[1500px] grid-cols-1 items-center gap-10 px-5 pt-28 pb-20 md:grid-cols-12 md:gap-8 md:px-10 md:pt-0 md:pb-0">
        {/* Type column */}
        <div className="md:col-span-7 md:pr-6">
          <div className="hero-meta" style={{ animationDelay: '0.9s' }}>
            <div className="label flex items-center gap-3">
              <span>Casablanca</span>
              <span className="h-px w-6 bg-terracotta/60" />
              <span className="!text-ink/55">{SCHOOL.established}</span>
            </div>
          </div>

          <h1 className="mt-5 font-serif text-[clamp(2.9rem,7.6vw,6.4rem)] font-light leading-[0.96] tracking-[-0.02em] text-ink">
            {LINES.map((l, i) => (
              <span key={i} className={`block overflow-hidden ${l.italic ? 'italic text-terracotta' : ''}`}>
                <span className="hero-line" style={{ animationDelay: `${0.15 + i * 0.09}s` }}>
                  {l.text}
                </span>
              </span>
            ))}
          </h1>

          <div className="hero-meta mt-8 flex max-w-xl items-start gap-6" style={{ animationDelay: '1.05s' }}>
            <span className="mt-3 hidden h-px w-12 flex-shrink-0 bg-ink/25 sm:block" />
            <p className="text-[15px] leading-relaxed text-ink/70">
              Une école trilingue à Casablanca — arabe, français, anglais — de la
              maternelle au collège, jusqu’au Baccalauréat International.
            </p>
          </div>

          <div className="hero-meta mt-9 flex flex-wrap items-center gap-4" style={{ animationDelay: '1.2s' }}>
            <a
              href="#inscription"
              className="rounded-full bg-ink px-7 py-3 text-[14px] font-medium text-bone transition-colors hover:bg-terracotta"
            >
              Inscriptions 2025 – 2026
            </a>
            <a href="#niveaux" className="group flex items-center gap-2 text-[14px] font-medium text-ink/80">
              Découvrir l’école
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>

        {/* Aperture column */}
        <div className="md:col-span-5">
          <figure className="hero-aperture relative aspect-[4/5] w-full overflow-hidden rounded-[2px] md:aspect-[3/4]">
            <img
              src="/IMG_9585.jpg"
              alt="Le préau de l’école et son sol en damier, ouvert sur le jardin"
              className="h-full w-full object-cover graded"
              fetchPriority="high"
            />
            <figcaption className="absolute bottom-4 left-4 rounded-full bg-bone/90 px-3 py-1 text-[11px] font-medium tracking-wide text-ink/70 backdrop-blur">
              Le préau · Groupe Scolaire Badry
            </figcaption>
          </figure>
        </div>
      </div>

      {/* scroll cue */}
      <div className="hero-cue absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block">
        <div className="flex flex-col items-center gap-2 text-ink/50">
          <span className="text-[10px] uppercase tracking-[0.25em]">Défiler</span>
          <span className="h-10 w-px animate-pulse bg-ink/30" />
        </div>
      </div>
    </section>
  );
}
