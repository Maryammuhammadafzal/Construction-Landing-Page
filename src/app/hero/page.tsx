'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import CountUp from 'react-countup'

const HeroPage = () => {
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className="bg w-full h-full flex justify-center items-center rounded-bl-2xl rounded-br-2xl bg-cover bg-center" style={{ backgroundImage: `url('/images/hero-image.jpg')` }}>
                <div className='w-full h-full flex justify-center items-center relative text-primary flex-col gap-6'>
                    <h1 className='sm:text-5xl xs:text-4xl text-3xl text-center font-extrabold'>
                        Building Your Vision
                    </h1>
                    <p className='font-medium max-w-lg text-center sm:text-base text-sm'>We bring your ideas to life with craftsmanship, innovation, and reliability — delivering excellence in every brick we lay.</p>
                    <Button className='bg-secondary px-8 py-3'>Get a Free Quote</Button>
                    <div className='absolute right-8 bottom-5 md:w-[330px] md:h-[170px] sm:w-[280px] sm:h-[140px] w-[250px] h-[120px] flex bg-white p-5 gap-3 rounded-2xl flex-col justify-end'>
                        <div className=' flex gap-2 items-end'>
                            <p className='md:text-6xl sm:text-5xl text-4xl font-bold text-secondary flex'>
                                <CountUp
                                    end={50}
                                    duration={5} />+
                            </p>
                            <Image src='/images/building-icon.png' alt='icon' width={63} height={63} className='sm:w-[63px] sm:h-[63px] w-[45px] h-[45px]' />
                        </div>
                        <p className='text-foreground md:text-2xl sm:text-xl text-lg font-bold'>Project Count Label</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroPage
