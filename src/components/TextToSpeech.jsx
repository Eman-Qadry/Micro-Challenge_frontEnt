import { useState } from "react";
import axios from "axios";
import { HiSpeakerWave } from "react-icons/hi2";

export default function TextToSpeech() {
  const [text, setText] = useState("");
  const [audio, setAudio] = useState(null);
  const [loading, setLoading] = useState(false);
  const maxChars = 2000;

  const handleConvert = async () => {
    if (!text.trim()) return;
    setLoading(true);
    try {
      const res = await axios.post("https://micro-challenge-backend.vercel.app/api/tts", { text });
      const audioBase64 = res.data.audio;
      setAudio(`data:audio/mpeg;base64,${audioBase64}`);
    } catch (err) {
      alert("Error converting text to speech");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 rounded-xl shadow p-6">
      <div className="flex items-center gap-2 mb-4">
        <HiSpeakerWave className="text-purple-600 text-2xl" />
        <h2 className="text-xl font-bold text-gray-800">Enter Text to Convert</h2>
      </div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full bg-white border border-gray-200 rounded-lg p-4 mb-2 shadow focus:outline-none focus:ring-2 focus:ring-purple-300 text-gray-700 resize-none transition"
        placeholder="Type or paste the text you want to convert to speech..."
        rows={5}
        maxLength={maxChars}
      ></textarea>
      <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
        <span>{text.length}/{maxChars} characters</span>
      </div>
      <button
        onClick={handleConvert}
        className="w-full py-3 bg-purple-500 text-white font-semibold rounded-lg shadow hover:bg-purple-600 transition disabled:opacity-60"
        disabled={loading || !text.trim()}
      >
        {loading ? "Generating..." : "Generate Speech"}
      </button>

      {audio && (
        <div className="mt-6">
          <audio controls src={audio} className="w-full" />
        </div>
      )}
    </div>
  );
}
