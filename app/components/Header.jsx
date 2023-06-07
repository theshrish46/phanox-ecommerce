import React from 'react'
import banner from './../../public/assets/banner.webp'
import Image from 'next/image'

const Header = () => {
    return (
        <div className='w-11/12 h-80 mx-auto py-4 px-6 rounded-2xl bg-tri relative flex justify-between items-center'>
            <div className='absolute -top-24 right-0'>
                <Image src={banner} alt="logo" className='w-full h-full' />
            </div>
            <div>
                <h2 className='self-center text-pri text-5xl leading-relaxed'>Listen to the<br></br>best Music out there</h2>
                <button className='bg-sec py-2 px-5 text-base text-quad font-semibold rounded-md'>Sale</button>
            </div>
        </div>
    )
}

export default Header
