type SectionLabelProps = {
  index: string;
  children: React.ReactNode;
  tone?: 'dark' | 'light'; // dark = on bone, light = on ink
  className?: string;
};

/** Editorial section marker — « 01 — Le lieu ». */
export function SectionLabel({ index, children, tone = 'dark', className = '' }: SectionLabelProps) {
  // full literal classes so Tailwind's JIT can see them
  const muted = tone === 'dark' ? '!text-ink/55' : '!text-bone/45';
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="label tabular-nums">{index}</span>
      <span className="h-px w-8 bg-terracotta/60" aria-hidden />
      <span className={`label ${muted}`}>{children}</span>
    </div>
  );
}
