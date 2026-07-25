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
