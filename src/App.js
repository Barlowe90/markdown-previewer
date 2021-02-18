import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [text, setText] = useState("");

  useEffect(() => {
    setText({ text });
  });

  return (
    <div className="text-center mt-5">
      <textarea
        id="editor"
        className=""
        rows="6"
        cols="50"
        autoFocus
        onClick={() => setText(text)}
      >
        {text}
      </textarea>

      <div id="preview-text">
        <textarea id="preview" className="" readOnly rows="25" cols="100">
          {setText}
        </textarea>
      </div>
    </div>
  );
}

export default App;
