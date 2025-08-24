---
title: "SamWeight : Optimisation de la détection du cancer du sein par AUC Reshaping"
collection: projects
category: manuscripts
permalink: /project/2025-SamWeight
excerpt: "Application de techniques de pondération d'échantillons et d'AUC Reshaping pour améliorer la sensibilité à haute spécificité en classification mammographique."
date: 2025-02-23
venue: 'École Centrale de Nantes & Hera-Mi'
citation: "Bouftini, I.; Bounoua, I.; Bouchez-Delotte, Sacha. (2025). &quot;SamWeight : Optimisation de la détection du cancer du sein par AUC Reshaping.&quot; <i>Projet de recherche, École Centrale de Nantes & Hera-Mi</i>."
---

SamWeight est un projet de recherche visant à **améliorer la détection du cancer du sein** sur images mammographiques en privilégiant la sensibilité dans les régions de l'aire ROC qui correspondent à des niveaux de spécificité élevés. Le projet combine une technique de **pondération d’échantillons** avec des principes d’**AUC Reshaping** pour faire converger un modèle profond pré-entraîné (ResNet-22 + CBAM) vers de meilleures performances sur les faux négatifs critiques.

# Auteurs et affiliations
- [Imade Bouftini (École Centrale de Nantes)](https://github.com/ibouftini)
- [Ilyas Bounoua (École Centrale de Nantes)](https://github.com/ilyasbounoua)
- [Sacha Bouchez-Delotte (Hera-Mi)](https://github.com/sacha4595)

# Résumé
Les métriques classiques (AU-ROC) moyennent les performances sur toute la courbe et ne reflètent pas toujours l'importance des erreurs dans la zone de haute spécificité (où les faux négatifs sont critiques). SamWeight introduit une **réallocation adaptative des poids d’échantillons** — via un terme d'« boosting » appliqué aux positifs mal classés sous un seuil de spécificité élevé — afin d'optimiser la sensibilité exactement dans la région d'intérêt (ROI) de la courbe ROC.

# Objectifs
1. Mettre en œuvre l’AUC Reshaping pour privilégier la sensibilité à haute spécificité.  
2. Appliquer la méthode sur un modèle pré-entraîné (ResNet-22 + CBAM) adapté à la classification de patchs mammographiques.  
3. Évaluer l'amélioration après fine-tuning et analyser l'impact sur la courbe ROC dans la ROI.

# Méthodes

## Diagramme du pipeline
Pipeline (prétraitement → extraction de patchs → entraînement / fine-tuning → évaluation) : 
![Diagramme](http://ilyasbounoua.github.io/files/Diagram.svg) 

## Pondération d'échantillons & AUC Reshaping
On applique une fonction de perte modifiée qui augmente le poids des échantillons positifs mal classés en dessous d’un seuil de spécificité élevé. Formulation utilisée :

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
- \(y_i \in \{0,1\}\) est l’étiquette vraie, \(p_i\) la probabilité prédite ;  
- $\theta_{\mathrm{max}}$ est le seuil de haute spécificité (ex. 0,95 — 0,98) ;  
- $n$ est le facteur de boosting réglable.

L’idée : en rehaus­sant localement les probabilités attendues pour certains positifs, la procédure oriente l’optimisation vers une meilleure sensibilité dans la ROI sans dégrader de façon excessive le reste de la courbe.

## Modèle pré-entraîné
- Architecture : **ResNet-22** (adapté) intégrant des blocs **CBAM** (Convolutional Block Attention Module) pour améliorer la focalisation spatiale et canal.  
- Données : patches extraits de mammographies (masse / microcalcifications).  
- Stratégie : fine-tuning du backbone pré-entraîné, entraînement du classificateur avec la perte reshaped, augmentation ciblée et curriculum learning si nécessaire.

## Environnement logiciel
- Python 3.9  
- TensorFlow 2.10.0 / Keras 2.10.0  
- Cloudpickle 3.1

# Résultats
Pour évaluer et orienter l’optimisation du modèle, nous avons systématiquement utilisé les métriques suivantes pendant l’entraînement et l’évaluation :

- **Sensibilité mesurée aux niveaux de spécificité élevés** (Spécificité = 0,95 et 0,98) : ces points précis de la courbe ROC constituent la *région d’intérêt (ROI)* clinique. Ils ont servi à quantifier la capacité du modèle à réduire les faux négatifs dans les zones où la spécificité doit rester élevée.  
- **Delta AUC dans la ROI ciblée** : nous comparons la surface sous la courbe restreinte à la ROI entre la baseline et SamWeight pour mesurer le gain localisé apporté par la pondération d’échantillons.  
- **Courbes ROC comparatives (baseline vs SamWeight)** : tracées pour visualiser le déplacement de la courbe et vérifier que l’amélioration dans la ROI ne provoque pas de détérioration excessive ailleurs.  
- **Matrices de confusion et gain en rappel (recall)** pour les échantillons positifs cliniquement pertinents : ces métriques fines permettent d’estimer l’impact pratique des changements (nombre de faux négatifs évités, variation des faux positifs).  

Méthodologie d’usage : ces métriques ont été calculées à chaque run (checkpoints), utilisées pour la validation croisée et le choix des hyperparamètres (notamment le seuil $\theta_{\mathrm{max}}$ et le facteur de boosting $n$). Les critères de sélection du modèle final ont privilégié une amélioration significative de la sensibilité dans la ROI tout en limitant la dégradation globale de l’AUC.  


# Discussion
La méthode vise à réduire les faux négatifs critiques en échange d’une possible légère augmentation des faux positifs. Les paramètres critiques à valider empiriquement :
- $\theta_{\mathrm{max}}$ (choix de la ROI) ;  
- $n$ (facteur de boosting) ;  
- robustesse aux biais de dataset (déséquilibre, acquisition différente entre centres).


# Références
1. Sheethal Bhat et al., *AUCReshaping: improved sensitivity at high-specificity*, Scientific Reports.  
2. He, K., et al. (2015). *Deep Residual Learning for Image Recognition*. arXiv:1512.03385.  
3. Woo, S., et al. (2018). *CBAM: Convolutional Block Attention Module*. arXiv:1807.06521.  
4. Lotter, W., Sorensen, G., Cox, D. *A Multi-Scale CNN and Curriculum Learning Strategy for Mammogram Classification*. arXiv:1707.06978.
