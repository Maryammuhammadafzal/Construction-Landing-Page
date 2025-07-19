import React from 'react'
import Heading from '@/components/Heading'

import Image from 'next/image';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
const ContactPage = () => {
    return (
        <div className='w-full h-auto flex justify-center items-center'>
            <div className='w-full relative md:h-[760px] flex justify-center flex-col'>

                <div className='absolute w-full -z-10 h-full xl:-top-15 lg:-top-10 md:-top-10 sm:-top-5 top-0 text-center left-0 flex justify-center'>
                    <h2 className='font-bold 2xl:text-[120px] xl:text-[105px] lg:text-[84px]  text-center md:text-[64px] sm:text-[50px] xs:text-[36px] 2xs:text-[28px] text-[22px] text-black/5 uppercase'>
                        Contact Us
                    </h2>
                </div>

                <div className='flex flex-col gap-10 justify-center lg:py-10 py-6 mx-auto items-center lg:w-[90%] w-full lg:px-0 px-3  h-auto'>
                    <div className='sm:max-w-4xl text-center'>
                        <Heading title='Contact Us' />
                    </div>

                    <div className='flex md:flex-row w-full md:pt-10 pt-5 h-auto flex-col md:gap-4 gap-8 justify-center items-center'>
                        <div className='md:w-[60%] sm:w-[70%] xs:w-[90%] w-full h-full flex justify-center items-center md:order-1 order-2'>
                            <Image src='/images/contact-image.jpg' alt='image' width={400} height={490} className='rounded-2xl w-full h-[492px]' />
                        </div>

                        <div className='md:w-[40%] sm:w-[70%] xs:w-[90%] w-full h-full items-center justify-center flex flex-col gap-4 md:order-2 order-1'>
                            <div className='w-full h-auto flex flex-col gap-2'>
                                <h3 className='font-bold lg:text-3xl md:text-xl sm:text-lg text-start text-sm'>Phone:</h3>
                                <p className='font-medium lg:text-lg md:text-base sm:text-sm text-xs flex xs:items-center xs:flex-row flex-col text-[#525252] sm:gap-2 gap-1 '>[Your Phone Number]</p>
                            </div>
                            <div className='w-full h-auto flex flex-col gap-2'>
                                <h3 className='font-bold lg:text-3xl md:text-xl sm:text-lg text-start text-sm'>Email:</h3>
                                <p className='font-medium lg:text-lg md:text-base sm:text-sm text-xs flex xs:items-center xs:flex-row flex-col text-[#525252] sm:gap-2 gap-1 '>info@[yourdomain].com</p>
                            </div>
                            <div className='w-full h-auto flex flex-col gap-2'>
                                <h3 className='font-bold lg:text-3xl md:text-xl sm:text-lg text-start text-sm'>Office Location: </h3>
                                <p className='font-medium lg:text-lg md:text-base sm:text-sm text-xs flex xs:items-center xs:flex-row flex-col text-[#525252] sm:gap-2 gap-1 '>[Your Address]</p>
                            </div>
                            <div className='w-full h-auto flex flex-col gap-3'>
                                <h3 className='font-bold lg:text-3xl md:text-xl sm:text-lg text-start text-sm'>Follow us on social media:  </h3>
                                <div className='flex gap-4 w-full h-fit lg:text-3xl md:text-2xl text-xl'>
                                    <FaFacebook />
                                    <FaXTwitter />
                                    <FaLinkedin />
                                    <FaInstagram />
                                    <FaWhatsapp />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage
