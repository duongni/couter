"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import Count from "./count";

const CounterPage = () => {
  const [count, setCount] = useState(0);

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div>
      <Navbar resetCount={resetCount} />
      <Count count={count} setCount={setCount} />
    </div>
  );
};

export default CounterPage;
