
import { useState } from "react";
import axios from "axios";
import { HiQuestionMarkCircle } from "react-icons/hi2";

export default function QnAAssistant() {
  const [question, setQuestion] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const maxChars = 2000;

const   handleAsk = async () => {
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
    <div className="bg-gray-50 rounded-xl shadow p-6">
      <div className="flex items-center gap-2 mb-4">
        <HiQuestionMarkCircle className="text-purple-600 text-2xl" />
        <h2 className="text-xl font-bold text-gray-800">Ask a Question</h2>
      </div>
      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="w-full bg-white border border-gray-200 rounded-lg p-4 mb-2 shadow focus:outline-none focus:ring-2 focus:ring-purple-300 text-gray-700 resize-none transition"
        placeholder="Type your question..."
        rows={5}
        maxLength={maxChars}
      ></textarea>
      <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
        <span>{question.length}/{maxChars} characters</span>
      </div>
      <button
        onClick={handleAsk}
        className="w-full py-3 bg-purple-500 text-white font-semibold rounded-lg shadow hover:bg-purple-600 transition disabled:opacity-60"
        disabled={loading || !question.trim()}
      >
        {loading ? "Thinking..." : "Ask AI"}
      </button>

      {result && (
        <div className="mt-6 p-6 rounded-xl bg-white shadow">
          <p className="font-semibold text-purple-700 mb-2">Summary:</p>
          <p className="mb-4 text-gray-700">{result.summary}</p>
          <p className="font-semibold text-purple-700 mb-2">Answer:</p>
          <p className="mb-4 text-gray-700">{result.answer}</p>
          <button
            onClick={() => handleCopy(result.answer)}
            className="px-4 py-2 bg-gray-100 text-purple-700 rounded-lg hover:bg-purple-200 font-semibold"
          >
            Copy Answer
          </button>
        </div>
      )}
    </div>
  );
}
