import React, { useState } from "react";
import Image from "next/image";

import ava1 from "@/assets/img/ava1.svg";
import ava2 from "@/assets/img/ava2.svg";
import ava3 from "@/assets/img/ava3.svg";
import ava4 from "@/assets/img/ava4.svg";
import ava5 from "@/assets/img/ava5.png";
import ava6 from "@/assets/img/ava6.png";
import ava7 from "@/assets/img/ava7.png";
import ava8 from "@/assets/img/ava8.png";
import ava9 from "@/assets/img/ava9.png";
import ava10 from "@/assets/img/ava10.png";

import review from "@/assets/reviews/review.jpg";
import review1 from "@/assets/reviews/review1.jpg";
import review2 from "@/assets/reviews/review2.jpg";
import review3 from "@/assets/reviews/review3.jpg";
import review4 from "@/assets/reviews/review4.jpg";
import review5 from "@/assets/reviews/review5.jpg";
import review6 from "@/assets/reviews/review6.jpg";
import review7 from "@/assets/reviews/review7.jpg";
import review8 from "@/assets/reviews/review8.jpg";
import review9 from "@/assets/reviews/review9.jpg";
import review10 from "@/assets/reviews/review10.jpg";

import ModalReview from "./ModalReview";
import AddReview from "./AddReview";

