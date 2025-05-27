"use client";
import axios from "axios";
import { useState } from "react";

export default function AIContentGenerator() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerateContent = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.post(
        "https://bookify-server-five.vercel.app/generate-content",
        { prompt }
      );
      // console.log("API Response:", res.data); // Log the response
      setResponse(res.data.answer); // Set the answer directly from the server response
    } catch (err) {
      console.error("Error generating content:", err);
      setError("Failed to generate content. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Generate AI Content</h1>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your prompt here"
        rows="4"
        cols="50"
      />
      <button onClick={handleGenerateContent} disabled={loading}>
        {loading ? "Generating..." : "Generate"}
      </button>

      {response && (
        <div>
          <h2>Response:</h2>
          <p>{response}</p> {/* Display the answer directly */}
        </div>
      )}

      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
}
