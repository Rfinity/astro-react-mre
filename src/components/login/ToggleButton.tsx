import React from "react";
import { isLoggedIn } from "./state";
import { useStore } from "@nanostores/react";

const ToggleButton: React.FC = () => {
  const $isLoggedIn = useStore(isLoggedIn);
  return <div className="absolute top-8 middle-8"><button onClick={() => isLoggedIn.set(!$isLoggedIn)}>
    Toggle
  </button></div>
};

export default ToggleButton;
