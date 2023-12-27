"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import product1 from "@/assets/product/produk1.png";
import product2 from "@/assets/product/produk2.png";
import product3 from "@/assets/product/produk3.png";
import product4 from "@/assets/product/produk4.png";
import product5 from "@/assets/product/produk5.png";
import product6 from "@/assets/product/produk6.png";
import product7 from "@/assets/product/produk7.png";
import product8 from "@/assets/product/produk8.png";
import product9 from "@/assets/product/produk9.png";
import pro1 from "@/assets/product/produk14.png";
import Pagination from "./Pagination";

const ProductList = () => {
  const [open, setOpen] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  const unhover = () => {
    setOpen("");
  };

  const productData = [
    {
      id: 1,
      title: "Frieskies Seafood Sensations Dry Cat Food",
      slug: "product-1",
      price: "8.00",
      img: product1,
    },
    {
      id: 2,
      title: "Frieskies Seafood Sensations Dry Cat Food",
      slug: "product-1",
      price: "8.00",
      img: product2,
    },
    {
      id: 3,
      title: "Frieskies Seafood Sensations Dry Cat Food",
      slug: "product-1",
      price: "8.00",
      img: product3,
    },
    {
      id: 4,
      title: "Frieskies Seafood Sensations Dry Cat Food",
      slug: "product-1",
      price: "8.00",
      img: product4,
    },
    {
      id: 5,
      title: "Frieskies Seafood Sensations Dry Cat Food",
      slug: "product-1",
      price: "8.00",
      img: product5,
    },
    {
      id: 6,
      title: "Frieskies Seafood Sensations Dry Cat Food",
      slug: "product-1",
      price: "8.00",
      img: product6,
    },
    {
      id: 7,
      title: "Frieskies Seafood Sensations Dry Cat Food",
      slug: "product-1",
      price: "8.00",
      img: product7,
    },
    {
      id: 8,
      title: "Frieskies Seafood Sensations Dry Cat Food",
      slug: "product-1",
      price: "8.00",
      img: product8,
    },
    {
      id: 9,
      title: "Frieskies Seafood Sensations Dry Cat Food",
      slug: "product-1",
      price: "8.00",
      img: product9,
    },
  ];

  return (
    <>
      <div className="col-start-1 md:col-span-8 md:col-start-5 md:row-start-2 xl:col-start-4">
        <section className="grid w-full grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4 xl:gap-4">
          {productData.map((data, index) => {
            return (
              <article
                className="relative overflow-hidden md:transform md:transition-all cursor-pointer"
                key={index}
              >
                <a
                  href=""
                  className="group relative flex flex-col justify-start"
                >
                  <div className="aspect-h-305 aspect-w-246 bg-grayish transform transition-transform  md:motion-safe:group-hover:scale-110">
                    <Image src={data.img} alt="" />
                  </div>
                  <button
                    class="max-h-8 max-w-8 overflow-hidden rounded-full lg:max-h-10 lg:max-w-10 absolute right-2 top-2 z-10"
                    aria-label="product is not on your wishlist"
                  >
                    <svg
                      class="h-8 w-8 transform transition-all md:hover:scale-110 lg:h-10 lg:w-10"
                      viewBox="0 0 50 50"
                      xmlns="http://www.w3.org/2000/svg"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    >
                      <circle cx="25" cy="25" r="25" fill="#fff"></circle>
                      <path
                        class="transition-opacity opacity-0"
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

                  <section class="flex grow flex-col justify-start lg:mt-2 lg:justify-between">
                    <span class="truncate m-0 font-sans text-sm font-bold leading-tight 3xl:text-base">
                      Silver Blush
                    </span>
                    <span class="text-sm italic leading-none lg:text-base 3xl:text-base">
                      Anthurium
                    </span>
                    <span class="flex flex-row items-center gap-2 text-sm leading-tight 3xl:text-base">
                      <span class="font-bold">€32.95</span>
                    </span>
                  </section>
                </a>
              </article>
              // <Link
              //   href={`/detail`}
              //   className="transform overflow-hidden bg-transparent duration-200 hover:scale-105 cursor-pointer"
              //   key={index}
              // >
              //   <div
              //     className="bg-[#f4f4f4] p-2 rounded-md"
              //     onMouseOver={() => setOpen(data.id)}
              //     onMouseOut={unhover}
              //   >
              //     <Image
              //       width={500}
              //       height={500}
              //       src={open === data.id ? pro1 : data.img}
              //       alt={data.title}
              //       onMouseOver={(e) => console.log(e)}
              //     />
              //   </div>
              //   <div className="p-2 flex flex-col justify-center items-center space-y-1 text-black/[0.9]">
              //     <h2 className="text-base text-center font-medium leading-tight">
              //       {data.title}
              //     </h2>
              //     <div className="flex items-center text-black/[0.5]">
              //       <p className="mr-2 text-lg text-gray-950 font-semibold">
              //         ${data.price}
              //       </p>

              //       {data.price && (
              //         <>
              //           <p className="text-base  font-medium line-through">
              //             ${data.price}
              //           </p>
              //         </>
              //       )}
              //     </div>
              //   </div>
              // </Link>
            );
          })}
        </section>
        <Pagination />
      </div>
    </>
  );
};

export default ProductList;
