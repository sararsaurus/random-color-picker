import React, { useState } from "react";
export function Button() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
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
      <button onClick={handleClick} className={active ? "default" : "success"}>
        New color!
      </button>
    </div>
  );
}
