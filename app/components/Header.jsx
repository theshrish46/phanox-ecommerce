import React from 'react'
import banner from './../../public/assets/banner.webp'
import Image from 'next/image'

const Header = () => {
    return (
        <>
            <div className='
                    w-11/12 mx-auto my-6 mb-8 px-2 py-4 bg-banner rounded-xl relative flex flex-col justify-center items-center 
                    mobile:h-60 mobile:px-6 mobile:py-6
                    laptop:h-96 laptop:px-8 laptop:py-8
                    
                    '>
                <div className='
                    mobile:absolute mobile:-top-8 mobile:-right-6 mobile:w-[20rem] mobile:h-[20rem]
                    tablet:w-[20rem] tablet:h-[20rem]
                    laptop:w-[30rem] laptop:h-[30rem]
                    
                    '>
                    <Image src={banner} alt='logo' className=''/>
                </div>
                <div className='mobile:self-start'>
                    <h2 className='text-xl mobile:text-3xl mobile:leading-relaxed laptop:text-5xl laptop:leading-normal text-white'>Large Text</h2>
                    <h2 className='text-xl mobile:text-3xl mobile:leading-relaxed laptop:text-5xl laptop:leading-normal text-white'>Large Text2</h2>
                    <h2 className='text-xl mobile:text-3xl mobile:leading-relaxed laptop:text-5xl laptop:leading-normal text-white'>discount</h2>
                    <h2 className='text-xl mobile:text-3xl mobile:leading-relaxed laptop:text-5xl laptop:leading-normal text-white'>sale time</h2>
                </div>
            </div>
        </>
    )
}

export default Header