const Review = () => {
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [addReviewOpen, setAddReviewOpen] = useState(false);

  const [show, setShow] = useState(false);
  const shout = [
    {
      name: "Flean W.",
      date: "October 25, 2022",
      ava: ava5,
      img: review1,
      testimoni:
        "La pianta è arrivata bene imballata anche se il viaggio ha fatto si che il terriccio si perdesse all'interno della confezione. La variegarura non è delle più belle ,ma sicuramente nella crescita migliorerà. Terriccio pessimo , troppo bagnato e completamente compatto , le radici erano in sofferenza. Nel complesso non male ordinerò sicuramente altre piante .",
    },
    {
      name: "Sharon Blackwell",
      date: "October 25, 2022",
      ava: ava6,
      img: review2,
      testimoni:
        "IThis is probably the most beautiful plant I’ve ever ordered. Such beautiful variegation and it arrived with no damage at all.",
    },
    {
      name: "Cole A.",
      date: "October 25, 2022",
      ava: ava7,
      img: review3,
      testimoni:
        "Llegó a España en 1 semana, perfectamente empaquetada; con 6 hojas y muy buena variegación. Es una planta preciosa, sin duda la recomiendo.",
    },
    {
      name: "Kartik S. Kapoor",
      date: "October 25, 2022",
      ava: ava8,
      img: review4,
      testimoni:
        "Very happy to have this gorgeous MDV! She is just lovely! Every leaf perfect! Thank you!",
    },
    {
      name: "Tim Zhou",
      date: "October 25, 2022",
      ava: ava9,
      img: review5,
      testimoni:
        "Stunning plant, huge leaves with lots of fenestrations and high stable variegation",
    },
    {
      name: "Cerila Smith",
      date: "October 25, 2022",
      ava: ava10,
      img: review6,
      testimoni:
        "The most beautiful plant I have ever seen: I am totally IN LOVE! Huge and amazingly variegated, literally stunning.",
    },
  ];

  return (
    <>
      <div className="flex relative z-10 items-center overflow-hidden bg-white">
        <div className="flex flex-col space-y-5 mx-auto w-11/12 py-10">
          <div>
            <span className="text-2xl font-semibold">Customer Reviews</span>
          </div>
          <div className="flex space-x-4 mx-auto w-10/12 justify-center">
            <div>
              <span className="text-4xl font-bold">4.8</span>
            </div>
            <div class="flex items-center items-end2 space-x-1 rtl:space-x-reverse">
              <svg
                class="w-6 h-6 text-pink-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                class="w-6 h-6 text-pink-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                class="w-6 h-6 text-pink-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                class="w-6 h-6 text-pink-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                class="w-6 h-6 text-gray-300 dark:text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>
            <div className="flex items-end">
              <span>Based on 50 Reviews</span>
            </div>
          </div>
          <div className="flex w-full ">
            <div className=" border-black w-[200px] border-2 border-solid hover:shadow-md transform duration-200 hover:scale-105">
              <button
                className="filter place-content-center flex w-full justify-between px-3 items-center py-1 text-black focus:outline-none "
                type="button"
                onClick={() => setAddReviewOpen(!addReviewOpen)}
              >
                <span className="text-black block max-w-[23ch] truncate text-14 font-semibold xs:max-w-none xs:text-16">
                  Write a Review
                </span>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <div className="flex flex-col divide-y  py-5 border-y">
            {/* {show ? (
              <div className="flex w-full space-x-2">
                <div className="w-full md:w-1/2 flex flex-col space-y-2 pb-5">
                  <div>
                    <span className="text-md text-gray-600 font-semibold">
                      Title
                    </span>
                    <input
                      className="w-full bg-white border border-gray-400 text-gray-900 mt-1 px-3 py-1.5 rounded focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder=""
                    />
                  </div>
                  <div className="">
                    <span className="text-md text-gray-600 font-semibold">
                      Rate
                    </span>
                    <div class="flex items-center items-end2 space-x-1 rtl:space-x-reverse">
                      <svg
                        class="w-6 h-6 text-pink-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        class="w-6 h-6 text-pink-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        class="w-6 h-6 text-pink-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        class="w-6 h-6 text-pink-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        class="w-6 h-6 text-gray-300 dark:text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    </div>
                  </div>
                  <div className="">
                    <span className="text-md text-gray-600 font-semibold">
                      Review
                    </span>
                    <textarea className="w-full h-20 bg-white border border-gray-400 text-gray-900 mt-1 px-3 py-1.5 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                  </div>
                  <div className="">
                    <button className="text-md font-bold tracking-wide bg-[#006eff] hover:opacity-80 text-white p-2 rounded-lg w-full focus:outline-none focus:shadow-outline">
                      Send
                    </button>
                  </div>
                </div>
                <div className="w-1/6 md:w-1/2 ">
                  <button
                    className="flex justify-end px-2 py-2 bg-black text-white rounded-full"
                    onClick={() => setShow(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5"
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
              <></>
            )} */}

            <div className="columns-2 md:columns-3 lg:columns-3 gap-3 md:gap-6 mt-4 mb-4 md:mt-8 md:mb-8 mx-auto py-6 w-full px-3 md:px-0 md:w-12/12 ">
              {shout.map((data, index) => {
                return (
                  <div
                    // className="mb-4 rounded-lg flex justify-center  flex-col space-y-2 px-0 py-6 bg-[#f2f6f6]"
                    className="mb-4 rounded flex justify-center flex-col space-y-2 px-0 py-0 bg-white hover:bg-gray-50 border cursor-zoom-in shadow"
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setReviewModalOpen(true);
                    }}
                  >
                    <div className="flex flex-col space-y-3 px-0 w-full">
                      <div className="flex justify-center items-center bg-white ">
                        <Image src={data.img} alt="" className="rounded-t w-full2 h-60 object-cover" />
                      </div>
                      <div className="flex space-x-3 px-3 w-full">
                        <div className="flex justify-center items-center">
                          <Image
                            src={data.ava}
                            alt=""
                            className="rounded-full w-10 md:w-12"
                          />
                        </div>
                        <div className="flex flex-col leading-tight">
                          <h3 className="text-sm md:text-sm font-bold text-gray-900">{data.name}</h3>
                          <div className="text-sm font-mabry">
                            <div className="flex items-center space-x-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-4 h-4 text-[#debe48]"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-4 h-4 text-[#debe48]"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-4 h-4 text-[#debe48]"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-4 h-4 text-[#debe48]"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-4 h-4 text-[#debe48]"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          </div>
                          <span className="text-xs text-gray-400">{data.date}</span>
                        </div>
                      </div>
                      <div className="flex px-3 pb-3 leading-tight md:leading-snug text-[15px] text-gray-900">
                        <span className="">{data.testimoni}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <ModalReview
        modalOpen={reviewModalOpen}
        setModalOpen={setReviewModalOpen}
      />
      <AddReview
        addReviewOpen={addReviewOpen}
        setAddReviewOpen={setAddReviewOpen}
      />
    </>
  );
};

export default Review;
