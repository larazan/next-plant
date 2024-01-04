import React from "react";
import Image from "next/image";

import detail1 from "@/assets/detail/detail1.png"
import detail2 from "@/assets/detail/detail2.png"
import detail3 from "@/assets/detail/detail3.png"
import detail4 from "@/assets/detail/detail4.png"

const ThumbnailProduct = () => {
    const detailData = [
        {
            id: 1,
            img: detail1
        },
        {
            id: 2,
            img: detail2
        },
        {
            id: 3,
            img: detail3
        },
        {
            id: 4,
            img: detail4
        },
    ]
  return (
    <>
      <div className="hidden md:col-span-1 md:col-start-1 md:block lg:col-span-1 lg:col-start-2">
        <div className="relative w-full">
          <button className="absolute z-20 flex items-center justify-center bg-black/20 hover:bg-black/50 left-1/2 -translate-x-1/2 -translate-y-1/4 h-8 w-8 lg:h-12 lg:w-12 !hidden">
            <svg
              className="text-white rotate-90 h-6 w-6"
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
          <div className="scrollbar-fix space-y-3 overflow-y-scroll md:max-h-[296px] lg:max-h-[373px] xl:max-h-[479px] 2xl:max-h-[496px] 3xl:max-h-[653px]">
            {detailData.map((data, index) => {
                return (
                    <div className="aspect-h-133 aspect-w-108" key={data.id}>
                    <button aria-label="Show next image from slideshow">
                      <div className="absolute inset-0 transform transition-transform md:motion-safe:group-hover:scale-110">
                        <Image src={data.img} alt="" className="object-cover" /> 
                      </div>
                    </button>
                  </div>
                )
            })}
          </div>
          <button className="absolute z-20 flex items-center justify-center bg-black/20 hover:bg-black/50 left-1/2 -translate-x-1/2 -translate-y-3/4 h-8 w-8 lg:h-12 lg:w-12">
            <svg
              className="text-white rotate-90 h-6 w-6"
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
      </div>
      {/*  */}
      <div className="col-span-full md:col-span-4 md:col-start-2 lg:col-span-4 lg:col-start-3">
        <div className="relative">
          <div className="absolute right-3 top-3 z-10 flex flex-row items-center justify-end md:hidden">
            <button
              className="max-h-8 max-w-8 overflow-hidden rounded-full lg:max-h-10 lg:max-w-10"
              aria-label="product is not on your wishlist"
            >
              <svg
                className="h-8 w-8 transform transition-all md:hover:scale-110 lg:h-10 lg:w-10"
                viewBox="0 0 50 50"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
              >
                <circle cx="25" cy="25" r="25" fill="#fff"></circle>
                <path
                  className="transition-opacity opacity-0"
                  d="M16.96 13.795c-3.86 0-6.77 3.2-6.77 7.447 0 .261.02.522.05.782.77 7.94 12.78 16.4 14.68 17.689 1.9-1.292 13.92-9.749 14.69-17.687.03-.266.04-.529.04-.784a7.782 7.782 0 00-2.33-5.513 6.622 6.622 0 00-4.8-1.983c-2.46.046-3.8.419-7.27 3.971l-.33.338-.33-.338c-3.48-3.568-4.93-3.922-7.63-3.922z"
                  fill="#debe48"
                  fill-rule="nonzero"
                ></path>
                <path
                  d="M24.932 24.091h-.014a3.058 3.058 0 01-3.043-3.043c0-.809.323-1.586.897-2.157l2.153-2.153 2.153 2.153c.574.571.897 1.348.897 2.157a3.058 3.058 0 01-3.043 3.043zm-.007-6.044l-1.5 1.5a2.123 2.123 0 00-.622 1.501c0 1.164.958 2.122 2.122 2.122a2.132 2.132 0 002.122-2.122c0-.563-.224-1.103-.622-1.501l-1.5-1.5zm0 22.771l-.252-.163a60.533 60.533 0 01-7.314-5.81c-4.967-4.64-7.673-8.923-8.041-12.73a8.478 8.478 0 01-.045-.873c0-4.771 3.305-8.37 7.689-8.37 2.827 0 4.479.373 7.963 3.865 3.456-3.472 5-3.866 7.585-3.914a7.65 7.65 0 015.46 2.247 8.626 8.626 0 012.56 7.046c-.368 3.806-3.074 8.089-8.042 12.729a60.445 60.445 0 01-7.313 5.81l-.25.163zm-7.963-27.023c-3.857 0-6.766 3.2-6.766 7.447 0 .261.013.522.04.782.77 7.94 12.785 16.4 14.688 17.689 1.9-1.292 13.918-9.749 14.688-17.687a8.09 8.09 0 00.04-.784 7.776 7.776 0 00-2.328-5.513 6.642 6.642 0 00-4.8-1.983c-2.459.046-3.806.419-7.273 3.971l-.33.338-.331-.338c-3.479-3.568-4.925-3.922-7.628-3.922z"
                  fill="#1a171b"
                  fill-rule="nonzero"
                  stroke="#000"
                  stroke-width=".5"
                ></path>
              </svg>
            </button>
          </div>
          <div className="slick-slider slick-initialized" dir="ltr">
            <div className="slick-list">
              <div
                className="slick-track"
                style={{ width: '3615px', opacity: 1, transform: 'translate3d(-241px, 0px, 0px)' }}
              >
                <div
                  data-index="-1"
                  tabindex="-1"
                  className="slick-slide slick-cloned"
                  aria-hidden="true"
                  style={{ width: '241px' }}
                >
                  <div>
                    <div className="aspect-h-133 aspect-w-108 transform transition-transform md:motion-safe:group-hover:scale-110">
                      <Image src={detail1} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ul className="slickDots">
              <li className="slick-active">
                <button>1</button>
              </li>
              <li className="">
                <button>2</button>
              </li>
              <li className="">
                <button>3</button>
              </li>
              <li className="">
                <button>4</button>
              </li>
             
            </ul>
          </div>
          <span className="w-auto px-2 py-1.5 text-sm font-bold leading-none text-white 3xl:px-3 3xl:py-1.7 3xl:text-base bg-secondary/80 absolute bottom-6">
            only 5 in stock
          </span>
        </div>
      </div>
    </>
  );
};

export default ThumbnailProduct;
