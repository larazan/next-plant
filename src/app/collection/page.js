"use client";

import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";

import GoTop from "../components/GoTop";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slideshow from "../components/Slideshow";
import ProductList from "../components/ProductList";
import Pagination from "../components/Pagination";
import FilterSide from "../components/FilterSide";
import SortOpt from "../components/SortOpt";
import CategoryNav from "../components/CategoryNav";
import Guarantee from "../components/Guarantee";
import NewsFeed from "../components/NewsFeed";


export default function Collection() {
  

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <GoTop />
      <NewsFeed />
      <Slideshow />
      <CategoryNav />
      <div className="w-full bg-white">
        <main className="mx-auto max-w-4xl">
          
          <div className="grid-container grid  w-full grid-cols-1 gap-3 md:grid-cols-12 xl:gap-4 px-3 pb-12 pt-0 md:pb-16 md:pt-6 lg:px-0">
            <SortOpt />
            <FilterSide />
            <ProductList />
          </div>
        </main>
      </div>
      <Guarantee />

      
      <Footer />
    </>
  );
}
