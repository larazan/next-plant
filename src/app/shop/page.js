import React from 'react'
import Head from "next/head";

import GoTop from "../components/GoTop";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Guarantee from "../components/Guarantee";
import HeroShop from '../components/HeroShop';
import ProductShop from '../components/ProductShop';
import NewsFeed from '../components/NewsFeed';

export default function Shop() {
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
        <HeroShop />
        <ProductShop />
        
        <Guarantee />
      <Footer />
    </>
  );
}
