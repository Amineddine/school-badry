import { SectionLabel } from './ui/SectionLabel';
import { SCHOOL } from '../lib/content';

/** Where the school is — address paired with the map as a framed object. */
export function Lieu() {
  return (
    <section id="lieu" className="mx-auto max-w-[1500px] px-5 py-28 md:px-10 md:py-40">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end">
        <div className="md:col-span-5">
          <SectionLabel index="07" className="reveal">
            Le lieu
          </SectionLabel>
          <h2 className="reveal mt-8 font-serif text-[clamp(2rem,4.5vw,3.5rem)] font-light leading-[1.06] text-ink">
            Venez nous
            <br />
            <span className="italic text-terracotta">rendre visite.</span>
          </h2>
          <address className="reveal mt-8 not-italic text-[16px] leading-relaxed text-ink/75">
            {SCHOOL.address.line}
            <br />
            {SCHOOL.address.city}
          </address>
          <a
            href="https://www.google.com/maps?q=G88J%2BHX+Casablanca"
            target="_blank"
            rel="noopener noreferrer"
            className="reveal group mt-6 inline-flex items-center gap-2 text-[14px] font-medium text-ink/80"
          >
            Ouvrir dans Google Maps
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>

        <div className="md:col-span-7">
          <div className="reveal aspect-[16/10] w-full overflow-hidden rounded-[2px] border hairline">
            <iframe
              title="Groupe Scolaire Badry — plan d’accès"
              src={SCHOOL.mapEmbed}
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[0.3] contrast-[1.05]"
              style={{ border: 0 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
