AI Translator & Linguistic Assistant 🤖🌍
A full-stack, "Agentic" translation tool that uses Large Language Models (LLMs) to provide high-fidelity translations while extracting deep grammatical and cultural insights.

🚀 Overview
Standard translation tools often lose the "soul" of a sentence. This tool utilizes Llama 3.3-70b to understand user intent and context. It doesn't just swap words; it analyzes the translated output to provide Key Meanings—structured insights into vocabulary and cultural nuances—helping users actually learn the language as they translate.

Key Features:
Context-Aware Translation: Preserves tone and intent across multiple languages.

Linguistic Analysis: Automatically extracts 3-5 key vocabulary points or grammatical insights using structured AI output.

High-Speed Inference: Powered by Groq for near-instantaneous AI responses.

Modern UI: A sleek, dark-themed interface built with React and Tailwind CSS 4.0.

🛠️ Tech Stack
Frontend: React.js, Vite, Tailwind CSS 4.0 (Deployed on Vercel)

Backend: Python, FastAPI, LangChain (Deployed on Render)

AI Brain: Llama 3.3-70b-versatile via Groq Cloud API

Integration: Structured Data output via Pydantic & LangChain

.
├── backend/            # FastAPI Server & AI Logic
│   ├── main.py         # API Endpoints & LangChain Chain logic
│   └── requirements.txt# Python Dependencies
└── frontend/           # React Web Interface
    ├── src/
    │   ├── components/ # Reusable UI components (Navbar, etc.)
    │   ├── App.jsx     # Main Logic & API Integration
    │   └── main.jsx    
    ├── vite.config.js  # Build Configuration
    └── package.json    # Frontend Dependencies
