import { useState } from "react";
import axios from "axios";

export default function QnAAssistant() {
  const [question, setQuestion] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!question.trim()) return;
    setLoading(true);
    try {
      const res = await axios.post("https://micro-challenge-backend.vercel.app/api/ask", { question });
      setResult(res.data);
    } catch (err) {
      alert("Error fetching answer");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Ask a Question</h2>
      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="w-full border rounded-lg p-3 mb-4"
        placeholder="Type your question..."
        rows={4}
      ></textarea>
      <button
        onClick={handleAsk}
        className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
        disabled={loading}
      >
        {loading ? "Thinking..." : "Ask"}
      </button>

      {result && (
        <div className="mt-6 p-4 border rounded-lg bg-gray-50">
          <p className="font-semibold">Summary:</p>
          <p className="mb-2">{result.summary}</p>
          <p className="font-semibold">Answer:</p>
          <p className="mb-2">{result.answer}</p>
          <button
            onClick={() => handleCopy(result.answer)}
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
          >
            Copy Answer
          </button>
        </div>
      )}
    </div>
  );
}
