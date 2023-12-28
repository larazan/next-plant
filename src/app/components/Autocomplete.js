// "use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const Autocomplete = ({ showSearch, setShowSearch }) => {
  // const [show, setShow] = useState(false);

  const handleClick = () => {
    setShowSearch(true);
  };

  const closeSearch = () => {
    setShowSearch(false);
  };

  let autoRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!autoRef.current.contains(e.target)) {
        setShowSearch(false);
        console.log(autoRef.current);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <>
    <header className={`absolute z-40 ${showSearch == false ? 'hidden' : 'flex'} h-14 md:h-16 w-full top-0 md:m-0 px-4 md:px-6 py-6 md:py-3  items-center justify-between bg-[#00634b] shadow2`}>

    <div className="w-1/12"></div>
      <div className="relative w-10/12   flex-col" ref={autoRef}>
        <div
          className={` ${
            showSearch == false ? "bg-[#f4f4f4]" : "bg-white"
          } relative flex w-full items-center  rounded z-30`}
        >
          <div className="pl-4">
            <svg
              className="fill-current text-gray-800 w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                className="heroicon-ui"
                d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
              />
            </svg>
          </div>
          <input
            className="w-full rounded bg-transparent text-gray-700 leading-tight focus:outline-none py-2 md:py-3 px-2"
            id="search"
            type="text"
            placeholder="Search something"
            // onClick={handleClick}
          />
          <button className="absolute flex justify-center items-center top-1 md:top-1.5 right-1 md:right-2 w-7 h-7 md:w-[32px] md:h-[32px] py-1 px-1 bg-gray-200 hover:bg-gray-300  rounded-full text-md text-black transition duration-200 " onClick={closeSearch}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

          </button>
        </div>
        {/* <div className="absolute top-0 w-full z-40">
          <div
            className={` ${
              showSearch == false ? "hidden" : "flex"
            }  px-0 pb-0  flex-col space-y-4 w-full bg-pink-200 rounded-3xl`}
          >
            <div className="flex flex-col space-y-0">
              <div className="relative flex w-full items-center  rounded-3xl z-40 py-.5">
                <div className="pl-4">
                  <svg
                    className="fill-current text-gray-800 w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      className="heroicon-ui"
                      d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                    />
                  </svg>
                </div>
                <input
                  className="w-full rounded-3xl bg-transparent text-gray-700 leading-tight focus:outline-none py-3 px-2"
                  id="search"
                  type="text"
                  placeholder="Search something"
                />
                <button className="absolute flex justify-center items-center top-1.5 right-2 w-[32px] h-[32px] py-1 px-1 bg-[#ffb3c7] hover:opacity-90  rounded-full text-md text-black transition duration-200 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </button>
              </div>
              <div className="px-4">
                <div className="h-px bg-mercury"></div>
              </div>
            </div>
           
          </div>
        </div> */}
      </div>
      <div className="w-1/12"></div>
      </header>
      {showSearch ? (
        <div className="opacity-50 fixed inset-0 z-30 bg-black"></div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Autocomplete;
