import React from 'react'
import Image from 'next/image'
import { RiStarSLine } from 'react-icons/ri'
import earphones from './../../public/assets/earphones_a_1.webp'

const product = () => {
    return (
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
