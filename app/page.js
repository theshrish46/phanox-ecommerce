import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import ProductPage from "./components/ProductPage";


export default function Home() {
  return (
    <div className='w-full h-auto my-5'>
      <Navbar />
      <Header />
      <ProductPage />
      {/* 
      <Footer /> */}
    </div>
  )
}
