import React from "react";
import Link from "next/link";
import Image from "next/image";

import ava from "@/assets/img/ava4.svg"

const AuthorBubble = () => {
  return (
    <>
      <div className="shrink-0 z-50 cursor-pointer group">
        
        <div className="text-sm font-semibold text-white inset-0 w-full">
            By <span className="underline">Roderick Scott</span>
        </div>
        <div className="absolute member hidden group-hover:block w-56 md:w-64 shadow-xl rounded border border-gray-400 mt-2 md:mt-2 -ml-102">
          
          <div className="flex justify-between items-center border-b-0.5 md:border-b p-3 bg-white rounded-t">
            <div className="flex justify-center w-12 h-12 md:w-14 md:h-14">
                <Image src={ava} alt="" />
            </div>
            
            <div className="flex flex-col items-center text-lio-500 text-center">
              <span className="flex min-w-8 h-8 px-2 bg-lio-100 font-bold rounded items-center justify-center">
                1
              </span>
              <span className="text-sm">Articles</span>
            </div>

            <div className="flex flex-col items-center text-lio-500 text-center">
              <span className="flex min-w-8 h-8 px-2 bg-lio-100 font-bold rounded items-center justify-center">
                0
              </span>
              <span className="text-sm">Replies</span>
            </div>
          </div>

          <div className="flex flex-col bg-gray-100 py-1 px-2 md:p-3 text-sm rounded-b">
            <span>Roderick Scott</span>
            <span className="text-gray-500">Active: November 2023</span>
          </div>
        </div>

      </div>
    </>
  );
};

export default AuthorBubble;
