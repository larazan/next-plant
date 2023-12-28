import React from 'react'
import Image from 'next/image';

import lg from "@/assets/img/logo.png"

const Logo = () => {
  return (
    <>
    <Image src={lg} alt='' className='w-20 md:w-24 h-full' />
    </>
  )
}

export default Logo