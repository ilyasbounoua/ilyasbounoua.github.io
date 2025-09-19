---
title: "TLS: Traffic Light System"
collection: projects
category: academic
lang: en
permalink: /en/project/2023-OFC
excerpt: "An intelligent traffic light management system using a camera, Raspberry Pi and Arduino"
date: 2023-06-10
venue: 'TIPE - CPGE'
slidesurl: 'http://ilyasbounoua.github.io/files/OFC_SLIDES.pdf'
paperurl: 'http://ilyasbounoua.github.io/files/OFC_MCOT.pdf'
citation: 'Bounoua, Ilyas. (2023). &quot;TLS: Traffic Light System.&quot; <i>TIPE - CPGE</i>.'
---
The **TLS (Traffic Light System)** project aims to optimize urban traffic light management.  
Using a camera mounted on a rotating housing, intersection lanes are analyzed to count vehicles.  
A Raspberry Pi processes this information and, via an algorithm, assigns priority to the busiest lane while ensuring minimum alternation.  
The traffic lights are controlled by an Arduino board communicating via nRF24L01 modules.

### Main Objectives
1. Select and model the motor ensuring housing rotation.  
2. Implement position control for precise camera orientation.  
3. Develop an image analysis and traffic comparison algorithm.  
4. Determine automatic priority order and prevent deadlocks.  
5. Design the Arduino program to control traffic lights.

### Implementation
- Theoretical studies: modeling, sizing, PID control.  
- Development of subprograms for vehicle detection and counting.  
- Design and testing of prototype integrating camera, Raspberry Pi, Arduino and wireless communication modules.  
- Experimental validation of the system and simulation/reality comparison.

This work falls within the field of **Industrial Sciences (Automation and Electrical Engineering)** and demonstrates that intelligent traffic signaling can reduce congestion while improving safety and energy efficiency.