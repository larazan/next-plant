"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import detail1 from "@/assets/detail/detail1.png";
import detail2 from "@/assets/detail/detail2.png";
import detail3 from "@/assets/detail/detail3.png";
import detail4 from "@/assets/detail/detail4.png";

const ThumbnailProduct = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    onReInit: () => setCurrentSlide(slider1?.innerSlider.state.currentSlide),
    lazyLoad: true,
    asNavFor: ".slider-nav",
    focusOnSelect: true,
  };

  useEffect(() => {
    setNav1(slider1);
  }, [slider1]);

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  });

  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav",
  };

  const settingsThumbs = {
    slidesToShow: 3,
    slidesToScroll: 1,
    // asNavFor: ".slider-for",
    dots: true,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: "10px",
  };

  const detailData = [
    {
      id: 1,
      img: detail1,
    },
    {
      id: 2,
      img: detail2,
    },
    {
      id: 3,
      img: detail3,
    },
    {
      id: 4,
      img: detail4,
    },
  ];

  return (
    <>
      <div className="col-span-full md:col-span-5 md:col-start-1 lg:col-span-4 lg:col-start-3 pb-3 slider-wrapper">
        <div className="relative ">
          <Slider
            {...settingsMain}
            asNavFor={nav2}
            ref={(slider) => setSlider1(slider)}
          >
            {detailData.map((slide) => (
              <div
                className="slick-slide w-full aspect-h-133 aspect-w-108 transform transition-transform md:motion-safe:group-hover:scale-110"
                key={slide.id}
              >
                <Image
                  className="slick-slide-image "
                  // src={`https://picsum.photos/800/400?img=${slide.id}`}
                  src={slide.img}
                  alt=""
                />
              </div>
            ))}
          </Slider>
          <span className="w-auto px-2 py-1.5 text-sm font-bold leading-none text-white 3xl:px-3 3xl:py-1.7 3xl:text-base bg-secondary/80 absolute bottom-6">
            only 5 in stock
          </span>
        </div>
        <div className="thumbnail-slider-wrap py-2">
          <Slider
            {...settingsThumbs}
            // asNavFor={nav1}
            ref={(slider) => setSlider2(slider)}
          >
            {detailData.map((slide) => (
              <div className="slick-slide cursor-pointer" key={slide.id}>
                <Image className="slick-slide-image px-1" src={slide.img} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default ThumbnailProduct;
