import React from 'react'

const Hero = () => {
    return (
        <div  data-aos="fade-up"
        data-aos-duration="3000" className='flex justify-center items-center bg-[#33333344] shadow-xl p-4 max-w-[550px] mx-auto rounded-md'>
            <div className="border-4 border-white border-opacity-40 p-6 flex flex-col justify-center items-center">
                <h1 className='text-white text-5xl font-bold text-center'>DELICIOUS BREAKFAST</h1>
                <p className='text-white mt-2 mb-4 text-center'>
                    Lorem Ipsum is simply dummy text of printing and industry. Lorem Ipsum the industry's dummy text.
                </p>
                <button className='text-white border border-white text-[12px] px-4 py-2 rounded-md transition-all duration-300 ease-out hover:bg-[#d0ae5e] hover:border-opacity-0'>DISCOVER MENU</button>
            </div>
        </div>
    )
}

export default Hero