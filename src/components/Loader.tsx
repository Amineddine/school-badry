import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { SCHOOL } from '../lib/content';

/**
 * Opening: the wordmark settles, a hairline draws across like light crossing
 * a courtyard, then the panel lifts to reveal the page. Calls onDone so the
 * hero can begin only once the curtain is gone.
 */
export function Loader({ onDone }: { onDone: () => void }) {
  const root = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setHidden(true);
      onDone();
      return;
    }
    document.documentElement.style.overflow = 'hidden';

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          document.documentElement.style.overflow = '';
          setHidden(true);
          onDone();
        },
      });
      tl.set('.loader-word span', { yPercent: 110 })
        .to('.loader-word span', {
          yPercent: 0,
          duration: 1.1,
          ease: 'power4.out',
          stagger: 0.04,
        })
        .fromTo(
          '.loader-rule',
          { scaleX: 0 },
          { scaleX: 1, duration: 1.1, ease: 'power2.inOut' },
          '-=0.7'
        )
        .to('.loader-content', { opacity: 0, duration: 0.5, ease: 'power1.out' }, '+=0.25')
        .to(root.current, {
          yPercent: -100,
          duration: 1.1,
          ease: 'expo.inOut',
        }, '-=0.1');
    }, root);

    return () => {
      ctx.revert();
      document.documentElement.style.overflow = '';
    };
  }, [onDone]);

  if (hidden) return null;

  const word = SCHOOL.name.split(' ');

  return (
    <div
      ref={root}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
      aria-hidden
    >
      <div className="loader-content px-6 text-center">
        <div className="loader-word overflow-hidden">
          {word.map((w, i) => (
            <span key={i} className="inline-block text-bone/95 font-serif text-[8vw] leading-[1.05] font-light mr-[0.25em] last:mr-0 md:text-[clamp(2rem,4vw,3.4rem)]">
              {w}
            </span>
          ))}
        </div>
        <div className="mt-6 h-px w-40 origin-left bg-terracotta/80 mx-auto loader-rule" />
      </div>
    </div>
  );
}
