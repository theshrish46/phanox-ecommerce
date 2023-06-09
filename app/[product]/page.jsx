import React from 'react'
import Image from 'next/image'
import earphone from './../../public/assets/earphones_a_1.webp'

const page = () => {
  return (
    <div className='w-11/12 mx-auto my-6 monitor:w-10/12 monitor:mx-auto'>
      <div className='w-full h-full grid grid-cols-1 gap-10 md:grid-cols-2 monitor:w-10/12 justify-items-stretch'>
        <div className='w-full h-auto py-4 px-2 my-4 mb-8 bg-white rounded-md'>
          <Image src={earphone} alt='logo' className='rounded-md bg-pri hover:bg-red-500' />
        </div>

        <div className='w-full h-auto py-4 px-2 my-4 grid grid-cols-4 gap-3 justify-stretch items-center
                        monitor:gap-0
        '>
          <h3 className='text-3xl text-quad font-bold col-start-1 col-end-5
                        md:text-4xl monitor:text-4xl
          '>
            Product
          </h3>
          <p className='text-2xl text-tri font-semibold col-start-1 col-end-5
                        tablet:text-2xl
          '>
            Lorem ipsum dolor sit amet consectetur adipisicing consectetur adipisicing
          </p>
          <span className='text-2xl text-quad font-extrabold col-start-1 col-end-2
                          tablet:text-3xl monitor:text-2xl
          '>
            $Price
          </span>
          <span className='text-2xl text-red-500 font-medium col-start-4 col-end-4
                          tablet:text-3xl monitor:text-2xl monitor:col-start-4 monitor:col-end-5
          '>
            Review
          </span>
          <div className='col-start-1 col-end-5 flex justify-between items-center'>

            <button className='w-2/5 bg-red-500 px-[16px] py-[16px] text-base text-banner font-semibold rounded-md
                            tablet:px-[14px] tablet:py-[12px] tablet:text-xl
          '>
              Add to Cart</button>
            <button className='w-2/5 bg-banner px-[16px] py-[16px] text-base text-red-500 font-bold rounded-md
                              tablet:px-[14px] tablet:py-[12px] tablet:text-xl

          '>
              Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
