---
title: "PEPs: Macaw Welfare Interactive System"
collection: projects
category: académique
lang: en
permalink: /en/project/2026-PEPS
excerpt: "Industrialization of a web platform and IoT system for the cognitive stimulation of macaws at Planète Sauvage."
date: 2026-03-24
venue: 'University Project – Centrale Nantes'
paperurl: 'http://ilyasbounoua.github.io/files/en/PEPs_Report.pdf'
bibtexurl: 'http://ilyasbounoua.github.io/files/en/PEPs_Perimeter.pdf'
citation: "Ilyas Bounoua, Clément Vazeille, et al. (2026). &quot;Interactive System for Macaw Well-being.&quot; <i>Information Systems Module - Centrale Nantes</i>."
---

The PEP'S project (Planète Sauvage Enrichment Project) provides an industrialized web platform designed to supervise interactive modules deployed in the field to enhance macaw welfare. Initially conceived as a local prototype, the system has evolved into a robust architecture deployed on an external server, enabling centralized sound content management and real-time collection of behavioral interactions.

## Information System Objectives
1. **Real-time Supervision**: Monitoring module status, including battery levels, connectivity status, and IP addresses, via a reactive dashboard.
2. **Multi-profile and Multi-species Management**: A tailored interface for administrators, researchers, and caretakers, with a scope extended to include dolphins.
3. **Industrialization**: Transitioning from a local application base to a fully containerized system capable of supporting daily professional operations.
4. **Data Reliability**: Systematic collection and logging of interactions to provide researchers with objective behavioral analysis tools.

## Industrialized Technical Architecture
The system was restructured to ensure high performance and maintainability:
- **Backend**: Containerized Java Spring architecture. Implemented **JWT** authentication and **Angular Guards** for enhanced security and clean routing.
- **Frontend**: A modern Angular application providing a fluid supervision interface and dynamic user profile management.
- **Data Management**: 
    - **PostgreSQL**: Centralized data persistence hosted on a remote server.
    - **MinIO**: Object storage dedicated to managing the audio library.
    - **Redis Streams**: High-performance pipeline for managing asynchronous data processing.
- **Infrastructure**: Deployment via **Docker** with an **Nginx** reverse proxy to handle load balancing and traffic centralization.
- **IoT Integration**: The backend now supports **ESP32** modules (an evolution from the original Raspberry Pi) with a dynamic network configuration mechanism for easier on-site maintenance.

## Finalized Functionalities
- **Supervision Dashboard**: Immediate visualization of interactions and the operational status of the module fleet.
- **Access Control**: Granular role and permission system featuring optimistic locking to prevent write conflicts.
- **Sound Management**: Dedicated upload interface with format validation and simplified association with specific field modules.
- **Alert System**: Automatic notifications for critical system events or detected module anomalies.
- **Data Export**: Capability to extract behavioral interaction logs in CSV format for advanced external statistical analysis.

## Implementation and Deployment
- **Team and Steering**: Managed via an Agile/Scrum organization, transitioning successfully from a spreadsheet-based backlog to professional technical management through **GitHub Issues**.
- **Final Deployment**: The system was launched into production on **March 13, 2026**, hosted on an **OVH VPS** (IP: 51.75.126.85) following a comprehensive industrialization phase.
- **Workload**: Approximately **300 collective hours** (50h per member) were dedicated to development, infrastructure setup, and software quality assurance.
- **Success Rate**: The project achieved an estimated **85% success rate**, successfully validating all core blocks and completing the high-risk IoT/Backend integration.

## Budgetary Assessment
- **Hardware & Infrastructure**: €417 was spent from the €700 allocated budget, covering cloud hosting and hardware for the initial pilot module.
- **Engineering Valuation**: Based on 300 hours of specialized engineering work valued at €25/h, the total project value is estimated at **€7,500**.

## Conclusion and Perspectives
The PEP'S project confirms the feasibility of a technically advanced yet low-cost animal welfare solution. Future improvements will focus on integrating an **adaptive AI layer** to adjust environmental stimulation based on animal interaction history and enhancing supervision modules for battery health tracking.