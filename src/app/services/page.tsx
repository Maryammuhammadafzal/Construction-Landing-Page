import BackHeading from '@/components/BackHeading'
import Heading from '@/components/Heading'
import Image from 'next/image'
import React from 'react'

const ServicesPage = () => {

    const service_data = [
        {
            title: 'Residential Construction',
            description: 'Create the home you’ve always dreamed of — custom-built with precision and care. From single-family homes to luxury estates, we craft living spaces tailored to your needs and style.',
            image: '/images/service-image1.jpg',
            color: '#EAA1B7'
        },
        {
            title: 'Commercial Construction',
            description: 'Build a space that reflects your business’s strength and professionalism. Whether it’s offices, retail outlets, or hospitality, we deliver functional and inspiring commercial environments.',
            image: '/images/service-image2.jpg',
            color: '#2D8698'
        },
        {
            title: 'Industrial & Infrastructure',
            description: 'Large-scale projects demand expertise and efficiency. We specialize in warehouses, factories, and infrastructural developments with robust planning and execution.',
            image: '/images/service-image3.jpg',
            color: '#D37513'
        },
        {
            title: 'Renovation & Remodeling',
            description: 'Breathe new life into existing spaces. Our team revitalizes homes and buildings while preserving their character and charm.',
            image: '/images/service-image1.jpg',
            color: '#CEB381'
        },
        {
            title: 'Design & Planning',
            description: 'Not just builders — we also assist with creative design, architectural planning, and obtaining permits, ensuring a seamless start-to-finish process.',
            image: '/images/service-image1.jpg',
            color: '#48402A'
        },
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
                       {
                        service_data.map(()=> {})
                       }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesPage
