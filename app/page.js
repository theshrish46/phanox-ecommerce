import { createClient } from "next-sanity";
import Header from "./components/Header";
import ProductPage from "./components/ProductPage";
import product from "./components/Product";
import Footer from "./components/Footer";


import Layout from './layout'



export default function Home({ products, banner }) {
  return (
    <div>
      {
        console.log(banner.smallText)
      }
      <Header banner={banner} />
      <ProductPage product={products} />
      <Footer banner={banner} />
    </div>
  )
}

const client = createClient({
  projectId: 'p86q1s2p',
  dataset: 'production',
  apiVersion: '2023-06-09',
  useCdn: true,
  token: process.env.SANITY_ID
})

export async function getStaticProps() {
  const productQuery = '*[_type == "product"]'
  const products = await client.fetch(productQuery)

  const bannerQuery = '*[_type == "banner"]'
  const banner = await client.fetch(bannerQuery)

  return {
    props: { products, banner }
  }
}