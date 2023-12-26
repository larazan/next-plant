import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";

const NewsFeed = () => {
  const [show, setShow] = useState(true);
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const delay = 2500;

  const handleClick = () => {
    setShow(!show);
  };

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === news.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  const news = [
    "$50 off for your first order",
    // "Free UK Mainland Delivery on Orders Over £40",
    // "$50 off for your first order",
  ];

  return (
    <>
      <div class="border-b border-sold-out/50 bg-grayish">
        <div class="grid-container overflow-x-hidden px-3 py-2 md:py-3 lg:px-0 lg:py-4">
          <ul
            style={{ transform: 'translateX(-200%)' }}
            class="flex items-center transition-transform xl:gap-x-[4.5rem] xl:transition-none duration-[0ms]2 duration-500"
          >
            <li class="w-full shrink-0 text-center text-xs before:mr-2 before:text-primary before:content-['\2713'] md:text-base xl:flex xl:w-auto xl:items-center xl:justify-center xl:text-left">
              <span>
                <a
                  href="/"
                  class=""
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <strong class="font-bold">Free shipping</strong> for orders
                  over €75,-
                </a>
              </span>
            </li>
            <li class="w-full shrink-0 text-center text-xs before:mr-2 before:text-primary before:content-['\2713'] md:text-base xl:flex xl:w-auto xl:items-center xl:justify-center xl:text-left">
              <span>
                <a class="" href="/">
                  30 days PLNTS{" "}
                  <strong class="font-bold">health guarantee</strong>
                </a>
              </span>
            </li>
            <li class="w-full shrink-0 text-center text-xs before:mr-2 before:text-primary before:content-['\2713'] md:text-base xl:flex xl:w-auto xl:items-center xl:justify-center xl:text-left">
              <span>
                <a
                  href="/"
                  class=""
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <strong class="font-bold">4.6/5</strong> out of{" "}
                  <strong class="font-bold">18,700+ reviews</strong>
                </a>
              </span>
            </li>
            <li class="w-full shrink-0 text-center text-xs before:mr-2 before:text-primary before:content-['\2713'] md:text-base xl:flex xl:w-auto xl:items-center xl:justify-center xl:text-left xl:invisible 3xl:visible">
              <span>
                <a
                  href="/"
                  class=""
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Ordered on weekdays before{" "}
                  <strong class="font-bold">12pm</strong>, shipped today
                </a>
              </span>
            </li>
            <li class=" w-full shrink-0 text-center text-xs before:mr-2 before:text-primary before:content-['\2713'] md:text-base xl:hidden ">
              <a
                href="/"
                class=""
                target="_blank"
                rel="noreferrer noopener"
              >
                <strong class="font-bold">Free shipping</strong> for orders over
                €75,-
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* {show ? (
        <div className="relative w-full overflow-hidden overflow-x-auto flex z-20 justify-center mt-0 px-3 md:px-6 py-3 bg-black">
          {news.map((ne, index) => {
            return (
              <div className="min-w-full text-center2" key={index}>
                <div
                  className="w-full flex justify-center text-sm uppercase font-semibold text-[#f3c30e]"
                  key={index}
                >
                  {ne}
                </div>
              </div>
            );
          })}
          <div className="absolute right-6 top-3 flex items-center space-x-5">
            <button className="cursor-pointer" onClick={handleClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 text-[#f3c30e]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="mt-0"></div>
        </>
      )} */}
    </>
  );
};

export default NewsFeed;
