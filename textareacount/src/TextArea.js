import React, { useState } from "react";

const TextArea = () => {
  const [characterCount, setCharacterCount] = useState(0);
  return (
    <div className="areas">
      <textarea
        placeholder="some text"
        onChange={(e) => setCharacterCount(e.target.value.length)}
      ></textarea>
      <p>Total Number of characters: {characterCount}</p>
    </div>
  );
};

export default TextArea;
