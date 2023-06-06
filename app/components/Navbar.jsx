import React from 'react'
import { GiShoppingBag } from 'react-icons/gi'

const Navbar = () => {
    return (
        <div className='w-11/12 mx-auto mb-4 py-2 flex justify-between items-center'>
            <h3 className='text-quad text-xl'>
                PHANOX
            </h3>
            <p className='relative z-50'>
                <GiShoppingBag className='text-2xl' />
                <span className='absolute -top-4 -right-5 bg-red-500 px-2 py-1 z-0 text-sm rounded-2xl'>0</span>
            </p>
        </div>
    )
}

export default Navbar
