import { useState } from "react";
import axios from "axios";

export default function TextToSpeech() {
  const [text, setText] = useState("");
  const [audio, setAudio] = useState(null);
  const [loading, setLoading] = useState(false);

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
    <div>
      <h2 className="text-xl font-semibold mb-4">Enter Text to Convert</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full border rounded-lg p-3 mb-4"
        placeholder="Type text here..."
        rows={4}
      ></textarea>
      <button
        onClick={handleConvert}
        className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate Speech"}
      </button>

      {audio && (
        <div className="mt-4">
          <audio controls src={audio}></audio>
        </div>
      )}
    </div>
  );
}
