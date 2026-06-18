import { SectionLabel } from './ui/SectionLabel';
import { Frame } from './ui/Frame';

const STATS = [
  { value: '20+', label: 'années d’expérience' },
  { value: '3', label: 'langues enseignées' },
  { value: '3', label: 'cycles, de 3 à 15 ans' },
  { value: 'BI', label: 'Baccalauréat International' },
];

/** Quiet manifesto — sets the institution's posture before anything is sold. */
export function Intro() {
  return (
    <section id="ecole" className="relative mx-auto max-w-[1500px] px-5 py-28 md:px-10 md:py-40">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <SectionLabel index="01" className="reveal">
            L’école
          </SectionLabel>
          <div className="reveal mt-10 hidden md:block">
            <Frame
              src="/IMG_9589.jpg"
              alt="La façade de l’école, ponctuée de couleurs"
              className="aspect-[3/4] rounded-[2px]"
              parallax={80}
            />
          </div>
        </div>

        <div className="md:col-span-8 md:pl-8">
          <p className="font-serif text-[clamp(1.5rem,3.4vw,2.7rem)] font-light leading-[1.28] tracking-[-0.01em] text-ink">
            <span className="reveal inline">Depuis plus de vingt ans, le Groupe Scolaire Badry accompagne les enfants de Casablanca, </span>
            <span className="reveal inline text-ink/45">de leurs premiers mots à la maternelle </span>
            <span className="reveal inline">jusqu’aux exigences du collège. </span>
            <span className="reveal inline italic text-terracotta">Une conviction tient le tout</span>
            <span className="reveal inline">&#8239;: une base solide, posée tôt et tenue dans le temps, change ce qu’un enfant peut devenir.</span>
          </p>

          <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-[2px] border hairline md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="reveal bg-bone-100 p-6">
                <div className="font-serif text-4xl font-light text-ink md:text-5xl">{s.value}</div>
                <div className="mt-2 text-[12px] leading-snug text-ink/55">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
