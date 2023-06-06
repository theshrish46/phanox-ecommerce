import React from 'react'

const Header = () => {
    return (
        <div className='w-11/12 h-80 mx-auto py-4 px-6 rounded-2xl bg-tri'>
            <div className='w-5/12 h-full bg-[url("/assets/banner.webp")] bg-no-repeat absolute top-0 right-0 overflow-visible'>
            </div>
            <h2 className='self-center text-pri text-5xl leading-relaxed'>Listen to the<br></br>best Music out there</h2>
            <button className='bg-sec py-2 px-5 text-base text-quad font-semibold rounded-md'>Sale</button>
        </div>
    )
}

export default Header
