import React from 'react'
import Image from 'next/image'
import { RiStarSLine } from 'react-icons/ri'
import earphones from './../../public/assets/earphones_a_1.webp'

const product = () => {
    return (
        <div className='w-11/12 h-auto my-20 mx-auto py-4 px-6 border-2'>
            <div className='w-1/4 bg-white px-2 pb-4 pt-2 rounded-md'>
                <Image src={earphones} alt='img' className='bg-sec w-full h-80 rounded-md hover:bg-red-500' />
                <div className='my-3 mx-2 grid grid-cols-6'>
                    <h4 className='text-quad font-bold text-base grid'>Product Name</h4>
                    <p className='text-black font-medium text-base'>Lorem ipsum dolor sit amet consectetur</p>

                    <div className='pr-4 text-tri font-semibold text-sm my-1'>$49</div>
                    <div className='px-4 text-tri font-semibold text-sm line-through'>$69</div>
                    <div className='pl-4 items-end text-red-500 font-extrabold text-sm my-1 flex'>4.5</div>
                </div>
            </div>
        </div>
    )
}

export default product
