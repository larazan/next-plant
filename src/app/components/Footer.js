import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer
        aria-label="Site Footer"
        className="bg-[#00644b] lg:grid lg:grid-cols-5"
      >
        <div class=" mx-auto w-11/12 px-4  sm:px-6  py-7 text-white md:px-3 md:py-14 lg:px-0">
          <nav class="grid-container md:flex md:flex-row md:flex-wrap md:items-start md:justify-between md:gap-10">
            <div class=" mb-7 flex flex-col items-center justify-center md:mb-0 md:w-full md:flex-row md:justify-start lg:w-auto lg:flex-col xl:w-full xl:flex-row 3xl:w-auto 3xl:flex-col "></div>
            <div class="hidden flex-none flex-col justify-start gap-2 px-3 md:flex md:px-0">
              <span class="font-bold">Shop</span>
              <ul>
                <li>
                  <a class="md:hover:underline" href="/en/shop/all-plnts">
                    All houseplants
                  </a>
                </li>
                <li>
                  <a class="md:hover:underline" href="/en/shop/babyplnts-home">
                    All Baby houseplants
                  </a>
                </li>
              </ul>
              <span class="mt-4 font-bold">My account</span>
              <ul>
                <li>
                  <a class="md:hover:underline" href="/en/account?t=login">
                    Log in
                  </a>
                </li>
              </ul>
            </div>

            <div class="hidden flex-none flex-col justify-start gap-2 px-3 md:flex md:px-0">
              <span class="font-bold">Customer service</span>
              <ul>
                <li>
                  <a
                    href="https://support.plnts.com/hc/en-us"
                    class="md:hover:underline"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Frequently asked questions
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.plnts.com/hc/en-us/articles/360022189760-How-can-I-contact-your-support-"
                    class="md:hover:underline"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.plnts.com/hc/en-us/categories/360002925560-Payments-and-Gifts"
                    class="md:hover:underline"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Payments
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.plnts.com/hc/en-us/categories/15121391044242-Delivery"
                    class="md:hover:underline"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Transport and delivery
                  </a>
                </li>
                <li>
                  <a class="md:hover:underline" href="/en/page/guarantee">
                    Guarantee
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.plnts.com/hc/en-us/articles/360020705899-Return-Policy"
                    class="md:hover:underline"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Return policy
                  </a>
                </li>
              </ul>
            </div>

            <div class="hidden flex-none flex-col justify-start gap-2 px-3 md:flex md:px-0">
    <span class="font-bold">About PLNTS</span>
    <ul>
        <li><a class="md:hover:underline" href="/en/page/giftcard">Giftcard</a></li>
        <li><a class="md:hover:underline" href="/en/page/about-us">About us</a></li>
        <li><a class="md:hover:underline" href="/en/page/sustainability">Sustainability</a></li>
        <li><a class="md:hover:underline" href="/en/page/meet-the-creators">Meet the creators</a></li>
        <li><a class="md:hover:underline" href="/en/page/b2b">B2b</a></li>
        <li><a class="md:hover:underline" href="/en/page/collaborations">Collaborations </a></li>
        <li><a class="md:hover:underline" href="/en/page/press">Press</a></li>
        <li><a class="md:hover:underline" href="/en/page/vacatures">Job opportunities</a></li>
    </ul>
</div>

<a class=" flex w-full flex-row items-center justify-between border-t border-black/30 px-3 py-2 md:hidden " href="/en/shop/all-plnts">
    All houseplants
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
    </svg>
</a>
<a class=" flex w-full flex-row items-center justify-between border-t border-black/30 px-3 py-2 md:hidden " href="/en/shop/babyplnts-home">
    All Baby houseplants
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
    </svg>
</a>
<div class="md:hidden" data-headlessui-state="">
    <button class="flex w-full flex-row items-center justify-between border-t border-black/30 px-3 py-2 md:hidden" id="headlessui-disclosure-button-:Rapll6:" type="button" aria-expanded="false" data-headlessui-state="">
        <span class="font-bold">Customer service</span>
        <svg class="inline-block w-4 transform transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
        </svg>
    </button>
