import React, { useState } from "react";

const useToggle = (defaultVal = false) => {
  const [state, setToggleState] = useState(defaultVal);
  const toggle = () => {
    setToggleState(!state);
  };
  return [state, toggle];
};

// exports state for toggle and toggle function
export default useToggle;
