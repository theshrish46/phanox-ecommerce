import React from 'react'
import Image from 'next/image'
import { RiStarSLine } from 'react-icons/ri'
import earphones from './../../public/assets/earphones_a_1.webp'

const product = () => {
    return (
        // <div className='w-11/12 h-auto my-20 mx-auto py-4 px-1 border-2'>
        //     <div className='w-1/4 bg-white px-2 pb-4 pt-2 rounded-md'>
        //         <Image src={earphones} alt='img' className='bg-sec w-full h-80 rounded-md hover:bg-red-500' />
        //         <div className='my-3 mx-2 grid grid-cols-6 justify-items-start place-items-center'>
        //             <h4 className='text-quad font-bold text-base col-span-6'>Product Name</h4>
        //             <p className='text-black font-medium text-base col-span-6'>Lorem ipsum dolor sit amet consectetur</p>

        //             <div className='text-tri font-semibold text-sm my-1 col-start-1 col-end-2'>$49</div>
        //             <div className='text-tri font-semibold text-sm line-through col-start-2 col-end-3'>$69</div>
        //             <div className='text-tri font-semibold text-sm col-start-3 col-end-5'>(25% off)</div>
        //             <div className='text-red-500 font-extrabold text-sm my-1 col-start-6 col-end-7'>4.5</div>
        //         </div>
        //     </div>
        // </div>
        <>
            <div className='w-full bg-white px-2 pt-2 pb-4 rounded-md'>
                <Image src={earphones} alt='img' className='bg-sec hover:bg-red-500 rounded-md' />
                <div className='grid grid-cols-6'>
                    <div className='col-start-1 col-end-7
                                        text-base text-quad font-semibold
                        '>
                        Name
                    </div>
                    <div className='col-start-1 col-end-7
                                        text-base text-black font-medium
                        '>
                        Detail
                    </div>
                    <div className='col-start-1 col-end-2
                                        text-sm text-quad font-bold
                        '>
                        Price
                    </div>
                    <div className='col-start-5 col-end-6
                                        text-base text-tri font-medium
                        '>
                        review
                    </div>
                </div>
            </div>
        </>
    )
}

export default product
