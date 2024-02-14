"use client";
import { useState } from "react";

const Setting = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="text-center">
      <div className="text-[36px] font-bold my-8">Settings</div>
      <div className="flex flex-col gap-3 items-center justify-center">
        <form className=" flex border-2 border-black w-[350px] px-3 py-4 rounded-lg mx-auto items-center justify-center gap-1">
          <label className="font-bold text-[20px] ">Set count = </label>
          <input
            type="text"
            name=""
            className="border w-[100px] rounded text-[20px] text-center py-2"
          ></input>
        </form>
        <form className="flex flex-col border-2 border-black w-[350px] px-3 py-4 rounded-lg mx-auto items-center justify-center">
          <div className="flex">
            <label class="inline-flex relative items-center mr-5 cursor-pointer gap-3 mb-4">
              <span className="font-bold text-[20px] ">Limits Off/ On</span>
              <input
                type="checkbox"
                className="sr-only peer"
                checked={enabled}
                readOnly
              />
              <div
                onClick={() => {
                  setEnabled(!enabled);
                }}
                className="w-11 h-[20px] bg-gray-200 rounded-full peer  peer-focus:ring-green-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1.1 after:left-[141px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[20px] after:w-5 after:transition-all peer-checked:bg-green-600"
              ></div>
            </label>
          </div>

          <div>
            <label className="font-bold text-[20px] ">Maximum = </label>
            <input
              type="text"
              name=""
              className="border w-[100px] rounded text-[20px] text-center py-1"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Setting;
