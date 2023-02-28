import React, { useState } from "react";
export function Button() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div>
      <button onClick={handleClick} className={active ? "default" : "success"}>
        New color!
      </button>
    </div>
  );
}