</div>
<div class="md:hidden" data-headlessui-state="">
    <button class="flex w-full flex-row items-center justify-between border-t border-black/30 px-3 py-2 md:hidden" id="headlessui-disclosure-button-:Rcpll6:" type="button" aria-expanded="false" data-headlessui-state="">
        <span class="font-bold">About PLNTS</span>
        <svg class="inline-block w-4 transform transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
        </svg>
    </button>
</div>
<a class="flex w-full flex-row items-center justify-between border-b border-t border-black/30 px-3 py-2 md:hidden md:hidden md:hover:underline" href="/en/account?t=login">Log in</a>
<div class="flex flex-none flex-col justify-start gap-2 px-3 md:px-0">
    <div class="mt-4 flex flex-row justify-between gap-4 md:mt-0 md:flex-col">
        <div class="flex flex-col justify-start gap-1 md:gap-4">
            <span class="order-2 font-bold md:order-1">Instagram</span>
            <ul class="order-1 mb-0 flex flex-row gap-4 border-b pb-2 md:order-2 md:mb-0 md:border-none md:pb-0">
                <li>
                    <a href="https://www.instagram.com/plnts_com/" target="_blank" rel="noreferrer noopener" aria-label="follow PLNTS on instagram">
                        <svg class="w-8 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 118.7 118.7">
                            <path
                                d="M59.35 0a59.35 59.35 0 1059.35 59.35A59.35 59.35 0 0059.35 0zm31.26 62.32q-8.66 6.51-28.47 6.51h-6.58v29.18l5.79 1.79v1.79H30.02V99.8l.72-.18 4.42-1.45.66-.16v-42.7h-.14c-3.73-1.75-6.73-5.76-6.61-12.52a22.65 22.65 0 016.61-15.59l.13-.12a1.4 1.4 0 011-.38 15.19 15.19 0 013.46.61l.55.17a14.4 14.4 0 012.77 1.25 15.5 15.5 0 012.17 1.5c.23.19.45.4.68.6l.06.07a15.26 15.26 0 014.84 10.3 2.48 2.48 0 010 .39V43.29a15.51 15.51 0 01-3.87 9.16 16.57 16.57 0 01-2.49 2.07l-.24.16c-.42-.55-.81-1.12-1.16-1.67a31.66 31.66 0 01-4.36-11.66.88.88 0 000-.24.2.2 0 00-.22-.19 22.9 22.9 0 00-.29 3.13 20.9 20.9 0 00.82 6.26 19.9 19.9 0 001.12 3 2.56 2.56 0 01.11.24v.06-.06c.16.31.33.61.5.92 0 0 0 .09.08.14.22.38.45.75.69 1.12l.19.26c.19.28.38.56.59.82s.29.39.44.57l.31.38c2.29 2.39 7.53 6.44 16.88 6.44 18.28 0 18.39-21.09 18.39-21.09q0-11.13-4.6-16.93a14.76 14.76 0 00-12.14-5.79h-6.52v14.3a2.76 2.76 0 00-.18-.39 21.69 21.69 0 00-8.21-8.87h-.06l-.1-.06a4.5 4.5 0 00-.43-.27 25.69 25.69 0 00-2.64-1.47 34.1 34.1 0 00-8.11-2.62 24.67 24.67 0 00-5.78-.67V17.41h32.08q19.81 0 28.47 6.54t8.6 19.2q0 12.65-8.6 19.17z"
                            ></path>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/babyplnts_com/" target="_blank" rel="noreferrer noopener" aria-label="follow BabyPLNTS on instagram">
                        <svg class="w-8 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 118.7 118.7">
                            <path
                                d="M59.35 0a59.35 59.35 0 1059.35 59.35A59.35 59.35 0 0059.35 0zm38.54 82.63a20.52 20.52 0 01-2 5.86c-3.17 6.17-10.56 13.1-28.12 13.1H33.12v-3a12.89 12.89 0 0013-12.84c0-2.79-.94-5.32-2.53-8.31a27.8 27.8 0 00-9-9.61c-.62-.39-1.71-1-1.89-1.08s-.34.22-.17.35a29.64 29.64 0 015.42 5.72 14 14 0 012.91 6.43 11.24 11.24 0 01-6.33.76c-5.58-.89-11.26-5.46-13.58-16.14a24.49 24.49 0 01-.47-3.29 1.73 1.73 0 011.3-1.78 28.64 28.64 0 0112.74-.1 15.71 15.71 0 015.26 2.25c3.64 2.46 5 4.62 5.76 6.65a10.09 10.09 0 01-.13 7.77 30.43 30.43 0 013.07 7.19 13.1 13.1 0 018.4-6.24h.07a.21.21 0 00.13-.19.21.21 0 00-.2-.2 14.34 14.34 0 00-3.46.45 11.54 11.54 0 00-3.67 1.79 6.33 6.33 0 011.15-5 7.7 7.7 0 012-2 9.47 9.47 0 013.56-1.4 13.87 13.87 0 012-.22 12.83 12.83 0 014.38.61 20.53 20.53 0 018.25 5.44 1.16 1.16 0 01.28 1.23l-.14.3a13 13 0 01-11.71 7.41 12 12 0 01-3.84-.59 15.2 15.2 0 01-3-1.43 5.45 5.45 0 00-.7.62 6.58 6.58 0 00-1.61 4.61A9 9 0 0051.98 93c2 2.89 5.93 4.72 11.4 4.72 10.32 0 16.65-8.62 16.65-19a19.85 19.85 0 00-18.32-19.7c-.5 0-1-.06-1.49-.06h-4.75a18 18 0 01-9.67-3.13 19.29 19.29 0 01-3.42-3c-.22-.24-.43-.49-.63-.74-.45-.55-.86-1.12-1.25-1.68a28 28 0 01-4.24-10.46c0-.07-.08-.46-.08-.53a.19.19 0 00-.36-.06v.1a20.31 20.31 0 00-.22 2.93 18.89 18.89 0 003.35 10.82 9.38 9.38 0 01-1.91.23c-5.52.08-10.34-4.69-10.34-12.26a20.92 20.92 0 016-14.68 1.28 1.28 0 011-.39 14.36 14.36 0 019 3.64l.06.05a14.2 14.2 0 014.71 9.45 9.58 9.58 0 01.06 1.19 13.71 13.71 0 01-3.44 9.3 16.63 16.63 0 0022.58 2.49 16.08 16.08 0 005.86-7.77 15.1 15.1 0 00.88-7.26 16.92 16.92 0 00-16-14.93 13.9 13.9 0 00-4.33.34v12.2a20.26 20.26 0 00-6.64-9.71 20.94 20.94 0 00-13.27-4.72v-2.94l25.35.1q18.34.09 26.94 5.95t8.56 15.21q0 6.49-3.79 10.44a22.51 22.51 0 01-9.53 5.81 37.76 37.76 0 01-6.28 1.6s22.21 1.64 23.7 20.47a20.57 20.57 0 01-.23 5.61z"
                            ></path>
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
        <ul class="flex flex-row flex-wrap justify-end gap-4 md:flex-nowrap md:justify-start">
            <li>
                <a href="https://www.facebook.com/PLNTScom" target="_blank" rel="noreferrer noopener" aria-label="follow PLNTS.com on facebook">
                    <span class="flex h-8 w-8 flex-col items-center justify-center rounded-full bg-white">
                        <svg class="w-[20px] fill-current text-sold-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                            <path
                                d="M23.738.214v4.714h-2.804c-1.023 0-1.714.214-2.071.643s-.536 1.071-.536 1.929v3.375h5.232l-.696 5.286h-4.536v13.554h-5.464V16.161H8.309v-5.286h4.554V6.982c0-2.214.62-3.932 1.857-5.152S17.607 0 19.666 0c1.75 0 3.107.071 4.071.214z"
                            ></path>
                        </svg>
                    </span>
                </a>
            </li>
            <li>
                <a href="https://www.pinterest.com/plnts_com/" target="_blank" rel="noreferrer noopener" aria-label="follow PLNTS.com on pinterest">
                    <span class="flex h-8 w-8 flex-col items-center justify-center rounded-full bg-white">
                        <svg class="w-[20px] fill-current text-sold-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                            <path
                                d="M4.571 10.661q0-1.929.67-3.634t1.848-2.973 2.714-2.196T13.107.465t3.607-.464q2.821 0 5.25 1.188t3.946 3.455 1.518 5.125q0 1.714-.339 3.357t-1.071 3.161-1.786 2.67-2.589 1.839-3.375.688q-1.214 0-2.411-.571t-1.714-1.571q-.179.696-.5 2.009t-.42 1.696-.366 1.268-.464 1.268-.571 1.116-.821 1.384-1.107 1.545l-.25.089-.161-.179q-.268-2.804-.268-3.357 0-1.643.384-3.688t1.188-5.134.929-3.625q-.571-1.161-.571-3.018 0-1.482.929-2.786t2.357-1.304q1.089 0 1.696.723t.607 1.83q0 1.179-.786 3.411t-.786 3.339q0 1.125.804 1.866t1.946.741q.982 0 1.821-.446t1.402-1.214 1-1.696.679-1.973.357-1.982.116-1.777q0-3.089-1.955-4.813t-5.098-1.723q-3.571 0-5.964 2.313t-2.393 5.866q0 .786.223 1.518t.482 1.161.482.813.223.545q0 .5-.268 1.304t-.661.804q-.036 0-.304-.054-.911-.268-1.616-1t-1.089-1.688-.58-1.929-.196-1.902z"
                            ></path>
                        </svg>
                    </span>
                </a>
            </li>
            <li>
                <a href="https://youtube.com/@plnts_com" target="_blank" rel="noreferrer noopener" aria-label="follow PLNTS.com on YouTube">
                    <span class="flex h-8 w-8 flex-col items-center justify-center rounded-full bg-white">
                        <svg class="w-[20px] fill-current text-sold-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                            <path
                                d="M29.7 10.3s-.3-2-1.1-2.8c-1.1-1.1-2.3-1.1-2.8-1.2C21.9 6 16 6 16 6s-5.9 0-9.8.3c-.6.1-1.7.1-2.8 1.2-.8.9-1.1 2.8-1.1 2.8S2 12.6 2 14.9v2.2c0 2.3.3 4.6.3 4.6s.3 2 1.1 2.8c1.1 1.1 2.5 1.1 3.1 1.2 2.2.2 9.5.3 9.5.3s5.9 0 9.8-.3c.5-.1 1.7-.1 2.8-1.2.8-.9 1.1-2.8 1.1-2.8s.3-2.3.3-4.6v-2.2c0-2.3-.3-4.6-.3-4.6zm-16.6 9.4v-8l7.6 4-7.6 4z"
                            ></path>
                        </svg>
                    </span>
                </a>
            </li>
            <li>
                <a href="https://www.tiktok.com/@plnts.com" target="_blank" rel="noreferrer noopener" aria-label="follow PLNTS.com on TikTok">
                    <span class="flex h-8 w-8 flex-col items-center justify-center rounded-full bg-white">
                        <svg class="w-[20px] fill-current text-sold-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                            <path
                                d="M30,13.119C27.249,13.126 24.564,12.268 22.327,10.666L22.327,21.836C22.325,27.408 17.739,31.992 12.168,31.992C6.594,31.992 2.008,27.406 2.008,21.833C2.008,16.259 6.594,11.673 12.168,11.673C12.634,11.673 13.1,11.705 13.563,11.769L13.563,17.388C13.11,17.245 12.638,17.173 12.163,17.173C9.605,17.173 7.499,19.278 7.499,21.836C7.499,24.395 9.605,26.5 12.163,26.5C14.722,26.5 16.827,24.395 16.827,21.836C16.827,21.836 16.827,21.836 16.827,21.836L16.827,0L22.327,0C22.323,0.464 22.362,0.928 22.443,1.386C22.829,3.448 24.049,5.263 25.813,6.399C27.054,7.221 28.511,7.658 30,7.658L30,13.119Z"
                            ></path>
                        </svg>
                    </span>
                </a>
            </li>
        </ul>
    </div>
    <ul class="mb-3 flex flex-row flex-wrap justify-between gap-2 border-b border-primary pb-4 md:mb-0 md:flex-col md:justify-start md:gap-1 md:border-none md:pb-0">
        <li><a class="font-bold text-primary md:hover:underline" href="https://www.instagram.com/explore/tags/plnts/" target="_blank" rel="noreferrer noopener" aria-label="find all #PLNTS messages on instagram">#PLNTS</a></li>
        <li><a class="font-bold text-primary md:hover:underline" href="https://www.instagram.com/explore/tags/babyplnts/" target="_blank" rel="noreferrer noopener" aria-label="find all #BabyPLNTS messages on instagram">#BabyPLNTS</a></li>
        <li>
            <a class="font-bold text-primary md:hover:underline" href="https://www.instagram.com/explore/tags/featuremeplnts/" target="_blank" rel="noreferrer noopener" aria-label="find all #featuremePLNTS messages on instagram">
                #featuremePLNTS
            </a>
        </li>
    </ul>
