# 🌍 AI Translator & Linguistic Assistant

[![Deploy on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](#)
[![Deploy on Render](https://img.shields.io/badge/Deployed%20on-Render-black?logo=render)](#)
[![React](https://img.shields.io/badge/Frontend-React%20%7C%20Vite-blue?logo=react)](#)
[![FastAPI](https://img.shields.io/badge/Backend-FastAPI%20%7C%20Python-009688?logo=fastapi)](#)
[![AI](https://img.shields.io/badge/AI-Llama%203.3%20%7C%20Groq-FA8B24?logo=groq)](#)

A full-stack, "Agentic" translation tool that uses Large Language Models (LLMs) to provide high-fidelity translations while extracting deep grammatical and cultural insights.

🔗 **[Live Demo](https://ai-translator-tool.vercel.app)**

## 🚀 Overview

Standard translation tools often lose the "soul" and context of a sentence. This tool utilizes **Llama 3.3-70b** via the Groq Cloud API to truly understand user intent. It doesn't just swap words; it analyzes the translated output to provide **Key Meanings**—structured insights into vocabulary and cultural nuances—helping users actually *learn* the language as they translate.

### ✨ Key Features
* **Context-Aware Translation:** Perfectly preserves tone and intent across multiple languages (Spanish, French, German, Japanese, Hindi, etc.).
* **Linguistic Analysis:** Automatically extracts 3-5 key vocabulary points or grammatical insights using structured AI JSON output.
* **High-Speed Inference:** Powered by Groq Cloud for near-instantaneous AI responses.
* **Modern UI:** A sleek, dark-themed, responsive interface built with React and Tailwind CSS 4.0.

## 🛠️ Tech Stack

* **Frontend:** React.js, Vite, Tailwind CSS 4.0 (Deployed on Vercel)
* **Backend:** Python, FastAPI, LangChain, CORS Middleware (Deployed on Render)
* **AI Brain:** Llama 3.3-70b-versatile via Groq API
* **Integration:** Strictly typed structured data output via Pydantic & LangChain

---

## 📂 Project Structure

This project is built as a monorepo containing both the frontend and backend.

```text
ai-translator-tool/
├── backend/                  # FastAPI Server & AI Logic
│   ├── main.py               # API Endpoints & LangChain logic
│   ├── requirements.txt      # Python Dependencies
│   └── .env                  # Environment variables (Groq Key)
│
└── frontend/                 # React Web Interface
    ├── src/
    │   ├── components/       # Reusable UI components (Navbar)
    │   ├── App.jsx           # Main App Logic & API Integration
    │   ├── main.jsx          # React Entry Point
    │   └── index.css         # Tailwind Entry
    ├── vite.config.js        # Vite & Tailwind 4 Configuration
    └── package.json          # Frontend Dependencies
