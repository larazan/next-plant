import Image from "next/image";
import React from "react";

import pot from "@/assets/pots/pot.png";

const DetailModal = () => {
  return (
    <>
      <div className="flex w-full max-w-md flex-col justify-between rounded bg-white shadow-xl md:m-8 !my-auto h-full md:h-auto !my-auto md:h-auto my-8 p-0">
        <div className="relative flex-1 touch-pan-y overflow-y-auto">
          <div className="relative flex h-full flex-col justify-between">
            <button
              aria-label="Close product details"
              class="absolute right-2 top-2 z-10 h-7 w-7 outline-none focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <div className="aspect-h-31 aspect-w-25 rounded-t transform transition-transform  md:motion-safe:group-hover:scale-110">
              <Image src={pot} alt="" className="object-cover" />
            </div>
            <div class="flex-1 px-3 py-2">
              <p class="truncate text-sm font-bold">
                <span class="truncate text-base">Grey Terracotta Pot</span>
              </p>
              <p>
                <span class="block text-sm italic leading-tight">Ø 20 cm</span>
              </p>
              <p class="mb-3 mt-2">
                Size: <span>L</span>
              </p>
              <svg
                class="my-2 h-px w-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 1"
                preserveAspectRatio="none"
              >
                <path d="M0,0 100,0" stroke="#707070" stroke-width="1"></path>
              </svg>
              <ul class="flex w-full flex-row justify-start">
                <li class="mr-4 flex flex-col items-center justify-center md:mr-8">
                  <svg
                    class="w-10"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 140 140"
                  >
                    <polygon points="26.4,51.8 28.4,51.8 28.4,43.2 92.5,43.2 92.5,50.7 86.3,50.7 34.7,50.7 33.5,50.7 41.1,96.5 79.9,96.5 85.3,60.3  83.3,59.9 78.2,94.3 42.8,94.3 35.9,53 86.3,53 94.5,53 94.5,40.9 26.4,40.9 "></polygon>
                    <path d="M80.5,97.3H40.5L32.6,50h59.2v-6H29.2v8.6h-3.5V40.2h69.6v13.5H36.8l6.6,39.8h34.2L82.7,59l3.4,0.7L80.5,97.3z M41.7,95.8 h37.5l5.2-34.9L84,60.8L78.9,95H42.1L35,52.2h58.8V41.7H27.2v9.4h0.5v-8.7h65.6v9H34.4L41.7,95.8z"></path>
                    <polygon points="105.3,42.9 108.6,42.9 108.6,94.5 105.3,94.5 105.3,96.6 113.6,96.6 113.6,94.5 110.3,94.5 110.3,42.9 113.6,42.9  113.6,40.8 105.3,40.8 "></polygon>
                    <path d="M114.3,97.3h-9.7v-3.5h3.2V43.6h-3.2v-3.5h9.7v3.5h-3.2v50.1h3.2V97.3z M106.1,95.8h6.7v-0.5h-3.2V42.1h3.2v-0.5h-6.7v0.5 h3.2v53.1h-3.2V95.8z"></path>{" "}
                  </svg>
                  <span class="text-sm">Height</span>
                  <span class="text-sm">19cm</span>
                </li>
                <li class="flex flex-col items-center justify-center">
                  <svg
                    class="w-10"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 140 140"
                  >
                    <polygon points="35.9,63.9 37.9,63.9 37.9,56.2 102.1,56.2 102.1,62.9 95.8,62.9 44.2,62.9 43,62.9 50.6,103.5 89.4,103.5 94.8,71.4 92.8,71 87.7,101.5 52.3,101.5 45.4,64.9 95.8,64.9 104.1,64.9 104.1,54.2 35.9,54.2 "></polygon>
                    <path d="M90,104.3H50l-8-42.1h59.2V57H38.7v7.7h-3.5V53.5h69.6v12.2H46.3l6.6,35.1h34.2l5.1-30.6l3.4,0.6L90,104.3z M51.2,102.7h37.5L93.9,72l-0.5-0.1l-5.1,30.4H51.6l-7.2-38.1h58.8V55H36.7v8.2h0.5v-7.7h65.6v8.2H43.9L51.2,102.7z"></path>
                    <polygon points="38.1,46.5 38.1,42.6 101.9,42.6 101.9,46.5 104.1,46.5 104.1,36.5 101.9,36.5 101.9,40.4 38.1,40.4 38.1,36.5 35.9,36.5 35.9,46.5 "></polygon>
                    <path d="M104.8,47.3h-3.7v-3.9H38.8v3.9h-3.7V35.7h3.7v3.9h62.4v-3.9h3.6L104.8,47.3z M102.7,45.7h0.6v-8.5h-0.6v3.9H37.3v-3.9h-0.7 v8.5h0.7v-3.9h65.4V45.7z"></path>
                  </svg>
                  <span class="text-sm">Diameter</span>
                  <span class="text-sm">17cm</span>
                </li>
              </ul>
            </div>
            <div class="px-3 pb-4 pt-2 text-center">
              <button
                class="cursor-pointer inline-block leading-none select-none text-center focus:outline-none transition-colors disabled:cursor-not-allowed max-h-10 px-6 py-3 relative bg-primary text-white hover:bg-primary-dark disabled:bg-primary/40 rounded-full w-full md:w-1/2"
                type="button"
                data-variant="rounded_yellow"
              >
                {" "}
                Select
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailModal;
