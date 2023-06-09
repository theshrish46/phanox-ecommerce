import React from 'react'
import Image from 'next/image'
import earphone from './../../public/assets/earphones_a_1.webp'

const page = () => {
  return (
    <div className='w-11/12 mx-auto my-6'>
      <div className='w-full h-full grid grid-cols-1 gap-10 md:grid-cols-2'>
        <div className='w-full h-auto py-4 px-2 my-4 mb-8 bg-white rounded-md'>
          <Image src={earphone} alt='logo' className='rounded-md bg-pri hover:bg-red-500' />
        </div>

        <div className='w-full h-auto py-4 px-2 my-4 grid grid-cols-4 gap-5
        '>
          <h3 className='text-3xl text-quad font-bold col-start-1 col-end-5
                        md:text-4xl
          '>
            Product
          </h3>
          <p className='text-2xl text-tri font-semibold col-start-1 col-end-5
                        
          '>
            Lorem ipsum dolor sit amet consectetur adipisicing consectetur adipisicing
          </p>
          <span className='text-2xl text-quad font-extrabold col-start-1 col-end-2'>
            Price
          </span>
          <span className='text-2xl text-red-500 font-medium col-start-4 col-end-5'>
            Review
          </span>
          <button className='bg-red-500 px-6 py-3 text-base text-banner font-semibold rounded-md col-start-1 col-end-3

          '>
            Add to Cart</button>
          <button className='bg-banner px-6 py-3 text-base text-red-500 font-bold rounded-md col-start-3 col-end-5

          '>
            Wishlist</button>
        </div>
      </div>
    </div>
  )
}

export default page
