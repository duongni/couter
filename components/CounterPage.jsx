"use client";

import { useState } from "react";
import Count from "./Count";
import Navbar from "./Navbar";

const CounterPage = () => {
  const [count, setCount] = useState(0);

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div>
      <Navbar resetCount={resetCount} /> {/* Pass resetCount as a prop */}
    </div>
  );
};

export default CounterPage;
