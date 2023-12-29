import React from "react";
import Link from "next/link";
import Image from "next/image";

import Logo from "./Logo";

export default function HeaderProfile() {
  return (
    <>
      <header className="z-20 relative flex min-h-10  mx-auto w-full top-0 md:m-0 px-4 md:px-6 py-3 md:py-3  items-center justify-center bg-[#00634b] ">
        <div>
          <Link
            href={"/"}
            className="flex justify-center "
          >
           <Logo />
          </Link>
        </div>
      </header>
    </>
  );
}
