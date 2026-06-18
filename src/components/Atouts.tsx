import { SectionLabel } from './ui/SectionLabel';
import { ATOUTS } from '../lib/content';

/** Why parents choose Badry — a measured list, not a wall of icon cards. */
export function Atouts() {
  return (
    <section id="atouts" className="mx-auto max-w-[1500px] px-5 py-28 md:px-10 md:py-40">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
        {/* sticky intro */}
        <div className="md:col-span-4">
          <div className="md:sticky md:top-28">
            <SectionLabel index="04" className="reveal">
              Nos atouts
            </SectionLabel>
            <h2 className="reveal mt-8 font-serif text-[clamp(2rem,4.5vw,3.5rem)] font-light leading-[1.06] text-ink">
              Ce qui fait
              <br />
              <span className="italic text-terracotta">la différence.</span>
            </h2>
            <p className="reveal mt-6 max-w-xs text-[15px] leading-relaxed text-ink/65">
              Cinq engagements tenus chaque jour, de la première récréation au dernier
              cours de l’année.
            </p>
          </div>
        </div>

        {/* list */}
        <div className="md:col-span-8 md:pl-8">
          <ul className="border-t hairline">
            {ATOUTS.map((a) => (
              <li
                key={a.index}
                className="reveal group grid grid-cols-12 gap-4 border-b hairline py-8 md:gap-8 md:py-10"
              >
                <span className="col-span-2 font-serif text-2xl italic text-terracotta/70 md:col-span-1">
                  {a.index}
                </span>
                <h3 className="col-span-10 font-serif text-2xl font-light leading-tight text-ink transition-transform duration-500 ease-cour group-hover:translate-x-2 md:col-span-5 md:text-3xl">
                  {a.title}
                </h3>
                <p className="col-span-12 max-w-md text-[15px] leading-relaxed text-ink/65 md:col-span-6">
                  {a.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
