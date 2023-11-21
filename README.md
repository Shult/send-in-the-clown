# Application Webcam avec Nez Rouge

## Description

Ce projet consiste en une application JavaScript qui capte le flux vidéo d'une webcam, y ajoute un nez rouge sur le visage de la personne filmée, et diffuse cette séquence d'images transformées. L'application se divise en deux parties principales : une page web pour la capture et le traitement du flux vidéo, et un serveur Node.js pour diffuser les images transformées.

## Fonctionnalités
- Capture du flux vidéo d'une webcam.
- Reconnaissance des traits du visage à l'aide de la librairie ml5.js.
- Superposition d'un nez rouge sur le visage détecté.
- Diffusion des images transformées en temps réel via WebSocket.

## Prérequis
- Navigateur moderne avec support de l'API getUserMedia.
- Node.js pour exécuter le serveur.

## Installation
1. Clonez le dépôt : git clone [URL_DU_REPO].
2. Installez les dépendances Node.js : npm install.

## Démarrage
1. Lancez le serveur : node server.js.
2. Ouvrez index.html dans votre navigateur.

## Utilisation
- Assurez-vous que votre webcam fonctionne correctement.
- Ouvrez l'application dans votre navigateur.
- Vous verrez deux flux vidéo : le flux brut de la webcam et le flux transformé avec le nez rouge.