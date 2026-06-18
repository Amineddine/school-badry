import { SectionLabel } from './ui/SectionLabel';
import { Frame } from './ui/Frame';
import { GALERIE } from '../lib/content';

/** The school in pictures — an offset editorial spread, not a uniform grid. */
export function Galerie() {
  return (
    <section id="galerie" className="relative mx-auto max-w-[1500px] px-5 py-28 md:px-10 md:py-40">
      <div className="reveal flex items-end justify-between">
        <SectionLabel index="05">L’école en images</SectionLabel>
        <span className="hidden text-[13px] text-ink/45 md:block">Casablanca · Nassim Islane</span>
      </div>

      <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-12 md:gap-6">
        <figure className="reveal col-span-2 md:col-span-7">
          <Frame src={GALERIE[0].src} alt={GALERIE[0].alt} className="aspect-[4/3] rounded-[2px]" parallax={50} />
          <figcaption className="mt-3 text-[12px] tracking-wide text-ink/50">{GALERIE[0].caption}</figcaption>
        </figure>

        <figure className="reveal col-span-1 md:col-span-5 md:mt-24">
          <Frame src={GALERIE[1].src} alt={GALERIE[1].alt} className="aspect-[3/4] rounded-[2px]" parallax={70} grade="graded-warm" />
          <figcaption className="mt-3 text-[12px] tracking-wide text-ink/50">{GALERIE[1].caption}</figcaption>
        </figure>

        <figure className="reveal col-span-1 md:col-span-5">
          <Frame src={GALERIE[2].src} alt={GALERIE[2].alt} className="aspect-[3/4] rounded-[2px]" parallax={60} />
          <figcaption className="mt-3 text-[12px] tracking-wide text-ink/50">{GALERIE[2].caption}</figcaption>
        </figure>

        <figure className="reveal col-span-2 md:col-span-7 md:-mt-12">
          <Frame src={GALERIE[3].src} alt={GALERIE[3].alt} className="aspect-[4/3] rounded-[2px]" parallax={50} grade="graded-warm" />
          <figcaption className="mt-3 text-[12px] tracking-wide text-ink/50">{GALERIE[3].caption}</figcaption>
        </figure>
      </div>

      <blockquote className="reveal mx-auto mt-32 max-w-4xl text-center">
        <p className="font-serif text-[clamp(1.8rem,4.5vw,3.6rem)] font-light leading-[1.18] text-ink">
          <span className="text-terracotta">«&#8239;</span>
          Chaque avenir commence
          <span className="italic"> par une base solide.</span>
          <span className="text-terracotta">&#8239;»</span>
        </p>
      </blockquote>
    </section>
  );
}
