"use client";

import { XCircle } from "lucide-react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Settings } from "lucide-react";

const Setting = () => {
  const [enabled, setEnabled] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  function closeSetting() {
    setIsOpen(false);
  }
  function openSetting() {
    setIsOpen(true);
  }
  return (
    <>
      <Settings
        size={20}
        className="hover:cursor-pointer hover:scale-125 ease-in-out duration-300"
        onClick={openSetting}
      />
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeSetting}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-gray-300 p-6 text-left align-middle shadow-xl transition-all">
                  <div className="text-center">
                    <div className="text-[36px] font-bold my-8">Settings</div>
                    <div className="flex flex-col gap-3 items-center justify-center">
                      <form className=" flex border-2 bg-white/80w-[350px] px-3 py-4 rounded-lg mx-auto items-center justify-center gap-1">
                        <label className="font-bold text-[20px] ">
                          Set count ={" "}
                        </label>
                        <input
                          type="text"
                          name=""
                          className="w-[100px] rounded text-[20px] text-center py-2 bg-gray-200 focus:outline-none"
                        ></input>
                      </form>
                      <form className="flex flex-col border-2 w-[350px] px-3 py-4 rounded-lg mx-auto items-center justify-center">
                        <div className="flex">
                          <label class="inline-flex relative items-center mr-5 cursor-pointer gap-3 mb-4">
                            <span className="font-bold text-[20px] ">
                              Limits Off/ On
                            </span>
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
                          <label className="font-bold text-[20px] ">
                            Maximum ={" "}
                          </label>
                          <input
                            type="text"
                            name=""
                            className="bg-gray-200 w-[100px] rounded text-[20px] text-center py-1 focus:outline-none"
                          ></input>
                        </div>
                      </form>
                    </div>
                    <XCircle
                      className="mx-auto mt-[50px] mb-[20px]"
                      onClick={closeSetting}
                    />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Setting;
