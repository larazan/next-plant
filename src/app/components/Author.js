import React from "react";
import Image from "next/image";

import ava from "@/assets/img/ava3.svg"

const Author = () => {
  return (
    <>
      <div class="w-full bg-gray-200">
        <div class=" mx-auto flex max-w-screen-lg flex-col items-center justify-center space-y-4 px-6 py-4 md:flex-row md:justify-start md:space-x-9 md:space-y-0 md:px-12 md:py-8 ">
          <div class="relative h-28 w-28 flex-none overflow-hidden rounded-full bg-grayish">
            <Image src={ava} alt="" />
          </div>
          <div class="space-y-2 text-center md:w-1/2 md:text-left">
            <span class="text-2xl font-semibold text-gray-900">Carlijn</span>
            <p className="text-sm text-gray-900"> 
              Carlijn is probably one of the biggest plant geeks ever. She is
              always on the lookout for new gems and loves to share all her
              plant knowledge, tips and inspiration with our community!
            </p>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Author;
