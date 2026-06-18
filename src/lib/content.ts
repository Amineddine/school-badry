// Single source of truth for editorial copy.
// French typographic convention is treated as a hard constraint:
//   — guillemets « » for quotation
//   — narrow no-break space (U+202F) before high punctuation and inside guillemets
// Keep that discipline anywhere copy is edited.

export const SCHOOL = {
  name: 'Groupe Scolaire Badry',
  motto: 'Préparer les esprits, transformer les vies',
  tagline: 'École trilingue à Casablanca',
  established: 'depuis plus de vingt ans',
  address: {
    line: '132, Nassim Islane',
    city: 'Casablanca, Maroc',
  },
  phone: '05 22 90 45 95',
  phoneHref: 'tel:+212522904595',
  whatsapp: '+212 784 647 778',
  whatsappHref: 'https://wa.me/212784647778',
  email: 'contact@groupescolairebadry.ma',
  mapEmbed: 'https://www.google.com/maps?q=G88J%2BHX%20Casablanca&output=embed',
  formAction: 'https://formspree.io/f/xzzryzob',
} as const;

export type Niveau = {
  index: string;
  name: string;
  ageRange: string;
  classes: string;
  lede: string;
  body: string;
  detail: string;
  image: string;
  accent: 'sky' | 'terracotta' | 'ink';
};

// The horizontal spine — a walk through the school.
export const NIVEAUX: Niveau[] = [
  {
    index: '01',
    name: 'Maternelle',
    ageRange: '3 – 5 ans',
    classes: 'Petite, Moyenne & Grande Section',
    lede: 'Les premiers pas.',
    body: "L'éveil avant l'apprentissage. On apprend à observer, à dire, à vivre ensemble — dans un cadre où chaque enfant trouve son rythme.",
    detail: 'Langage, motricité, premiers repères en trois langues, et le goût de venir à l’école.',
    image: '/IMG_9414.jpg',
    accent: 'sky',
  },
  {
    index: '02',
    name: 'Primaire',
    ageRange: '6 – 11 ans',
    classes: 'Du CP au CM2',
    lede: 'La base se construit.',
    body: 'Une formation académique solide où les fondamentaux se posent pour de bon. Les mathématiques et les SVT s’enseignent en français comme en anglais.',
    detail: 'Maths & SVT en français et en anglais · lecture, écriture, raisonnement · initiation à l’IA et à la robotique.',
    image: '/IMG_9422.jpg',
    accent: 'terracotta',
  },
  {
    index: '03',
    name: 'Collège',
    ageRange: '12 – 15 ans',
    classes: 'De la 1re à la 3e année',
    lede: 'Vers l’exigence.',
    body: 'L’excellence académique au service d’un objectif clair : préparer chaque élève au lycée et au-delà, par la filière du Baccalauréat International.',
    detail: 'Filière Baccalauréat International · approfondissement trilingue · accompagnement individualisé vers le lycée.',
    image: '/IMG_9417.jpg',
    accent: 'ink',
  },
];

export type Langue = {
  index: string;
  langue: string;
  rôle: string;
  body: string;
};

export const PROGRAMME: Langue[] = [
  {
    index: 'I',
    langue: 'Arabe',
    rôle: 'La racine',
    body: 'Une maîtrise pleine de la langue maternelle et de la culture qui la porte. Le socle de tout le reste.',
  },
  {
    index: 'II',
    langue: 'Français',
    rôle: 'La structure',
    body: 'Un programme français renforcé, conduit par des enseignants exigeants, du premier mot jusqu’au raisonnement.',
  },
  {
    index: 'III',
    langue: 'Anglais',
    rôle: 'L’ouverture',
    body: 'Un enseignement approfondi dès le plus jeune âge — la langue dans laquelle le monde se rencontre.',
  },
];

export type Atout = {
  index: string;
  title: string;
  body: string;
};

export const ATOUTS: Atout[] = [
  {
    index: '01',
    title: 'Un corps enseignant de haut niveau',
    body: 'Des professeurs expérimentés et qualifiés, choisis pour ce qu’ils transmettent autant que pour ce qu’ils savent.',
  },
  {
    index: '02',
    title: 'Un suivi individualisé',
    body: 'Un accompagnement pensé pour chaque élève, parce qu’aucun enfant n’avance exactement comme un autre.',
  },
  {
    index: '03',
    title: 'IA & robotique',
    body: 'Une initiation aux technologies qui dessinent leur avenir — dès le primaire, sans attendre.',
  },
  {
    index: '04',
    title: 'Activités parascolaires',
    body: 'Un large choix d’activités, parce qu’un enfant se construit aussi en dehors de la salle de classe.',
  },
  {
    index: '05',
    title: 'Un cadre bienveillant',
    body: 'Un environnement convivial et stimulant, à taille humaine, où l’on apprend en confiance.',
  },
];

// Options for the inscription form, grouped by cycle.
export const NIVEAUX_FORM: { group: string; options: string[] }[] = [
  { group: 'Maternelle', options: ['Petite Section', 'Moyenne Section', 'Grande Section'] },
  { group: 'Primaire', options: ['CP', 'CE1', 'CE2', 'CM1', 'CM2'] },
  { group: 'Collège', options: ['1re année (1AC)', '2e année (2AC)', '3e année (3AC)'] },
];

// Gallery — real photographs of the school, one consistent grade applied in CSS.
export const GALERIE: { src: string; alt: string; caption: string }[] = [
  { src: '/IMG_9585.jpg', alt: 'Le préau couvert et son sol en damier', caption: 'Le préau' },
  { src: '/IMG_9588.jpg', alt: 'Le jardin et l’aire de jeux sous les palmiers', caption: 'Le jardin' },
  { src: '/IMG_9423.jpg', alt: 'Les élèves en activité dans la cour', caption: 'La cour' },
  { src: '/IMG_9589.jpg', alt: 'La façade de l’école', caption: 'La façade' },
];
