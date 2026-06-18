import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { NIVEAUX, type Niveau } from '../lib/content';
import { SectionLabel } from './ui/SectionLabel';

gsap.registerPlugin(ScrollTrigger);

const ACCENT: Record<Niveau['accent'], { text: string; bg: string; rule: string; border: string }> = {
  sky: { text: 'text-sky', bg: 'bg-sky', rule: 'bg-sky', border: 'border-sky' },
  terracotta: { text: 'text-terracotta', bg: 'bg-terracotta', rule: 'bg-terracotta', border: 'border-terracotta' },
  ink: { text: 'text-ink', bg: 'bg-ink', rule: 'bg-ink', border: 'border-ink' },
};

export function Niveaux() {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const sec = section.current;
    const trk = track.current;
    if (!sec || !trk) return;

    const mm = gsap.matchMedia();

    // Desktop: pin and walk sideways through the rooms. Travel is 1:1 with
    // scroll distance, so there is no dead scrolling before or after the last room.
    mm.add('(min-width: 768px)', () => {
      const panels = gsap.utils.toArray<HTMLElement>('.niveau-panel');
      const distance = () => Math.max(0, trk.scrollWidth - window.innerWidth);

      const tween = gsap.to(trk, {
        x: () => -distance(),
        ease: 'none',
        scrollTrigger: {
          trigger: sec,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: () => '+=' + distance(),
          invalidateOnRefresh: true,
          onUpdate: (self) => setActive(Math.round(self.progress * (panels.length - 1))),
        },
      });

      // Maternelle is already composed when you arrive; later rooms animate in
      // as they slide into view — guiding the eye forward, never popping.
      panels.forEach((panel, i) => {
        if (i === 0) return;
        gsap.from(panel.querySelectorAll('.panel-anim'), {
          y: 34,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.08,
          scrollTrigger: { trigger: panel, containerAnimation: tween, start: 'left 82%' },
        });
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="niveaux" ref={section} className="relative bg-bone-100">
      {/* Heading + room progress, fixed over the pinned track */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 hidden md:block">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-10 pt-24">
          <SectionLabel index="03">Les niveaux</SectionLabel>
          <div className="flex items-center gap-5">
            {NIVEAUX.map((n, i) => (
              <span
                key={n.name}
                className="flex items-center gap-2 text-[12px] font-medium tracking-wide transition-colors duration-500"
                style={{ color: active === i ? 'var(--ink)' : 'rgba(22,35,63,0.28)' }}
              >
                <span className="tabular-nums">{n.index}</span>
                {n.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop horizontal track */}
      <div className="hidden md:block">
        <div ref={track} className="flex h-screen w-max will-change-transform">
          {NIVEAUX.map((n) => (
            <Panel key={n.name} n={n} />
          ))}
        </div>
      </div>

      {/* Mobile: full-height editorial panels */}
      <div className="md:hidden">
        <div className="px-5 pb-2 pt-24">
          <SectionLabel index="03">Les niveaux</SectionLabel>
        </div>
        {NIVEAUX.map((n) => (
          <PanelMobile key={n.name} n={n} />
        ))}
      </div>
    </section>
  );
}

function Panel({ n }: { n: Niveau }) {
  const a = ACCENT[n.accent];
  return (
    <article className="niveau-panel relative flex h-screen w-screen flex-shrink-0 items-center">
      <div className="mx-auto grid w-full max-w-[1500px] grid-cols-12 items-center gap-10 px-10">
        <div className="col-span-6 pr-8">
          <span className={`panel-anim block font-serif text-[clamp(4rem,10vw,9rem)] font-light leading-none ${a.text} opacity-90`}>
            {n.index}
          </span>
          <h3 className="panel-anim mt-2 font-serif text-[clamp(2.4rem,5vw,4.5rem)] font-light leading-[1] text-ink">
            {n.name}
          </h3>
          <div className="panel-anim mt-4 flex items-center gap-4 text-[13px] font-medium tracking-wide text-ink/55">
            <span>{n.ageRange}</span>
            <span className={`h-px w-6 ${a.rule}`} />
            <span>{n.classes}</span>
          </div>
          <p className={`panel-anim mt-8 font-serif text-2xl font-light italic leading-snug ${a.text}`}>{n.lede}</p>
          <p className="panel-anim mt-4 max-w-md text-[15px] leading-relaxed text-ink/70">{n.body}</p>
          <p className={`panel-anim mt-6 max-w-md border-l-2 pl-4 text-[13px] leading-relaxed text-ink/55 ${a.border}`}>
            {n.detail}
          </p>
        </div>

        <div className="col-span-6">
          <figure className="panel-anim relative aspect-[4/5] w-full overflow-hidden rounded-[2px]">
            <img src={n.image} alt={`Élèves — ${n.name}`} className="h-full w-full object-cover graded" loading="lazy" />
            <span className={`absolute left-0 top-0 h-1 w-24 ${a.bg}`} />
          </figure>
        </div>
      </div>
    </article>
  );
}

function PanelMobile({ n }: { n: Niveau }) {
  const a = ACCENT[n.accent];
  return (
    <article className="reveal flex min-h-[88svh] flex-col justify-center border-t hairline px-5 py-14">
      <div className="flex items-end gap-4">
        <span className={`font-serif text-7xl font-light leading-[0.85] ${a.text}`}>{n.index}</span>
        <h3 className="mb-1 font-serif text-4xl font-light text-ink">{n.name}</h3>
      </div>
      <div className="mt-4 flex items-center gap-3 text-[12px] font-medium text-ink/55">
        <span>{n.ageRange}</span>
        <span className={`h-px w-5 ${a.rule}`} />
        <span>{n.classes}</span>
      </div>
      <figure className="relative mt-7 aspect-[4/5] w-full overflow-hidden rounded-[2px]">
        <img src={n.image} alt={`Élèves — ${n.name}`} className="h-full w-full object-cover graded" loading="lazy" />
        <span className={`absolute left-0 top-0 h-1 w-20 ${a.bg}`} />
      </figure>
      <p className={`mt-7 font-serif text-2xl font-light italic ${a.text}`}>{n.lede}</p>
      <p className="mt-3 text-[15px] leading-relaxed text-ink/70">{n.body}</p>
      <p className={`mt-5 border-l-2 pl-4 text-[13px] leading-relaxed text-ink/55 ${a.border}`}>
        {n.detail}
      </p>
    </article>
  );
}
