import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Heading from '@/components/Heading'
import { Button } from '@/components/ui/button';
import Image from 'next/image';
const TestimonialPage = () => {
    const project_data = [
        {
            title: "The Horizon Residence",
            subtitle: "Modern family home with eco-friendly features.",
            content:
                "A thoughtfully designed smart residence focused on sustainability, with solar panels, green roofing, and energy-efficient layouts. Ideal for families seeking comfort with minimal environmental impact.",
        },
        {
            title: "Skyline Executive Tower",
            subtitle: "Luxury offices in the heart of the city.",
            content:
                "Premium commercial spaces for forward-thinking businesses. The tower includes smart access, coworking zones, and skyline views designed to inspire creativity and productivity.",
        },
        {
            title: "Tranquil Villas",
            subtitle: "Private villas surrounded by nature.",
            content:
                "Modern, minimalistic villas designed for peace and relaxation. Located in a green belt, these villas combine nature with luxury living and are perfect for weekend getaways or rental investments.",
        },
        {
            title: "Urban Loft Studios",
            subtitle: "Compact, stylish living for young professionals.",
            content:
                "Efficiently designed open-plan lofts with high-speed connectivity, communal rooftops, and shared workspaces. Urban Loft Studios redefine affordable modern living.",
        },
    ];

    return (
        <div className='w-full h-auto flex justify-center items-center md:py-20 sm:py-14 py-7'>
            <div className='w-full relative h-[760px] flex flex-col'>

                <div className='absolute w-full -z-10 h-full xl:-top-15 lg:-top-10 md:-top-10 sm:-top-5 top-0 text-center left-0 flex justify-center'>
                    <h2 className='font-bold 2xl:text-[120px] xl:text-[105px] lg:text-[84px]  text-center md:text-[64px] sm:text-[50px] xs:text-[36px] 2xs:text-[28px] text-[22px] text-black/5 uppercase'>
                        Testimonials
                    </h2>
                </div>

                <div className='flex flex-col gap-10 justify-center lg:py-10 py-6 items-center w-[90%] h-auto'>
                    <div className='sm:max-w-4xl text-center'>
                        <Heading title='Testimonials' />
                    </div>

                    <div className='flex md:flex-row w-full h-auto flex-col gap-4 justify-center items-center'>
                        <div className='w-1/2 h-auto flex flex-col gap-6'>
                            <div className='w-full flex gap-3'>
                                <div className="profile w-[130px] h-full flex justify-center items-center">
                                    <Image src='/images/client-image1.png' alt='image' width={120} height={120} className='rounded-full' />
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <h3 className='text-3xl font-medium'>Sarah & David M.</h3>
                                    <p className='text-xl font-medium w-xs'>"They built our dream home with care and professionalism. We couldn’t be happier!"</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-1/2 h-full flex justify-center items-center'>
                            <Image src='/images/testimonial-image.jpg' alt='image' width={400} height={500} className='rounded-2xl' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialPage
