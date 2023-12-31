"use client";

import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide5 from "@/assets/slides/slide5.png";
import slide6 from "@/assets/slides/slide6.png";
import slide7 from "@/assets/slides/slide7.png";
import slide8 from "@/assets/slides/slide8.png";

const Hero = () => {
  const settings = {
    dots: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const slides = [
    {
      url: slide5,
    },
    {
      url: slide6,
    },
    {
      url: slide7,
    },
    {
      url: slide8,
    },
  ];

  return (
    <>
      <div className="max-w-[1400px] h-full w-full m-auto py-0 px-0 relative group">
        <div className="w-full h-full rounded-2xl bg-center bg-cover2 object-cover duration-500">
          <Slider {...settings}>
            {slides.map((data, index) => {
              return (
                <Image src={data.url} alt="" className="md:h-[500px] w-full" key={index} />
              );
            })}
          </Slider>
        </div>
        {/* Left Arrow */}
        {/* <div className="flex items-center absolute top-[50%] -translate-x-1 translate-y-[-50%] left-0 text-2xl rounded-r px-1.5 py-2 bg-black/20 hover:bg-black/30 text-white cursor-pointer">
          <button onClick={prevSlide}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 md:w-9 md:h-9 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
        </div> */}
        {/* Right Arrow */}
        {/* <div className="flex items-center absolute top-[50%] -translate-x-0 translate-y-[-50%] right-0 text-2xl rounded-l px-1.5 py-2 bg-black/20 hover:bg-black/30 text-white cursor-pointer">
          <button onClick={nextSlide}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 md:w-9 md:h-9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
        <div className="absolute w-full bottom-0">
          <div className=" flex justify-center py-1">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className="text-lg cursor-pointer text-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-point-filled"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z"
                    strokeWidth="0"
                    fill="currentColor"
                  />
                </svg>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Hero;
