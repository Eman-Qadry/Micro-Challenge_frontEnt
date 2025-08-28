import { useState } from "react";
import TextToSpeech from "./components/TextToSpeech";
import QnAAssistant from "./components/QnAAssistant";

function App() {
  const [activeTab, setActiveTab] = useState("tts");

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-purple-600 mb-6">AI Assistant Suite</h1>

      {/* Tabs */}
      <div className="flex space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded-lg ${activeTab === "tts" ? "bg-purple-600 text-white" : "bg-gray-200"}`}
          onClick={() => setActiveTab("tts")}
        >
          Text to Speech
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${activeTab === "qa" ? "bg-purple-600 text-white" : "bg-gray-200"}`}
          onClick={() => setActiveTab("qa")}
        >
          Q&A Assistant
        </button>
      </div>

      {/* Content */}
      <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-6">
        {activeTab === "tts" ? <TextToSpeech /> : <QnAAssistant />}
      </div>
    </div>
  );
}

export default App;
