---
title: "Full-Stack Software Engineer Intern – Padoa"
collection: experiences
category: stages
lang: en
permalink: /en/stage/2026-PADOA
excerpt: "Full-stack software development and integration within the Gestion SPST pole: event-driven architecture, ElasticSearch optimization, Angular/Redux reactive pipelines, and AI integration."
date: 2026-04-06
end_date: 2026-09-30
venue: 'Padoa - Paris, France'
slidesurl: 'http://ilyasbounoua.github.io/files/en/Padoa_Slides.pdf'
paperurl: 'http://ilyasbounoua.github.io/files/en/Padoa_Report.pdf'
citation: 'Bounoua, Ilyas. (2026). "Full-Stack Software Engineer Intern – Padoa".'
---
During my **end-of-studies internship** at the technology scale-up **Padoa** in Paris, I joined the *Gestion SPST* squad as a Full-Stack Software Engineer, operating within the *Gestion Adhérents et Prospect* sub-squad[cite: 1]. 
This 6-month mission allowed me to actively contribute to a complex SaaS enterprise platform that monitors the health and prevention of over 8.7 million employees across France[cite: 1]. The comprehensive technical analysis and exact architectural blueprints of my work are documented verbatim in my official internship report, **report-22-05-26_after-review.pdf**[cite: 1].

### Key Responsibilities & Achievements
1. **Full-Stack Event-Driven Architecture**: Engineered an end-to-end feature for cross-entity duplicate identification by tracking similar SIREN records[cite: 1]. To bypass high-latency SQL cluster joins during real-time pagination, I updated the **ElasticSearch** mapping schema to introduce pre-aggregated document properties (`prospect_count`, `firm_count`), successfully achieving sub-millisecond query latencies[cite: 1].
2. **Complex Bug Resolution & Async Syncing**: Diagnosed and resolved a critical data desynchronization flaw within the Event Bus data-flow extraction pipeline[cite: 1]. Traced the bug to a missing `endDate` field in the extraction schema, which previously prevented the asynchronous cascading reindexing loop from triggering when active contracts expired[cite: 1].
3. **Reactive Frontend Engineering**: Integrated new reactive data streams, advanced filtering logic, and complex interactive UI components (hover breakdown popovers, modal layout containers) into a modular **Angular** architecture[cite: 1]. Managed frontend data consistency using normalized **Redux** stores and safely toggled features using internal *Feature Flags*[cite: 1].
4. **UI Refactoring & Internationalization (i18n)**: Migrated legacy user interface components to Padoa's updated Design System to improve maintainability and UX consistency[cite: 1]. Created and implemented dedicated translation modals tailored to specific regulatory and language requirements for the German market expansion[cite: 1].
5. **AI-Augmented Workflows**: Integrated the AI-powered IDE **Cursor** into daily workflows to accelerate monorepo navigation, quickly master internal architecture patterns (RxJS streams, TypeScript interfaces), and reinforce the technical analysis phase during sprint estimation rituals[cite: 1].

### Skills Developed
- **Architecture & Performance Optimization**: Mastery of asynchronous event-driven data flows (SQL triggers, Event Bus extraction schemas, ElasticSearch indexing strategies)[cite: 1], monorepo workflows, and safe feature delivery pipelines[cite: 1].
- **Frontend Mastery**: Building clean, reactive, and modular client-side structures using Angular, TypeScript, and managing global UI states through normalized Redux stores[cite: 1].
- **Engineering Rigor (Definition of Done)**: Adherence to strict delivery lifecycles through collaborative peer reviews[cite: 1], linting compliance, and automated testing (Unit and E2E testing using Cypress and Playwright) powered by CircleCI pipelines[cite: 1].
- **Agile Methodology**: Full immersion in 2-week sprint cycles, including Daily Stand-ups, collaborative *Mob Testing* (bug-hunting) sessions, live technical *Sprint Demos*, and continuous improvement *Retrospectives*[cite: 1].