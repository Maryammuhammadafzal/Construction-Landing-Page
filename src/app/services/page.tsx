import BackHeading from '@/components/BackHeading'
import Heading from '@/components/Heading'
import Image from 'next/image'
import React from 'react'

const ServicesPage = () => {

    const service_data = [
        
    ]
    return (
        <div className='w-full min-h-screen flex md:py-20 sm:py-14 py-7 justify-center items-center'>
            <div className='w-full h-full relative flex md:justify-center items-center'>
                <div className='absolute w-full xs:h-[300px] h-[100px] xl:top-40 lg:top-30 md:top-20 top-20 left-0 flex justify-center items-center'>
                    <BackHeading title='Services' />
                </div>
                <div className='w-full h-full flex  justify-center items-center flex-col gap-6'>
                    <Heading title='Services' />

                    <div className='flex flex-col gap-3 h-auto w-[95%]'>
                        <div className='w-full grid max-h-[350px] grid-cols-3 h-auto gap-4'>
                            <div className="image col-span-2 w-full flex justify-center items-center rounded-[40px]">
                                <Image src='/images/service-image1.jpg' alt='image' width={500} height={500} className='w-full h-full rounded-[40px] object-cover' />
                            </div>
                            <div className='w-full h-full bg-[#EAA1B7] rounded-[40px] px-10 py-10 flex flex-col justify-center gap-20 items-center'>
                                <div className='flex flex-col gap-3 h-auto w-full'>
                                    <h4 className='text-[40px] text-primary font-bold leading-11'>Residential Construction</h4>
                                    <p className='text-primary font-medium text-base'>
                                        Create the home you’ve always dreamed of — custom-built with precision and care. From single-family homes to luxury estates, we craft living spaces tailored to your needs and style.
                                    </p>
                                </div>
                                <div className='w-full h-[100px] flex justify-center items-center'>
                                    <Image src='/images/arrow.png' alt='image' width={500} height={500} className='w-full' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesPage
