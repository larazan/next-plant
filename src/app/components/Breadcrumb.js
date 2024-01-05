import React from 'react'

const Breadcrumb = () => {
  return (
    <>
      <section className="py-2 md:bg-white md:py-4 md:text-sm">
        <div className="grid-container px-3 lg:px-0">
          <nav aria-label="breadcrumbs">
            <div className="relative w-full">
              <button className="absolute z-20 flex items-center justify-center bg-grayish hover:bg-grayish left-0 top-0 h-full w-8 !hidden">
                <svg
                  className="text-black h-6 w-6"
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
              <ul className="scrollbar-fix flex flex-row flex-nowrap justify-start overflow-x-scroll no-scrollbar">
                <li className="">
                  <a
                    className="whitespace-nowrap text-sm hover:underline text-gray-900"
                    href="/en/shop/all-plnts"
                  >
                    All PLNTS
                  </a>
                </li>
                <li className='before:inline before:px-3 before:text-sm before:content-[">"] text-gray-900'>
                  <a
                    className="whitespace-nowrap text-sm hover:underline text-gray-900"
                    href="/en/shop/rare-plnts"
                  >
                    RarePLNTS
                  </a>
                </li>
                <li className='before:inline before:px-3 before:text-sm before:content-[">"] text-gray-900'>
                  <a
                    className="whitespace-nowrap text-sm hover:underline text-gray-900"
                    href="/en/shop/medium-houseplants"
                  >
                    Medium houseplants
                  </a>
                </li>
                <li className='before:inline before:px-3 before:text-sm before:content-[">"] text-gray-900'>
                  <a
                    className="whitespace-nowrap text-sm hover:underline text-gray-900"
                    href="/en/shop/all-plnts/plantfamily:monstera"
                  >
                    Monstera
                  </a>
                </li>
                <li className=" hidden before:inline before:px-3 before:text-sm md:block md:before:content-['>'] text-gray-900">
                  <span className="text-sm font-semibold text-sold-out underline">
                    Monstera Frozen Freckles
                  </span>
                </li>
              </ul>
              <button className="absolute z-20 flex items-center justify-center bg-grayish hover:bg-grayish right-0 top-0 h-full w-8 !hidden">
                <svg
                  className="text-black h-6 w-6"
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
          </nav>
        </div>
      </section>
    </>
  );
}

export default Breadcrumb