import React from "react";
import Image from "next/image";

import baby from "@/assets/img/baby.png";

const HeroShop = () => {
  return (
    <>
      <div className="mx-auto max-w-[120rem]">
        <div className="relative z-0 w-full h-[248px] md:h-[496px]">
          <Image src={baby} alt="" className="object-cover h-full" />
          <div className="absolute flex right-8 top-0 z-20 flex h-full flex-row px-3 md:px-0 justify-between2">
            {/* <span className="flex-none self-end pb-3 xl:pb-8">
              <a
                className="flex flex-none flex-col flex-nowrap justify-end"
                href="/en/product/plnts-nutrition-500ml"
              >
                <span className="flex flex-none flex-row justify-center items-center relative whitespace-nowrap z-10 bg-white/85 text-black h-[32px] lg:h-[76px] font-serif text-xl lg:text-6xl px-3 lg:px-6 box-medium flex-none self-start">
                  PLNTS nutrition
                </span>
                <span className="flex flex-none flex-row justify-center items-center relative whitespace-nowrap z-10 bg-white/85 text-black h-[32px] lg:h-[76px] font-serif text-xl lg:text-6xl px-3 lg:px-6 box-medium flex-none self-start">
                  500ml
                </span>
                <span className="flex flex-none flex-row justify-center items-center relative whitespace-nowrap z-10 bg-black text-white h-[32px] lg:h-[76px] font-serif text-xl lg:text-6xl px-3 lg:px-6 box-medium flex-none self-start">
                  €5,95
                </span>
              </a>
            </span> */}
            <div className=" flex">
              <section className="z-20 flex w-full flex-col justify-center gap-4 overflow-hidden text-center text-white md:text-left h-auto px-8 py-5 md:h-[435px] md:max-w-[522px] md:px-10 md:py-0 lg:min-w-[522px] xl:px-20  bg-[#5f574a]/85 [&amp;_h1]:text-white">
                <h1 className="flex flex-col items-center justify-start text-xl md:items-start md:text-6xl">
                  care products
                </h1>
                <p className="text-sm md:text-base">
                  We&lsquo;ve got all of the care products you need to ensure your
                  plants grow up to be healthy, happy and strong. Your green
                  thumb worries will be a thing of the past with our super
                  selection of curated plant health products.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroShop;
