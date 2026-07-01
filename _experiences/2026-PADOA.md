---
title: "Stage de fin d'études : Ingénieur Logiciel Full-Stack – Padoa"
collection: experiences
category: stages
permalink: /stage/2026-PADOA
excerpt: "Développement et intégration logicielle full-stack au sein du pôle Gestion SPST : architecture événementielle, optimisation ElasticSearch, Angular/Redux et intégration de l'IA."
date: 2026-04-06
end_date: 2026-09-30
venue: 'Padoa - Paris, France'
slidesurl: 'http://ilyasbounoua.github.io/files/Padoa_Diapos.pdf'
paperurl: 'http://ilyasbounoua.github.io/files/Padoa_Rapport.pdf'
citation: 'Bounoua, Ilyas. (2026). "Stage de fin d’études – Padoa".'
---
Durant mon **stage de fin d'études** au sein de la scale-up **Padoa** à Paris, j'ai été intégré en tant qu'ingénieur full-stack dans la squad *Gestion SPST* (sous-squad *Gestion Adhérents et Prospect*)[cite: 1]. 
Cette expérience de 6 mois m'a permis de contribuer activement à l'évolution d'une plateforme SaaS complexe qui gère la santé et la prévention de plus de 8,7 millions de salariés en France[cite: 1]. L'ensemble de mes travaux et l'analyse technique détaillée de mes réalisations sont documentés dans mon rapport de stage officiel intitulé **report-22-05-26_after-review.pdf**[cite: 1].

### Missions et réalisations
1. **Conception d'une architecture événementielle Full-Stack** : Développement de bout en bout d'une fonctionnalité de détection de doublons inter-entités par le suivi de SIREN similaires[cite: 1]. Afin d'éviter des jointures SQL lourdes lors de la pagination, j'ai modifié la stratégie d'indexation et mis à jour les schémas de documents **ElasticSearch** (propriétés *prospect_count* et *firm_count*) pour assurer des requêtes sub-millisecondes[cite: 1].
2. **Résolution de bugs complexes et synchronisation asynchrone** : Identification et correction d'une faille critique de désynchronisation de données sur l'Event Bus[cite: 1]. Le bogue provenait de l'absence du champ `endDate` dans le schéma d'extraction, ce qui bloquait la boucle de réindexation des prospects lors de la fin d'un contrat actif[cite: 1].
3. **Développement Frontend réactif sous Angular** : Intégration de pipelines de données réactifs, de filtres avancés et d'éléments d'interface dynamiques complexes (popovers d'analyse de grappes, conteneurs modaux)[cite: 1]. Les états ont été interfacés avec des stores **Redux** normalisés et déployés de manière sécurisée à l'aide de *Feature Flags*[cite: 1].
4. **Refactoring UI & Internationalisation (i18n)** : Migration de composants graphiques legacy vers le nouveau Design System de Padoa et création de modules de traduction spécifiques (modaux) pour répondre aux exigences réglementaires du marché allemand[cite: 1].
5. **Ingénierie augmentée par IA** : Adoption et intégration de l'IDE **Cursor** au quotidien pour déconstruire la logique métier du monorepo, accélérer l'appropriation des standards de code (RxJS, TypeScript) et sécuriser la phase d'estimation de charge lors des rituels d'« Analyse et Pesée »[cite: 1].

### Compétences développées
- **Architecture & Performance** : Maîtrise des flux de données asynchrones (SQL triggers, Event Bus, pipelines ElasticSearch)[cite: 1], gestion de monorepos complexes et stratégies de Feature Flagging[cite: 1].
- **Expertise Frontend** : Développement d'interfaces modulaires robustes avec Angular, TypeScript et gestion d'états globaux normalisés avec Redux[cite: 1].
- **Rigueur d'ingénierie (Definition of Done)** : Pratique rigoureuse des revues de code par les pairs (Peer Review)[cite: 1], validation automatique par tests unitaires et E2E (Cypress, Playwright) via des pipelines de CI/CD (CircleCI)[cite: 1].
- **Pratiques de delivery Agile** : Immersion complète dans des sprints de 2 semaines, animation de sessions collectives de chasse aux bugs (*Mob Testing*), présentations lors des *Sprint Demos* et bilans en *Rétrospectives*[cite: 1].