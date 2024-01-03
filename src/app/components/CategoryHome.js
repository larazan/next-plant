import React from "react";
import Link from "next/link";
import Image from "next/image";

import bathroom from "@/assets/img/bathroom.png"
import kitchen from "@/assets/img/kitchen.png"
import living from "@/assets/img/living.png"
import workspace from "@/assets/img/workspace.png"

const CategoryHome = () => {
  return (
    <>
      <div className="relative z-10 items-center overflow-hidden bg-white">
        <div className="flex flex-col flex-1 space-y-1 justify-center items-center pt-12 mx-auto w-11/12 md:w-4/5">
          <h1 className="text-2xl md:text-2xl font-bold text-gray-900">
          Fresh, Healthy and Happy
          </h1>
        </div>
        <div className="flex flex-col space-y-6 pt-8 mx-auto w-10/12">
          
          <div className="flex w-full">
            <div className="w-1/2">
              <Image src={kitchen} alt="" className="object-cover" />
            </div>
            <div className="w-1/2 flex justify-center items-center bg-[#25958f] text-white">
              <div className="flex px-4 md:px-10 flex-col space-y-4 md:space-y-8">
                <h1 className="text-lg md:text-lg md:text-4xl font-bold">Kitchen</h1>
                <span className="text-xs md:text-md">
                Styling indoor plants in your kitchen can help you achieve a tranquil sanctuary which aids relaxation. Choose air purifying plants to breathe cleaner air.
                </span>
              </div>
            </div>
          </div>

          <div className="flex w-full">
            <div className="w-1/2 flex justify-center items-center bg-[#25958f] text-white">
              <div className="flex px-4 md:px-10 flex-col space-y-4 md:space-y-8">
                <h1 className="text-lg md:text-4xl font-bold">Workspace</h1>
                <span className="text-xs md:text-md">
                Foliage-filled workspaces. Boost productivity and creativity by setting up a healthy workplace.
                </span>
              </div>
            </div>
            <div className="w-1/2">
              <Image src={workspace} alt="" className="w-full object-cover" />
            </div>
          </div>

          <div className="flex w-full">
            <div className="w-1/2">
              <Image src={bathroom} alt="" className="object-cover" />
            </div>
            <div className="w-1/2 flex justify-center items-center bg-[#25958f] text-white">
              <div className="flex px-4 md:px-10 flex-col space-y-4 md:space-y-8">
                <h1 className="text-lg md:text-4xl font-bold">Bathroom</h1>
                <span className="text-xs md:text-md">
                Create a botanical bathroom. Humidity-loving plants will thank you for placing them in steamy bathrooms and will require very little attention.
                </span>
              </div>
            </div>
          </div>

          <div className="flex w-full">
            <div className="w-1/2 flex justify-center items-center bg-[#25958f] text-white">
              <div className="flex px-4 md:px-10 flex-col space-y-4 md:space-y-8">
                <h1 className="text-lg md:text-4xl font-bold">Living Room</h1>
                <span className="text-xs md:text-md">
                Softening spaces in the living room. From full indoor jungle vibes to creating a focal point with a few statement plants, foliage in your living room will soften spaces and create signature accents.
                </span>
              </div>
            </div>
            <div className="w-1/2">
              <Image src={living} alt="" className="object-cover" />
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default CategoryHome;
