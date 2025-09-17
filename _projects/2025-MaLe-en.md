---
title: "Gene Mutation Prediction via Machine Learning"
collection: projects
category: academic
permalink: /project/2025-MaLe
excerpt: "Development of an ensemble model to classify the active or inactive state of gene mutations from very high-dimensional data."
date: 2025-05-04
venue: 'University Project – UCLouvain'
paperurl: 'http://ilyasbounoua.github.io/files/MaLe_Rapport.pdf'
citation: 'Ilyas Bounoua (2025). &quot;Gene Mutation Prediction via Machine Learning.&quot; <i>LINFO2262 – Competition Project</i>.'
---

The project involved developing a **machine learning** model capable of predicting the activation or inactivation state of gene mutations from a very high-dimensional dataset (nearly 15,000 input variables).
The approach relies on a **rigorous preprocessing methodology**, the selection of robust models, and the combination of their predictions via **stacking ensemble**.

### Main Objectives
1. Process a large volume of features (numerical and categorical variables) with **missing value imputation** and **dimensionality reduction (PCA)**.
2. Develop and compare several high-performance classifiers (Random Forest, XGBoost, LightGBM).
3. Improve robustness through a **logistic regression meta-model** combining predictions.
4. Evaluate performance via **stratified cross-validation** and the **Balanced Classification Rate (BCR)**.
5. Produce a **comprehensive and reproducible report** with documented code and competition results.

### Implementation
- **Data Preprocessing**: imputation by median or mode, one-hot encoding for categorical variables, robust normalization to reduce the influence of outliers, reduction to 100 principal components via PCA.
- **Base Models**:
  - *Random Forest* (200 trees, max depth 20, balanced classes),
  - *XGBoost* (200 trees, depth 6, learning rate 0.1),
  - *LightGBM* (similar configuration for speed and efficiency).
- **Stacking Ensemble**: combination of the three models via a meta-learning logistic regression.
- **Evaluation**: stratified 5-fold cross-validation, average BCR ≈ **0.879 (±0.027)**, indicating excellent predictive capability.
- **Deliverables**: detailed report, reproducible Python scripts, and submission file conforming to the competition format.

### Conclusion
The project successfully developed a **powerful and reliable ensemble model**, outperforming individual classifiers.
It demonstrates the effectiveness of **modern dimensionality reduction techniques** and **supervised learning** for solving complex problems in bioinformatics.
Future improvements would include **further hyperparameter tuning** and the exploration of **new derived features**.

This work illustrates the application of **data science and artificial intelligence** to biomedical research and machine learning competitions.