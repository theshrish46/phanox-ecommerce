"use client"

import Header from "./components/Header";
import ProductPage from "./components/ProductPage";
import product from "./components/Product";
import Footer from "./components/Footer";


import Layout from './layout'



export default function Home({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <ProductPage />
      <Footer />
    </div>
  )
}
