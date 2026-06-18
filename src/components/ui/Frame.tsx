import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type FrameProps = {
  src: string;
  alt: string;
  className?: string;
  /** vertical drift in px across the scroll range */
  parallax?: number;
  grade?: 'graded' | 'graded-warm';
  priority?: boolean;
};

/**
 * A photograph treated as an aperture: the image lives slightly larger than
 * its frame and drifts on scroll, so the picture reads as something seen
 * *through* an opening — the architectural conceit of « La Cour ».
 */
export function Frame({
  src,
  alt,
  className = '',
  parallax = 60,
  grade = 'graded',
  priority = false,
}: FrameProps) {
  const wrap = useRef<HTMLDivElement>(null);
  const img = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const w = wrap.current;
    const i = img.current;
    if (!w || !i) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        i,
        { yPercent: -parallax / 10 },
        {
          yPercent: parallax / 10,
          ease: 'none',
          scrollTrigger: { trigger: w, start: 'top bottom', end: 'bottom top', scrub: true },
        }
      );
    }, w);
    return () => ctx.revert();
  }, [parallax]);

  return (
    <div ref={wrap} className={`relative overflow-hidden ${className}`}>
      <img
        ref={img}
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className={`h-[112%] w-full object-cover ${grade}`}
      />
    </div>
  );
}
