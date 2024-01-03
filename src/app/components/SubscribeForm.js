import React from "react";
import Image from "next/image";

import img from "@/assets/img/about2.png";

const SubscribeForm = () => {
  return (
    <>
      <div className="relative flex bg-white py-2 ">
        <div className="flex justify-center items-center mx-auto w-11/12 md:w-10/12  ">
          <div className="flex w-full flex-col md:flex-row md:py-8 ">
            <div className="w-full ">
              <div className="w-full px-4 py-6 md:p-8 bg-white border-t-2 ">
                <div className="flex flex-col space-y-5">
                  <h3 className="text-center uppercase text-lg md:text-2xl text-gray-900 font-semibold leading-tight">
                    SIGN UP TO OUR NEWSLETTER & GET 10% OFF
                  </h3>

                  <div className="flex">
                    <input
                      className="w-full py-3 px-4 text-sm bg-white border border-gray-400 placeholder:text-center focus:outline-none outline-none focus:border-[#00634b] text-gray-800 font-mabry"
                      type="email"
                      placeholder="Enter email here"
                    />
                    <button className=" py-2 px-4 bg-white font-semibold text-sm tracking-wider text-gray-900 border-y border-r border-gray-400 uppercase transition duration-200 hover:bg-[#00634b] hover:border-gray-[#00634b] hover:text-[#fbd718]">
                      Subscribe
                    </button>
                  </div>
                  <div className="flex mx-auto w-11/12 justify-center">
                    <span className="text-center text-sm text-gray-400">
                      Subscribe to our newsletter and be the first to hear about
                      our new arrival, special promotions and online exclusives.
                    </span>
                  </div>
                  <div className="flex space-x-3 mx-auto w-11/12 justify-center">
                    <div className="flex items-center rounded-full p-2 transition duration-500 ease-in-out text-gray-900 hover:text-white hover:scale-1052 hover:bg-gray-900 cursor-pointer">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        class="icon icon-facebook w-5 h-5"
                        viewBox="0 0 320 512"
                      >
                        <path
                          fill="currentColor"
                          d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                        ></path>
                      </svg>
                    </div>
                    <div className="flex items-center rounded-full p-2 transition duration-500 ease-in-out text-gray-900 hover:text-white hover:scale-1052 hover:bg-gray-900 cursor-pointer">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        class="icon icon-instagram w-5 h-5"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                        ></path>
                      </svg>
                    </div>
                    <div className="flex items-center rounded-full p-2 transition duration-500 ease-in-out text-gray-900 hover:text-white hover:scale-1052 hover:bg-gray-900 cursor-pointer">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        class="icon icon-tiktok w-5 h-5"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
                        ></path>
                      </svg>
                    </div>
                    <div className="flex items-center rounded-full p-2 transition duration-500 ease-in-out text-gray-900 hover:text-white hover:scale-1052 hover:bg-gray-900 cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-brand-twitter-filled"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        strokeWidth="1"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path
                          d="M14.058 3.41c-1.807 .767 -2.995 2.453 -3.056 4.38l-.002 .182l-.243 -.023c-2.392 -.269 -4.498 -1.512 -5.944 -3.531a1 1 0 0 0 -1.685 .092l-.097 .186l-.049 .099c-.719 1.485 -1.19 3.29 -1.017 5.203l.03 .273c.283 2.263 1.5 4.215 3.779 5.679l.173 .107l-.081 .043c-1.315 .663 -2.518 .952 -3.827 .9c-1.056 -.04 -1.446 1.372 -.518 1.878c3.598 1.961 7.461 2.566 10.792 1.6c4.06 -1.18 7.152 -4.223 8.335 -8.433l.127 -.495c.238 -.993 .372 -2.006 .401 -3.024l.003 -.332l.393 -.779l.44 -.862l.214 -.434l.118 -.247c.265 -.565 .456 -1.033 .574 -1.43l.014 -.056l.008 -.018c.22 -.593 -.166 -1.358 -.941 -1.358l-.122 .007a.997 .997 0 0 0 -.231 .057l-.086 .038a7.46 7.46 0 0 1 -.88 .36l-.356 .115l-.271 .08l-.772 .214c-1.336 -1.118 -3.144 -1.254 -5.012 -.554l-.211 .084z"
                          strokeWidth="0"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscribeForm;
