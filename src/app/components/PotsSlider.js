import React from "react";
import Image from "next/image";

import pot1 from "@/assets/pots/pot1.png";
import pot2 from "@/assets/pots/pot2.png";
import pot3 from "@/assets/pots/pot3.png";
import pot4 from "@/assets/pots/pot4.png";
import pot5 from "@/assets/pots/pot5.png";
import pot6 from "@/assets/pots/pot6.png";
import pot7 from "@/assets/pots/pot7.png";
import pot8 from "@/assets/pots/pot8.png";
import pot9 from "@/assets/pots/pot9.png";
import pot10 from "@/assets/pots/pot10.png";
import pot11 from "@/assets/pots/pot11.png";

const PotsSlider = () => {
  const potsData = [
    {
      name: tabulapot,
      img: pot1,
    },
    {
      name: tabulapot,
      img: pot2,
    },
    {
      name: tabulapot,
      img: pot3,
    },
    {
      name: tabulapot,
      img: pot4,
    },
    {
      name: tabulapot,
      img: pot5,
    },
    {
      name: tabulapot,
      img: pot6,
    },
    {
      name: tabulapot,
      img: pot7,
    },
    {
      name: tabulapot,
      img: pot8,
    },
    {
      name: tabulapot,
      img: pot9,
    },
    {
      name: tabulapot,
      img: pot10,
    },
    {
      name: tabulapot,
      img: pot11,
    },
  ];
  return (
    <>
      <div className="relative w-full">
        <button className="absolute z-20 flex items-center justify-center bg-black/20 hover:bg-black/50 -left-2 top-10 h-6 w-6 !hidden">
          <svg
            className="text-white h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>
        <div className="scrollbar-fix relative flex h-[151px] flex-row flex-nowrap gap-3 overflow-x-scroll">
          {potsData.map((data, index) => {
            return (
              <div className="my-3 w-20 flex-none overflow-hidden" key={index}>
                <div
                  className="group aspect-h-31 aspect-w-25 w-20"
                  aria-expanded="false"
                >
                  <button
                    aria-label="Add Noah Pot Black"
                    className="pointer-events-none z-10 hidden focus:outline-none md:block focus:ring focus:ring-inset focus:ring-primary"
                  ></button>
                  <button
                    aria-label="More about Noah Pot Black"
                    className="z-10 focus:outline-none md:hidden focus:ring focus:ring-inset focus:ring-primary"
                  ></button>
                  <div className="transform transition-transform">
                    <Image src={data.img} alt="" />
                  </div>
                  <div className="absolute inset-0 hidden bg-black bg-opacity-30 text-center group-hover:md:block">
                    <button className="flex h-full w-full flex-col items-center justify-center">
                      <span className="rounded-full bg-white">
                        <svg
                          className="w-9"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 140 140"
                        >
                          <path d="M82.3,75.9c9.9-13.6,6.9-32.6-6.6-42.5c-12.1-8.8-28.7-7.6-39.4,3c-11.8,12-11.7,31.2,0.3,43c10.6,10.5,27.2,11.7,39.3,3 c0,0.2,0,0.4,0,0.6c0,1.9,0.8,3.7,2.1,5l24.2,24.3l10.1-10.1L88,77.9C86.5,76.5,84.5,75.7,82.3,75.9z M37.7,77.9 c-10.9-11.3-10.6-29.3,0.6-40.2c11-10.7,28.5-10.7,39.6,0c11.1,11.1,11.1,29.1,0,40.2l0,0C66.8,89,48.8,89,37.7,77.9z M102.2,109.4 L79.4,86.7c-2-2-2-5.2,0-7.3c0,0,0,0,0,0l0,0c2-2,5.2-2,7.2,0c0,0,0,0,0,0l22.8,22.8L102.2,109.4z"></path>
                          <path d="M102.2,113.3L77.4,88.6c-1.3-1.3-2.1-3-2.3-4.8c-12.4,8.2-28.8,6.6-39.4-3.9c-12-12.4-11.7-32.1,0.6-44.1 C48.5,24,67.8,24,79.9,35.8c10.5,10.5,12.1,27,3.9,39.4c1.8,0.2,3.5,1,4.8,2.3l24.8,24.8L102.2,113.3z M76.8,80.8l-0.1,1.7 c0,0.2,0,0.4,0,0.6c0,1.7,0.7,3.3,1.9,4.5l23.7,23.7l9-9L87.5,78.5c-1.3-1.3-3.2-2-5.1-1.8l-1.7,0.1l1-1.3c9.7-13.2,7-31.8-6.2-41.5 c-5.1-3.8-11.3-5.8-17.7-5.8c-16.4,0-29.7,13.3-29.7,29.7c0,7.9,3.1,15.4,8.7,21c10.4,10.4,26.8,11.6,38.6,2.9L76.8,80.8z  M102.2,110.5L78.8,87.2c-2.3-2.3-2.4-6-0.1-8.3s6-2.4,8.3-0.1c0,0,0.1,0.1,0.1,0.1l23.4,23.4L102.2,110.5z M83,78.6 c-2.4,0-4.4,2-4.4,4.4c0,1.2,0.5,2.3,1.3,3.1l22.3,22.3l6.2-6.2L86.1,79.9C85.3,79.1,84.1,78.6,83,78.6z M57.8,87 c-7.7,0-15.2-3.1-20.6-8.5l0,0C26,66.9,26.3,48.4,37.9,37.2c11.3-10.9,29.3-10.9,40.6,0c11.4,11.4,11.4,29.9,0,41.3 C73,83.9,65.6,87,57.8,87z M57.8,30.2c-15.3,0-27.7,12.4-27.7,27.7c0,7.3,2.9,14.4,8.1,19.6l0,0c10.8,10.8,28.3,10.8,39.2,0 s10.8-28.3,0-39.2C72.3,33.1,65.2,30.2,57.8,30.2L57.8,30.2z"></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
                <span className="mt-1 block text-center">
                  <span className="flex flex-row items-center gap-2 justify-center font-normal">
                    <span className="">€7.95</span>
                  </span>
                </span>
              </div>
            );
          })}

          <span className="relative bottom-0 right-40 top-0 h-full w-px"></span>
        </div>
        <button className="absolute z-20 flex items-center justify-center bg-black/20 hover:bg-black/50 -right-2 top-10 h-6 w-6">
          <svg
            className="text-white h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>
    </>
  );
};

export default PotsSlider;
