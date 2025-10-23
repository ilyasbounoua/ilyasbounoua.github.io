---
layout: single
title: "Resume"
lang: en
permalink: /en/cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

## Education

- [**École Centrale de Nantes (France)**](/en/parcour/2023-ECN) - *General Engineering Program (2023–2026)*
  - 2nd year: **DATASIM** option – Data, analysis, signal and image processing
  - Semester 8: Erasmus exchange – Master in Computer Science, **Université Catholique de Louvain (Belgium)**
  - 3rd year: Disciplinary option **INFOSI** – Computer Science for Information Systems
    - Professional option: **PERFECT** – Project Enhancement.

- [**TOEIC Certification (2024)**](/en/parcour/2024-TOEIC)
  *Score 930/990, C1 Level*

- [**Lycée Mohammed VI d'Excellence (Morocco)**](/en/parcour/2021-CPGE)
  *Preparatory Classes for Engineering Schools (Technology and Industrial Sciences) (2021–2023)*

- [**Scientific Baccalaureate (Morocco)**](/en/parcour/2021-BAC)
  *Electrical Sciences and Technologies, Honors with Distinction (2020–2021)*

---

## Work Experience

- [**Observation Intern – HWM Morocco (Casablanca, Morocco)**](/en/stage/2024-HWM)
  *June – July 2024*
  - Monitored customer interactions and participated in cross-departmental meetings

- [**Multiskilled Team Member – ANTOL (Nantes, France)**](/en/poste/ANTOL)
  *August 2024 – January 2025*
  - Customer service, stress management, teamwork

---

## Projects

<ul>
  {% for post in site.projects reversed %}
    {% assign page_lang = page.lang | default: 'fr' %}
    {% assign post_lang = post.lang | default: 'fr' %}
    
    {% if post_lang == page_lang %}
      {% include archive-single.html %}
    {% endif %}
  {% endfor %}
</ul>

---

## Skills

- **Programming:** Python, C++ (basics)
- **Databases:** SQL fundamentals
- **Tools:** Microsoft Office, GanttProject, Fritzing (schematic design)
- **Languages:**
  - Arabic – native
  - French – fluent
  - English – fluent
  - Chinese – basic knowledge
- **Strengths:** adaptability, teamwork, organization, stress management, execution speed

---

## Interests

- Volleyball — 5 years of experience, member of the ECN team
- Board games — weekly practice in a club