</div>



            {/* <div className="mx-auto w-11/12 px-4 py-8 sm:px-6 lg:col-span-3 lg:px-8">
          <div className="">
            <div className="grid grid-cols-2 gap-4 md:gap-4 md:grid-cols-4">
              <div className="flex w-full justify-center2 md:justify-start text-left md:text-left">
                <nav
                  aria-label="Footer Navigation - Services"
                  className="flex flex-col space-y-3 mt-6"
                >
                  <span className="text-white text-lg font-semibold uppercase">
                    Shop
                  </span>
                  <ul className="space-y-1 text-md font-mabrybold">
                    <li>
                      <Link
                        href={"/faqs"}
                        className="text-white hover:underline  transition "
                      >
                        Shop All
                      </Link>
                    </li>

                    <li>
                      <Link
                        href={"/about"}
                        className="text-white hover:underline  transition "
                      >
                        Walk
                      </Link>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-white hover:underline  transition "
                      >
                        Carry
                      </a>
                    </li>

                    <li>
                      <Link
                        href={"/terms"}
                        className="text-white hover:underline  transition "
                      >
                        Home
                      </Link>
                    </li>

                    <li>
                      <Link
                        href={"/privacy"}
                        className="text-white hover:underline  transition "
                      >
                        Toys
                      </Link>
                    </li>

                    <li>
                      <Link
                        href={"/privacy"}
                        className="text-white hover:underline  transition "
                      >
                        Kit & Save
                      </Link>
                    </li>

                    <li>
                      <Link
                        href={"/privacy"}
                        className="text-white hover:underline  transition "
                      >
                        Grooming
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="flex w-full justify-center2 md:justify-start text-left md:text-left">
                <nav
                  aria-label="Footer Navigation - Company"
                  className="flex flex-col space-y-3 mt-6"
                >
                  <span className="text-white text-lg font-semibold uppercase">
                  Info
                  </span>
                  <ul className="space-y-1 text-md font-mabrybold">
                    <li>
                      <a
                        href="#"
                        className="text-white hover:underline  transition "
                      >
                        About
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-white hover:underline  transition "
                      >
                        Blog
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-white hover:underline  transition "
                      >
                        Review
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-white hover:underline  transition "
                      >
                        Careers
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-white hover:underline  transition "
                      >
                        Wholesale
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-white hover:underline  transition "
                      >
                        Affiliate
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="flex w-full justify-center2 md:justify-start text-left md:text-left">
                <nav
                  aria-label="Footer Navigation - Services"
                  className="flex flex-col space-y-3 mt-6"
                >
                  <span className="text-white text-lg font-semibold uppercase">
                    Interests
                  </span>
                  <ul className="space-y-1 text-md font-mabrybold">
                    <li>
                      <Link
                        href={"/faqs"}
                        className="text-white hover:underline  transition "
                      >
                        Dogs
                      </Link>
                    </li>

                    <li>
                      <Link
                        href={"/about"}
                        className="text-white hover:underline  transition "
                      >
                        Cats
                      </Link>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-white hover:underline  transition "
                      >
                        Birds
                      </a>
                    </li>

                    <li>
                      <Link
                        href={"/terms"}
                        className="text-white hover:underline  transition "
                      >
                        Small Pets
                      </Link>
                    </li>

                    <li>
                      <Link
                        href={"/privacy"}
                        className="text-white hover:underline  transition "
                      >
                        Fish
                      </Link>
                    </li>

                    <li>
                      <Link
                        href={"/privacy"}
                        className="text-white hover:underline  transition "
                      >
                        Reptiles
                      </Link>
                    </li>
                    
                  </ul>
                </nav>
              </div>

              <div className="flex w-full justify-center2 md:justify-start text-left md:text-left">
                <nav
                  aria-label="Footer Navigation - Company"
                  className="flex flex-col space-y-3 mt-6"
                >
                  <span className="text-white text-lg font-semibold uppercase">
                    Help
                  </span>
                  <ul className="space-y-1 text-md font-mabrybold">
                    <li>
                      <Link
                        href="/about"
                        className="text-white hover:underline  transition "
                      >
                        About Us
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/faqs"
                        className="text-white hover:underline  transition "
                      >
                        Faqs
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/privacy"
                        className="text-white hover:underline  transition "
                      >
                        Privacy Policy
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/contact"
                        className="text-white hover:underline  transition "
                      >
                        Contact Us
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/contact"
                        className="text-white hover:underline  transition "
                      >
                        Shipping & Return
                      </Link>
                    </li>
                    
                    <li>
                      <Link
                        href="/contact"
                        className="text-white hover:underline  transition "
                      >
                        Accessibility
                      </Link>
                    </li>

                  </ul>
                </nav>
              </div>
            </div>
          </div>

          <div className="pt-12 ">
            <div className="sm:flex  sm:items-center sm:justify-between">
              <nav aria-label="Footer Navigation - Support">
                <ul className="flex justify-around md:justify-none gap-6 ">
                  <li>
                    <a
                      href="/"
                      rel="noreferrer"
                      target="_blank"
                      className="text-white hover:text-[#736ef7]  transition "
                    >
                      <span className="sr-only">Facebook</span>

                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a
                      href="/"
                      rel="noreferrer"
                      target="_blank"
                      className="text-white hover:text-[#736ef7]  transition "
                    >
                      <span className="sr-only">Instagram</span>

                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a
                      href="/"
                      rel="noreferrer"
                      target="_blank"
                      className="text-white hover:text-[#736ef7]  transition "
                    >
                      <span className="sr-only">Twitter</span>

                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </li>

                 
                </ul>
              </nav>

              <p className="mt-8 text-sm font-mabrybold text-white sm:mt-0">
                &copy; 2023, Petco. All Right Reserved
              </p>
            </div>
          </div>
        </div> */}
          </nav>
        </div>
      </footer>
    </>
  );
};

export default Footer;
