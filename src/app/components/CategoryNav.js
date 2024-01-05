"use client"

import React, { useState, useRef } from 'react'

const CategoryNav = () => {
  let scrl = useRef(null);
  const shiftN = 230;
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);

  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);

    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  return (
    <>
      <div className="h-14 bg-[#f3f4f3] shadow">
        <nav className="grid-container relative h-full px-3 lg:px-0 mx-auto w-11/12">
          <button 
            className={`absolute left-2 top-4 z-20 flex h-6 w-6 items-center justify-center bg-black/20 ${scrollX !== 0 ? "hover:bg-black/50" : " cursor-default" }  md:-left-2 `}
            onClick={() => slide(-shiftN)}
          >
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
          <ul 
            className="scrollbar-fix no-scrollbar flex h-full w-full flex-row items-center justify-between overflow-y-scroll whitespace-nowrap"
            ref={scrl}
            onScroll={scrollCheck}
          >
            <li>
              <a
                className="cursor-pointer rounded-full border px-4 py-2 text-sm font-bold text-sold-out hover:border-gray-400 border-sold-out text-sold-out"
                href="/en/shop/all-plnts"
              >
                <span>all plants</span>
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer rounded-full border px-4 py-2 text-sm border-grayish text-sold-out hover:border-gray-400"
                href="/en/shop/babyplnts-home"
              >
                <span>baby</span>
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer rounded-full border px-4 py-2 text-sm border-grayish text-sold-out hover:border-gray-400"
                href="/en/shop/new-releases"
              >
                <span>new releases</span>
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer rounded-full border px-4 py-2 text-sm border-grayish text-sold-out hover:border-gray-400"
                href="/en/shop/rare-plnts"
              >
                <span>rare</span>
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer rounded-full border px-4 py-2 text-sm border-grayish text-sold-out hover:border-gray-400"
                href="/en/shop/pots"
              >
                <span>pots</span>
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer rounded-full border px-4 py-2 text-sm border-grayish text-sold-out hover:border-gray-400"
                href="/en/shop/accessories"
              >
                <span>accessories</span>
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer rounded-full border px-4 py-2 text-sm border-grayish text-sold-out hover:border-gray-400"
                href="/en/shop/care-products"
              >
                <span>care products</span>
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer rounded-full border px-4 py-2 text-sm border-grayish text-sold-out hover:border-gray-400"
                href="/en/shop/gift-ideas"
              >
                <span>gift ideas</span>
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer rounded-full border px-4 py-2 text-sm border-grayish text-sale hover:border-sale"
                href="/en/shop/sale"
              >
                <span>sale</span>
              </a>
            </li>
          </ul>
          <button 
            className={`absolute right-2 top-4 z-20 flex h-6 w-6 items-center justify-center bg-black/20 ${!scrolEnd ? "hover:bg-black/50" : " cursor-default" }  md:-right-2`}
            onClick={() => slide(+shiftN)}
          >
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
        </nav>
      </div>
    </>
  );
}

export default CategoryNav