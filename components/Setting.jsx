import React from "react";

const Setting = () => {
  return (
    <div className="text-center">
      <div className="text-[36px] font-bold my-8">Settings</div>
      <form className="border-2 border-black w-[350px] px-3 py-4 rounded-lg mx-auto">
        <label className="font-bold text-[20px] ">Set count = </label>
        <input
          type="text"
          name=""
          className="border w-[100px] rounded text-[20px] text-center py-2"
        ></input>
      </form>
      <form className="border-2 border-black w-[350px] px-3 py-4 rounded-lg mx-auto">
        <div>
          <label className="font-bold text-[20px] ">Limits Off/ On</label>
          <input
            type="text"
            name=""
            className="border w-[100px] rounded text-[20px] text-center py-2"
          ></input>
        </div>
        <div>
          <label className="font-bold text-[20px] ">Maximum = </label>
          <input
            type="text"
            name=""
            className="border w-[100px] rounded text-[20px] text-center py-2"
          ></input>
        </div>
      </form>
    </div>
  );
};

export default Setting;
