import React, { useState } from "react";

const Accordion = (props) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className={` ${props.bg ? 'bg-[#'+props.bg+']' : 'bg-white'} py-0 flex flex-col w-full `}>
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex items-center justify-between h-12 px-3 group text-base md:text-[18px] font-semibold md:font-bold"
      >
        <span className="text-white">{props.title}</span>
        {accordionOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white transition duration-150 group-hover:rotate-90"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m6-6H6"
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

export default Accordion;
