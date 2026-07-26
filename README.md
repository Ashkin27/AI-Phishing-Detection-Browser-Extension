<img width="1983" height="793" alt="ChatGPT Image Jul 26, 2026, 01_52_28 AM" src="https://github.com/user-attachments/assets/9c54050c-3f30-48dd-8a08-75c62a6578dd" />

# AI Phishing Detector Browser Extension
![Python](https://img.shields.io/badge/Python-3.13-blue) ![Flask](https://img.shields.io/badge/Flask-3.1-green) ![Chrome Extension](https://img.shields.io/badge/Chrome-Manifest%20V3-yellow) ![Ollama](https://img.shields.io/badge/Ollama-Llama3-red) ![VirusTotal](https://img.shields.io/badge/VirusTotal-API-orange) ![License](https://img.shields.io/badge/License-MIT-blue)

An AI-powered browser extension designed to identify and prevent phishing attacks in real time. The project combines URL analysis, machine learning, website content inspection, and threat intelligence to detect suspicious websites and warn users before they interact with potentially malicious content.

# 📖 Overview

Phishing websites remain one of the most common cyber threats, often imitating trusted websites to steal sensitive information such as usernames, passwords, and financial details.

This project is an AI-powered Chrome Extension that analyses websites in real time by combining Large Language Models (Llama 3 via Ollama) with multiple cybersecurity intelligence sources.

Unlike traditional phishing detection tools that rely mainly on static blacklists, this extension evaluates webpage content, SSL certificates, VirusTotal reputation, and WHOIS domain information to produce an explainable security assessment.

The extension provides users with an intuitive interface displaying website risk levels, AI-generated explanations, SSL validation results, VirusTotal reputation scores, and domain registration information, enabling safer web browsing.

# 🏗 System Architecture
<img width="1536" height="1024" alt="ChatGPT Image Jul 26, 2026, 01_44_35 AM" src="https://github.com/user-attachments/assets/f505f5f5-9d5a-4047-b982-9218aec7e6fa" />

# Screenshots
## VirusTotal Threat Intelligence Integration
The project integrates the VirusTotal API to perform reputation analysis on scanned websites. VirusTotal aggregates results from multiple security vendors to identify malicious or suspicious URLs, providing an additional layer of verification alongside AI-based phishing detection.

<img width="1920" height="1200" alt="Screenshot (64)" src="https://github.com/user-attachments/assets/7a69b9f1-bca5-4f19-b9f9-80d3b1ffabd0" />

## Chrome Extension Deployment
The AI Phishing Detector is loaded as an unpacked Chrome Extension using Manifest V3. This enables real-time webpage analysis directly from the browser without requiring installation from the Chrome Web Store.

<img width="1920" height="1200" alt="Screenshot (57)" src="https://github.com/user-attachments/assets/f12ee3da-4e95-4561-ad32-6ae67e178413" />

## Backend Dependency Installation
Python dependencies are installed to configure the Flask backend. The backend exposes REST APIs that connect the browser extension with AI analysis, VirusTotal reputation checks, SSL validation, and WHOIS domain lookup services.

<img width="1920" height="1200" alt="Screenshot (62)" src="https://github.com/user-attachments/assets/34218aab-de78-450c-8b99-1f508f3c289d" />

## Local AI Model Configuration
Ollama is configured to run the Llama 3 large language model locally. The backend uses this model to analyse webpage content and generate explainable phishing detection results while keeping AI inference on the local machine.

<img width="1920" height="1200" alt="Screenshot (60)" src="https://github.com/user-attachments/assets/1a60ba0b-f0a1-4584-8f33-975cad167f77" />

## Backend Flask Server Running
Flask backend successfully running on localhost:5000, receiving analysis requests from the Chrome extension and processing URL scans in real time.

<img width="1920" height="1200" alt="Screenshot (65)" src="https://github.com/user-attachments/assets/980011dc-3a01-473e-aca4-01722b19a61f" />

## Chrome Extension – Ready to Scan
The AI Phishing Detector Chrome extension loaded successfully and ready to analyze the currently opened website.

<img width="1920" height="1200" alt="Screenshot (66)" src="https://github.com/user-attachments/assets/c23777b8-c333-4879-b1fb-71d1d98cb924" />

## Legitimate Website Detection (Microsoft)
Scan results for the official Microsoft website showing a SAFE verdict with high confidence. The extension verifies SSL certificates, checks VirusTotal reputation, retrieves WHOIS/domain information, and performs AI-based phishing analysis.

<img width="1920" height="1200" alt="Screenshot (69)" src="https://github.com/user-attachments/assets/32f68259-2ce0-43c0-b58e-9a3aee81c62a" />
<img width="1920" height="1200" alt="Screenshot (70)" src="https://github.com/user-attachments/assets/0c10f5ec-b470-4fcb-8f46-6fcf4f85709d" />

## Suspicious Website Detection (badssl.com)
Demonstration of the extension identifying a website with security-related characteristics as PHISHING/HIGH RISK, combining SSL analysis, reputation checks, and AI reasoning.

<img width="1920" height="1200" alt="Screenshot (71)" src="https://github.com/user-attachments/assets/f3b4a62d-998b-414d-99f0-25d3ca5ad11f" />
<img width="1920" height="1200" alt="Screenshot (72)" src="https://github.com/user-attachments/assets/c72e24f3-fd29-4303-aab2-b5636ad006d6" />
<img width="1920" height="1200" alt="Screenshot (73)" src="https://github.com/user-attachments/assets/56725221-656e-4aa5-b9a7-6f827415218c" />

# VIDEO DEMO

<img width="800" height="450" alt="VideoProject3-ezgif com-video-to-gif-converter" src="https://github.com/user-attachments/assets/5306deee-03f4-4b47-baff-c4e3926b10a9" />


# ⚙️ Workflow

1. User opens a webpage.
2. User clicks **Scan Website**.
3. Extension extracts:
  - URL
  - Visible webpage content
4. Data is sent to the Flask backend.
5. Backend performs:
  - AI Analysis using Llama 3
  - SSL Certificate Validation
  - VirusTotal Reputation Lookup
  - WHOIS Domain Analysis
6. Results are merged into one security report.
7. Browser extension displays:
  - Risk Level
  - AI Summary
  - SSL Information
  - VirusTotal Detection
  - Domain Information

## Features

# ✨ Features

- 🤖 AI-powered phishing detection
- 🌐 Real-time webpage analysis
- 🔒 SSL Certificate validation
- 🦠 VirusTotal threat intelligence
- 🌍 WHOIS domain analysis
- 🟢 Safe / 🟡 Suspicious / 🔴 Phishing classification
- 📄 Explainable AI recommendations
- ⚡ Lightweight Chrome Extension
- 🔗 Flask REST API backend
- 💻 Clean modern interface

## Tech Stack

- JavaScript
- Chrome Extension API
- Python
- Flask
- Ollama / Llama 3
- VirusTotal API

# 👨‍💻 Author

## Ashkin PS

🎓 B.Tech Information Technology

🛡 Cybersecurity Enthusiast

🐍 Python Developer

🤖 AI & Security Projects

### GitHub

https://github.com/Ashkin27

### LinkedIn

https://www.linkedin.com/in/ashkin-p-s-57a3b7280/

# 📄 License

This project is licensed under the MIT License.
