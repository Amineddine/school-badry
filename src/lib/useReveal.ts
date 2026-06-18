import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Reveals descendants on scroll. Elements opt in with class `.reveal`
 * (whole-element rise) or `.reveal-line > span` (masked line slide-up).
 * Motion is slow and light-like — the « La Cour » signature.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(deps: unknown[] = []) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      // The hero choreographs its own intro; don't double-bind its lines.
      const notHero = (el: HTMLElement) => !el.closest('#top');

      const blocks = gsap.utils.toArray<HTMLElement>('.reveal').filter(notHero);
      blocks.forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%' },
        });
      });

      const lines = gsap.utils.toArray<HTMLElement>('.reveal-line').filter(notHero);
      lines.forEach((line, i) => {
        const span = line.querySelector('span');
        if (!span) return;
        gsap.to(span, {
          yPercent: 0,
          duration: 1.1,
          ease: 'power4.out',
          delay: (i % 4) * 0.06,
          scrollTrigger: { trigger: line, start: 'top 92%' },
        });
      });
    }, root);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return ref;
}
