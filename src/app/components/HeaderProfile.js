import React from "react";
import Link from "next/link";
import Image from "next/image";

// import logo from "@/assets/img/fcbayern.svg";

export default function HeaderProfile() {
  return (
    <>
      <header className="z-20 relative flex min-h-10  w-full top-0 md:m-0 px-4 md:px-6 py-3 md:py-3  items-center justify-between bg-[#095140] ">
        <div>
          <Link
            href={"/"}
            className="flex justify-center w-10 md:w-16 bg-[#fbd718] py-3 px-1 rounded"
          >
            <svg
              width="90%"
              viewBox="0 0 122 71"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="sc-feUZmu djFQBI"
            >
              <path
                d="M42.8409 0.181366C35.2042 0.181366 30.6036 5.88667 30.3218 12.2711H27.664C27.2478 14.1647 27.0151 16.3079 27.0151 18.7293C27.0151 32.3172 33.7741 37.2772 42.1126 37.2772C49.8212 37.2772 56.1791 33.0379 57.0966 21.6652C58.207 21.2509 59.4877 20.7534 60.7948 20.2123V36.9613H68.8061V15.9428C70.7564 14.7208 71.9916 13.9358 73.5107 13.9358C75.2151 13.9358 76.492 14.8816 76.492 17.4808V29.0597C76.492 34.7612 79.2614 37.2753 83.913 37.2753C86.7657 37.2753 89.5937 35.8508 91.9016 33.5695L89.0186 29.1581C88.1106 29.911 87.1572 30.3593 86.3779 30.3593C85.1842 30.3593 84.5013 29.7464 84.5013 26.924V15.7518C84.5013 9.18197 79.8081 6.86656 76.0966 6.86656C73.3045 6.86656 70.9588 8.12831 68.8061 9.3352V7.17679H60.7948V13.5328C59.5614 14.1022 58.2808 14.6622 57.0304 15.1635C55.8764 4.26171 49.3634 0.181366 42.8409 0.181366ZM42.8409 7.02735C46.1778 7.02735 49.2083 9.82514 49.3956 17.9215C47.7006 18.3907 45.8241 18.7576 44.0856 18.7576C39.8691 18.7576 37.2264 16.9833 37.2264 13.0561C37.2264 9.85541 39.3564 7.02735 42.8409 7.02735ZM42.1126 30.4312C38.5241 30.4312 35.5031 28.1952 34.9829 22.2005C36.8216 23.9068 39.591 24.9491 43.5786 24.9491C45.353 24.9491 47.2182 24.654 48.9359 24.2549C48.06 28.74 45.2603 30.4312 42.1126 30.4312Z"
                fill="#375520"
              ></path>
              <path
                d="M8.10584 70.6294H0V34.1616H8.10584V50.1141C10.1545 47.8725 13.7487 46.3024 18.6084 46.9229V34.1597H26.7143V70.6275H18.6084V55.1195C13.796 54.0204 8.10584 56.8428 8.10584 62.8489V70.6275V70.6294Z"
                fill="#375520"
              ></path>
              <path
                d="M119.111 62.5859C118.222 63.3086 117.294 63.7361 116.531 63.7361C115.338 63.7361 114.655 63.1232 114.655 60.3008L114.647 34.1616H106.73V43.48C105 41.4597 102.493 40.5328 99.5761 40.5328C93.7081 40.5328 88.3263 44.9801 88.3263 55.7381C88.3263 58.4867 88.6913 60.821 89.3402 62.777C88.3754 63.6415 87.3445 64.0274 86.6616 64.0274C85.4679 64.0274 84.4994 63.4145 84.4994 60.5921V49.4199C84.4994 42.8501 79.8061 40.5347 76.0947 40.5347C73.3025 40.5347 70.9569 41.7964 68.8041 43.0033V40.8449H60.7929V60.5959C60.7929 63.7134 58.8842 64.0274 57.8646 64.0274C56.6709 64.0274 55.4167 63.4145 55.4167 60.5921V40.8449H47.6911V43.7108C45.9564 41.5297 43.3724 40.5347 40.3476 40.5347C34.4796 40.5347 29.0978 44.982 29.0978 55.74C29.0978 66.4979 34.665 70.9453 41.1175 70.9453C44.5112 70.9453 47.2749 69.9805 49.1345 67.5686C50.156 69.7062 52.1139 70.9453 55.0478 70.9453C57.1627 70.9453 59.1963 70.1583 60.7948 68.4256V70.6331H68.806V49.6147C70.7545 48.3946 71.9916 47.6076 73.5106 47.6076C75.215 47.6076 76.4919 48.5535 76.4919 51.1526V62.7316C76.4919 68.4331 79.2613 70.9472 83.913 70.9472C86.6294 70.9472 89.7299 69.6003 92.0358 67.5005C94.2245 69.8708 97.1793 70.9472 100.35 70.9472C103.717 70.9472 106.464 69.9956 108.323 67.6254C109.479 69.6003 111.401 70.6558 114.068 70.6558C116.896 70.6558 119.702 69.256 122 67.0087L119.113 62.5916L119.111 62.5859ZM42.2998 63.9158C39.1218 63.9158 37.215 61.4888 37.215 55.7362C37.215 49.9836 38.8589 47.5566 41.4656 47.5566C43.747 47.5566 45.1544 49.4728 44.8668 55.1346H47.5265C47.5265 62.1717 45.1506 63.9158 42.2979 63.9158H42.2998ZM101.53 63.9158C98.3521 63.9158 96.4453 61.4888 96.4453 55.7362C96.4453 49.9836 98.0892 47.5566 100.696 47.5566C102.977 47.5566 104.385 49.4728 104.097 55.1346H106.757C106.757 62.1717 104.381 63.9158 101.528 63.9158H101.53Z"
                fill="#375520"
              ></path>
            </svg>
          </Link>
        </div>
      </header>
    </>
  );
}
