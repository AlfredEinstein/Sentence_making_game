import React, { useState } from "react";
import "./game.css";
function Game() {
  const [wordInput, setWordInput] = useState();
  return (
    <div
      className="d-flex flex-column bd-highlight mb-3 gamepad shadow"
      style={{ minHeight: "100%" }}
    >
      <div className="border border-dark flex-grow-1 sentence bd-highlight p-4">
        {wordInput ? wordInput : "Give some input...."}
      </div>
      <div className="wordEnter bd-highlight">
        <div className="input-group mb-3 p-3">
          <span className="input-group-text" id="basic-addon1">
            Enter you creativity
          </span>
          <input
            type="text"
            className="form-control p-2"
            placeholder="once upon a time....."
            name="wordInput"
            value={wordInput}
            onChange={(e) => setWordInput(e.target.value)}
            aria-label="wordInput"
            pattern="^\w+$"
            aria-describedby="basic-addon1"
          />
        </div>
      </div>
    </div>
  );
}

export default Game;
