import { useState, useEffect } from "react";
import { Button } from "./Button";

// Right now Random color stores a color that changes when you push a button.
export function Random() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div>
      <Button />;
    </div>
  );
}
