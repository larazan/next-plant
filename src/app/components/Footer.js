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
                  <a className="md:hover:underline" href="/en/shop/babyplnts-home">
                    Pots
                  </a>
                </li>
                <li>
                  <a className="md:hover:underline" href="/en/shop/babyplnts-home">
                    Care
                  </a>
                </li>
                <li>
                  <a className="md:hover:underline" href="/en/shop/babyplnts-home">
                    Accessories
                  </a>
                </li>
                <li>
                  <a className="md:hover:underline" href="/en/shop/babyplnts-home">
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
        <li><a className="md:hover:underline" href="/en/page/giftcard">Giftcard</a></li>
        <li><a className="md:hover:underline" href="/en/page/about-us">About us</a></li>
        <li><a className="md:hover:underline" href="/en/page/sustainability">Sustainability</a></li>
        <li><a className="md:hover:underline" href="/en/page/meet-the-creators">Meet the creators</a></li>
        <li><a className="md:hover:underline" href="/en/page/b2b">B2b</a></li>
        <li><a className="md:hover:underline" href="/en/page/collaborations">Collaborations </a></li>
        <li><a className="md:hover:underline" href="/en/page/press">Press</a></li>
        <li><a className="md:hover:underline" href="/en/page/vacatures">Job opportunities</a></li>
    </ul>
</div>

<a className=" flex w-full flex-row items-center justify-between border-t border-black/30 px-3 py-2 md:hidden " href="/en/shop/all-plnts">
    All houseplants
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
    </svg>
</a>
<a className=" flex w-full flex-row items-center justify-between border-t border-black/30 px-3 py-2 md:hidden " href="/en/shop/babyplnts-home">
    All Baby houseplants
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
    </svg>
</a>
<div className="md:hidden" data-headlessui-state="">
    <button className="flex w-full flex-row items-center justify-between border-t border-black/30 px-3 py-2 md:hidden" id="headlessui-disclosure-button-:Rapll6:" type="button" aria-expanded="false" data-headlessui-state="">
        <span className="font-bold">Customer service</span>
        <svg className="inline-block w-4 transform transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
        </svg>
    </button>
</div>
<div className="md:hidden" data-headlessui-state="">
    <button className="flex w-full flex-row items-center justify-between border-t border-black/30 px-3 py-2 md:hidden" id="headlessui-disclosure-button-:Rcpll6:" type="button" aria-expanded="false" data-headlessui-state="">
        <span className="font-bold">About PLNTS</span>
        <svg className="inline-block w-4 transform transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
        </svg>
    </button>
