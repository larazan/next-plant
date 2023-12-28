"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import Accordion from "./Accordion";

const FilterSide = ({ isOpen, handleClose, setIsOpen }) => {
  return (
    <>
      <div className="hidden md:col-start-1 md:col-end-5 md:row-start-2 md:block lg:pr-6 xl:col-end-4">
        <div className="relative" body-scroll-lock-ignore="false">
          <button
            className="cursor-pointer inline-block leading-none select-none text-center focus:outline-none transition-colors disabled:cursor-not-allowed max-h-10 absolute -top-4 right-0 flex flex-row items-center justify-start gap-3 p-0 text-sm text-primary opacity-0 transition-opacity duration-500 hover:underline md:-top-9 xl:-top-10"
            type="button"
            data-variant="null_null"
          >
            <svg
              className="w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <button
            className="mb-3 flex w-full items-center justify-between"
            id="headlessui-disclosure-button-:R11ipcl6:"
            type="button"
            aria-expanded="true"
            data-headlessui-state="open"
            aria-controls="headlessui-disclosure-panel-:R21ipcl6:"
          >
            <span className="text-sm font-bold">Size</span>
            <svg
              className="transform duration-150 -rotate-90 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
          <div>
            <div
              id="headlessui-disclosure-panel-:R21ipcl6:"
              data-headlessui-state="open"
            >
              <div className="space-y-3">
                <ul className="flex flex-row flex-wrap justify-start gap-2">
                  <li>
                    <span className="flex h-10 w-10 cursor-pointer select-none items-center justify-center rounded-full bg-grayish text-sold-out h-8 w-8 lg:h-9 lg:w-9">
                      <button className="h-full w-full outline-none focus:outline-none">
                        S
                      </button>
                    </span>
                  </li>
                  <li>
                    <span className="flex h-10 w-10 cursor-pointer select-none items-center justify-center rounded-full bg-grayish text-sold-out h-8 w-8 lg:h-9 lg:w-9">
                      <button className="h-full w-full outline-none focus:outline-none">
                        M
                      </button>
                    </span>
                  </li>
                  <li>
                    <span className="flex h-10 w-10 cursor-pointer select-none items-center justify-center rounded-full bg-grayish text-sold-out h-8 w-8 lg:h-9 lg:w-9">
                      <button className="h-full w-full outline-none focus:outline-none">
                        L
                      </button>
                    </span>
                  </li>
                  <li>
                    <span className="flex h-10 w-10 cursor-pointer select-none items-center justify-center rounded-full bg-grayish text-sold-out h-8 w-8 lg:h-9 lg:w-9">
                      <button className="h-full w-full outline-none focus:outline-none">
                        XL
                      </button>
                    </span>
                  </li>
                  <li>
                    <span className="flex h-10 w-10 cursor-pointer select-none items-center justify-center rounded-full bg-grayish text-sold-out h-8 w-8 lg:h-9 lg:w-9">
                      <button className="h-full w-full outline-none focus:outline-none">
                        XXL
                      </button>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <svg
            className="my-3 h-px w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 1"
            preserveAspectRatio="none"
          >
            <path d="M0,0 100,0" stroke="#707070" strokeWidth="1"></path>
          </svg>
          <button
            className="mb-3 flex w-full items-center justify-between"
            id="headlessui-disclosure-button-:R12ipcl6:"
            type="button"
            aria-expanded="true"
            data-headlessui-state="open"
            aria-controls="headlessui-disclosure-panel-:R22ipcl6:"
          >
            <span className="text-sm font-bold">Price</span>
            <svg
              className="transform duration-150 -rotate-90 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
          <div>
            <div
              id="headlessui-disclosure-panel-:R22ipcl6:"
              data-headlessui-state="open"
            >
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
          <svg
            className="my-3 h-px w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 1"
            preserveAspectRatio="none"
          >
            <path d="M0,0 100,0" stroke="#707070" strokeWidth="1"></path>
          </svg>
          <button
            className="mb-3 flex w-full items-center justify-between"
            id="headlessui-disclosure-button-:R15ipcl6:"
            type="button"
            aria-expanded="false"
            data-headlessui-state=""
          >
            <span className="text-sm font-bold">Characteristics</span>
            <svg
              className="transform duration-150 rotate-90 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
          <svg
            className="my-3 h-px w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 1"
            preserveAspectRatio="none"
          >
            <path d="M0,0 100,0" stroke="#707070" strokeWidth="1"></path>
          </svg>
          <button
            className="mb-3 flex w-full items-center justify-between"
            id="headlessui-disclosure-button-:R17ipcl6:"
            type="button"
            aria-expanded="false"
            data-headlessui-state=""
          >
            <span className="text-sm font-bold">Color</span>
            <svg
              className="transform duration-150 rotate-90 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
          <svg
            className="my-3 h-px w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 1"
            preserveAspectRatio="none"
          >
            <path d="M0,0 100,0" stroke="#707070" strokeWidth="1"></path>
          </svg>
          <button
            className="mb-3 flex w-full items-center justify-between"
            id="headlessui-disclosure-button-:R1aipcl6:"
            type="button"
            aria-expanded="false"
            data-headlessui-state=""
          >
            <span className="text-sm font-bold">Location</span>
            <svg
              className="transform duration-150 rotate-90 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
          <svg
            className="my-3 h-px w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 1"
            preserveAspectRatio="none"
          >
            <path d="M0,0 100,0" stroke="#707070" strokeWidth="1"></path>
          </svg>
          <button
            className="mb-3 flex w-full items-center justify-between"
            id="headlessui-disclosure-button-:R1bipcl6:"
            type="button"
            aria-expanded="false"
            data-headlessui-state=""
          >
            <span className="text-sm font-bold">Material</span>
            <svg
              className="transform duration-150 rotate-90 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
          <svg
            className="my-3 h-px w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 1"
            preserveAspectRatio="none"
          >
            <path d="M0,0 100,0" stroke="#707070" strokeWidth="1"></path>
          </svg>
          <button
            className="mb-3 flex w-full items-center justify-between"
            id="headlessui-disclosure-button-:R1eipcl6:"
            type="button"
            aria-expanded="false"
            data-headlessui-state=""
          >
            <span className="text-sm font-bold">Plantfamily</span>
            <svg
              className="transform duration-150 rotate-90 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
          <svg
            className="my-3 h-px w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 1"
            preserveAspectRatio="none"
          >
            <path d="M0,0 100,0" stroke="#707070" strokeWidth="1"></path>
          </svg>
          <button
            className="mb-3 flex w-full items-center justify-between"
            id="headlessui-disclosure-button-:R1fipcl6:"
            type="button"
            aria-expanded="false"
            data-headlessui-state=""
          >
            <span className="text-sm font-bold">Room</span>
            <svg
              className="transform duration-150 rotate-90 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
          <svg
            className="my-3 h-px w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 1"
            preserveAspectRatio="none"
          >
            <path d="M0,0 100,0" stroke="#707070" strokeWidth="1"></path>
          </svg>
          <button
            className="mb-3 flex w-full items-center justify-between"
            id="headlessui-disclosure-button-:R1hipcl6:"
            type="button"
            aria-expanded="false"
            data-headlessui-state=""
          >
            <span className="text-sm font-bold">Shape</span>
            <svg
              className="transform duration-150 rotate-90 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
          <svg
            className="my-3 h-px w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 1"
            preserveAspectRatio="none"
          >
            <path d="M0,0 100,0" stroke="#707070" strokeWidth="1"></path>
          </svg>
          <button
            className="mb-3 flex w-full items-center justify-between"
            id="headlessui-disclosure-button-:R1iipcl6:"
            type="button"
            aria-expanded="false"
            data-headlessui-state=""
          >
            <span className="text-sm font-bold">Style</span>
            <svg
              className="transform duration-150 rotate-90 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
          <svg
            className="my-3 h-px w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 1"
            preserveAspectRatio="none"
          >
            <path d="M0,0 100,0" stroke="#707070" strokeWidth="1"></path>
          </svg>
          <button
            className="mb-3 flex w-full items-center justify-between"
            id="headlessui-disclosure-button-:R1jipcl6:"
            type="button"
            aria-expanded="false"
            data-headlessui-state=""
          >
            <span className="text-sm font-bold">Water care</span>
            <svg
              className="transform duration-150 rotate-90 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
          <svg
            className="my-3 h-px w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 1"
            preserveAspectRatio="none"
          >
            <path d="M0,0 100,0" stroke="#707070" strokeWidth="1"></path>
          </svg>
          <button
            className="mb-3 flex w-full items-center justify-between"
            id="headlessui-disclosure-button-:R1kipcl6:"
            type="button"
            aria-expanded="true"
            data-headlessui-state="open"
            aria-controls="headlessui-disclosure-panel-:R2kipcl6:"
          >
            <span className="text-sm font-bold">Product diameter</span>
            <svg
              className="transform duration-150 -rotate-90 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
          <div>
            <div
              id="headlessui-disclosure-panel-:R2kipcl6:"
              data-headlessui-state="open"
            >
              <div className="mb-3 flex items-center justify-between text-sm">
                Between 0cm and 100cm
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
                    aria-valuemax="100"
                    aria-valuemin="0"
                    aria-valuenow="0"
                    draggable="false"
                    role="slider"
                    className="flex h-4 w-4 items-center justify-center rounded-full bg-primary outline-none transition-shadow"
                  >
                    <span className="border-1 absolute -top-12 hidden rounded-[4px] border-black bg-white px-4 py-2 text-[14px] opacity-0 shadow-lg transition-opacity md:inline-block invisible">
                      0cm
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
                    aria-valuemax="100"
                    aria-valuemin="0"
                    aria-valuenow="100"
                    draggable="false"
                    role="slider"
                    className="flex h-4 w-4 items-center justify-center rounded-full bg-primary outline-none transition-shadow"
                  >
                    <span className="border-1 absolute -top-12 hidden rounded-[4px] border-black bg-white px-4 py-2 text-[14px] opacity-0 shadow-lg transition-opacity md:inline-block invisible">
                      100cm
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <svg
            className="my-3 h-px w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 1"
            preserveAspectRatio="none"
          >
            <path d="M0,0 100,0" stroke="#707070" strokeWidth="1"></path>
          </svg>
          <button
            className="mb-3 flex w-full items-center justify-between"
            id="headlessui-disclosure-button-:R1lipcl6:"
            type="button"
            aria-expanded="true"
            data-headlessui-state="open"
            aria-controls="headlessui-disclosure-panel-:R2lipcl6:"
          >
            <span className="text-sm font-bold">Product height</span>
            <svg
              className="transform duration-150 -rotate-90 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
          <div>
            <div
              id="headlessui-disclosure-panel-:R2lipcl6:"
              data-headlessui-state="open"
            >
              <div className="mb-3 flex items-center justify-between text-sm">
                Between 0cm and 200cm
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
                    aria-valuemax="200"
                    aria-valuemin="0"
                    aria-valuenow="0"
                    draggable="false"
                    role="slider"
                    className="flex h-4 w-4 items-center justify-center rounded-full bg-primary outline-none transition-shadow"
                  >
                    <span className="border-1 absolute -top-12 hidden rounded-[4px] border-black bg-white px-4 py-2 text-[14px] opacity-0 shadow-lg transition-opacity md:inline-block invisible">
                      0cm
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
                    aria-valuemax="200"
                    aria-valuemin="0"
                    aria-valuenow="200"
                    draggable="false"
                    role="slider"
                    className="flex h-4 w-4 items-center justify-center rounded-full bg-primary outline-none transition-shadow"
                  >
                    <span className="border-1 absolute -top-12 hidden rounded-[4px] border-black bg-white px-4 py-2 text-[14px] opacity-0 shadow-lg transition-opacity md:inline-block invisible">
                      200cm
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <svg
            className="my-3 h-px w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 1"
            preserveAspectRatio="none"
          >
            <path d="M0,0 100,0" stroke="#707070" strokeWidth="1"></path>
          </svg>
          <button
            className="mb-3 flex w-full items-center justify-between"
            id="headlessui-disclosure-button-:R1mipcl6:"
            type="button"
            aria-expanded="false"
            data-headlessui-state=""
          >
            <span className="text-sm font-bold">Standing or hanging</span>
            <svg
              className="transform duration-150 rotate-90 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
          <svg
            className="my-3 h-px w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 1"
            preserveAspectRatio="none"
          >
            <path d="M0,0 100,0" stroke="#707070" strokeWidth="1"></path>
          </svg>
        </div>
        {/* <div className="mt-16 hidden justify-between md:flex col-span-full md:flex-col">
          <div className="flex flex-1 flex-col justify-start">
            <svg
              className="h-18 flex-none xl:h-auto"
              xmlns="http://www.w3.org/2000/svg"
              width="91"
              height="76.535"
            >
              <g stroke="#141215" stroke-miterlimit="10" strokeWidth="2">
                <g fill="none">
                  <g transform="translate(23.249 63.453)">
                    <circle cx="6.041" cy="6.041" r="6.041"></circle>
                    <circle
                      cx="6.041"
                      cy="6.041"
                      r="6.041"
                      transform="translate(45.988)"
                    ></circle>
                  </g>
                  <path d="M69.52 30.012h10.406L90 41.319v17.074H15.385v-7.72"></path>
                  <path d="M64.639 53.453V19.115H14.753v8.943M5.039 33.073h21.113M0 38.754h21.113M5.039 44.436h21.113"></path>
                </g>
                <path
                  d="M36.358 17.744c3.88 1.714-20.321-.406-20.925-9.55-.262-3.981 3.589-7.4 7.258-7.181 6.519.395 9.375 14.833 13.667 16.731z"
                  fill="#f3f4f3"
                ></path>
                <path
                  d="M37.145 17.732c-1.557 2.222 10.992-6.949 8.3-12.156a4.555 4.555 0 00-6.35-1.529c-3.444 2.375-.228 11.225-1.95 13.685z"
                  fill="#f3f4f3"
                ></path>
                <path
                  d="M37.517 17.744c-3.88 1.714 20.321-.406 20.925-9.55.262-3.981-3.589-7.4-7.258-7.181-6.52.395-9.376 14.833-13.667 16.731z"
                  fill="#f3f4f3"
                ></path>
                <path
                  d="M26.485 32.478c2.262.022 5.756-1.055 7.864-7.765.674-2.144 1.851-5.521 3.675-6.833"
                  fill="none"
                ></path>
              </g>
            </svg>
            <div className="[&amp;_p:first-of-type]:text-base [&amp;_p:first-of-type]:lg:text-3xl [&amp;_p:last-child]:text-sm [&amp;_p:last-child]:lg:text-base mt-4">
              <p className="font-bold">Free shipping from €75,-</p>
              <p className="font-bold">We ship our plants all over Europe!</p>
            </div>
          </div>
          <svg
            className="flex-none my-4 xl:my-6 h-px w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 1"
            preserveAspectRatio="none"
          >
            <path d="M0,0 100,0" stroke="#707070" strokeWidth="1"></path>
          </svg>
          <div className="flex flex-1 flex-col justify-start">
            <svg
              className="h-18 flex-none xl:h-auto"
              xmlns="http://www.w3.org/2000/svg"
              width="64.688"
              height="83.675"
            >
              <path
                d="M36.261 10.458c-1.082 1.081-3.917 3.21-3.917 3.21s-2.835-2.128-3.917-3.21a5.54 5.54 0 117.834 0zM32.344 13.668L.999 31.106c0 42.3 31.424 51.527 31.424 51.527s31.265-9.224 31.265-51.527z"
                fill="none"
                stroke="#141215"
                stroke-miterlimit="10"
                strokeWidth="2"
              ></path>
              <g fill="#141215" stroke="#000">
                <path d="M15.08 53.028l1.14-.941a7.592 7.592 0 006.213 3.193c2.679 0 4.931-1.8 4.931-4.418v-.057c0-2.793-2.623-4.332-6.213-4.332h-1.083l-.37-.826 6.868-7.923H16.107v-1.4h12.482v1.055l-6.753 7.723c3.791.229 7.068 2 7.068 5.643v.056c0 3.478-3.049 5.814-6.5 5.814a8.971 8.971 0 01-7.324-3.587zM32.773 46.359v-.053c0-5.5 3.221-10.316 8.292-10.316s8.237 4.759 8.237 10.259v.057c0 5.5-3.22 10.316-8.294 10.316s-8.235-4.763-8.235-10.263zm14.99 0v-.053c0-4.646-2.621-8.978-6.755-8.978s-6.7 4.275-6.7 8.92v.058c0 4.617 2.622 8.978 6.753 8.978s6.702-4.308 6.702-8.925z"></path>
              </g>
            </svg>
            <div className="[&amp;_p:first-of-type]:text-base [&amp;_p:first-of-type]:lg:text-3xl [&amp;_p:last-child]:text-sm [&amp;_p:last-child]:lg:text-base mt-4">
              <p className="font-bold">30 day health guarantee</p>
              <p>
                <span className="font-bold">For all our happy plants.</span>{" "}
                <a
                  className="underline hover:no-underline"
                  href="/page/guarantee"
                >
                  Read more about our guarantees
                </a>
                .
              </p>
            </div>
          </div>
        </div>
        <div className="md:hidden [&amp;_ul_li+li]:mt-5 [&amp;_ul_li]:before:mr-4 [&amp;_ul_li]:before:content-['\2713']">
          <ul>
            <li>
              Delivery <span className="font-bold">throughout Europe</span>
            </li>
            <li>
              <span className="font-bold">
                Free shipping for orders over €75,-
              </span>
            </li>
            <li>
              <a
                className="underline hover:no-underline"
                href="/page/guarantee"
              >
                <span className="font-bold">30 day</span> PLNTS health guarantee
              </a>
            </li>
          </ul>
        </div> */}
      </div>
    </>
  );
};

export default FilterSide;
