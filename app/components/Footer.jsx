import React from 'react'
import Foobar from './Foobar'
import Image from 'next/image'
import banner from './../../public/assets/banner.webp'

const Footer = () => {
    return (
        <div className='w-11/12 h-80 mx-auto py-4 px-6 rounded-2xl bg-red-600 relative flex justify-between items-center'>
            <Foobar />
            <Image src={banner} alt='logo' />
        </div>
    )
}

export default Footer
