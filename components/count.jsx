"use client";
import { Plus, Minus, Info, RotateCw } from "lucide-react";
import { useState } from "react";
import { ModeToggle } from "./ModeToggle";
import Setting from "./Setting";

const Count = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="h-screen max-w-[1300px] mx-auto flex flex-1 flex-col justify-start gap-20">
      <div className="flex flex-row items-center justify-around gap-6 mt-10 xs:mt-20 transition h-[100px] sm:h-[200px]">
        <div className="flex flex-row gap-6 items-center ">
          <Info
            size={20}
            className="hover:cursor-pointer hover:scale-125 ease-in-out duration-300"
          />
          <RotateCw
            className="hover:cursor-pointer hover:scale-125 ease-in-out duration-300"
            size={20}
            onClick={() => {
              setCount(0);
            }}
          />
          <Setting setCount={setCount} />
          <ModeToggle />
        </div>
      </div>
      <div className=" flex items-center justify-between mx-6 ">
        <Minus
          size={60}
          className="border rounded-full hover:cursor-pointer opacity-80 "
          onClick={() => {
            setCount((preCount) => preCount - 1);
          }}
        />

        <div className="font-light sm:text-[260px] text-[150px]">{count}</div>

        <Plus
          size={60}
          className="border  rounded-full hover:cursor-pointer opacity-80"
          onClick={() => {
            setCount((preCount) => preCount + 1);
          }}
        />
      </div>
    </div>
  );
};

export default Count;
