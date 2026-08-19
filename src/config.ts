// Configuration centrale du site — à personnaliser
// Toutes les valeurs à modifier sont marquées TODO

export const site = {
  // Identité
  name: 'Isaac Hernandez Aguirre', // TODO: ton nom
  role: {
    fr: 'Chercheur · Philosophie des sciences',
    en: 'Researcher · Philosophy of Science',
    es: 'Investigador · Filosofía de la ciencia',
  },
  // Phrase-manifeste affichée en h1 sur la page d'accueil
  tagline: {
    fr: 'Penser la technique depuis le vivant.',
    en: 'Thinking technology from the living.',
    es: 'Pensar la técnica desde lo vivo.',
  },
  // Sous-titre / lede
  lede: {
    fr: 'Enquêtes à la frontière de la philosophie de la biologie, de l\'anthropologie et des mondes techniques contemporains.',
    en: 'Inquiries at the intersection of philosophy of biology, anthropology, and contemporary technical worlds.',
    es: 'Investigaciones en la frontera de la filosofía de la biología, la antropología y los mundos técnicos contemporáneos.',
  },
  // Notice courte pour la page d'accueil
  notice: {
    fr: 'Je travaille sur la manière dont la biologie et la technique se pensent mutuellement — comment nos concepts du vivant façonnent nos machines, et comment nos machines refont, en retour, notre idée de la nature. Rattaché à [institution], je poursuis ces questions à travers des articles, des séminaires et une pratique de terrain.',
    en: 'I work on how biology and technology think each other — how our concepts of the living shape our machines, and how machines in turn remake our idea of nature. Affiliated with [institution], I pursue these questions through articles, seminars, and fieldwork.',
    es: 'Trabajo sobre la manera en que la biología y la técnica se piensan mutuamente — cómo nuestros conceptos de lo vivo dan forma a nuestras máquinas, y cómo las máquinas rehacen, a su vez, nuestra idea de la naturaleza. Vinculado a [institución], investigo estas cuestiones a través de artículos, seminarios y trabajo de campo.',
  },
  // Axes de recherche
  themes: {
    fr: [
      'Philosophie de la biologie',
      'Philosophie de la technique',
      'Anthropologie du vivant',
      'Sociologie des sciences',
    ],
    en: [
      'Philosophy of biology',
      'Philosophy of technology',
      'Anthropology of the living',
      'Sociology of science',
    ],
    es: [
      'Filosofía de la biología',
      'Filosofía de la técnica',
      'Antropología de lo vivo',
      'Sociología de la ciencia',
    ],
  },
  // Contact
  contact: {
    email: 'hernandez.isaac@gmail.com', 
    orcid: '', // TODO ex: 0000-0000-0000-0000
    scholar: '', // TODO URL Google Scholar
    academia: '', // TODO URL Academia.edu
    mastodon: '', // TODO ex: @toi@scholar.social
    bluesky: '', // TODO ex: @toi.bsky.social
    linkedin: '', // TODO
  },
} as const;
