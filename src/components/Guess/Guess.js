import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  return (
    <p className="guess">
      {range(5).map((index) => {
        return (
          <span key={index} className="cell">
            {guess ? guess[index] : undefined}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;