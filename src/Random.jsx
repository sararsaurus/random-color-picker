import { useState, useEffect } from "react";
import { Button } from "./Button";

// First step: Random color stores a color that changes when you push a button.
export function Random() {
  // Declaring color and giving it state.
  const [color, setColor] = useState("");

  // Convert lifecycle stuff to useEffect, which will eventually allow us to change the default color when the page loads
  useEffect(() => {
    setColor("#000000");
    document.body.style.background = color;
  });

  return (
    <div>
      <Button />;
    </div>
  );
}
