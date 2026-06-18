import { SCHOOL } from '../lib/content';

const NAV = [
  { href: '#programme', label: 'Le programme' },
  { href: '#niveaux', label: 'Les niveaux' },
  { href: '#atouts', label: 'Nos atouts' },
  { href: '#galerie', label: 'L’école' },
  { href: '#inscription', label: 'Inscriptions' },
];

export function Footer() {
  return (
    <footer className="border-t border-bone/15 bg-ink text-bone">
      <div className="mx-auto max-w-[1500px] px-5 py-16 md:px-10 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <img src="/mark.png" alt="" className="h-12 w-12 rounded-full bg-white object-contain p-1 ring-1 ring-bone/20" />
              <span className="font-serif text-xl">
                Groupe Scolaire <span className="italic">Badry</span>
              </span>
            </div>
            <p className="mt-6 max-w-xs font-serif text-2xl font-light leading-snug text-bone/80">
              «&#8239;Préparer les esprits,
              <span className="italic text-terracotta-300"> transformer les vies.</span>&#8239;»
            </p>
          </div>

          <nav className="md:col-span-3">
            <h3 className="label !text-bone/40">Naviguer</h3>
            <ul className="mt-5 space-y-3">
              {NAV.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-[15px] text-bone/70 transition-colors hover:text-bone">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <h3 className="label !text-bone/40">Nous joindre</h3>
            <ul className="mt-5 space-y-3 text-[15px] text-bone/70">
              <li>{SCHOOL.address.line}, {SCHOOL.address.city}</li>
              <li>
                <a href={SCHOOL.phoneHref} className="transition-colors hover:text-bone">Tél · {SCHOOL.phone}</a>
              </li>
              <li>
                <a href={SCHOOL.whatsappHref} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-bone">
                  WhatsApp · {SCHOOL.whatsapp}
                </a>
              </li>
              <li>
                <a href={`mailto:${SCHOOL.email}`} className="transition-colors hover:text-bone">{SCHOOL.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-bone/15 pt-8 text-[12px] text-bone/45 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Groupe Scolaire Badry. Tous droits réservés.</p>
          <p>Casablanca, Maroc</p>
        </div>
      </div>
    </footer>
  );
}
