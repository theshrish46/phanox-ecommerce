import React from 'react'
import Image from 'next/image'
import banner from './../../public/assets/banner.webp'

const Footer = () => {
    return (
        <>
            <div className='w-11/12 h-80 mx-auto mt-16 py-4 px-6 rounded-2xl bg-red-600 relative flex justify-between items-center'>
                <h2 className='text-white text-5xl'></h2>
                <h3 className='text-white text-3xl'>Sale</h3>
                <Image src={banner} alt='logo' className='hidden md:block'/>
            </div>
        </>
    )
}

export default Footer
