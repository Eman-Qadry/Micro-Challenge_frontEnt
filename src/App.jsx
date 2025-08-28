import { useState } from "react";
import TextToSpeech from "./components/TextToSpeech";
import QnAAssistant from "./components/QnAAssistant";
import { HiSpeakerWave, HiQuestionMarkCircle } from "react-icons/hi2";


function App() {
  const [activeTab, setActiveTab] = useState("tts");

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="flex flex-col items-center w-full">
        <div className="mb-8 text-center">
          <div className="flex flex-col items-center">
            <span className="bg-purple-100 rounded-full p-4 mb-2">
              <HiSpeakerWave className="text-purple-500 text-5xl" />
            </span>
            <h1 className="text-4xl font-extrabold text-purple-700 mb-2">AI Assistant Suite</h1>
            <p className="text-lg text-gray-600">Text-to-Speech & Intelligent Q&A Assistant</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-6 w-full max-w-xl">
          <div className="bg-gray-100 rounded-xl flex w-full">
            <button
              className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-150 ${activeTab === "tts" ? "bg-white shadow text-purple-700" : "text-gray-500"}`}
              onClick={() => setActiveTab("tts")}
            >
              <HiSpeakerWave className="text-2xl" />
              Text to Speech
            </button>
            <button
              className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-150 ${activeTab === "qa" ? "bg-white shadow text-purple-700" : "text-gray-500"}`}
              onClick={() => setActiveTab("qa")}
            >
              <HiQuestionMarkCircle className="text-2xl" />
              Q&A Assistant
            </button>
          </div>
        </div>

        {/* Content Card */}
        <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-8">
          {activeTab === "tts" ? (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <HiSpeakerWave className="text-purple-500 text-3xl" />
                <h2 className="text-2xl font-bold text-purple-700">Text to Speech</h2>
              </div>
              <p className="text-gray-500 mb-6">Convert any text into natural-sounding speech</p>
              <TextToSpeech />
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <HiQuestionMarkCircle className="text-purple-500 text-3xl" />
                <h2 className="text-2xl font-bold text-purple-700">Q&A Assistant</h2>
              </div>
              <p className="text-gray-500 mb-6">Ask questions and get intelligent answers</p>
              <QnAAssistant />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
