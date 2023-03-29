import React, { useState } from "react";
export function Button() {
  // const [active, setActive] = useState(false);
  const [color, setColor] = useState("#E75ED8");
  // we took a state that was a boolean (first it's true, then false) but it can be anything - a string, an object. in this case we turned the boolean, which was toggling two separate colors on and off (in a setActive function) into a string that was our default. The most powerful way it can be used is an object. We were able to change it to a random color without any database. React and dynamic CSS are excellent together.

  const [hidden, setHidden] = useState("none");

  const handleClick = () => {
    setColor(randomColor());
    setHidden("block");
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

  console.log(randomColor());

  return (
    <div>
      {/* <button onClick={handleClick} className={active ? "default" : "success"}> */}
      <button
        onClick={handleClick}
        style={{
          backgroundColor: color,
        }}
      >
        New color!
      </button>
      <p
        style={{
          display: hidden,
        }}
      >
        Nice choice!
      </p>
    </div>
  );
}
