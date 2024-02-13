"use client";
import { Info, RotateCw, Settings } from "lucide-react";

const Navbar = ({ resetCount }) => {
  return (
    <div className="flex items-center justify-center gap-6 mt-10 transition ">
      <Info
        color="#111827"
        size={25}
        className="hover:cursor-pointer hover:scale-105"
      />
      <RotateCw
        color="#111827"
        className="hover:cursor-pointer hover:scale-105"
        size={25}
        onClick={() => {
          resetCount();
        }}
      />
      <Settings
        color="#111827"
        size={25}
        className="hover:cursor-pointer hover:scale-105"
      />
    </div>
  );
};

export default Navbar;
