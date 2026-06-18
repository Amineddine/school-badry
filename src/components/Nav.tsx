import { useEffect, useState } from 'react';
import { SCHOOL } from '../lib/content';

const LINKS = [
  { href: '#programme', label: 'Le programme' },
  { href: '#niveaux', label: 'Les niveaux' },
  { href: '#atouts', label: 'Nos atouts' },
  { href: '#galerie', label: 'L’école' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';
    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-cour ${
        scrolled ? 'bg-bone/85 backdrop-blur-md border-b hairline' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-4 md:px-10">
        <a href="#top" className="group flex items-center gap-3">
          <img
            src="/mark.png"
            alt="Emblème du Groupe Scolaire Badry"
            className="h-10 w-10 rounded-full bg-white object-contain p-1 ring-1 ring-ink/10"
          />
          <span className="font-serif text-[15px] leading-tight text-ink">
            Groupe Scolaire <span className="italic">Badry</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-[13px] font-medium tracking-wide text-ink/70 transition-colors hover:text-ink"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-terracotta transition-all duration-300 ease-cour group-hover:w-full" />
            </a>
          ))}
          <a
            href="#inscription"
            className="rounded-full bg-ink px-5 py-2 text-[13px] font-medium text-bone transition-colors hover:bg-terracotta"
          >
            Inscriptions
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          <span className={`h-px w-6 bg-ink transition-all duration-300 ${open ? 'translate-y-[3px] rotate-45' : ''}`} />
          <span className={`h-px w-6 bg-ink transition-all duration-300 ${open ? '-translate-y-[3px] -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-center bg-bone px-8 transition-all duration-500 ease-cour md:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <nav className="flex flex-col gap-2">
          {LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b hairline py-4 font-serif text-3xl text-ink"
            >
              <span className="label mr-3 align-middle">{String(i + 1).padStart(2, '0')}</span>
              {l.label}
            </a>
          ))}
          <a
            href="#inscription"
            onClick={() => setOpen(false)}
            className="mt-8 rounded-full bg-ink px-6 py-4 text-center text-bone"
          >
            Demander une inscription
          </a>
          <a href={SCHOOL.phoneHref} className="mt-4 text-center text-ink/60">
            {SCHOOL.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
