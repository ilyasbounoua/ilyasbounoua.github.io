---
title: "Prédiction de mutations géniques par apprentissage automatique"
collection: projects
category: académique
permalink: /project/2025-MaLe
excerpt: "Développement d’un modèle d’ensemble pour classer l’état actif ou inactif de mutations géniques à partir de données à très haute dimension."
date: 2025-05-04
venue: 'Projet universitaire – UCLouvain'
paperurl: 'http://ilyasbounoua.github.io/files/MaLe_Rapport.pdf'
citation: 'Ilyas Bounoua (2025). &quot;Prédiction de mutations géniques par apprentissage automatique.&quot; <i>LINFO2262 – Projet de compétition</i>.'
---

Le projet consistait à développer un modèle d’**apprentissage automatique** capable de prédire l’état d’activation ou d’inactivation de mutations géniques à partir d’un jeu de données de très grande dimension (près de 15 000 variables d’entrée).  
L’approche repose sur une **méthodologie rigoureuse de prétraitement**, la sélection de modèles robustes et la combinaison de leurs prédictions via un **empilement (stacking ensemble)**.

### Objectifs principaux
1. Traiter un grand volume de caractéristiques (variables numériques et catégorielles) avec **imputation des valeurs manquantes** et **réduction de dimension (PCA)**.  
2. Développer et comparer plusieurs classifieurs performants (Random Forest, XGBoost, LightGBM).  
3. Améliorer la robustesse grâce à un **méta-modèle de régression logistique** combinant les prédictions.  
4. Évaluer la performance par **validation croisée stratifiée** et le **Balanced Classification Rate (BCR)**.  
5. Produire un **rapport complet et reproductible** avec code documenté et résultats de compétition.

### Réalisation
- **Prétraitement des données** : imputation par médiane ou mode, encodage one-hot pour les variables catégorielles, normalisation robuste pour réduire l’influence des valeurs aberrantes, réduction à 100 composantes principales par PCA.  
- **Modèles de base** :  
  - *Random Forest* (200 arbres, profondeur max. 20, classes équilibrées),  
  - *XGBoost* (200 arbres, profondeur 6, taux d’apprentissage 0,1),  
  - *LightGBM* (configuration similaire pour rapidité et efficacité).  
- **Ensemble par empilement** : combinaison des trois modèles via une régression logistique méta-apprenante.  
- **Évaluation** : validation croisée à 5 plis stratifiés, BCR moyen ≈ **0,879 (±0,027)**, indiquant une excellente capacité prédictive.  
- **Livrables** : rapport détaillé, scripts Python reproductibles et fichier de soumission conforme au format de la compétition.

### Conclusion
Le projet a permis de développer un **modèle d’ensemble puissant et fiable**, surpassant les classifieurs individuels.  
Il démontre l’efficacité des **techniques modernes de réduction de dimension** et d’**apprentissage supervisé** pour résoudre des problèmes complexes en bio-informatique.  
Des améliorations futures incluraient un **ajustement plus poussé des hyperparamètres** et l’exploration de **nouvelles caractéristiques dérivées**.

Ce travail illustre l’application des **sciences des données et de l’intelligence artificielle** à la recherche biomédicale et aux compétitions de machine learning.