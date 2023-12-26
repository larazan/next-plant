import React from 'react'
import Image from 'next/image';

import lg from "@/assets/img/new-logo.png"

const Logo = () => {
  return (
    <>
    <Image src={lg} alt='' className='w-10 md:w-44 h-full' />
    </>
  )
}

export default Logo