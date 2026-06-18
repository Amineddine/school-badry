import { SectionLabel } from './ui/SectionLabel';
import { SCHOOL, NIVEAUX_FORM } from '../lib/content';

const fieldBase =
  'peer w-full border-b border-bone/25 bg-transparent py-3 text-bone placeholder-transparent outline-none transition-colors focus:border-terracotta-300';
const labelBase = 'mb-1 block text-[12px] font-medium uppercase tracking-[0.16em] text-bone/55';

/** Inscription — the conversion moment, kept calm and legible. Posts to Formspree. */
export function Inscription() {
  return (
    <section id="inscription" className="relative bg-ink text-bone">
      <div className="mx-auto max-w-[1500px] px-5 py-28 md:px-10 md:py-40">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          {/* invitation */}
          <div className="md:col-span-5">
            <SectionLabel index="06" tone="light" className="reveal">
              Inscriptions
            </SectionLabel>
            <h2 className="reveal mt-8 font-serif text-[clamp(2.2rem,5vw,4rem)] font-light leading-[1.04]">
              Donnez à votre enfant
              <br />
              <span className="italic text-terracotta-300">une longueur d’avance.</span>
            </h2>
            <p className="reveal mt-7 max-w-sm text-[15px] leading-relaxed text-bone/65">
              Les inscriptions pour l’année 2025 – 2026 sont ouvertes. Laissez-nous
              vos coordonnées&#8239;: nous vous recontactons pour organiser une visite.
            </p>

            <div className="reveal mt-12 space-y-4 border-t border-bone/15 pt-8 text-[14px]">
              <a href={SCHOOL.phoneHref} className="flex items-center justify-between text-bone/80 transition-colors hover:text-bone">
                <span className="text-bone/45">Téléphone</span>
                <span>{SCHOOL.phone}</span>
              </a>
              <a href={SCHOOL.whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-bone/80 transition-colors hover:text-bone">
                <span className="text-bone/45">WhatsApp</span>
                <span>{SCHOOL.whatsapp}</span>
              </a>
              <a href={`mailto:${SCHOOL.email}`} className="flex items-center justify-between text-bone/80 transition-colors hover:text-bone">
                <span className="text-bone/45">Courriel</span>
                <span>{SCHOOL.email}</span>
              </a>
            </div>
          </div>

          {/* form */}
          <div className="md:col-span-6 md:col-start-7">
            <form action={SCHOOL.formAction} method="POST" className="reveal grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="group relative">
                <label htmlFor="prenom" className={labelBase}>Prénom de l’élève</label>
                <input id="prenom" name="prenom" type="text" required placeholder="Prénom" className={fieldBase} />
              </div>
              <div className="group relative">
                <label htmlFor="nom" className={labelBase}>Nom de l’élève</label>
                <input id="nom" name="nom" type="text" required placeholder="Nom" className={fieldBase} />
              </div>

              <div className="group relative">
                <label htmlFor="telephone" className={labelBase}>Téléphone du parent</label>
                <input id="telephone" name="telephone" type="tel" required placeholder="06 00 00 00 00" className={fieldBase} />
              </div>
              <div className="group relative">
                <label htmlFor="nombre_enfants" className={labelBase}>Nombre d’enfants</label>
                <input id="nombre_enfants" name="nombre_enfants" type="number" min={1} defaultValue={1} required className={fieldBase} />
              </div>

              <div className="group relative sm:col-span-2">
                <label htmlFor="niveau" className={labelBase}>Niveau souhaité</label>
                <select id="niveau" name="niveau" required defaultValue="" className={`${fieldBase} appearance-none`}>
                  <option value="" disabled className="text-ink">— Choisissez un niveau —</option>
                  {NIVEAUX_FORM.map((g) => (
                    <optgroup key={g.group} label={g.group} className="text-ink">
                      {g.options.map((o) => (
                        <option key={o} value={o} className="text-ink">{o}</option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </div>

              <div className="group relative sm:col-span-2">
                <label htmlFor="info" className={labelBase}>Informations complémentaires</label>
                <textarea id="info" name="info" rows={3} placeholder="Facultatif" className={`${fieldBase} resize-none`} />
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 rounded-full bg-bone px-8 py-4 text-[14px] font-medium text-ink transition-colors hover:bg-terracotta hover:text-bone"
                >
                  Envoyer la demande
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
