import "./styles.css";
import React from "react";

function NewButton(props) {
  const [likes, setLikes] = React.useState(0);

  return (
    <div>
      <button className="button" onClick={() => setLikes(likes + 1)}>
        I like {likes}
      </button>
    </div>
  );
}

export default NewButton;
