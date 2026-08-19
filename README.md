# Site vitrine — chercheur

Site personnel construit avec [Astro](https://astro.build).
Design éditorial sobre, ancré nature/technique. Multilingue FR / EN / ES.

## Démarrer

```bash
# Installer les dépendances
npm install

# Lancer le serveur de dev (http://localhost:4321)
npm run dev

# Construire pour la production
npm run build

# Prévisualiser le build
npm run preview
```

Pré-requis : **Node.js 18+**.

## Structure

```
src/
├── config.ts              ← À PERSONNALISER : nom, tagline, contact, thèmes
├── i18n/ui.ts             ← Traductions des labels d'interface
├── styles/global.css      ← Toute l'esthétique dans un seul fichier
├── layouts/
│   ├── BaseLayout.astro   ← Structure globale (header, footer, nav)
│   └── ArticleLayout.astro ← Layout des articles
├── pages/                 ← Pages en français (racine du site)
│   ├── index.astro
│   ├── bio.astro
│   ├── recherche.astro
│   ├── contact.astro
│   └── ecrits/
│       ├── index.astro    ← Liste des écrits
│       └── [...slug].astro ← Route dynamique par article
├── pages/en/              ← Version anglaise (à créer)
├── pages/es/              ← Version espagnole (à créer)
└── content/
    ├── config.ts          ← Schéma des collections
    └── articles/          ← Tes articles en Markdown
        └── *.md
```

## Personnalisation minimale

Avant tout : éditer `src/config.ts` pour renseigner :

- Ton nom
- Ta phrase-manifeste (h1 de la home)
- Ton lede
- Ta notice biographique
- Tes axes de recherche
- Tes coordonnées (email, ORCID, Scholar, Mastodon, etc.)

Puis les pages `src/pages/bio.astro` et `src/pages/recherche.astro`
pour les contenus longs.

## Ajouter un article

Crée un fichier `.md` dans `src/content/articles/` :

```markdown
---
title: "Titre de l'article"
description: "Sous-titre optionnel."
date: 2026-03-15
lang: fr
tags: ["philosophie de la biologie"]
journal: "Nom de la revue"  # optionnel
doi: "10.xxxx/xxxxx"        # optionnel
pdf: "/pdfs/article.pdf"    # optionnel, dans public/
draft: false                # true pour ne pas publier
---

Corps de l'article en Markdown.
```

L'article sera automatiquement listé sur `/ecrits` et accessible à
`/ecrits/nom-du-fichier`.

### Formules mathématiques

Support LaTeX via KaTeX activé. Écris `$inline$` ou :

```
$$
E = mc^2
$$
```

## Multilingue

Le français est la langue par défaut (à la racine).
Pour activer EN et ES, dupliquer les pages françaises dans
`src/pages/en/` et `src/pages/es/`, en changeant `const lang = 'fr'` en
`'en'` ou `'es'` dans le frontmatter.

Le sélecteur de langue en bas de page est déjà fonctionnel.

## Formulaire de contact

Le formulaire de la page `/contact` utilise
[FormSubmit](https://formsubmit.co) par défaut (gratuit, sans compte).

Change l'attribut `action` du formulaire pour pointer sur ton adresse :
```
action="https://formsubmit.co/ton.email@example.com"
```

Alternatives : [Formspree](https://formspree.io) (50 soumissions/mois gratuit)
ou [Web3Forms](https://www.web3forms.com) (250/mois gratuit).

## Déploiement

### Cloudflare Pages (recommandé, gratuit, bande passante illimitée)

1. Push ton code sur GitHub
2. Va sur https://pages.cloudflare.com → "Create a project" → connecte ton repo
3. Réglages de build :
   - Framework preset : **Astro**
   - Build command : `npm run build`
   - Build output directory : `dist`
4. Deploy. Ton site est en ligne en 1 minute sur `xxx.pages.dev`
5. Ajoute ton domaine personnalisé dans les réglages

### Vercel (alternative, ~1 clic)

1. Va sur https://vercel.com → "Import Project" → connecte GitHub
2. Vercel détecte Astro automatiquement
3. Deploy

### GitHub Pages

Voir la doc Astro : https://docs.astro.build/en/guides/deploy/github/

## Nom de domaine

Recommandations pour l'achat (~10 €/an) :
- [Porkbun](https://porkbun.com) — simple, prix bas, WHOIS privacy gratuit
- [Namecheap](https://www.namecheap.com)
- [OVH](https://www.ovh.com) — français

Une fois acheté, configure les DNS pour pointer vers Cloudflare Pages
(instructions données dans le dashboard).

## Ajouter des commentaires plus tard

Si tu veux activer un système de discussion :

1. **Giscus** (basé sur GitHub Discussions) — gratuit, sans pub, propre :
   https://giscus.app
2. Configure et ajoute le script dans `ArticleLayout.astro`

## Checklist avant mise en ligne

- [ ] Personnaliser `src/config.ts`
- [ ] Remplir `bio.astro` et `recherche.astro`
- [ ] Remplacer l'article d'exemple par un vrai
- [ ] Changer l'endpoint du formulaire de contact
- [ ] Changer l'URL dans `astro.config.mjs` (`site:`) pour ton domaine final
- [ ] Ajouter ton CV en PDF dans `public/cv.pdf`
- [ ] Vérifier `robots.txt` et l'URL du sitemap
- [ ] Prendre une photo pour la page bio (optionnel)

## Licence

Code du site : MIT.
Contenu (articles, textes) : CC BY 4.0 par défaut — à ajuster à ton gré.
