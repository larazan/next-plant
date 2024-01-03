"use client"

import React, { useState } from "react";

const DropMenu = (props) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div
      className={` ${
        props.bg ? "bg-[#" + props.bg + "]" : "bg-white"
      } py-0 flex flex-col w-full `}
    >
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex items-center justify-between border-t border-black/30 px-3 py-2 group text-base"
      >
        <span className="font-bold text-white">{props.title}</span>
        {accordionOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 text-white"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        )}
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        {props.children}
      </div>
    </div>
  );
};

export default DropMenu;
