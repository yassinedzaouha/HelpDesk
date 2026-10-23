# HelpDesk — Gestion des demandes de support informatique

## Description
HelpDesk est une application web responsive développée dans le cadre d'un projet de formation chez YouCode. Elle permet de consulter, d'ajouter et de supprimer des demandes de support informatique grâce à une interface simple et interactive.

Ce projet a pour objectif de mettre en pratique les fondamentaux de JavaScript, notamment la manipulation du DOM, la gestion des événements et la validation des formulaires.

## Technologies utilisées
- **HTML5** : structure et organisation du contenu.
- **CSS3** : mise en page, design et responsive.
- **JavaScript Vanilla** : gestion des demandes et interactions dynamiques.

## Fonctionnalités
- Affichage dynamique des demandes de support.
- Ajout de nouvelles demandes avec validation des champs obligatoires.
- Suppression des demandes avec confirmation.
- Affichage du nombre total de demandes.
- Gestion des catégories : Matériel, Logiciel et Réseau.
- Gestion des priorités : Basse, Normale et Haute.
- Interface responsive adaptée aux mobiles, tablettes et ordinateurs.

## Structure du projet
```text
HelpDesk/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── README.md
```

## Installation et lancement
1. Cloner le dépôt GitHub :
   ```bash
   git clone URL_DU_REPOSITORY
   ```
2. Ouvrir le dossier du projet.
3. Lancer l'application en ouvrant le fichier `index.html` dans un navigateur.

Aucune installation supplémentaire n'est nécessaire.

## Fonctionnement
Les demandes sont stockées dans un tableau d'objets JavaScript et affichées dynamiquement dans la page. Les ajouts et les suppressions actualisent automatiquement la liste et le compteur, sans rechargement de la page.

**Remarque :** L'application fonctionne entièrement dans le navigateur, sans backend ni base de données.

## Contexte pédagogique
Projet individuel réalisé dans le cadre de la formation YouCode afin de renforcer les compétences en HTML, CSS, JavaScript, Git et GitHub.
