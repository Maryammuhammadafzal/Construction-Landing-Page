import BackHeading from '@/components/BackHeading'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const AboutPage = () => {
    return (
        <div className='w-full min-h-screen flex justify-center items-center'>
            <div className='w-full h-full relative flex md:justify-center items-center'>
                <div className='absolute w-full xs:h-[300px] h-[100px] xl:top-40 lg:top-30 md:top-20 top-20 left-0 flex justify-center items-center'>
                    <BackHeading title='About Us' />
                </div>
                <div className='w-full h-full flex md:flex-row justify-center md:items-center items-start flex-col gap-3'>
                    <div className='md:w-[60%] sm:w-[80%] w-full h-full relative flex justify-center items-center'>
                        <div className='image w-full h-full'>
                            <Image src='/images/about-content-image.png' alt='image' width={500} height={500} className='w-full' />
                        </div>
                        <div className="content absolute xl:top-80 lg:top-70 md:top-60 max-w-lg z-30 gap-2 lg:left-10 left-3 flex flex-col">
                            <h3 className='lg:text-6xl text-5xl font-bold'>About Us</h3>
                            <p className='lg:text-xl md:text-lg sm:text-base text-sm'>At [Your Company Name], we’re more than builders — we’re your partners in turning visions into reality. With decades of experience in residential, commercial, and industrial construction, we pride ourselves on our commitment to quality, safety, and client satisfaction.
                                From groundbreaking to ribbon-cutting, we stay by your side to ensure every project is completed on time, on budget, and beyond expectations.</p>
                        </div>
                    </div>
                    <div className='md:w-[40%] w-full pr-3 h-full flex justify-center items-center'>
                        <div className='lg:w-[410px] rounded-[40px] lg:h-[580px] md:w-[380px] h-[520px] xs:w-[420px] w-full flex justify-center items-center group relative overflow-hidden transition-colors'>
                            <div className='w-full h-full relative rounded-[40px] bg-cover bg-center' style={{ backgroundImage: `url('/images/about-image.jpg')` }}>
                                <div className='overlay w-full h-full bg-black/30 absolute top-0 left-0 rounded-[40px]'></div>
                                <div className='w-full h-full absolute top-0 left-0 pl-5 z-20 flex flex-col justify-between gap-3'>
                                    <div className='flex flex-col gap-3'>
                                        <h3 className='font-bold flex flex-col lg:text-5xl text-[40px] lg:px-0 pr-3 lg:leading-12 leading-11 text-primary uppercase pt-10'>
                                            Ready to <span className='text-secondary group-hover:text-primary transition-transform duration-300 ease-in-out'> build</span> something <span className='text-secondary group-hover:text-primary transition-transform duration-300 ease-in-out'> extra </span>
                                            ordinary?
                                        </h3>
                                        <p className='text-xl font-medium text-primary max-w-xs'>Let’s talk about your project today.</p>
                                    </div>
                                    <div className='w-full relative h-auto flex justify-end'>
                                        <div className='absolute bottom-0 z-40 w-[158px] text-primary h-[158px] rounded-tl-[100px] rounded-br-[40px] bg-secondary flex justify-center items-center'>
                                            <ArrowUpRight size={50} />
                                        </div>
                                    </div>
                                </div>
                                <div className='absolute bottom-0 right-0 z-0 w-[158px] text-primary group-hover:scale-[10] transition-transform duration-700 ease-in-out h-[158px] rounded-tl-[100px] rounded-br-[40px] bg-secondary flex justify-center items-center'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage
