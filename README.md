# Foodly

## Description du projet
**Foodly** est une application web qui permet aux utilisateurs de découvrir et commander des plats de qualité en toute simplicité. L’application offre une interface intuitive pour naviguer dans le menu, gérer un panier, et, pour les administrateurs, éditer les produits.

### Problématique
Comment créer une plateforme simple et efficace pour permettre aux utilisateurs de consulter un menu interactif, passer des commandes, et pour les administrateurs de gérer facilement les produits proposés ?

## Fonctionnalités principales
- **Navigation dans le menu :** Affichage des plats disponibles avec détails (prix, image, disponibilité).  
- **Gestion du panier :** Ajout et suppression de produits, visualisation du total.  
- **Espace administrateur :** Modification et suppression des produits, ajout de nouveaux plats.  
- **Interface réactive et responsive :** Adaptée à tous types d’appareils (mobiles, tablettes, desktop).  
- **Connexion utilisateur :** Gestion de l’authentification et des rôles (admin, client).

## Technologies utilisées
- **React & TypeScript :** Construction de l’interface utilisateur et gestion des états.  
- **Axios :** Gestion des appels API REST pour la communication avec le backend.  
- **Styled-Components :** Pour un style dynamique et modulaire des composants.  
- **Vite :** Outil de build et développement rapide.  
- **Backend :** Spring Boot (Java) pour l’API REST (indépendant du front-end).

## Installation et exécution

1. Clonez ce dépôt sur votre machine locale :  
    ```bash
    git clone https://github.com/OthmaneB-Pro/foodly.git
    ```
2. Accédez au répertoire du projet :  
    ```bash
    cd foodly
    ```
3. Installez les dépendances :  
    ```bash
    npm install
    ```
4. Lancez l’application en mode développement :  
    ```bash
    npm run dev
    ```
    

## Déploiement
Foodly est déployé et accessible en ligne ici :  
[https://foodly-9n2bmbthm-othmanes-projects-78cbd786.vercel.app](https://foodly-9n2bmbthm-othmanes-projects-78cbd786.vercel.app)

## Structure du projet
- **/src** : Contient tout le code source React et TypeScript.  
- **/src/components** : Composants React réutilisables et spécifiques aux pages.  
- **/src/context** : Gestion des contextes React pour le state global.  
- **/src/api** : Fichiers pour les appels API avec Axios.  
- **/public** : Ressources statiques (images, icônes).

## Résultat
Foodly est une application conviviale et réactive qui permet aux utilisateurs de commander facilement leurs plats favoris tout en offrant aux administrateurs une gestion simple des menus. Son design responsive garantit une expérience fluide sur tous les types d’appareils.
