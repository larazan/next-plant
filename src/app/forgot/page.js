import React from 'react'
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Logo from "../components/Logo";
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Forgot() {
  return (
    <>
        <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <div className="flex h-max py-32 bg-white">
        <div className="flex flex-row w-full">
          <div className="flex flex-1 flex-col items-center justify-center px-0 md:px-10 relative">
           

            <div className="flex flex-1 flex-col w-10/12 justify-center space-y-3 md:space-y-5 max-w-md">
              <div className="flex justify-center pb-3 border-b w-full mx-auto">
                <Link href={""}>
                <Logo />
                </Link>
                {/* <span className="text-3xl font-bold text-gray-900 uppercase tracking-tight">Business Insider</span> */}
              </div>
              <div className="flex flex-col space-y-1 md:space-y-2">
                <h2 className="text-2xl md:text-2xl tracking-tight font-bold text-gray-900">
                  Restore Password
                </h2>
                <p className="text-md md:text-md text-gray-400">
                  New to Game Zone?{" "}
                  <Link href={"/register"}>
                  <span className="text-[#2680fb] hover:opacity-70">Create an account</span>
                  </Link>
                </p>
              </div>
              <div className="flex flex-col max-w-md space-y-4 md:space-y-5">
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="flex w-full bg-white px-3 py-3 md:px-4 md:py-4 border-2 border-gray-300 rounded font-medium placeholder:font-normal"
                  />
                </div>
                
                <button className="flex items-center uppercase tracking-wide justify-center flex-none px-3 py-3 md:px-4 md:py-3 border-2 rounded-3xl font-bold hover:opacity-80 border-black bg-black text-sm text-white">
                  restore
                </button>
                </div>
            </div>

           
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
