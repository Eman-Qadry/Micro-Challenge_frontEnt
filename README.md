
#  AI Assistant Frontend

This is the **Frontend** of the AI Assistant project.  
It provides a modern and responsive UI to interact with:
-  **Text-to-Speech** using ElevenLabs API  
-  **AI Q&A Assistant** powered by Perplexity / OpenAI  

---

### Reflection
The main challenge I faced was with the Perplexity search model, since I could not get a valid API key in time, which limited the functionality of that part.  

If I had more time, I would focus on:  
- On the UI side, I would have loved to improve the design and make it more user-friendly.  
- For the text-to-speech feature, my idea was to let users choose between multiple available voices or even upload/record their own voice and use it for synthesis.  
- Adding proper error handling and loading states.   
- Writing more unit tests to ensure reliability.  
- Improving accessibility and responsive design.
- Add Dark mode
- Save conversation history

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

##  🌐 Live Demo

🔗 Click here to try the live demo [https://micro-challenge-front-ent.vercel.app/]

📌 Repositories

Frontend: [https://github.com/Eman-Qadry/Micro-Challenge_frontEnt]

Backend: [https://github.com/Eman-Qadry/Micro-Challenge_backend]

### 🟣 Text-to-Speech

* Enter text → Convert → Play audio

### 🟣 Q\&A Assistant

* Ask any question → Get **summary** + **direct answer**

---

---

## 👩‍💻 Author

Developed by **Eman Qadry**

* Full Stack Developer (MERN + NestJS)
* 💼 GitHub: [eman-qadry](https://github.com/Eman-Qadry)

```

---


```
