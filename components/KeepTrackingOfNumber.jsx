"use client";

import { useState, useEffect } from "react";
import Setting from "./Setting";
import Count from "./Count";

const KeepTrackingOfNumber = () => {
  const [initialCount, setIntialCount] = useState(0);

  const handleInitialCountChange = (newInitialCount) => {
    setIntialCount(newInitialCount);
  };

  return (
    <div>
      <Setting onInitialCountChange={handleInitialCountChange} />
      <Count initialCount={initialCount} />
    </div>
  );
};

export default KeepTrackingOfNumber;
