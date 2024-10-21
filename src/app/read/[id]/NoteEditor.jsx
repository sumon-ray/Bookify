// NoteEditor.js
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; 

const NoteEditor = ({ initialValue }) => {
  const [editorHtml, setEditorHtml] = useState(initialValue || "");

  const handleChange = (html) => {
    setEditorHtml(html);
  };

  return (
    <div>
      <ReactQuill
        value={editorHtml}
        onChange={handleChange}
        modules={{
          toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline", "strike"],
            ["link", "image"],
            ["clean"], 
            ["color", "background"],
          ],
        }}
      />
    </div>
  );
};

export default NoteEditor;
