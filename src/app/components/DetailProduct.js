import React from "react";
import Image from "next/image";
import CartButton from "./CartButton";

const DetailProduct = () => {
  return (
    <>
      <div className="col-span-full px-3 md:col-span-7 md:col-start-6 md:px-0 lg:col-span-5 lg:col-start-7">
        <div className="flex flex-row items-start justify-between">
          <div>
            <h1 className="flex flex-row flex-wrap font-sans text-base leading-normal">
              <span className="order-3 w-full flex-auto basis-full italic text-gray-900">
                Monstera&nbsp;
              </span>
              <span className="order-2 basis-auto font-bold md:text-xl lg:text-4xl text-gray-900">
                Monstera Frozen Freckles
              </span>
            </h1>
          </div>
          <span className="flex flex-row items-center gap-2 md:hidden">
            <span className="font-bold text-gray-900">€114.95</span>
          </span>
        </div>
        <section className="flex flex-row justify-between">
          <h2 className="sr-only">Product review(s)</h2>
          <section className="flex flex-row items-center justify-start gap-2.5 text-sm md:gap-3.5 mt-2">
            <h2 className="sr-only">Product review</h2>
            <div className="flex flex-row-reverse justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 md:h-5 md:w-5"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  fill="#f3f4f3"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 md:h-5 md:w-5 filled"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  fill="#debe48"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 md:h-5 md:w-5 filled"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  fill="#debe48"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 md:h-5 md:w-5 filled"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  fill="#debe48"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 md:h-5 md:w-5 filled"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  fill="#debe48"
                ></path>
              </svg>
            </div>
            <button className="text-sold-out underline hover:no-underline">
              (0 customer reviews)
            </button>
          </section>
        </section>
        <svg
          className="my-2 h-px w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 1"
          preserveAspectRatio="none"
        >
          <path d="M0,0 100,0" stroke="#707070" stroke-width="1"></path>
        </svg>
        <ul className="space-y-2 my-4 md:hidden  text-gray-900">
          <li className="xl:justify-left before:mr-2 before:text-primary before:content-['\2713'] sm:text-sm md:flex lg:text-base xl:flex xl:w-auto xl:items-center xl:text-left">
            <span>
              Choose your{" "}
              <strong className="font-bold">own delivery day</strong>
            </span>
          </li>
          <li className="xl:justify-left before:mr-2 before:text-primary before:content-['\2713'] sm:text-sm md:flex lg:text-base xl:flex xl:w-auto xl:items-center xl:text-left">
            <span>
              Straight from <strong className="font-bold">the nursery</strong>
            </span>
          </li>
          <li className="xl:justify-left before:mr-2 before:text-primary before:content-['\2713'] sm:text-sm md:flex lg:text-base xl:flex xl:w-auto xl:items-center xl:text-left">
            <span>
              <strong className="font-bold">250,000+ PLNTScommunity</strong>{" "}
              followers
            </span>
          </li>
        </ul>
        <svg
          className="my-2 md:hidden h-px w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 1"
          preserveAspectRatio="none"
        >
          <path d="M0,0 100,0" stroke="#707070" stroke-width="1"></path>
        </svg>
        <section className="flex flex-row flex-wrap justify-between">
          <h2 className="sr-only">Product options</h2>
          <div className="flex flex-col justify-start">
            <span className="text-sm font-bold text-gray-900">Size</span>
            <div className="flex flex-row flex-wrap justify-start gap-2 pt-2">
              <a href="/en/product/monstera-frozen-freckles-s">
                <span className="flex h-10 w-10 cursor-pointer select-none items-center justify-center rounded-full bg-grayish text-sold-out">
                  <span>S</span>
                </span>
              </a>
              <a href="/en/product/monstera-frozen-freckles-m">
                <span className="flex h-10 w-10 cursor-pointer select-none items-center justify-center rounded-full bg-[#7e8784] text-[#f3f4f3]">
                  <span>M</span>
                </span>
              </a>
            </div>
          </div>
        </section>
        <svg
          className="my-2 h-px w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 1"
          preserveAspectRatio="none"
        >
          <path d="M0,0 100,0" stroke="#707070" stroke-width="1"></path>
        </svg>
        <section className="flex flex-col justify-between">
          <p className="text-sm font-bold text-gray-900">
            Pot styles perfect for this plant:
          </p>
          <ul className="flex flex-row flex-wrap justify-start gap-3">
            <li>
              <button className="cursor-pointer text-sm font-bold hover:underline text-sold-out">
                Design
              </button>
            </li>
            <li>
              <button className="cursor-pointer text-sm font-bold hover:underline text-sold-out">
                Nature
              </button>
            </li>
            <li>
              <button className="cursor-pointer text-sm font-bold hover:underline text-sold-out">
                Basic
              </button>
            </li>
            <li>
              <button className="cursor-pointer text-sm font-bold hover:underline text-sold-out">
                Handmade
              </button>
            </li>
            <li>
              <button className="cursor-pointer text-sm font-bold hover:underline text-sold-out">
                Fun
              </button>
            </li>
            <li>
              <button className="cursor-pointer text-sm font-bold hover:underline text-black underline">
                show all
              </button>
            </li>
          </ul>

          <svg
            className="my-2 h-px w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 1"
            preserveAspectRatio="none"
          >
            <path d="M0,0 100,0" stroke="#707070" stroke-width="1"></path>
          </svg>
        </section>
        <ul>
          <li className="grid grid-flow-row auto-rows-max grid-cols-3 gap-2">
            <div className="col-span-2 col-start-1 flex flex-row items-center justify-between">
              <span className="truncate">
                <span className="truncate font-bold md:text-sm text-gray-900">
                  Monstera Frozen Freckles
                </span>{" "}
                <span className="font-bold  text-gray-900">
                  (<span className="md:text-sm">M</span>)
                </span>
              </span>
            </div>
            <div className="col-span-1 col-start-3 flex flex-row items-center justify-end">
              <span className="flex flex-row items-center gap-2 md:text-sm">
                <span className="font-bold  text-gray-900">€114.95</span>
              </span>
            </div>
            <div className="col-span-2 col-start-1 flex flex-row items-start justify-between md:col-span-1">
              <span className="cursor-pointer text-sm underline text-sm text-gray-900">
                in nursery pot
              </span>
            </div>
            <div className="col-span-1 col-start-1 flex flex-row items-center justify-start">
              <div className="relative flex w-full flex-row items-center justify-between gap-1 w-[120px]">
                <button
                  className="cursor-pointer inline-block leading-none select-none text-center focus:outline-none transition-colors disabled:cursor-not-allowed relative bg-grayish text-black hover:bg-[#7e8784] hover:text-white disabled:bg-grayish/40 disabled:hover:text-black rounded-full w-8 h-8 max-w-8 max-h-8 overflow-hidden flex justify-center items-center h-8 w-8 flex-none leading-[0]"
                  type="button"
                  data-variant="circle_grayLight"
                >
                  -
                </button>
                <span className="grow text-center text-sm font-bold text-gray-900">1</span>
                <button
                  className="cursor-pointer inline-block leading-none select-none text-center focus:outline-none transition-colors disabled:cursor-not-allowed relative bg-grayish text-black hover:bg-[#7e8784] hover:text-white disabled:bg-grayish/40 disabled:hover:text-black rounded-full w-8 h-8 max-w-8 max-h-8 overflow-hidden flex justify-center items-center h-8 w-8 flex-none leading-[0]"
                  type="button"
                  data-variant="circle_grayLight"
                >
                  +
                </button>
              </div>
            </div>
            <svg
              className="col-span-full col-start-1 mb-2 h-px w-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 1"
              preserveAspectRatio="none"
            >
              <path d="M0,0 100,0" stroke="#707070" stroke-width="1"></path>
            </svg>
          </li>
        </ul>
        <CartButton />
        <div className="hidden md:block">
          <section className="flex flex-row justify-between text-gray-900">
            <h2 className="sr-only">Total product price</h2>
            <span className="text-2xl font-bold">Total:</span>
            <span className="text-2xl font-bold">€114.95</span>
          </section>
          <svg
            className="my-2 h-px w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 1"
            preserveAspectRatio="none"
          >
            <path d="M0,0 100,0" stroke="#707070" stroke-width="1"></path>
          </svg>
          
          <section className="flex justify-between md:flex-col 3xl:flex-row-reverse 3xl:items-start">
            <div className="flex flex-row justify-end">
              <div className="relative mr-3 hidden md:flex">
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
              <button
                className="cursor-pointer flex items-center inline-block leading-none select-none text-center focus:outline-none transition-colors disabled:cursor-not-allowed max-h-10 px-6 py-3 relative bg-primary text-white hover:opacity-80 disabled:bg-primary/40 rounded-full group"
                aria-label="Add to cart"
                type="button"
                data-variant="rounded_yellow"
              >
                <span className="flex h-3.2 flex-row items-center justify-start xl:h-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6  transition-transform md:motion-safe:group-hover:-rotate-12 mr-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>

                  <span>Add to cart</span>
                </span>
              </button>
            </div>
            <ul className="space-y-2 my-4 hidden flex-col justify-start sm:block">
              <li className="xl:justify-left before:mr-2 before:text-primary before:content-['\2713'] sm:text-sm md:flex lg:text-base xl:flex xl:w-auto xl:items-center xl:text-left">
                <span>
                  Choose your{" "}
                  <strong className="font-bold">own delivery day</strong>
                </span>
              </li>
              <li className="xl:justify-left before:mr-2 before:text-primary before:content-['\2713'] sm:text-sm md:flex lg:text-base xl:flex xl:w-auto xl:items-center xl:text-left">
                <span>
                  Straight from{" "}
                  <strong className="font-bold">the nursery</strong>
                </span>
              </li>
              <li className="xl:justify-left before:mr-2 before:text-primary before:content-['\2713'] sm:text-sm md:flex lg:text-base xl:flex xl:w-auto xl:items-center xl:text-left">
                <span>
                  <strong className="font-bold">250,000+ PLNTScommunity</strong>{" "}
                  followers
                </span>
              </li>
            </ul>
          </section>
        
        </div>
        
      </div>
      
    </>
  );
};

export default DetailProduct;
