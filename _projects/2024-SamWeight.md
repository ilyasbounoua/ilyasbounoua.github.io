---
title: "SamWeight : Optimisation de la détection du cancer du sein par AUC Reshaping"
collection: projects
category: manuscripts
permalink: /project/2024-SamWeight
excerpt: "Application de techniques de pondération d'échantillons et d'AUC Reshaping pour améliorer la sensibilité à haute spécificité en classification mammographique."
date: 2025-01-21
venue: 'École Centrale de Nantes & Hera-Mi'
citation: "Bouftini, I.; Bounoua, I.; Bouchez-Delotte, Sacha. (2024). &quot;SamWeight : Optimisation de la détection du cancer du sein par AUC Reshaping.&quot; <i>Projet de recherche, École Centrale de Nantes & Hera-Mi</i>."
---

SamWeight est un projet de recherche visant à **améliorer la détection du cancer du sein** sur images mammographiques en privilégiant la sensibilité dans les régions de l'aire ROC correspondant à des niveaux de spécificité élevés. Le projet combine une technique de **pondération d’échantillons** avec des principes d’**AUC Reshaping** pour faire converger un modèle profond pré-entraîné (ResNet-22 + CBAM) vers de meilleures performances sur les faux négatifs critiques.

# Auteurs et affiliations
- [Imade Bouftini (École Centrale de Nantes)](https://github.com/ibouftini)
- [Ilyas Bounoua (École Centrale de Nantes)](https://github.com/ilyasbounoua)
- [Sacha Bouchez-Delotte (Hera-Mi)](https://github.com/sacha4595)

# Résumé
Les métriques classiques (AU-ROC) moyennent les performances sur toute la courbe et ne reflètent pas toujours l'importance des erreurs dans la zone de haute spécificité. SamWeight introduit une **réallocation adaptative des poids d’échantillons** — via un terme d'« boosting » appliqué aux positifs mal classés sous un seuil de spécificité élevé — afin d'optimiser la sensibilité exactement dans la région d'intérêt (ROI) de la courbe ROC.  
Le projet s'inscrit dans un contexte de **déséquilibre de classes et de coûts élevés pour les faux négatifs**, en suivant des principes inspirés des meilleures pratiques de pondération d’échantillons et d’AUC Reshaping [<a href="#ref-1">1</a>].

# Objectifs
1. Mettre en œuvre l’AUC Reshaping pour privilégier la sensibilité à haute spécificité.  
2. Appliquer la méthode sur un modèle pré-entraîné (ResNet-22 + CBAM) adapté à la classification de patchs mammographiques.  
3. Évaluer l'amélioration après fine-tuning et analyser l'impact sur la courbe ROC dans la ROI.  
4. Comparer différentes stratégies de mise à jour de seuils (statique, par époque, par batch) pour optimiser la stabilité de l'entraînement.

# Méthodes

## Diagramme du pipeline
Pipeline (prétraitement → extraction de patchs → entraînement / fine-tuning → évaluation) :  
![Diagramme](http://ilyasbounoua.github.io/files/Diagram.svg)  

## Pondération d'échantillons & AUC Reshaping
On applique une fonction de perte modifiée qui augmente le poids des échantillons positifs mal classés en dessous d’un seuil de spécificité élevé :  

$$
\mathcal{L} = - \sum_{i=1}^N \left[ y_i \log(p_i - b_i) + (1 - y_i) \log(1 - p_i + b_i) \right],
$$

avec  
$$
b_i =
\begin{cases}
n, & \text{si } y_i = 1 \text{ et } p_i < \theta_{\mathrm{max}}, \\
0, & \text{sinon.}
\end{cases}
$$

où :  
- $$y_i \in \{0,1\}$$ est l’étiquette vraie, $$p_i$$ la probabilité prédite ;  
- $$\theta_{\mathrm{max}}$$ est le seuil de haute spécificité (ex. 0,95 – 0,98) ;  
- $$n$$ est le facteur de boosting réglable.  

> **Insight supplémentaire** : La mise à jour dynamique des seuils (par batch) permet de stabiliser l’entraînement et d’améliorer les performances sur les faux négatifs critiques.

## Modèle pré-entraîné
- Architecture : **ResNet-22** intégrant des blocs **CBAM** (Convolutional Block Attention Module) pour améliorer la focalisation spatiale et canal.  
- Données : patches extraits de mammographies (masse / microcalcifications).  
- Stratégie : fine-tuning du backbone pré-entraîné, entraînement du classificateur avec la perte reshaped, augmentation ciblée, curriculum learning et mise à jour dynamique des seuils si nécessaire.  
- Attention CBAM : améliore la représentation des caractéristiques via **Channel Attention** ("quoi") et **Spatial Attention** ("où").

## Environnement logiciel et optimisation
- Python 3.9  
- TensorFlow 2.10.0 / Keras 2.10.0  
- Cloudpickle 3.1  
- **Optimisations GPU** : mixed precision training (`mixed_float16`), gestion de la mémoire via Keras Sequence, loss scaling avec `LossScaleOptimizer`.

# Résultats
Pour évaluer et orienter l’optimisation du modèle, nous avons systématiquement utilisé :  

- **Sensibilité mesurée aux niveaux de spécificité élevés** (0,95 et 0,98)  
- **Delta AUC dans la ROI** : comparaison entre baseline et SamWeight  
- **Courbes ROC comparatives (baseline vs SamWeight)**  
- **Matrices de confusion et gain en rappel**  

| Métrique | Baseline | SamWeight | Gain |
|----------|----------|-----------|------|
| AUC | 0.92 | 0.937 | +1.8% |
| Sensibilité à 0,95 spécificité | 70.3% | 81.2% | +10.9% |
| PRAUC | 88.3% | 92.2% | +4.4% |
| F1-Score | 78.1% | 84.1% | +7.7% |

> Le modèle final a été retenu selon un gain significatif de sensibilité dans la ROI tout en limitant la baisse globale de l’AUC.

# Discussion
La méthode vise à réduire les faux négatifs critiques en échange d’une légère augmentation potentielle des faux positifs.  
Paramètres clés à valider :  
- $$\theta_{\mathrm{max}}$$ (définition de la ROI)  
- $$n$$ (facteur de boosting)  
- Robustesse aux biais de dataset (déséquilibre, différences d’acquisition)  
- Stratégie de mise à jour dynamique des seuils pour la stabilité de l’entraînement

# Références
1. Sheethal Bhat et al., *AUCReshaping: improved sensitivity at high-specificity*, Scientific Reports.  
2. He, K., et al. (2015). *Deep Residual Learning for Image Recognition*. arXiv 1512.03385.  
3. Woo, S., et al. (2018). *CBAM: Convolutional Block Attention Module*. arXiv 1807.06521.  
4. Lotter, W., Sorensen, G., Cox, D. *Multi-Scale CNN and Curriculum Learning Strategy for Mammogram Classification*. arXiv 1707.06978.