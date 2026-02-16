---
title: "Interactive System for Macaw Welfare (Ongoing Project)"
collection: projects
category: académique
lang: en
permalink: /en/project/2025-PEPS
excerpt: "Development of an IoT system and full-stack web interface to cognitively and socially stimulate captive macaws at Planète Sauvage."
date: 2025-10-03
venue: 'University Project – ECN'
paperurl: 'http://ilyasbounoua.github.io/files/en/SOW.pdf'
bibtexurl: 'http://ilyasbounoua.github.io/files/en/Perimeter.pdf'
citation: "Ilyas Bounoua & Clément Vazeille (2025). &quot;Interactive System for Macaw Welfare.&quot; <i>Information Systems Module</i>."
---

The project aims to develop an **innovative interactive system** designed to improve the welfare of captive macaws at Planète Sauvage park in Port-Saint-Père. The system combines **Raspberry Pi-based IoT modules** for interactive sound diffusion and a **full-stack web interface** (Angular + Spring MVC) for supervision, configuration, and behavioral data analysis.

## Main Objectives
1. Create **interactive modules** that trigger sounds in response to physical interactions by macaws (beak, feet).
2. Develop a **web supervision interface** allowing real-time visualization of interactions and remote configuration.
3. Collect and analyze **behavioral data** to evaluate system usage by macaws.
4. Provide caretakers and researchers with **statistical analysis tools** to optimize animal welfare.
5. Ensure a **low-cost, scalable, and maintainable** solution with a budget under €700.

## Architecture and Technologies
- **Hardware**: Raspberry Pi 4B with waterproof speakers (IP65), microphones, and interaction sensors.
- **Backend**: Spring MVC (Java 17) with 3-layer architecture (Controller, Service, DAO), REST API, and Spring JDBC Template for PostgreSQL data access.
- **Frontend**: Angular 17+ with TypeScript, Angular Material for UI, simple navigation, and reactive components.
- **Database**: PostgreSQL 15+ for storing interactions, configurations, and modules.
- **Communication**: REST API for communication between IoT modules and central server.

## Key Features
- **Simple Authentication**: Login page with hardcoded credentials and classic HTTP session.
- **Supervision Dashboard**: Visualization of total interactions, module status, last interaction, and bar charts of usage (daily/weekly/monthly).
- **Interaction List**: Paginated table with sorting, date filters, and CSV data export.
- **Module Management**: Detailed view per module (name, location, status, IP) with remote configuration (volume, manual/automatic mode, activation/deactivation).
- **Sound Library Management**: Interface to manage sounds played by the system.
- **Data Export**: CSV download of interactions for external analysis.

## Implementation
- **Geographic Scope**: Deployment on the macaw island (~120m²) with weather protection and WiFi communication with central server.
- **Functional Scope**: Focus on automated cognitive stimulation and information provision to caretakers, excluding advanced features (AI, video, mobile app).
- **Technical Scope**: Open-source solution prioritizing maintainability and scalability, with simplified three-tier architecture.
- **Planning**: Development over 8 weeks with balanced distribution between backend (25h) and frontend (26h), including unit tests and deployment.
- **Testing**: Minimal unit tests with JUnit 5 (backend) and Jasmine (frontend) to ensure code quality.

## Optimized Budget
The project adheres to a **total budget of €417** (out of €700 allocated):
- Prototype hardware (1 module): €215 (Raspberry Pi, speaker, microphone, waterproof enclosure)
- Infrastructure (6-month cloud hosting + domain name): €72
- Testing and validation: €80
- Contingency: €50
- Available margin: €283 for future extensions

## Conclusion
The project demonstrates the application of **IoT and information systems** to animal welfare research in zoological settings. The developed solution is **pragmatic, realistic, and scalable**, with an architecture allowing progressive addition of advanced features (advanced statistical analyses, behavioral AI, additional modules).

The project's **guiding principles** (simplicity, pragmatism, feasibility, scalability) ensure a functional and maintainable system in the long term. This work illustrates the use of **modern full-stack technologies** (Angular, Spring, PostgreSQL) in an applied research and innovation context serving animal conservation.

**Future improvements** will include expansion to multiple modules, integration of advanced behavioral analyses through AI, and development of a mobile application for caretakers.