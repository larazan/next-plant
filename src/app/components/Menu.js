import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import Accordion from "./Accordion";

import logo from "@/assets/img/logo.png";

const Menu = ({ 
  openMenu,
  clickMenu,
  setOpenMenu }) => {
  let autoRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!autoRef.current.contains(e.target)) {
        setOpenMenu(false);
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
          openMenu ? "left-0" : "-left-full"
        } flex flex-col w-full bg-[#00644b]  overflow-y-auto fixed top-0 h-full shadow-2xl md:w-[35vw] transition-all duration-300 z-50 px-4 lg:px-[35px]`}
        ref={autoRef}
      >
        <div className="flex w-full items-center justify-between py-4 border-b border-[#257a65]">
          <div className="w-1/2">
            <Link href={"/"}>
              <Image src={logo} alt="" className="w-28 md:w-24" />
            </Link>
          </div>

          <div className="flex justify-end w-1/2">
            <div
              onClick={clickMenu}
              className="cursor-pointer w-8 h-8 flex justify-center items-center rounded-full bg-[#fbd718] hover:opacity-80"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 text-[#00644b]"
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

        <div className="h-4/6 divide-y divide-[#257a65]">
        <Accordion title="Plants" bg="00644b">
            <div className="overflow-hidden pb-2">
              <div className="duration-300 px-4">
              <Link
                  className="flex items-center h-8 text-base font-semibold text-white "
                  href={"/plants"}
                >
                  Plant Encyclopedia
                </Link>
                <a
                  className="flex items-center h-8 text-base font-semibold text-white "
                  href="#"
                >
                  Flowers
                </a>
                <a
                  className="flex items-center h-8 text-base font-semibold text-white "
                  href="#"
                >
                  Berries and Vine Fruits
                </a>
                <a
                  className="flex items-center h-8 text-base font-semibold text-white "
                  href="#"
                >
                  Cacti and Succulents
                </a>
                <a
                  className="flex items-center h-8 text-base font-semibold text-white "
                  href="#"
                >
                  Herbs
                </a>
                <a
                  className="flex items-center h-8 text-base font-semibold text-white "
                  href="#"
                >
                  Houseplants
                </a>
                <a
                  className="flex items-center h-8 text-base font-semibold text-white "
                  href="#"
                >
                  Follage Plants
                </a>
                <a
                  className="flex items-center h-8 text-base font-semibold text-white "
                  href="#"
                >
                  Fruits Trees
                </a>
                <a
                  className="flex items-center h-8 text-base font-semibold text-white "
                  href="#"
                >
                  Grasses, Rushes, and Sedges
                </a>
                <a
                  className="flex items-center h-8 text-base font-semibold text-white "
                  href="#"
                >
                  Landscape Trees
                </a>
                <a
                  className="flex items-center h-8 text-base font-semibold text-white "
                  href="#"
                >
                  Nut Trees
                </a>
                <a
                  className="flex items-center h-8 text-base font-semibold text-white "
                  href="#"
                >
                  Woody Shrubs
                </a>
                <a
                  className="flex items-center h-8 text-base font-semibold text-white "
                  href="#"
                >
                  Vegetables
                </a>
                <a
                  className="flex items-center h-8 text-base font-semibold text-white "
                  href="#"
                >
                  Vines and Climbers
                </a>
              </div>
            </div>
          </Accordion>
          <Accordion title="Houseplants" bg="00644b">
            <div className="overflow-hidden pb-2">
              <div className="duration-300 px-4">
              <Link
                  className="flex items-center h-8 text-base font-semibold text-white "
                  href={"/plants"}
                >
                  Plant Encyclopedia
                </Link>
                <Link
                  className="flex items-center h-8 text-base font-semibold text-white "
                  href="/category"
                >
                  Houseplants Article
                </Link>
                <Link
                  className="flex items-center h-8 text-base font-semibold text-white "
                  href="/collection"
                >
                  Shop All
                </Link>
              </div>
            </div>
          </Accordion>
          <Accordion title="Garden Plants" bg="00644b">
            <div className="overflow-hidden pb-2">
              <div className="duration-300 px-4">
                <Link
                  className="flex items-center h-8 text-base font-semibold text-white "
                  href={"/plants"}
                >
                  Plant Encyclopedia
                </Link>
                <Link
                  className="flex items-center h-8 text-base font-semibold text-white "
                  href={"/category"}
                >
                  Garden Plants Articles
                </Link>
                <Link
                  className="flex items-center h-8 text-base font-semibold text-white "
                  href="/collection"
                >
                  Shop All
                </Link>
              </div>
            </div>
          </Accordion>
          <Accordion title="Shops" bg="00644b">
            <div className="overflow-hidden pb-2">
              <div className="duration-300 px-4">
                <Link
                  className="flex items-center h-8 text-base font-semibold text-white "
                  href={"/collection"}
                >
                  Plants
                </Link>
                <Link
                  className="flex items-center h-8 text-base font-semibold text-white "
                  href={"/collection"}
                >
                  Pots
                </Link>
                <Link
                  className="flex items-center h-8 text-base font-semibold text-white "
                  href={"/collection"}
                >
                  Soils
                </Link>
                <Link
                  className="flex items-center h-8 text-base font-semibold text-white "
                  href={"/collection"}
                >
                  Care
                </Link>
                <Link
                  className="flex items-center h-8 text-base font-semibold text-white "
                  href="/collection"
                >
                  Accessories
                </Link>
                <Link
                  className="flex items-center h-8 text-base font-semibold text-white "
                  href="/collection"
                >
                  Gifts
                </Link>
                
              </div>
            </div>
          </Accordion>
          <Accordion title="How To" bg="00644b">
            <div className="overflow-hidden pb-2">
              <div className="duration-300 px-4">
                <a
                  className="flex items-center h-8 text-base font-semibold text-white "
                  href="#"
                >
                  Wildlife and Gardens
                </a>
                <a
                  className="flex items-center h-8 text-base font-semibold text-white "
                  href="#"
                >
                  Beginner Gardening
                </a>
                <a
                  className="flex items-center h-8 text-base font-semibold text-white "
                  href="#"
                >
                  Build your Soil
                </a>
                <a
                  className="flex items-center h-8 text-base font-semibold text-white "
                  href="#"
                >
                  Container Gardening
                </a>
                <a
                  className="flex items-center h-8 text-base font-semibold text-white "
                  href="#"
                >
                  Garden Design
                </a>
                <a
                  className="flex items-center h-8 text-base font-semibold text-white "
                  href="#"
                >
                 Diseases and pets
                </a>
                <a
                  className="flex items-center h-8 text-base font-semibold text-white "
                  href="#"
                >
                  Greenhouses and cold frames
                </a>
                <a
                  className="flex items-center h-8 text-base font-semibold text-white "
                  href="#"
                >
                  Indoor Gardening
                </a>
                <a
                  className="flex items-center h-8 text-base font-semibold text-white "
                  href="#"
                >
                  Lawns and Turf Grass
                </a>
                <a
                  className="flex items-center h-8 text-base font-semibold text-white "
                  href="#"
                >
                  Organic Gardening
                </a>
                <a
                  className="flex items-center h-8 text-base font-semibold text-white "
                  href="#"
                >
                  Propagation
                </a>
                <a
                  className="flex items-center h-8 text-base font-semibold text-white leading-tight"
                  href="#"
                >
                  Pruning and Weeding
                </a>
                <a
                  className="flex items-center h-8 text-base font-semibold text-white "
                  href="#"
                >
                  Shade Gardens
                </a>
              </div>
            </div>
          </Accordion>
          <div className={` py-0 flex flex-col w-full `}>
            <Link href={"/blogs"} className="flex items-center justify-between h-12 px-3 text-white text-base md:text-[18px] font-semibold md:font-bold">
              <span>Reviews</span>
            </Link>
          </div>
          <div className={` py-0 flex flex-col w-full `}>
            <Link href={"/blogs"} className="flex items-center justify-between h-12 px-3 text-white text-base md:text-[18px] font-semibold md:font-bold">
              <span>News</span>
            </Link>
          </div>
        </div>
        {/* <div className="flex h-2/6 items-end justify-end flex-col space-y-1 py-8 mt-0">
          <div className="flex w-full items-center space-x-2 cursor-pointer">
            <div className=" font-semibold text-slate-900">
              <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-user-hexagon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 13a3 3 0 1 0 0 -6a3 3 0 0 0 0 6z" />
                <path d="M6.201 18.744a4 4 0 0 1 3.799 -2.744h4a4 4 0 0 1 3.798 2.741" />
                <path d="M19.875 6.27c.7 .398 1.13 1.143 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" />
              </svg>
              </div>
            </div>
            <div className="font-medium">Account</div>
          </div>
          <div className="flex w-full items-center2 space-x-1 cursor-pointer">
            
            <div className="font-medium">Logout</div>
          </div>
        </div> */}
      </div>
      {openMenu ? (
        <div className="opacity-50 fixed inset-0 z-30 bg-black"></div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Menu