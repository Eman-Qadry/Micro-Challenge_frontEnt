
# 🧠 AI Assistant Frontend

This is the **Frontend** of the AI Assistant project.  
It provides a modern and responsive UI to interact with:
- 🎙️ **Text-to-Speech** using ElevenLabs API  
- 🤖 **AI Q&A Assistant** powered by Perplexity / OpenAI  

---

## 🚀 Features
- React 19 with Vite for fast development  
- Tailwind CSS for modern styling  
- Text-to-Speech component with audio playback  
- Q&A Assistant with summary + short answer  
- Copy-to-clipboard functionality  

---

## 🛠️ Tech Stack
- ⚛️ React 19
- ⚡ Vite
- 🎨 Tailwind CSS 4
- 🔗 Axios

---

## 📂 Project Structure
```

frontend/
├── public/
├── src/
│   ├── App.jsx
│   ├── components/
│   │   ├── TextToSpeech.jsx
│   │   └── QnAAssistant.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
├── tailwind.config.js
└── postcss.config.js

````

---

## ⚙️ Setup Instructions

### 1️⃣ Install dependencies
```bash
npm install
````

### 2️⃣ Tailwind Setup

If using Tailwind v4, `index.css` should contain:

```css
@import "tailwindcss";
```

### 3️⃣ Run the app

```bash
npm run dev
```

Frontend will be running at:
👉 **[http://localhost:5173](http://localhost:5173)**

---

## 📸 Screenshots

### 🟣 Text-to-Speech

* Enter text → Convert → Play audio

### 🟣 Q\&A Assistant

* Ask any question → Get **summary** + **direct answer**

---

## ✨ Future Improvements

* Dark mode
* Select different voices for TTS
* Save conversation history

---

## 👩‍💻 Author

Developed by **Eman Qadry**

* Full Stack Developer (MERN + NestJS)
* 💼 GitHub: [eman-qadry](https://github.com/eman-qadry)

```

---


```
