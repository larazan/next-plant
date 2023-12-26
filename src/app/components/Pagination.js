import React from 'react'
import Link from 'next/link'

const Pagination = () => {
  return (
    <>
    <div className='flex bg-white items-center justify-center'>
      <div className="flex items-center justify-center mt-12 mb-10 space-x-2">
        <button
          disabled=""
          className="border border-[#E4E4E4] rounded-full p-1.5 md:p-2 text-[#191919] disabled:text-[#A3A3A3] disabled:cursor-not-allowed hover:text-white hover:bg-orange-500"
          aria-label="go to previous page"
        >
          <svg
            fill="currentColor"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.5303 5.46967C14.8232 5.76256 14.8232 6.23744 14.5303 6.53033L10.793 10.2676C10.3882 10.6724 10.117 10.9444 9.92485 11.1708C9.73841 11.3904 9.67096 11.5171 9.63955 11.6137C9.55798 11.8648 9.55798 12.1352 9.63955 12.3863C9.67096 12.4829 9.73841 12.6096 9.92485 12.8292C10.117 13.0556 10.3882 13.3276 10.793 13.7324L14.5303 17.4697C14.8232 17.7626 14.8232 18.2374 14.5303 18.5303C14.2374 18.8232 13.7625 18.8232 13.4696 18.5303L9.73235 14.7931L9.71083 14.7715C9.33312 14.3939 9.01785 14.0786 8.78134 13.8C8.53467 13.5094 8.32993 13.2098 8.21296 12.8498C8.0335 12.2975 8.0335 11.7025 8.21296 11.1502C8.32993 10.7902 8.53467 10.4906 8.78134 10.2C9.01785 9.9214 9.33312 9.60615 9.71083 9.22845L9.73235 9.20693L13.4696 5.46967C13.7625 5.17678 14.2374 5.17678 14.5303 5.46967Z"
            ></path>
          </svg>
        </button>
        <Link
          className="rounded-full p-1 w-9 h-9 md:w-10 md:h-10 text-center text-md font-medium flex justify-center items-center text-white bg-orange-500"
          href="/blog?category=All%20Categories&amp;page=1"
        >
          1
        </Link>
        <Link
          className="rounded-full p-1 w-9 h-9 md:w-10 md:h-10 text-center text-md font-medium flex justify-center items-center text-gray-900 border border-[#E4E4E4] hover:text-white bg-gray-200 hover:bg-orange-500"
          href="/blog?category=All%20Categories&amp;page=2"
        >
          2
        </Link>
        <Link
          className="rounded-full p-1 w-9 h-9 md:w-10 md:h-10 text-center text-md font-medium flex justify-center items-center text-gray-900 border border-[#E4E4E4] hover:text-white bg-gray-200 hover:bg-orange-500"
          href="/blog?category=All%20Categories&amp;page=3"
        >
          3
        </Link>
        <Link
          className="rounded-full p-1 w-9 h-9 md:w-10 md:h-10 text-center text-md font-medium hidden md:flex justify-center items-center text-gray-900 border border-[#E4E4E4] hover:text-white bg-gray-200 hover:bg-orange-500"
          href="/blog?category=All%20Categories&amp;page=5"
        >
          5
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
          className="rounded-full p-1 w-9 h-9 md:w-10 md:h-10 text-center text-md font-medium flex justify-center items-center text-gray-900 border border-[#E4E4E4] hover:text-white bg-gray-200 hover:bg-orange-500"
          href="/blog?category=All%20Categories&amp;page=29"
        >
          29
        </Link>
        <button
          className="border border-[#E4E4E4] rounded-full p-1.5 md:p-2 text-[#191919] disabled:text-[#A3A3A3] disabled:cursor-not-allowed hover:text-white bg-gray-200 hover:bg-orange-500"
          aria-label="go to next page"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.46967 5.46967C9.76256 5.17678 10.2374 5.17678 10.5303 5.46967L14.2676 9.20693L14.2891 9.22846C14.6668 9.60615 14.9821 9.9214 15.2186 10.2C15.4653 10.4906 15.67 10.7902 15.787 11.1502C15.9664 11.7025 15.9664 12.2975 15.787 12.8498C15.67 13.2098 15.4653 13.5094 15.2186 13.8C14.9821 14.0786 14.6668 14.3938 14.2891 14.7715L14.2676 14.7931L10.5303 18.5303C10.2374 18.8232 9.76256 18.8232 9.46967 18.5303C9.17678 18.2374 9.17678 17.7626 9.46967 17.4697L13.2069 13.7324C13.6117 13.3276 13.883 13.0556 14.0751 12.8292C14.2615 12.6096 14.329 12.4829 14.3604 12.3863C14.442 12.1352 14.442 11.8648 14.3604 11.6137C14.329 11.5171 14.2615 11.3904 14.0751 11.1708C13.883 10.9444 13.6117 10.6724 13.2069 10.2676L9.46967 6.53033C9.17678 6.23744 9.17678 5.76256 9.46967 5.46967Z"
            ></path>
          </svg>
        </button>
      </div>
      </div>
    </>
  )
}

export default Pagination