import { SectionLabel } from './ui/SectionLabel';
import { PROGRAMME } from '../lib/content';

/**
 * The trilingual promise, presented as three movements rather than a card grid.
 * Each language is a full-width editorial row that opens on hover/scroll.
 */
export function Programme() {
  return (
    <section id="programme" className="relative bg-ink text-bone">
      <div className="mx-auto max-w-[1500px] px-5 py-28 md:px-10 md:py-40">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <SectionLabel index="02" tone="light" className="reveal">
              Le programme
            </SectionLabel>
            <h2 className="reveal mt-8 font-serif text-[clamp(2rem,5vw,4rem)] font-light leading-[1.04] text-bone">
              Trois langues,
              <br />
              <span className="italic text-terracotta-300">une même exigence.</span>
            </h2>
          </div>
          <p className="reveal max-w-sm text-[15px] leading-relaxed text-bone/65 md:col-span-5">
            L’arabe, le français et l’anglais ne sont pas des options ajoutées les
            unes aux autres. Ils se tiennent, du premier jour de maternelle jusqu’au
            Baccalauréat International.
          </p>
        </div>

        <div className="mt-20 border-t border-bone/15">
          {PROGRAMME.map((l) => (
            <div
              key={l.langue}
              className="reveal group grid grid-cols-1 gap-4 border-b border-bone/15 py-9 transition-colors duration-500 hover:bg-bone/[0.04] md:grid-cols-12 md:items-baseline md:gap-8 md:py-11"
            >
              <span className="font-serif text-2xl italic text-bone/35 md:col-span-1">{l.index}</span>
              <div className="md:col-span-3">
                <h3 className="font-serif text-3xl font-light text-bone transition-transform duration-500 ease-cour group-hover:translate-x-2 md:text-4xl">
                  {l.langue}
                </h3>
                <span className="label !text-terracotta-300">{l.rôle}</span>
              </div>
              <p className="max-w-xl text-[15px] leading-relaxed text-bone/70 md:col-span-8">
                {l.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
