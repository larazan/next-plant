"use client";

import React from "react";

const AccordionItem = ({ open, toggle, title, desc }) => {
  return (
    <div className="w-full py-2 px-2 md:px-6 border2 border-gray-400 rounded-lg bg-white">
      <dt className="w-full text-lg">
        <button
          className="flex items-center justify-between2 space-x-4 w-full text-left text-gray-400"
          id="headlessui-disclosure-button-11"
          type="button"
          aria-expanded="true"
          aria-controls="headlessui-disclosure-panel-12"
          onClick={toggle}
        >
          <span className={`flex items-center ml-0  px-1.5 py-1.5 rounded-full border border-gray-300 ${open ? 'bg-gray-900' : ''} `}>
            <span className="text-primary font-normal text-2xl">
              {open ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-900 transition duration-150 hover:rotate-90"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              )}
            </span>
          </span>
          <div className="text-gray-900">{title}</div>
        </button>
      </dt>
      {open ? (
        <dd className="pr-0 md:pr-12 mt-2" id="headlessui-disclosure-panel-12">
          <p className="text-base text-gray-700">
            <div>{desc}</div>
          </p>
        </dd>
      ) : (
        <></>
      )}
    </div>
  );
};

export default AccordionItem;
