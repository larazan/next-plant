import React, { useState } from "react";

const DropFilter = (props) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div
      className={` ${
        props.bg ? "bg-[#" + props.bg + "]" : "bg-white"
      } py-0 flex flex-col w-full `}
    >
        
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex items-center justify-between py-3 group font-semibold md:font-bold"
      >
        <span className="text-sm font-bold text-gray-900">{props.title}</span>
        {accordionOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4 text-gray-900"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 15.75 7.5-7.5 7.5 7.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4 text-gray-900"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
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

export default DropFilter;
