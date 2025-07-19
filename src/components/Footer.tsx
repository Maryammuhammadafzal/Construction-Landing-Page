import React from 'react'
import Heading from '@/components/Heading'

import Image from 'next/image';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';
const Footer = () => {


    return (
        <div className='w-full h-auto flex justify-center pt-20 items-center'>
            <div className='w-full relative md:h-[760px] flex justify-center flex-col'>

                <div className='absolute w-full -z-10 h-full xl:-top-15 lg:-top-10 md:-top-10 sm:-top-5 top-0 text-center left-0 flex justify-center'>
                     <h2 className='font-bold 2xl:text-[180px] xl:text-[160px] lg:text-[110px]  text-center md:text-[84px] sm:text-[70px] xs:text-[52px] 2xs:text-[40px] text-[30px] text-black/5 uppercase'>
                        Construction
                    </h2>
                </div>
                <div className='absolute w-[600px] -z-10 h-[700px] xl:-bottom-50 lg:-bottom-40 md:-bottom-30 sm:-bottom-20 bottom-10 -left-20 flex justify-center'>
                    <Image src='/images/footer-image.png' alt='image' width={600} height={700} className='' />

                </div>

                <div className='w-full h-full flex justify-end items-end flex-col gap-10'>
                    <div className='flex flex-wrap gap-6 justify-evenly w-[80%] h-auto'>
                        <div className='flex flex-col gap-3'>
                            <h3 className='text-2xl font-semibold'>Quick Links</h3>
                            <ul className='flex flex-col gap-2'>
                                <li><Link href='/'>Home</Link></li>
                                <li><Link href='/'>About Us</Link></li>
                                <li><Link href='/'>Services</Link></li>
                                <li><Link href='/'>Projects</Link></li>
                                <li><Link href='/'>Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='w-[80%] copyright h-fit flex justify-center items-center'>
                        <p>© 2021 all copyright reserved. All Rights Reserved. <Link href='/' className='underline'>Rootlet Solution</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
