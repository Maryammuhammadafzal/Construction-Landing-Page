import BackHeading from '@/components/BackHeading'
import Heading from '@/components/Heading'
import Image from 'next/image'

import React from 'react'

const ChoosePage = () => {
    return (
        <div className='w-full h-auto flex md:py-20 sm:py-14 py-7 justify-center items-center'>
            <div className='w-full h-full relative flex md:justify-center items-center'>
                <div className='absolute w-full h-auto lg:-top-30 md:-top-24 sm:-top-16 xs:-top-12 -top-6 left-0 flex justify-center items-center'>
                    <h2 className='font-bold 2xl:text-[160px] xl:text-[140px] lg:text-[110px] md:text-[84px] sm:text-[70px] xs:text-[52px] 2xs:text-[40px] text-[30px] text-black/5 uppercase'>
                       Why Choose Us
                    </h2>
                </div>
                <div className='w-full h-full flex justify-center items-center flex-col gap-6'>
                    <Heading title='Why Choose Us?' />
                    <div className=' flex md:flex-row flex-col w-full h-auto gap-3 justify-between items-center'>
                        <div className="content w-1/2 h-auto flex justify-center items-center p-6 flex-col gap-5">

                        </div>
                        <div className="image w-1/2 h-auto flex justify-end items-center p-6 relative gap-5">
                            <div className='w-[500px] -z-10 h-[500px] rounded-full bg-secondary absolute right-0 '></div>
                            <Image src="/images/choose-image.png" alt='image' width={500} height={300} className='w-full h-full' />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ChoosePage
