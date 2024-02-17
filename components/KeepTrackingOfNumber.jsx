"use client";

import { useState } from "react";
import Setting from "./Setting";
import Count from "./Count";

const KeepTrackingOfNumber = () => {
  const [initialCount, setIntialCount] = useState(0);

  return (
    <div>
      <Setting setIntialCount={setIntialCount} />
      <Count initialCount={initialCount} />
    </div>
  );
};

export default KeepTrackingOfNumber;
