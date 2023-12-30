import React from 'react'
import {Link} from "react-scroll";
import Image from 'next/image';

const PlantNav = () => {
  return (
    <>
        <div className="shadow-lg bg-[#f8f3e7] mb-5 sticky top-0 z-20">
          <div className='inline-flex2 flex-nowrap mx-auto w-full md:w-10/12 '>
          <ul className="flex overflow-x-auto no-scrollbar w-full items-center md:justify-center2 md:space-x-3  tracking-tight font-semibold text-sm text-[#b6cce2] shadow2">
            <li className="flex min-w-max nav-item md:-mt-px">
              <Link  className="flex items-center md:space-x-2 p-3 cursor-pointer" activeClass="active" to="where" spy={true} smooth={true} offset={-80} duration={500} >
                <span className="text-xs md:text-base md:inline text-gray-800 font-semibold">
                    Where to Plant
                </span>
              </Link>
            </li>
            <li className="min-w-max nav-item md:-mt-px">
              <Link className="flex items-center md:space-x-2 p-3 cursor-pointer" activeClass="active" to="tips" spy={true} smooth={true} offset={-80} duration={500}>
                <span className="text-xs md:text-base md:inline text-gray-800 font-semibold">
                Planting Tips
                </span>
              </Link>
            </li>
            <li className="min-w-max nav-item md:-mt-px">
              <Link className="flex items-center md:space-x-2 p-3 cursor-pointer" activeClass="active" to="care" spy={true} smooth={true} offset={-80} duration={500}>
                <span className="text-xs md:text-base md:inline text-gray-800 font-semibold">
                Care
                </span>
              </Link>
            </li>
            <li className="min-w-max nav-item   md:-mt-px">
              <Link className="flex items-center md:space-x-2 p-3 cursor-pointer" activeClass="active" to="problem" spy={true} smooth={true} offset={-80} duration={500}>
                <span className="text-xs md:text-base md:inline text-gray-800 font-semibold">
                Pests and Problems
                </span>
              </Link>
            </li>
            <li className="min-w-max nav-item   md:-mt-px">
              <Link className="flex items-center md:space-x-2 p-3 cursor-pointer" activeClass="active" to="propagation" spy={true} smooth={true} offset={-80} duration={500}>
                <span className="text-xs md:text-base md:inline text-gray-800 font-semibold">
                Propagation
                </span>
              </Link>
            </li>
            <li className="min-w-max nav-item   md:-mt-px">
              <Link className="flex items-center md:space-x-2 p-3 cursor-pointer" activeClass="active" to="type" spy={true} smooth={true} offset={-80} duration={500}>
                <span className="text-xs md:text-base md:inline text-gray-800 font-semibold">
                Types
                </span>
              </Link>
            </li>
            <li className="min-w-max nav-item   md:-mt-px">
              <Link className="flex items-center md:space-x-2 p-3 cursor-pointer" activeClass="active" to="plan" spy={true} smooth={true} offset={-80} duration={500}>
                <span className="text-xs md:text-base md:inline text-gray-800 font-semibold">
                Garden Plans
                </span>
              </Link>
            </li>
            <li className="min-w-max nav-item   md:-mt-px">
              <Link className="flex items-center md:space-x-2 p-3 cursor-pointer" activeClass="active" to="faq" spy={true} smooth={true} offset={-80} duration={500}>
                <span className="text-xs md:text-base md:inline text-gray-800 font-semibold">
                FAQ
                </span>
              </Link>
            </li>
            
          </ul>
        </div>
        </div>
    </>
  )
}

export default PlantNav