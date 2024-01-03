import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer
        aria-label="Site Footer"
        className="bg-[#00644b] lg:grid lg:grid-cols-5"
      >
        <div className=" mx-auto md:w-11/12 px-4  sm:px-6  py-7 text-white md:px-3 md:py-14 lg:px-0">
          <nav className="grid-container md:flex md:flex-row md:flex-wrap md:items-start md:justify-between md:gap-10">
            <div className=" mb-7 flex flex-col items-center justify-center md:mb-0 md:w-full md:flex-row md:justify-start lg:w-auto lg:flex-col xl:w-full xl:flex-row 3xl:w-auto 3xl:flex-col "></div>
            <div className="hidden flex-none flex-col justify-start gap-2 px-3 md:flex md:px-0">
              <span className="font-bold">Shop</span>
              <ul>
                <li>
                  <a className="md:hover:underline" href="/en/shop/all-plnts">
                    All houseplants
                  </a>
                </li>
                <li>
                  <a
                    className="md:hover:underline"
                    href="/en/shop/babyplnts-home"
                  >
                    Pots
                  </a>
                </li>
                <li>
                  <a
                    className="md:hover:underline"
                    href="/en/shop/babyplnts-home"
                  >
                    Care
                  </a>
                </li>
                <li>
                  <a
                    className="md:hover:underline"
                    href="/en/shop/babyplnts-home"
                  >
                    Accessories
                  </a>
                </li>
                <li>
                  <a
                    className="md:hover:underline"
                    href="/en/shop/babyplnts-home"
                  >
                    Gifts
                  </a>
                </li>
              </ul>
              <span className="mt-4 font-bold">My account</span>
              <ul>
                <li>
                  <a className="md:hover:underline" href="/en/account?t=login">
                    Log in
                  </a>
                </li>
              </ul>
            </div>

            <div className="hidden flex-none flex-col justify-start gap-2 px-3 md:flex md:px-0">
              <span className="font-bold">Customer service</span>
              <ul>
                <li>
                  <a
                    href="https://support.plnts.com/hc/en-us"
                    className="md:hover:underline"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.plnts.com/hc/en-us/articles/360022189760-How-can-I-contact-your-support-"
                    className="md:hover:underline"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.plnts.com/hc/en-us/categories/360002925560-Payments-and-Gifts"
                    className="md:hover:underline"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Payments
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.plnts.com/hc/en-us/categories/15121391044242-Delivery"
                    className="md:hover:underline"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Transport and delivery
                  </a>
                </li>
                <li>
                  <a className="md:hover:underline" href="/en/page/guarantee">
                    Guarantee
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.plnts.com/hc/en-us/articles/360020705899-Return-Policy"
                    className="md:hover:underline"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Return policy
                  </a>
                </li>
              </ul>
            </div>

            <div className="hidden flex-none flex-col justify-start gap-2 px-3 md:flex md:px-0">
              <span className="font-bold">About PLNTS</span>
              <ul>
                <li>
                  <a className="md:hover:underline" href="/en/page/giftcard">
                    Giftcard
                  </a>
                </li>
                <li>
                  <a className="md:hover:underline" href="/en/page/about-us">
                    About us
                  </a>
                </li>
                <li>
                  <a
                    className="md:hover:underline"
                    href="/en/page/sustainability"
                  >
                    Sustainability
                  </a>
                </li>
                <li>
                  <a
                    className="md:hover:underline"
                    href="/en/page/meet-the-creators"
                  >
                    Meet the creators
                  </a>
                </li>
                <li>
                  <a className="md:hover:underline" href="/en/page/b2b">
                    B2b
                  </a>
                </li>
                <li>
                  <a
                    className="md:hover:underline"
                    href="/en/page/collaborations"
                  >
                    Collaborations{" "}
                  </a>
                </li>
                <li>
                  <a className="md:hover:underline" href="/en/page/press">
                    Press
                  </a>
                </li>
                <li>
                  <a className="md:hover:underline" href="/en/page/vacatures">
                    Job opportunities
                  </a>
                </li>
              </ul>
            </div>

            <a
              className=" flex w-full flex-row items-center justify-between border-t border-black/30 px-3 py-2 md:hidden "
              href="/en/shop/all-plnts"
            >
              All houseplants
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
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
            </a>
            <a
              className=" flex w-full flex-row items-center justify-between border-t border-black/30 px-3 py-2 md:hidden "
              href="/en/shop/babyplnts-home"
            >
              All Baby houseplants
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
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
            </a>
            <div className="md:hidden" data-headlessui-state="">
              <button
                className="flex w-full flex-row items-center justify-between border-t border-black/30 px-3 py-2 md:hidden"
                id="headlessui-disclosure-button-:Rapll6:"
                type="button"
                aria-expanded="false"
                data-headlessui-state=""
              >
                <span className="font-bold">Customer service</span>
                <svg
                  className="inline-block w-4 transform transition-transform"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="md:hidden" data-headlessui-state="">
              <button
                className="flex w-full flex-row items-center justify-between border-t border-black/30 px-3 py-2 md:hidden"
                id="headlessui-disclosure-button-:Rcpll6:"
                type="button"
                aria-expanded="false"
                data-headlessui-state=""
              >
                <span className="font-bold">About PLNTS</span>
                <svg
                  className="inline-block w-4 transform transition-transform"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  ></path>
                </svg>
              </button>
            </div>
            <Link
              className="flex w-full flex-row items-center justify-between border-b border-t border-black/30 px-3 py-2 md:hidden md:hover:underline"
              href="/login"
            >
              Log in
            </Link>
            <div className="flex flex-none flex-col justify-start gap-2 px-3 md:px-0">
              <div className="mt-4 flex flex-row justify-between gap-4 md:mt-0 md:flex-col">
                <div className="flex flex-col justify-start gap-1 md:gap-4">
                  <span className="order-2 font-bold md:order-1">SOSMED</span>
                </div>
                <ul className="flex flex-row flex-wrap justify-end gap-4 md:flex-nowrap md:justify-start">
                  <li>
                    <a
                      href="https://www.facebook.com/PLNTScom"
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="follow PLNTS.com on facebook"
                    >
                      <span className="flex h-8 w-8 flex-col items-center justify-center rounded-full bg-[#fbd718] text-[#00644b]">
                        <svg
                          className="w-[20px] fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 32 32"
                        >
                          <path d="M23.738.214v4.714h-2.804c-1.023 0-1.714.214-2.071.643s-.536 1.071-.536 1.929v3.375h5.232l-.696 5.286h-4.536v13.554h-5.464V16.161H8.309v-5.286h4.554V6.982c0-2.214.62-3.932 1.857-5.152S17.607 0 19.666 0c1.75 0 3.107.071 4.071.214z"></path>
                        </svg>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.pinterest.com/plnts_com/"
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="follow PLNTS.com on pinterest"
                    >
                      <span className="flex h-8 w-8 flex-col items-center justify-center rounded-full bg-[#fbd718] text-[#00644b]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-brand-instagram"
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
                          <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                          <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                          <path d="M16.5 7.5l0 .01" />
                        </svg>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://youtube.com/@plnts_com"
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="follow PLNTS.com on YouTube"
                    >
                      <span className="flex h-8 w-8 flex-col items-center justify-center rounded-full bg-[#fbd718] text-[#00644b]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-brand-twitter-filled w-[20px]"
                          width="24"
                          height="24"
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
                            stroke-width="0"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.tiktok.com/@plnts.com"
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="follow PLNTS.com on TikTok"
                    >
                      <span className="flex h-8 w-8 flex-col items-center justify-center rounded-full bg-[#fbd718] text-[#00644b]">
                        <svg
                          className="w-[20px] fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 32 32"
                        >
                          <path d="M30,13.119C27.249,13.126 24.564,12.268 22.327,10.666L22.327,21.836C22.325,27.408 17.739,31.992 12.168,31.992C6.594,31.992 2.008,27.406 2.008,21.833C2.008,16.259 6.594,11.673 12.168,11.673C12.634,11.673 13.1,11.705 13.563,11.769L13.563,17.388C13.11,17.245 12.638,17.173 12.163,17.173C9.605,17.173 7.499,19.278 7.499,21.836C7.499,24.395 9.605,26.5 12.163,26.5C14.722,26.5 16.827,24.395 16.827,21.836C16.827,21.836 16.827,21.836 16.827,21.836L16.827,0L22.327,0C22.323,0.464 22.362,0.928 22.443,1.386C22.829,3.448 24.049,5.263 25.813,6.399C27.054,7.221 28.511,7.658 30,7.658L30,13.119Z"></path>
                        </svg>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              <ul className="mb-3 flex flex-row flex-wrap justify-between gap-2 border-b border-primary pb-4 md:mb-0 md:flex-col md:justify-start md:gap-1 md:border-none md:pb-0">
                <li>
                  <a
                    className="font-bold text-primary md:hover:underline"
                    href="https://www.instagram.com/explore/tags/plnts/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="find all #PLNTS messages on instagram"
                  >
                    #PLNTS
                  </a>
                </li>
                <li>
                  <a
                    className="font-bold text-primary md:hover:underline"
                    href="https://www.instagram.com/explore/tags/babyplnts/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="find all #BabyPLNTS messages on instagram"
                  >
                    #BabyPLNTS
                  </a>
                </li>
                <li>
                  <a
                    className="font-bold text-primary md:hover:underline"
                    href="https://www.instagram.com/explore/tags/featuremeplnts/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="find all #featuremePLNTS messages on instagram"
                  >
                    #featureme
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </footer>
    </>
  );
};

export default Footer;
