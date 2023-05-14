import React, { useState } from "react";

function GuessInput() {
  const [guessInput, setGuessInput] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log({ guess: guessInput });
        setGuessInput("");
      }}
      className="guess-input-wrapper"
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        pattern="[A-Za-z]{5}"
        value={guessInput}
        onChange={(event) => {
          const upperCaseGuessInput = event.target.value.toUpperCase();
          setGuessInput(upperCaseGuessInput);
        }}
      ></input>
    </form>
  );
}

export default GuessInput;