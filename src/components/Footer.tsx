import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
const Footer = () => {


    return (
        <div className='w-full h-auto flex justify-center pt-20 items-end'>
            <div className='w-full relative md:h-[500px] flex justify-end items-end flex-col'>

                <div className='absolute w-full -z-10 h-full xl:-top-15 lg:-top-10 md:-top-10 sm:-top-20 -top-20 text-center left-0 flex justify-center'>
                     <h2 className='font-bold 2xl:text-[180px] xl:text-[160px] lg:text-[110px]  text-center md:text-[84px] sm:text-[70px] xs:text-[52px] 2xs:text-[40px] text-[30px] text-black/5 uppercase'>
                        Construction
                    </h2>
                </div>
                <div className='absolute md:flex hidden w-[600px] -z-10 xl:h-[700px] lg:h-[600px] md:h-[500px] xl:-bottom-50 lg:-bottom-40 md:-bottom-30 sm:-bottom-40 bottom-10 -left-20 justify-center'>
                    <Image src='/images/footer-image.png' alt='image' width={600} height={700} className='' />
                </div>

                <div className='w-full h-full  flex justify-end items-end flex-col gap-10'>
                    <div className='flex flex-wrap md:gap-6 gap-10 sm:justify-evenly xl:w-[70%] lg:w-[60%] md:w-[50%] w-[95%] h-auto'>
                        <div className='flex flex-col gap-3 max-xs:w-full'>
                            <h3 className='text-2xl font-semibold '>Quick Links</h3>
                            <ul className='flex flex-col gap-2 '>
                                <li><Link href='/'>Home</Link></li>
                                <li><Link href='/about'>About Us</Link></li>
                                <li><Link href='/services'>Services</Link></li>
                                <li><Link href='/project'>Projects</Link></li>
                                <li><Link href='/contact'>Contact Us</Link></li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-3 max-xs:w-full'>
                            <h3 className='text-2xl font-semibold'>Services</h3>
                            <ul className='flex flex-col gap-2'>
                                <li><Link href='#residential'>Residential Construction</Link></li>
                                <li><Link href='#commercial'>Commercial Construction</Link></li>
                                <li><Link href='#industrial'>Industrial & Infrastructure</Link></li>
                                <li><Link href='#renovation'>Renovation & Remodeling</Link></li>
                                <li><Link href='#design'>Design & Planning</Link></li>
                            </ul>
                        </div>
                        <div className='flex max-lg:w-[90%] flex-col gap-3 max-md:w-auto max-sm:w-full'>
                            <h3 className='text-2xl font-semibold'>Policies</h3>
                            <ul className='flex flex-col gap-2'>
                                <li><Link href='/'>Privacy Policy</Link></li>
                                <li><Link href='/'>Terms & Conditions</Link></li>
                                <li><Link href='/'>Terms Of Services</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='md:w-[70%] w-full copyright h-fit flex justify-center items-center'>
                        <p className='md:text-base text-sm text-center'>© 2021 all copyright reserved. All Rights Reserved. <Link target="_blank" href='/' className='underline'>Rootlet Solution</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
