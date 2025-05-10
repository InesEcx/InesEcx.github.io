# Dossier `assets/`

>**Dernière modification :** 28/02/2025
>**Auteur(s) :** Inès Echaroux
>**Description :** Contenu du dossier `assets/` (images, icônes, ressources statiques).
---

Ce dossier contient **tous les fichiers statiques** nécessaires à l’application.
Il est accessible à l’exécution (par exemple, en saisissant `http://localhost:4200/assets/...` selon la configuration Angular).

## Structure actuelle

1. **`favicon.ico`**
   - L’icône de l’application, affichée dans l’onglet du navigateur.
   - Référencé dans le `index.html` de la racine du projet (ou dans l’`angular.json` selon votre configuration).

2. **`images/`**
   - Un dossier pour les **images** utilisées dans l’application (logos, illustrations, etc.).
   - Vous pouvez y créer des sous-dossiers (`/logos`, `/backgrounds`, etc.) pour organiser vos ressources.

## Bonnes pratiques

- **Organisation** : Créez des sous-dossiers par type de contenu (ex. `images/`, `icons/`, `docs/`, etc.) pour **classer** vos ressources.
- **Nommage** : Utilisez des noms explicites pour vos fichiers (`logo-Metrika.png`, `background-landing.jpg`, etc.) afin de faciliter leur identification.
- **Taille optimisée** : Pensez à **optimiser** vos images (compression, dimensions) pour réduire le poids du bundle et améliorer les performances de chargement.

## Ajouter de nouvelles ressources

1. **Placer les fichiers** : Copiez vos ressources (images, pdf, icônes...) dans le dossier `assets/` ou l’un de ses sous-dossiers.
2. **Référencer** : Dans votre code, utilisez un chemin relatif du type `assets/images/...` pour accéder à la ressource (par exemple dans un `<img src="assets/images/monimage.png">`).
3. **Vérifier la configuration** : Assurez-vous que `assets/` est bien déclaré dans le champ `"assets"` de votre `angular.json` (c’est déjà le cas mais pensez à vérifier si vous avez un problème avec ça).

> **Astuce** : Si vous ajoutez un grand nombre d’images, envisagez d’utiliser un **CDN** ou une solution de chargement à la demande (lazy loading) pour améliorer les performances.
