import React from 'react'
import Heading from '@/components/Heading'
import Image from 'next/image';
const TestimonialPage = () => {
    const testimonial_data = [
        {
            name: "Sarah & David M.",
            image: "/images/client-image1.png",
            testimonial:
                '"They built our dream home with care and professionalism. We couldn’t be happier!"',
        },
        {
            name: "Daniel K., Business Owner",
            image: "/images/client-image2.png",
            testimonial:
                '"Our new office building has impressed clients and boosted team morale — highly recommend!"',
        },
        {
            name: "Ayesha R., Property Developer",
            image: "/images/client-image3.png",
            testimonial:
                '"On time, on budget, and great quality. They made the entire process stress-free."',
        },
    ];

    return (
        <div className='w-full h-auto flex justify-center items-center'>
            <div className='w-full relative md:h-[760px] flex flex-col'>

                <div className='absolute w-full -z-10 h-full xl:-top-15 lg:-top-10 md:-top-10 sm:-top-5 top-0 text-center left-0 flex justify-center'>
                    <h2 className='font-bold 2xl:text-[120px] xl:text-[105px] lg:text-[84px]  text-center md:text-[64px] sm:text-[50px] xs:text-[36px] 2xs:text-[28px] text-[22px] text-black/5 uppercase'>
                        Testimonials
                    </h2>
                </div>

                <div className='flex flex-col gap-10 justify-center lg:py-10 py-6 mx-auto items-center lg:w-[90%] w-full lg:px-0 px-3  h-auto'>
                    <div className='sm:max-w-4xl text-center'>
                        <Heading title='Testimonials' />
                    </div>

                    <div className='flex md:flex-row w-full pt-10 h-auto flex-col md:gap-4 gap-8 justify-center items-center'>
                        <div className='md:w-1/2 sm:w-[70%] xs:w-[90%] w-full h-auto flex flex-col gap-10'>
                            {testimonial_data.map((testimonial, index) => (
                                <div key={index} className='w-full flex gap-3'>
                                    <div className="profile w-[130px] h-full flex justify-center items-center">
                                        <Image src={testimonial.image} alt='image' width={120} height={120} className='rounded-full' />
                                    </div>
                                    <div className='flex flex-col max-xs:max-w-2xs gap-3'>
                                        <h3 className='xl:text-3xl lg:text-2xl sm:text-xl xs:text-lg:text-base font-medium'>{testimonial.name}</h3>
                                        <p className='xl:text-xl lg:text-lg sm:text-base xs:text-sm text-xs font-medium xs:w-xs'>{testimonial.testimonial}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='md:w-1/2 sm:w-[70%] xs:w-[90%] w-full h-full flex justify-center items-center'>
                            <Image src='/images/testimonial-image.jpg' alt='image' width={400} height={500} className='rounded-2xl' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialPage
