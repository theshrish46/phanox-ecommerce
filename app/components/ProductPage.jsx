import React from 'react'
import Product from './Product'

const ProductPage = () => {
    return (
        <>
            <div className='w-11/12 h-auto mx-auto my-5 grid grid-cols-1 gap-3
                            mobile:grid-cols-2
                            md:grid-cols-3
                            monitor:grid-cols-4 monitor:gap-5
                            tv:grid-cols-5
                            
                            '>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </>
    )
}

export default ProductPage
