---
title: "Paper Title Number 1"
collection: projects
category: manuscripts
permalink: /project/2009-10-01-paper-title-number-1
excerpt: 'This paper is about the number 1. The number 2 is left for future work.'
date: 2009-10-01
venue: 'Journal 1'
slidesurl: 'http://ilyasbounoua.github.io/files/OFC_SLIDES.pdf'
paperurl: 'http://ilyasbounoua.github.io/files/OFC_MCOT.pdf'
citation: 'Your Name, You. (2009). &quot;Paper Title Number 1.&quot; <i>Journal 1</i>. 1(1).'
---
Le projet **OFC (Organisateur des feux de circulation)** vise à optimiser la gestion des feux tricolores urbains.  
En utilisant une caméra montée sur un boîtier rotatif, les voies d’un carrefour sont analysées afin de compter les véhicules.  
Une carte Raspberry Pi traite ces informations et, via un algorithme, attribue la priorité à la voie la plus chargée tout en garantissant une alternance minimale.  
Les feux sont commandés par une carte Arduino communiquant par modules nRF24L01.

### Objectifs principaux
1. Choisir et modéliser le moteur assurant la rotation du boîtier.  
2. Asservir ce moteur en position pour orienter la caméra avec précision.  
3. Développer un algorithme d'analyse d'image et de comparaison du trafic.  
4. Déterminer un ordre de priorité automatique et éviter les blocages.  
5. Concevoir le programme Arduino pour commander les feux tricolores.

### Réalisation
- Études théoriques : modélisation, dimensionnement, asservissement PID.  
- Développement de sous-programmes pour la détection et le comptage des véhicules.  
- Conception et tests du prototype intégrant caméra, Raspberry Pi, Arduino et modules de communication sans fil.  
- Validation expérimentale du système et comparaison simulation/réalité.

Ce travail s’inscrit dans le domaine des **Sciences Industrielles (Automatique et Génie Électrique)** et montre qu’une signalisation routière intelligente peut réduire les embouteillages tout en améliorant la sécurité et l’efficacité énergétique.
