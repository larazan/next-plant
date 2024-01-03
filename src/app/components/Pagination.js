import React from "react";
import Link from "next/link";

const Pagination = () => {
  return (
    <>
      <div className="flex bg-white items-center justify-center">
        <div className="flex items-center justify-center mt-12 mb-10 space-x-1 md:space-x-2">
          <button
            disabled=""
            className="flex items-center space-x-1 p-1.5 md:p-2 text-[#191919] disabled:text-[#A3A3A3] disabled:cursor-not-allowed"
            aria-label="go to previous page"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-2 h-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
            <span className="text-sm">Prev</span>
          </button>
          <Link
            className="p-1 w-8 h-8 md:w-8 md:h-8 text-center text-sm font-medium flex justify-center items-center text-white bg-[#818280]"
            href="/blog?category=All%20Categories&amp;page=1"
          >
            1
          </Link>
          <Link
            className="p-1 w-8 h-8 md:w-8 md:h-8 text-center text-sm font-medium flex justify-center items-center text-gray-900"
            href="/blog?category=All%20Categories&amp;page=2"
          >
            2
          </Link>
          <Link
            className="p-1 w-8 h-8 md:w-8 md:h-8 text-center text-sm font-medium flex justify-center items-center text-gray-900"
            href="/blog?category=All%20Categories&amp;page=3"
          >
            3
          </Link>

          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="31"
              height="31"
              rx="3.5"
              stroke="white"
            ></rect>
            <path
              d="M10.7002 18.8193C10.1169 18.8193 9.66113 18.6416 9.33301 18.2861C9.00488 17.9307 8.84082 17.4635 8.84082 16.8848C8.84082 16.3242 9.00488 15.8662 9.33301 15.5107C9.65202 15.1644 10.1077 14.9912 10.7002 14.9912C11.2835 14.9912 11.7415 15.1644 12.0742 15.5107C12.4023 15.8662 12.5664 16.3242 12.5664 16.8848C12.5664 17.4635 12.4023 17.9307 12.0742 18.2861C11.7461 18.6416 11.2881 18.8193 10.7002 18.8193ZM16.1006 18.8193C15.5173 18.8193 15.0615 18.6416 14.7334 18.2861C14.4053 17.9307 14.2412 17.4635 14.2412 16.8848C14.2412 16.3242 14.4053 15.8662 14.7334 15.5107C15.0524 15.1644 15.5081 14.9912 16.1006 14.9912C16.6839 14.9912 17.1419 15.1644 17.4746 15.5107C17.8027 15.8662 17.9668 16.3242 17.9668 16.8848C17.9668 17.4635 17.8027 17.9307 17.4746 18.2861C17.1465 18.6416 16.6885 18.8193 16.1006 18.8193ZM21.501 18.8193C20.9176 18.8193 20.4619 18.6416 20.1338 18.2861C19.8057 17.9307 19.6416 17.4635 19.6416 16.8848C19.6416 16.3242 19.8057 15.8662 20.1338 15.5107C20.4528 15.1644 20.9085 14.9912 21.501 14.9912C22.0843 14.9912 22.5423 15.1644 22.875 15.5107C23.2031 15.8662 23.3672 16.3242 23.3672 16.8848C23.3672 17.4635 23.2031 17.9307 22.875 18.2861C22.5469 18.6416 22.0889 18.8193 21.501 18.8193Z"
              fill="#404040"
            ></path>
          </svg>
          <Link
            className="p-1 w-8 h-8 md:w-8 md:h-8 text-center text-sm font-medium flex justify-center items-center text-gray-900"
            href="/blog?category=All%20Categories&amp;page=29"
          >
            29
          </Link>
          <button
            className="flex items-center space-x-1 p-1.5 md:p-2 text-[#191919] disabled:text-[#A3A3A3] disabled:cursor-not-allowed"
            aria-label="go to next page"
          >
            <span className="text-sm">Next</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-2 h-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Pagination;
