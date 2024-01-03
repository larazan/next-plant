import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import Accordion from "./Accordion";
import DropFilter from "./DropFilter";

const FilterPopup = ({ isOpen, handleClose, setIsOpen }) => {
  let autoRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!autoRef.current.contains(e.target)) {
        setIsOpen(false);
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
      <div
        className={`${
          isOpen ? "left-0" : "-left-full"
        } flex flex-col w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] transition-all duration-300 z-50 px-4 lg:px-[35px]`}
        ref={autoRef}
      >
        <div className="flex w-full items-center justify-between py-4 border-b">
          <div className="w-1/2">
            <span className="uppercase font-semibold text-gray-900">Filters</span>
          </div>

          <div className="flex justify-end w-1/2">
            <div
              onClick={handleClose}
              className="cursor-pointer w-8 h-8 flex justify-center items-center rounded-full bg-pink-200 hover:bg-pink-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 text-gray-900"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="divide-y">
          <DropFilter title="Size">
            <div className="overflow-hidden pb-0">
              <div className="duration-300 px-0 pb-3">
                <div className="space-y-1">
                  <ul className="flex flex-row flex-wrap justify-start gap-2">
                    <li>
                      <span className="flex h-10 w-10 cursor-pointer select-none items-center justify-center rounded-full bg-[#f3f4f3] text-[#7e8784] h-8 w-8 lg:h-9 lg:w-9">
                        <button className="h-full w-full outline-none focus:outline-none">
                          S
                        </button>
                      </span>
                    </li>
                    <li>
                      <span className="flex h-10 w-10 cursor-pointer select-none items-center justify-center rounded-full bg-[#7e8784] text-[#f3f4f3] h-8 w-8 lg:h-9 lg:w-9">
                        <button className="h-full w-full outline-none focus:outline-none">
                          M
                        </button>
                      </span>
                    </li>
                    <li>
                      <span className="flex h-10 w-10 cursor-pointer select-none items-center justify-center rounded-full bg-[#f3f4f3] text-[#7e8784] h-8 w-8 lg:h-9 lg:w-9">
                        <button className="h-full w-full outline-none focus:outline-none">
                          L
                        </button>
                      </span>
                    </li>
                    <li>
                      <span className="flex h-10 w-10 cursor-pointer select-none items-center justify-center rounded-full bg-[#f3f4f3] text-[#7e8784] h-8 w-8 lg:h-9 lg:w-9">
                        <button className="h-full w-full outline-none focus:outline-none">
                          XL
                        </button>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </DropFilter>
          <DropFilter title="Price">
            <div className="overflow-hidden pb-0">
              <div className="duration-300 px-4">
                <div>
                  <div>
                    <div className="mb-3 flex items-center justify-between text-sm">
                      Between €0 and €300
                      <button
                        className="cursor-pointer inline-block leading-none select-none text-center focus:outline-none transition-colors disabled:cursor-not-allowed max-h-10 relative p-0 text-sm text-primary transition-all hover:underline invisible opacity-0"
                        type="button"
                        data-variant="null_null"
                      ></button>
                    </div>
                    <div
                      className="relative my-6 flex h-auto w-full px-2"
                      style={{ transform: "scale(1)", cursor: "inherit" }}
                    >
                      <div
                        className="h-[1px] w-full self-center before:absolute before:left-0 before:h-[1px] before:w-2 before:bg-[#707070] after:absolute after:right-0 after:h-[1px] after:w-2 after:bg-[#707070]"
                        style={{
                          background:
                            "linear-gradient(to right, #707070 0%, #707070 0%, #debe48 0%, #debe48 100%, #707070 100%, #707070 100%)",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            zIndex: 0,
                            cursor: "grab",
                            touchAction: "none",
                            userSelect: "none",
                            transform: "translate(-8px, -7.5px)",
                          }}
                          tabindex="0"
                          aria-valuemax="300"
                          aria-valuemin="0"
                          aria-valuenow="0"
                          draggable="false"
                          role="slider"
                          className="flex h-4 w-4 items-center justify-center rounded-full bg-primary outline-none transition-shadow"
                        >
                          <span className="border-1 absolute -top-12 hidden rounded-[4px] border-black bg-white px-4 py-2 text-[14px] opacity-0 shadow-lg transition-opacity md:inline-block invisible">
                            €0
                          </span>
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            zIndex: "1",
                            cursor: "grab",
                            touchAction: "none",
                            userSelect: "none",
                            transform: "translate(217.328px, -7.5px)",
                          }}
                          tabindex="0"
                          aria-valuemax="300"
                          aria-valuemin="0"
                          aria-valuenow="300"
                          draggable="false"
                          role="slider"
                          className="flex h-4 w-4 items-center justify-center rounded-full bg-primary outline-none transition-shadow"
                        >
                          <span className="border-1 absolute -top-12 hidden rounded-[4px] border-black bg-white px-4 py-2 text-[14px] opacity-0 shadow-lg transition-opacity md:inline-block invisible">
                            €300
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DropFilter>
          <DropFilter title="Characteristics">
            <div className="overflow-hidden pb-0">
              <div className="duration-300 px-0 pb-3">
                <ul>
                  <li className="pl-2">
                    <label className="flex h-8 flex-row items-center justify-start">
                      <span className="grow">
                        <span className="text-sm">Easy </span>
                        <span className="text-xs text-sold-out">(8)</span>
                      </span>
                      <label className="relative inline-block h-[22px] w-[45px] flex-none">
                        <input
                          className="peer h-0 w-0 opacity-0"
                          type="checkbox"
                          name="properties:air-purifying"
                          value="367"
                        />
                        <span className="absolute bottom-0 left-0 right-0 top-0 cursor-pointer rounded-[22px] bg-white ring-1 ring-inset ring-sold-out duration-300 before:absolute before:bottom-[2px] before:left-[2px] before:h-[18px] before:w-[18px] before:rounded-full before:bg-sold-out before:duration-300 before:content-[''] peer-checked:bg-primary peer-checked:ring-primary peer-checked:before:translate-x-[23px] peer-checked:before:transform peer-checked:before:bg-white peer-checked:peer-disabled:bg-primary/50 peer-checked:peer-disabled:ring-0"></span>
                      </label>
                    </label>
                  </li>
                  <li className="pl-2">
                    <label className="flex h-8 flex-row items-center justify-start">
                      <span className="grow">
                        <span className="text-sm">Air purifying </span>
                        <span className="text-xs text-sold-out">(8)</span>
                      </span>
                      <label className="relative inline-block h-[22px] w-[45px] flex-none">
                        <input
                          className="peer h-0 w-0 opacity-0"
                          type="checkbox"
                          name="properties:air-purifying"
                          value="367"
                        />
                        <span className="absolute bottom-0 left-0 right-0 top-0 cursor-pointer rounded-[22px] bg-white ring-1 ring-inset ring-sold-out duration-300 before:absolute before:bottom-[2px] before:left-[2px] before:h-[18px] before:w-[18px] before:rounded-full before:bg-sold-out before:duration-300 before:content-[''] peer-checked:bg-primary peer-checked:ring-primary peer-checked:before:translate-x-[23px] peer-checked:before:transform peer-checked:before:bg-white peer-checked:peer-disabled:bg-primary/50 peer-checked:peer-disabled:ring-0"></span>
                      </label>
                    </label>
                  </li>
                  <li className="pl-2">
                    <label className="flex h-8 flex-row items-center justify-start">
                      <span className="grow">
                        <span className="text-sm">Pet friendly </span>
                        <span className="text-xs text-sold-out">(7)</span>
                      </span>
                      <label className="relative inline-block h-[22px] w-[45px] flex-none">
                        <input
                          className="peer h-0 w-0 opacity-0"
                          type="checkbox"
                          name="properties:pet-friendly"
                          value="368"
                        />
                        <span className="absolute bottom-0 left-0 right-0 top-0 cursor-pointer rounded-[22px] bg-white ring-1 ring-inset ring-sold-out duration-300 before:absolute before:bottom-[2px] before:left-[2px] before:h-[18px] before:w-[18px] before:rounded-full before:bg-sold-out before:duration-300 before:content-[''] peer-checked:bg-primary peer-checked:ring-primary peer-checked:before:translate-x-[23px] peer-checked:before:transform peer-checked:before:bg-white peer-checked:peer-disabled:bg-primary/50 peer-checked:peer-disabled:ring-0"></span>
                      </label>
                    </label>
                  </li>
                  <li className="pl-2">
                    <label className="flex h-8 flex-row items-center justify-start">
                      <span className="grow">
                        <span className="text-sm">Hanging plant </span>
                        <span className="text-xs text-sold-out">(1)</span>
                      </span>
                      <label className="relative inline-block h-[22px] w-[45px] flex-none">
                        <input
                          className="peer h-0 w-0 opacity-0"
                          type="checkbox"
                          name="properties:hanging-plant"
                          value="370"
                        />
                        <span className="absolute bottom-0 left-0 right-0 top-0 cursor-pointer rounded-[22px] bg-white ring-1 ring-inset ring-sold-out duration-300 before:absolute before:bottom-[2px] before:left-[2px] before:h-[18px] before:w-[18px] before:rounded-full before:bg-sold-out before:duration-300 before:content-[''] peer-checked:bg-primary peer-checked:ring-primary peer-checked:before:translate-x-[23px] peer-checked:before:transform peer-checked:before:bg-white peer-checked:peer-disabled:bg-primary/50 peer-checked:peer-disabled:ring-0"></span>
                      </label>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </DropFilter>
          <DropFilter title="Color">
            <div className="overflow-hidden pb-0">
              <div className="duration-300 px-0 pb-3">
                <ul>
                  <li className="pl-2">
                    <label className="flex h-8 flex-row items-center justify-start">
                      <span className="grow">
                        <span className="text-sm">Orange </span>
                        <span className="text-xs text-sold-out">(8)</span>
                      </span>
                      <label className="relative inline-block h-[22px] w-[45px] flex-none">
                        <input
                          className="peer h-0 w-0 opacity-0"
                          type="checkbox"
                          name="properties:air-purifying"
                          value="367"
                        />
                        <span className="absolute bottom-0 left-0 right-0 top-0 cursor-pointer rounded-[22px] bg-white ring-1 ring-inset ring-sold-out duration-300 before:absolute before:bottom-[2px] before:left-[2px] before:h-[18px] before:w-[18px] before:rounded-full before:bg-sold-out before:duration-300 before:content-[''] peer-checked:bg-primary peer-checked:ring-primary peer-checked:before:translate-x-[23px] peer-checked:before:transform peer-checked:before:bg-white peer-checked:peer-disabled:bg-primary/50 peer-checked:peer-disabled:ring-0"></span>
                      </label>
                    </label>
                  </li>
                  <li className="pl-2">
                    <label className="flex h-8 flex-row items-center justify-start">
                      <span className="grow">
                        <span className="text-sm">Grey </span>
                        <span className="text-xs text-sold-out">(8)</span>
                      </span>
                      <label className="relative inline-block h-[22px] w-[45px] flex-none">
                        <input
                          className="peer h-0 w-0 opacity-0"
                          type="checkbox"
                          name="properties:air-purifying"
                          value="367"
                        />
                        <span className="absolute bottom-0 left-0 right-0 top-0 cursor-pointer rounded-[22px] bg-white ring-1 ring-inset ring-sold-out duration-300 before:absolute before:bottom-[2px] before:left-[2px] before:h-[18px] before:w-[18px] before:rounded-full before:bg-sold-out before:duration-300 before:content-[''] peer-checked:bg-primary peer-checked:ring-primary peer-checked:before:translate-x-[23px] peer-checked:before:transform peer-checked:before:bg-white peer-checked:peer-disabled:bg-primary/50 peer-checked:peer-disabled:ring-0"></span>
                      </label>
                    </label>
                  </li>
                  <li className="pl-2">
                    <label className="flex h-8 flex-row items-center justify-start">
                      <span className="grow">
                        <span className="text-sm">Yellow </span>
                        <span className="text-xs text-sold-out">(7)</span>
                      </span>
                      <label className="relative inline-block h-[22px] w-[45px] flex-none">
                        <input
                          className="peer h-0 w-0 opacity-0"
                          type="checkbox"
                          name="properties:pet-friendly"
                          value="368"
                        />
                        <span className="absolute bottom-0 left-0 right-0 top-0 cursor-pointer rounded-[22px] bg-white ring-1 ring-inset ring-sold-out duration-300 before:absolute before:bottom-[2px] before:left-[2px] before:h-[18px] before:w-[18px] before:rounded-full before:bg-sold-out before:duration-300 before:content-[''] peer-checked:bg-primary peer-checked:ring-primary peer-checked:before:translate-x-[23px] peer-checked:before:transform peer-checked:before:bg-white peer-checked:peer-disabled:bg-primary/50 peer-checked:peer-disabled:ring-0"></span>
                      </label>
                    </label>
                  </li>
                  <li className="pl-2">
                    <label className="flex h-8 flex-row items-center justify-start">
                      <span className="grow">
                        <span className="text-sm">Blue </span>
                        <span className="text-xs text-sold-out">(1)</span>
                      </span>
                      <label className="relative inline-block h-[22px] w-[45px] flex-none">
                        <input
                          className="peer h-0 w-0 opacity-0"
                          type="checkbox"
                          name="properties:hanging-plant"
                          value="370"
                        />
                        <span className="absolute bottom-0 left-0 right-0 top-0 cursor-pointer rounded-[22px] bg-white ring-1 ring-inset ring-sold-out duration-300 before:absolute before:bottom-[2px] before:left-[2px] before:h-[18px] before:w-[18px] before:rounded-full before:bg-sold-out before:duration-300 before:content-[''] peer-checked:bg-primary peer-checked:ring-primary peer-checked:before:translate-x-[23px] peer-checked:before:transform peer-checked:before:bg-white peer-checked:peer-disabled:bg-primary/50 peer-checked:peer-disabled:ring-0"></span>
                      </label>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </DropFilter>
          <DropFilter title="Room">
            <div className="overflow-hidden pb-0">
              <div className="duration-300 px-0 pb-3">
                <ul>
                  <li className="pl-2">
                    <label className="flex h-8 flex-row items-center justify-start">
                      <span className="grow">
                        <span className="text-sm">Bathroom </span>
                        <span className="text-xs text-sold-out">(8)</span>
                      </span>
                      <label className="relative inline-block h-[22px] w-[45px] flex-none">
                        <input
                          className="peer h-0 w-0 opacity-0"
                          type="checkbox"
                          name="properties:air-purifying"
                          value="367"
                        />
                        <span className="absolute bottom-0 left-0 right-0 top-0 cursor-pointer rounded-[22px] bg-white ring-1 ring-inset ring-sold-out duration-300 before:absolute before:bottom-[2px] before:left-[2px] before:h-[18px] before:w-[18px] before:rounded-full before:bg-sold-out before:duration-300 before:content-[''] peer-checked:bg-primary peer-checked:ring-primary peer-checked:before:translate-x-[23px] peer-checked:before:transform peer-checked:before:bg-white peer-checked:peer-disabled:bg-primary/50 peer-checked:peer-disabled:ring-0"></span>
                      </label>
                    </label>
                  </li>
                  <li className="pl-2">
                    <label className="flex h-8 flex-row items-center justify-start">
                      <span className="grow">
                        <span className="text-sm">Bedroom </span>
                        <span className="text-xs text-sold-out">(8)</span>
                      </span>
                      <label className="relative inline-block h-[22px] w-[45px] flex-none">
                        <input
                          className="peer h-0 w-0 opacity-0"
                          type="checkbox"
                          name="properties:air-purifying"
                          value="367"
                        />
                        <span className="absolute bottom-0 left-0 right-0 top-0 cursor-pointer rounded-[22px] bg-white ring-1 ring-inset ring-sold-out duration-300 before:absolute before:bottom-[2px] before:left-[2px] before:h-[18px] before:w-[18px] before:rounded-full before:bg-sold-out before:duration-300 before:content-[''] peer-checked:bg-primary peer-checked:ring-primary peer-checked:before:translate-x-[23px] peer-checked:before:transform peer-checked:before:bg-white peer-checked:peer-disabled:bg-primary/50 peer-checked:peer-disabled:ring-0"></span>
                      </label>
                    </label>
                  </li>
                  <li className="pl-2">
                    <label className="flex h-8 flex-row items-center justify-start">
                      <span className="grow">
                        <span className="text-sm">Livingroom </span>
                        <span className="text-xs text-sold-out">(7)</span>
                      </span>
                      <label className="relative inline-block h-[22px] w-[45px] flex-none">
                        <input
                          className="peer h-0 w-0 opacity-0"
                          type="checkbox"
                          name="properties:pet-friendly"
                          value="368"
                        />
                        <span className="absolute bottom-0 left-0 right-0 top-0 cursor-pointer rounded-[22px] bg-white ring-1 ring-inset ring-sold-out duration-300 before:absolute before:bottom-[2px] before:left-[2px] before:h-[18px] before:w-[18px] before:rounded-full before:bg-sold-out before:duration-300 before:content-[''] peer-checked:bg-primary peer-checked:ring-primary peer-checked:before:translate-x-[23px] peer-checked:before:transform peer-checked:before:bg-white peer-checked:peer-disabled:bg-primary/50 peer-checked:peer-disabled:ring-0"></span>
                      </label>
                    </label>
                  </li>
                  <li className="pl-2">
                    <label className="flex h-8 flex-row items-center justify-start">
                      <span className="grow">
                        <span className="text-sm">Office </span>
                        <span className="text-xs text-sold-out">(1)</span>
                      </span>
                      <label className="relative inline-block h-[22px] w-[45px] flex-none">
                        <input
                          className="peer h-0 w-0 opacity-0"
                          type="checkbox"
                          name="properties:hanging-plant"
                          value="370"
                        />
                        <span className="absolute bottom-0 left-0 right-0 top-0 cursor-pointer rounded-[22px] bg-white ring-1 ring-inset ring-sold-out duration-300 before:absolute before:bottom-[2px] before:left-[2px] before:h-[18px] before:w-[18px] before:rounded-full before:bg-sold-out before:duration-300 before:content-[''] peer-checked:bg-primary peer-checked:ring-primary peer-checked:before:translate-x-[23px] peer-checked:before:transform peer-checked:before:bg-white peer-checked:peer-disabled:bg-primary/50 peer-checked:peer-disabled:ring-0"></span>
                      </label>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </DropFilter>
          <DropFilter title="Water care">
            <div className="overflow-hidden pb-0">
              <div className="duration-300 px-0 pb-3">
                <ul>
                  <li className="pl-2">
                    <label className="flex h-8 flex-row items-center justify-start">
                      <span className="grow">
                        <span className="text-sm">Weekly </span>
                        <span className="text-xs text-sold-out">(8)</span>
                      </span>
                      <label className="relative inline-block h-[22px] w-[45px] flex-none">
                        <input
                          className="peer h-0 w-0 opacity-0"
                          type="checkbox"
                          name="properties:air-purifying"
                          value="367"
                        />
                        <span className="absolute bottom-0 left-0 right-0 top-0 cursor-pointer rounded-[22px] bg-white ring-1 ring-inset ring-sold-out duration-300 before:absolute before:bottom-[2px] before:left-[2px] before:h-[18px] before:w-[18px] before:rounded-full before:bg-sold-out before:duration-300 before:content-[''] peer-checked:bg-primary peer-checked:ring-primary peer-checked:before:translate-x-[23px] peer-checked:before:transform peer-checked:before:bg-white peer-checked:peer-disabled:bg-primary/50 peer-checked:peer-disabled:ring-0"></span>
                      </label>
                    </label>
                  </li>
                  <li className="pl-2">
                    <label className="flex h-8 flex-row items-center justify-start">
                      <span className="grow">
                        <span className="text-sm">Bi-weekly </span>
                        <span className="text-xs text-sold-out">(8)</span>
                      </span>
                      <label className="relative inline-block h-[22px] w-[45px] flex-none">
                        <input
                          className="peer h-0 w-0 opacity-0"
                          type="checkbox"
                          name="properties:air-purifying"
                          value="367"
                        />
                        <span className="absolute bottom-0 left-0 right-0 top-0 cursor-pointer rounded-[22px] bg-white ring-1 ring-inset ring-sold-out duration-300 before:absolute before:bottom-[2px] before:left-[2px] before:h-[18px] before:w-[18px] before:rounded-full before:bg-sold-out before:duration-300 before:content-[''] peer-checked:bg-primary peer-checked:ring-primary peer-checked:before:translate-x-[23px] peer-checked:before:transform peer-checked:before:bg-white peer-checked:peer-disabled:bg-primary/50 peer-checked:peer-disabled:ring-0"></span>
                      </label>
                    </label>
                  </li>
                  <li className="pl-2">
                    <label className="flex h-8 flex-row items-center justify-start">
                      <span className="grow">
                        <span className="text-sm">Monthly </span>
                        <span className="text-xs text-sold-out">(7)</span>
                      </span>
                      <label className="relative inline-block h-[22px] w-[45px] flex-none">
                        <input
                          className="peer h-0 w-0 opacity-0"
                          type="checkbox"
                          name="properties:pet-friendly"
                          value="368"
                        />
                        <span className="absolute bottom-0 left-0 right-0 top-0 cursor-pointer rounded-[22px] bg-white ring-1 ring-inset ring-sold-out duration-300 before:absolute before:bottom-[2px] before:left-[2px] before:h-[18px] before:w-[18px] before:rounded-full before:bg-sold-out before:duration-300 before:content-[''] peer-checked:bg-primary peer-checked:ring-primary peer-checked:before:translate-x-[23px] peer-checked:before:transform peer-checked:before:bg-white peer-checked:peer-disabled:bg-primary/50 peer-checked:peer-disabled:ring-0"></span>
                      </label>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </DropFilter>
          <div>
            {/* <div
            className="bg-[#073d30] hover:opacity-80 uppercase  rounded text-white border border-[#073d30] flex p-3 justify-center items-center w-full font-semibold cursor-pointer"
          >
            Filter
          </div> */}
          </div>
        </div>
      </div>
      {isOpen ? (
        <div className="opacity-50 fixed inset-0 z-30 bg-black"></div>
      ) : (
        <></>
      )}
    </>
  );
};

export default FilterPopup;
