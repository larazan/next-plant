import React, { useState } from "react";

import FilterPopup from "../components/FilterPopup";

const SortOpt = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="py-3 col-span-full col-start-1 flex flex-wrap items-center justify-between gap-2 md:col-start-5 md:flex-nowrap xl:col-start-4 xl:col-end-12 ">
        <div className="flex md:hidden w-max rounded-full border-gray-400 border border-solid hover:shadow-md transform duration-200 hover:scale-105">
          <button
            className="filter2 place-content-center flex w-full space-x-1 px-2 items-center py-1 text-black focus:outline-none "
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="transform rotate-90">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-gray-900"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                />
              </svg>
            </div>
            <span className="text-sm font-semibold">Filter</span>
          </button>
        </div>
        <div className="flex flex-row items-center justify-between gap-1 md:gap-2">
          <span className="flex-none text-sm text-gray-900">sort by:</span>
          <select className="w-full text-sm text-gray-900 py-1 xl:py-2 tracking-tighter focus:border-primary focus:ring focus:ring-inset focus:ring-primary disabled:bg-grayish disabled:bg-none h-full border border-gray-400 px-2 rounded-full pr-2 text-sm leading-none">
            <option value="default" selected="">
              recommended sorting
            </option>
            <option value="name-asc">name: ascending</option>
            <option value="name-desc">name: descending</option>
            <option value="price-asc">price: low to high</option>
            <option value="price-desc">price: high to low</option>
            <option value="relevance-asc">relevance: ascending</option>
            <option value="relevance-desc">relevance: descending</option>
          </select>
        </div>
        <span className="text-xs text-gray-500">
          showing 1-20 of 583 results
        </span>
      </div>
      <FilterPopup
        isOpen={isOpen}
        handleClose={handleClose}
        setIsOpen={setIsOpen}
      />
    </>
  );
};

export default SortOpt;
