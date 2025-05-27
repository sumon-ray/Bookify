import BookSpinner from "@/app/ai-chat/BookSpinner";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaCopy, FaExclamationTriangle } from "react-icons/fa";
import Modal from "react-modal";
import AIResponse from "./AIResponse";
import CloseButton from "./CloseButton";

// Modal style
const customStyles = {
  content: {
    position: "fixed",
    top: "48%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "12px",
    padding: "20px",
    border: "none",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    // backgroundColor: "#f9fafb",
    maxWidth: "600px",
    width: "90%",
    overflow: "hidden",
    zIndex: 1000,
  },
};

const contentStyles = {
  maxHeight: "300px",
  overflowY: "auto",
};

const noticeStyles = {
  backgroundColor: "#fffae6",
  border: "1px solid #ffeeba",
  borderRadius: "8px",
  padding: "12px",
  marginBottom: "16px",
  textAlign: "center",
  fontSize: "14px",
  color: "#856404",
  display: "flex",
  alignItems: "center",
  gap: "8px",
};

export default function BookSummaryModal({ isOpen, onClose, book }) {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen && book) {
      fetchAIResponse(book);
    }
  }, [isOpen, book]);

  const fetchAIResponse = async (book) => {
    const query = `Summary for "${book.title}" by ${book.author}`;
    setLoading(true);
    setResponse("");

    try {
      const res = await axios.post(
        "https://bookify-server-five.vercel.app/generate-content",
        { prompt: query }
      );
      // console.log(res)
      const answer = res.data.answer || "No summary available.";
      setResponse(answer);
    } catch (error) {
      console.error("Error asking AI:", error);
      if (error.response) {
        setResponse("Server error: " + error.response.data.message);
      } else {
        setResponse(
          "Network error. Please check your connection and try again."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setResponse("");
    onClose();
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(response);
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } max-w-md w-full bg-white dark:bg-[#27272733] dark:text-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">📋 Response copied to clipboard!</div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-black hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Close
          </button>
        </div>
      </div>
    ));
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      style={{
        ...customStyles,
        overlay: {
          background: "rgba(0, 0, 0, 0.7)",
        },
      }}
      contentLabel="Book Summary Modal"
      className={`overflow-auto ${isOpen ? "!backdrop-blur-lg" : ""}`} // Apply backdrop blur if modal is open
    >
      <div className="relative ">
        <h2 className="text-3xl font-bold mb-6 text-center text-slate-200   dark:text-white">
          Book Summary
        </h2>

        <div style={noticeStyles}>
          <FaExclamationTriangle size={20} />
          This is an AI-generated summary. The result may not be 100% accurate.
        </div>

        {loading && <BookSpinner />}

        <div style={contentStyles}>
          {response && (
            <AIResponse response={response} onCopy={copyToClipboard} />
          )}
        </div>

        <div className="flex gap-8 justify-between items-center mt-4">
          <div className="flex gap-8 justify-center">
            <FaCopy
              onClick={copyToClipboard}
              size={24}
              className="cursor-pointer text-white dark:text-white"
              title="Copy to clipboard"
            />
          </div>
          <CloseButton onClose={handleClose} />
        </div>
      </div>
    </Modal>
  );
}
