import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Product from "./components/Product";


export default function Home() {
  return (
    <div className='bg-pri w-full h-auto py-10'>
      <Navbar />
      <Header />
      <Product />
    </div>
  )
}
