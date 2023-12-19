Afin de lancer le projet
Faire `npm i` puis `npm run prepare` pour installer les dépendances.

Ensuite `npm run start` puis aller sur `http://localhost:4200/`.

# Cadmium - Application de Gestion des Tâches

<h2>Table des matières :</h2>

-   [Aperçu](#aperçu)
-   [Fonctionnalités](#fonctionnalités)
-   [Captures d'écran](#captures-décran)
-   [Documentation](#documentation)
-   [Technologies](#technologies)
-   [Contributions](#contributions)

## Aperçu

Cadmium est une application web permettant aux utilisateurs de créer, afficher, mettre à jour et supprimer des tâches à
faire.
Chaque tâche est associée à un intitulé, une date de création, une date d'échéance, une description et une priorité.
Les utilisateurs peuvent également marquer une tâche comme terminée et choisir le contexte dans lequel la tâche
s'inscrit

## Fonctionnalités

### 1. Page d'Accueil :

-   Affiche la liste des tâches à faire.
-   Permet de filtrer les tâches par statut (en cours, terminées) et par priorité(élevée, moyenne, faible).
-   Permet de trier les tâches par date d'échéance ou par priorité.

### 2. Page de Création de Tâches

-   Permet aux utilisateurs de créer de nouvelles tâches en spécifiant un nom, une date d'échéance et une priorité.

### 3. Page de Détails de Tâche

-   Affiche les détails d'une tâche y compris son nom, sa date d'échéance, sa priorité et son statut.
-   Permet aux utilisateurs de marquer la tâche comme terminée.

### 3. Page de Modification de Tâche

-   Permet aux utilisateurs de modifier les détails d'une tâche existante, y compris son nom, sa date d'échéance, sa
    priorité et son statut.

### 4. Page de Suppression de Tâche

-   Permet aux utilisateurs de supprimer une tâche existante après confirmation.

<h2 id="technologies">Technologies :</h2>

<ul>
  <li><a href="https://angular.io/" target="_blank">Angular</a></li>
  <li><a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a></li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">HTML</a></li>
</ul>

<h2 id="contributions">Contributions :</h2>

<ul>
    <li><a href="https://github.com/Yaon-C2H8N2">Yoan DUSOLEIL</a></li>
    <li><a href="https://github.com/Maxime-Cllt">Maxime COLLIAT</a></li> 
    <li><a href="https://github.com/Phaired">Rémy BARRANCO</a></li>
    <li><a href="https://github.com/Sudo-Rahman">Rahman YILMAZ</a></li>
    <li><a href="https://github.com/JuliePrigent">Julie PRIGENT</a></li>
    <li><a href="https://github.com/BetulDSENER">Betul SENER</a></li>
</ul>

# Cadmium

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.3.

## Development server

The first time run `npm i` and `npm run prepare` to install the deps.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
