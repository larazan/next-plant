import React from 'react'
import Image from "next/image";
import Link from 'next/link';

import cat1 from "@/assets/blogs/cat1.png";
import cat2 from "@/assets/blogs/cat2.png";
import cat3 from "@/assets/blogs/cat3.png";
import cat4 from "@/assets/blogs/cat4.png";
import cat5 from "@/assets/blogs/cat5.png";
import cat6 from "@/assets/blogs/cat6.png";
import cat7 from "@/assets/blogs/cat7.png";
import cat8 from "@/assets/blogs/cat8.png";
import cat9 from "@/assets/blogs/cat9.png";
import cat10 from "@/assets/blogs/cat10.png";
import cat11 from "@/assets/blogs/cat11.png";
import cat12 from "@/assets/blogs/cat12.png";

const ArticleHome = () => {
    const blogs = [
        // {
        //   title:
        //     "10 most wanted Philodendron varieties - selected by our community",
        //   url: "best-smartwatch-iphone",
        //   image: cat1,
        // },
        // {
        //   title: "How to decorate with pink: a touch of pink never hurts!",
        //   url: "best-smartwatch-iphone",
        //   image: cat2,
        // },
        // {
        //   title: "General plant care guide",
        //   url: "best-smartwatch-iphone",
        //   image: cat3,
        // },
        // {
        //   title:
        //     "10 most wanted Philodendron varieties - selected by our community",
        //   url: "best-smartwatch-iphone",
        //   image: cat4,
        // },
        // {
        //   title: "A Simple Guide For Snake Plant Propagation",
        //   url: "best-smartwatch-iphone",
        //   image: cat5,
        // },
        // {
        //   title: "Anthurium Crystallinum Growing And Care",
        //   url: "best-smartwatch-iphone",
        //   image: cat6,
        // },
        {
          title: "12 pretty plants that grow as an epiphyte ",
          url: "best-smartwatch-iphone",
          image: cat7,
        },
        {
          title: "Alocasia Propagation Guide: How To Propagate Alocasia Plants",
          url: "best-smartwatch-iphone",
          image: cat8,
        },
        {
          title: "12 pretty plants that grow as an epiphyte ",
          url: "best-smartwatch-iphone",
          image: cat7,
        },
        {
          title: "Alocasia Propagation Guide: How To Propagate Alocasia Plants",
          url: "best-smartwatch-iphone",
          image: cat8,
        },
        {
          title: "12 pretty plants that grow as an epiphyte ",
          url: "best-smartwatch-iphone",
          image: cat7,
        },
        {
          title: "Alocasia Propagation Guide: How To Propagate Alocasia Plants",
          url: "best-smartwatch-iphone",
          image: cat8,
        },
        {
          title:
            "What is an epiphyte and which epiphyte plants are the prettiest? ",
          url: "best-smartwatch-iphone",
          image: cat9,
        },
        {
          title: "Top 15 shadow plants in 2024",
          url: "best-smartwatch-iphone",
          image: cat10,
        },
        {
          title: "Greenhouse Cabinets 101: the basics",
          url: "best-smartwatch-iphone",
          image: cat11,
        },
        //   {
        //     title: "Top 10 hanging plants in 2024",
        //     url: "best-smartwatch-iphone",
        //     image: cat12,
        //   },
      ];

  return (
    <>
      <section className=" py-8 bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="flex w-full font-bold text-2xl justify-center">
            Recent Articles
          </h2>

          <div className="mt-8 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {blogs.map((data, index) => {
              return (
                <Link
                  className="group relative block h-50 hover:underline"
                  key={index}
                  href={"/category/article-one"}
                >
                  <Image
                    src={data.image}
                    alt=""
                    className="transform object-cover transition-transform group-hover:scale-105 h-full"
                  />
                  <span className="absolute bottom-0 m-3 block bg-white/80 p-3 font-serif">
                    {data.title}
                  </span>
                </Link>
              );
            })}
          </div>
          <div className="col-span-full my-8 text-center">
            <Link
              className="cursor-pointer inline-block leading-none select-none text-center focus:outline-none transition-colors disabled:cursor-not-allowed max-h-10 px-6 py-3 relative bg-white text-black/[.99] hover:bg-black hover:text-white disabled:bg-white/40 disabled:hover:text-black border border-black/[.99] rounded-full"
              data-variant="rounded_light"
              href="/category"
            >
              {" "}
              View all our Articles
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default ArticleHome