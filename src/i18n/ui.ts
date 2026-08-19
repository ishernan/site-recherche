// Dictionnaire de traductions pour l'interface (nav, labels, footer)
// Le contenu des articles est traduit dans les fichiers .md eux-mêmes.

export const languages = {
  fr: 'FR',
  en: 'EN',
  es: 'ES',
} as const;

export const defaultLang = 'fr';

export const ui = {
  fr: {
    'nav.bio': 'Bio',
    'nav.research': 'Recherche',
    'nav.writings': 'Écrits',
    'nav.notes': 'Notes',
    'nav.contact': 'Contact',
    'home.role': 'Chercheur · Philosophie des sciences',
    'home.recent': 'Écrits récents',
    'home.themes': 'Axes',
    'home.notice': 'Notice',
    'section.all_articles': 'Voir tous les articles',
    'contact.email': 'Courriel',
    'contact.orcid': 'ORCID',
    'contact.scholar': 'Google Scholar',
    'contact.form_intro': 'Pour toute question, invitation ou proposition de collaboration :',
    'contact.name': 'Nom',
    'contact.subject': 'Objet',
    'contact.message': 'Message',
    'contact.send': 'Envoyer',
    'footer.updated': 'Dernière mise à jour',
    'footer.rights': 'Contenu sous licence CC BY 4.0',
  },
  en: {
    'nav.bio': 'Bio',
    'nav.research': 'Research',
    'nav.writings': 'Writings',
    'nav.notes': 'Notes',
    'nav.contact': 'Contact',
    'home.role': 'Researcher · Philosophy of Science',
    'home.recent': 'Recent writings',
    'home.themes': 'Areas',
    'home.notice': 'About',
    'section.all_articles': 'All articles',
    'contact.email': 'Email',
    'contact.orcid': 'ORCID',
    'contact.scholar': 'Google Scholar',
    'contact.form_intro': 'For any question, invitation, or collaboration proposal:',
    'contact.name': 'Name',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.send': 'Send',
    'footer.updated': 'Last updated',
    'footer.rights': 'Content licensed under CC BY 4.0',
  },
  es: {
    'nav.bio': 'Bio',
    'nav.research': 'Investigación',
    'nav.writings': 'Escritos',
    'nav.notes': 'Notas',
    'nav.contact': 'Contacto',
    'home.role': 'Investigador · Filosofía de la ciencia',
    'home.recent': 'Escritos recientes',
    'home.themes': 'Ejes',
    'home.notice': 'Nota',
    'section.all_articles': 'Ver todos los artículos',
    'contact.email': 'Correo',
    'contact.orcid': 'ORCID',
    'contact.scholar': 'Google Scholar',
    'contact.form_intro': 'Para cualquier pregunta, invitación o propuesta de colaboración:',
    'contact.name': 'Nombre',
    'contact.subject': 'Asunto',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar',
    'footer.updated': 'Última actualización',
    'footer.rights': 'Contenido bajo licencia CC BY 4.0',
  },
} as const;

export type Lang = keyof typeof ui;

// Helper : retourne une fonction de traduction pour la langue donnée
export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof ui['fr']): string {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

// Helper : détecte la langue à partir de l'URL
export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}
