import React, { useState } from "react";

const useAnimations = (defaultVal = false) => {
  const [state, setAnimations] = useState(defaultVal);
  const startAnimations = () => {
    setAnimations(true);
  };
  return [state, startAnimations];
};

// exports state for toggle and toggle function
export default useAnimations;