</div>
<a className="flex w-full flex-row items-center justify-between border-b border-t border-black/30 px-3 py-2 md:hidden md:hover:underline" href="/en/account?t=login">Log in</a>
<div className="flex flex-none flex-col justify-start gap-2 px-3 md:px-0">
    <div className="mt-4 flex flex-row justify-between gap-4 md:mt-0 md:flex-col">
        <div className="flex flex-col justify-start gap-1 md:gap-4">
            <span className="order-2 font-bold md:order-1">SOSMED</span>
            
        </div>
        <ul className="flex flex-row flex-wrap justify-end gap-4 md:flex-nowrap md:justify-start">
            <li>
                <a href="https://www.facebook.com/PLNTScom" target="_blank" rel="noreferrer noopener" aria-label="follow PLNTS.com on facebook">
                    <span className="flex h-8 w-8 flex-col items-center justify-center rounded-full bg-[#fbd718] text-[#00644b]">
                        <svg className="w-[20px] fill-current text-sold-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                            <path
                                d="M23.738.214v4.714h-2.804c-1.023 0-1.714.214-2.071.643s-.536 1.071-.536 1.929v3.375h5.232l-.696 5.286h-4.536v13.554h-5.464V16.161H8.309v-5.286h4.554V6.982c0-2.214.62-3.932 1.857-5.152S17.607 0 19.666 0c1.75 0 3.107.071 4.071.214z"
                            ></path>
                        </svg>
                    </span>
                </a>
            </li>
            <li>
                <a href="https://www.pinterest.com/plnts_com/" target="_blank" rel="noreferrer noopener" aria-label="follow PLNTS.com on pinterest">
                    <span className="flex h-8 w-8 flex-col items-center justify-center rounded-full bg-[#fbd718] text-[#00644b]">
                        
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M16.5 7.5l0 .01" /></svg>
                    </span>
                </a>
            </li>
            <li>
                <a href="https://youtube.com/@plnts_com" target="_blank" rel="noreferrer noopener" aria-label="follow PLNTS.com on YouTube">
                    <span className="flex h-8 w-8 flex-col items-center justify-center rounded-full bg-[#fbd718] text-[#00644b]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-twitter-filled w-[20px]" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14.058 3.41c-1.807 .767 -2.995 2.453 -3.056 4.38l-.002 .182l-.243 -.023c-2.392 -.269 -4.498 -1.512 -5.944 -3.531a1 1 0 0 0 -1.685 .092l-.097 .186l-.049 .099c-.719 1.485 -1.19 3.29 -1.017 5.203l.03 .273c.283 2.263 1.5 4.215 3.779 5.679l.173 .107l-.081 .043c-1.315 .663 -2.518 .952 -3.827 .9c-1.056 -.04 -1.446 1.372 -.518 1.878c3.598 1.961 7.461 2.566 10.792 1.6c4.06 -1.18 7.152 -4.223 8.335 -8.433l.127 -.495c.238 -.993 .372 -2.006 .401 -3.024l.003 -.332l.393 -.779l.44 -.862l.214 -.434l.118 -.247c.265 -.565 .456 -1.033 .574 -1.43l.014 -.056l.008 -.018c.22 -.593 -.166 -1.358 -.941 -1.358l-.122 .007a.997 .997 0 0 0 -.231 .057l-.086 .038a7.46 7.46 0 0 1 -.88 .36l-.356 .115l-.271 .08l-.772 .214c-1.336 -1.118 -3.144 -1.254 -5.012 -.554l-.211 .084z" stroke-width="0" fill="currentColor" /></svg>
                    </span>
                </a>
            </li>
            <li>
                <a href="https://www.tiktok.com/@plnts.com" target="_blank" rel="noreferrer noopener" aria-label="follow PLNTS.com on TikTok">
                    <span className="flex h-8 w-8 flex-col items-center justify-center rounded-full bg-[#fbd718] text-[#00644b]">
                        <svg className="w-[20px] fill-current text-sold-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                            <path
                                d="M30,13.119C27.249,13.126 24.564,12.268 22.327,10.666L22.327,21.836C22.325,27.408 17.739,31.992 12.168,31.992C6.594,31.992 2.008,27.406 2.008,21.833C2.008,16.259 6.594,11.673 12.168,11.673C12.634,11.673 13.1,11.705 13.563,11.769L13.563,17.388C13.11,17.245 12.638,17.173 12.163,17.173C9.605,17.173 7.499,19.278 7.499,21.836C7.499,24.395 9.605,26.5 12.163,26.5C14.722,26.5 16.827,24.395 16.827,21.836C16.827,21.836 16.827,21.836 16.827,21.836L16.827,0L22.327,0C22.323,0.464 22.362,0.928 22.443,1.386C22.829,3.448 24.049,5.263 25.813,6.399C27.054,7.221 28.511,7.658 30,7.658L30,13.119Z"
                            ></path>
                        </svg>
                    </span>
                </a>
            </li>
        </ul>
    </div>
    <ul className="mb-3 flex flex-row flex-wrap justify-between gap-2 border-b border-primary pb-4 md:mb-0 md:flex-col md:justify-start md:gap-1 md:border-none md:pb-0">
        <li><a className="font-bold text-primary md:hover:underline" href="https://www.instagram.com/explore/tags/plnts/" target="_blank" rel="noreferrer noopener" aria-label="find all #PLNTS messages on instagram">#PLNTS</a></li>
        <li><a className="font-bold text-primary md:hover:underline" href="https://www.instagram.com/explore/tags/babyplnts/" target="_blank" rel="noreferrer noopener" aria-label="find all #BabyPLNTS messages on instagram">#BabyPLNTS</a></li>
        <li>
            <a className="font-bold text-primary md:hover:underline" href="https://www.instagram.com/explore/tags/featuremeplnts/" target="_blank" rel="noreferrer noopener" aria-label="find all #featuremePLNTS messages on instagram">
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
