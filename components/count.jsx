"use client";

import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="">
      <div className="h-screen flex items-center justify-between mx-6">
        <Minus
          color="#111827"
          size={60}
          className="border border-[#111827] rounded-full hover:cursor-pointer opacity-80 "
          onClick={() => {
            setCount((preCount) => preCount - 1);
          }}
        />

        <div className="font-light sm:text-[260px] text-gray-900 text-[150px]">
          {count}
        </div>

        <Plus
          color="#111827"
          size={60}
          className="border border-[#111827] rounded-full hover:cursor-pointer opacity-80"
          onClick={() => {
            setCount((preCount) => preCount + 1);
          }}
        />
      </div>
    </div>
  );
};

export default Count;
