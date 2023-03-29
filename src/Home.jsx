import React, { useState } from "react";

export function Home() {
  const [status, setStatus] = useState({ color: "#E75ED8", hidden: "none" });

  const handleClick = () => {
    setStatus({ color: randomColor(), hidden: "block" });
  };

  // random color generator
  const randomColor = () => {
    return (
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")
        .toUpperCase()
    );
  };

  return (
    <div
      style={{
        backgroundColor: status.color,
      }}
    >
      <h1>Pick a new color!</h1>
      <button onClick={handleClick}>New color!</button>
      <p
        style={{
          display: status.hidden,
        }}
      >
        Nice choice!
      </p>
    </div>
  );
}
