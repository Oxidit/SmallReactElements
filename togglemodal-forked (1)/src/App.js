import "./styles.css";
import React, { useState } from "react";

function App() {
  const [modalState, setModalState] = useState(false);

  const toggleModalState = () => {
    setModalState(!modalState);
  };
  return (
    <div className="App">
      <div className={`modalBackground modalShowing-${modalState}`}>
        <div className="modalInner">
          <div className="modalImage">
            <img
              src="https://images.unsplash.com/photo-1535262412227-85541e910204?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fGJlYWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
              alt="modal pic"
            />
          </div>
          <div className="modalText">
            <h2>our header</h2>
            <p>Lorem40</p>
            <form action="">
              <button>Join now</button>
            </form>
            <button className="exitButton" onClick={() => toggleModalState()}>
              {" "}
              exit
            </button>
          </div>
        </div>
      </div>
      <button onClick={() => toggleModalState()}>Open</button>
    </div>
  );
}

export default App;
