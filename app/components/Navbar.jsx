import React from 'react'
import { GiShoppingBag } from 'react-icons/gi'

const Navbar = () => {
    return (
        <>
            <div className='w-11/12 my-6 mx-auto flex justify-between items-center'>
                <div className='text-xl mobile:text-2xl'>
                    Phanoax
                </div>
                <div className='flex justify-center relative'>
                    <GiShoppingBag className='' />
                    <span className='absolute -top-6 -right-4 mobile:-right-6 bg-red-500 text-base py-1 px-2 rounded-full'>0</span>
                </div>
            </div>
        </>
    )
}

export default Navbar
