---
title: "SamWeight: Breast Cancer Detection Optimization via AUC Reshaping"
collection: projects
category: academic
permalink: /project/2024-SamWeight
excerpt: "Application of sample weighting techniques and AUC Reshaping to improve sensitivity at high specificity in mammographic classification."
date: 2025-01-21
venue: 'École Centrale de Nantes & Hera-Mi'
citation: "Bouftini, I.; Bounoua, I.; Bouchez-Delotte, Sacha. (2024). &quot;SamWeight: Breast Cancer Detection Optimization via AUC Reshaping.&quot; <i>Research Project, École Centrale de Nantes & Hera-Mi</i>."
---

SamWeight is a research project aimed at **improving breast cancer detection** on mammographic images by prioritizing sensitivity in the ROC curve regions corresponding to high specificity levels. The project combines a **sample weighting** technique with **AUC Reshaping** principles to fine-tune a pre-trained deep model (ResNet-22 + CBAM) for better performance on critical false negatives.

# Authors and Affiliations
- [Imade Bouftini (École Centrale de Nantes)](https://github.com/ibouftini)
- [Ilyas Bounoua (École Centrale de Nantes)](https://github.com/ilyasbounoua)
- [Sacha Bouchez-Delotte (Hera-Mi)](https://github.com/sacha4595)

# Abstract
Classical metrics (AU-ROC) average performance across the entire curve and do not always reflect the importance of errors in the high-specificity region. SamWeight introduces an **adaptive reallocation of sample weights**—via a "boosting" term applied to misclassified positives under a high specificity threshold—to optimize sensitivity precisely in the region of interest (ROI) of the ROC curve.
The project addresses **class imbalance and high costs for false negatives**, following principles inspired by best practices in sample weighting and AUC Reshaping [<a href="#ref-1">1</a>].

# Objectives
1. Implement AUC Reshaping to prioritize sensitivity at high specificity.
2. Apply the method to a pre-trained model (ResNet-22 + CBAM) adapted for mammographic patch classification.
3. Evaluate improvement after fine-tuning and analyze impact on the ROC curve in the ROI.
4. Compare different threshold update strategies (static, per epoch, per batch) to optimize training stability.

# Methods

## Pipeline Diagram
Pipeline (preprocessing → patch extraction → training / fine-tuning → evaluation):
![Diagram](http://ilyasbounoua.github.io/files/Diagram.svg)

## Sample Weighting & AUC Reshaping
A modified loss function is applied that increases the weight of misclassified positive samples below a high specificity threshold:

$$
\mathcal{L} = - \sum_{i=1}^N \left[ y_i \log(p_i - b_i) + (1 - y_i) \log(1 - p_i + b_i) \right],
$$

where
$$
b_i =
\begin{cases}
n, & \text{if } y_i = 1 \text{ and } p_i < \theta_{\mathrm{max}}, \\
0, & \text{otherwise.}
\end{cases}
$$

with:
- $$y_i \in \{0,1\}$$ is the true label, $$p_i$$ the predicted probability;
- $$\theta_{\mathrm{max}}$$ is the high specificity threshold (e.g., 0.95 – 0.98);
- $$n$$ is the adjustable boosting factor.

> **Additional insight**: Dynamic threshold updates (per batch) help stabilize training and improve performance on critical false negatives.

## Pre-trained Model
- Architecture: **ResNet-22** integrating **CBAM** blocks (Convolutional Block Attention Module) to enhance spatial and channel focus.
- Data: patches extracted from mammograms (mass / microcalcifications).
- Strategy: fine-tuning of the pre-trained backbone, training the classifier with the reshaped loss, targeted augmentation, curriculum learning, and dynamic threshold updates if necessary.
- CBAM Attention: improves feature representation via **Channel Attention** ("what") and **Spatial Attention** ("where").

## Software Environment and Optimization
- Python 3.9
- TensorFlow 2.10.0 / Keras 2.10.0
- Cloudpickle 3.1
- **GPU Optimizations**: mixed precision training (`mixed_float16`), memory management via Keras Sequence, loss scaling with `LossScaleOptimizer`.

# Results
To evaluate and guide model optimization, we systematically used:

- **Sensitivity measured at high specificity levels** (0.95 and 0.98)
- **Delta AUC in the ROI**: comparison between baseline and SamWeight
- **Comparative ROC curves (baseline vs SamWeight)**
- **Confusion matrices and recall gain**

| Metric | Baseline | SamWeight | Gain |
|----------|----------|-----------|------|
| AUC | 0.92 | 0.937 | +1.8% |
| Sensitivity at 0.95 specificity | 70.3% | 81.2% | +10.9% |
| PRAUC | 88.3% | 92.2% | +4.4% |
| F1-Score | 78.1% | 84.1% | +7.7% |

> The final model was selected based on significant sensitivity gain in the ROI while limiting overall AUC decrease.

# Discussion
The method aims to reduce critical false negatives in exchange for a slight potential increase in false positives.
Key parameters to validate:
- $$\theta_{\mathrm{max}}$$ (ROI definition)
- $$n$$ (boosting factor)
- Robustness to dataset biases (imbalance, acquisition differences)
- Dynamic threshold update strategy for training stability

# References
1. Sheethal Bhat et al., *AUCReshaping: improved sensitivity at high-specificity*, Scientific Reports.
2. He, K., et al. (2015). *Deep Residual Learning for Image Recognition*. arXiv 1512.03385.
3. Woo, S., et al. (2018). *CBAM: Convolutional Block Attention Module*. arXiv 1807.06521.
4. Lotter, W., Sorensen, G., Cox, D. *Multi-Scale CNN and Curriculum Learning Strategy for Mammogram Classification*. arXiv 1707.06978.