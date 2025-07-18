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
            image: '/images/service-image4.jpg',
            color: '#CEB381'
        },
        {
            title: 'Design & Planning',
            description: 'Not just builders — we also assist with creative design, architectural planning, and obtaining permits, ensuring a seamless start-to-finish process.',
            image: '/images/service-image5.jpg',
            color: '#48402A'
        },
    ]
    return (
        <div className='w-full h-auto min-h-screen flex md:py-20 sm:py-14 py-10 justify-center items-center'>
            <div className='w-full h-full relative flex md:justify-center items-center'>
                <div className='absolute w-full h-auto -top-50 left-0 flex justify-center items-center'>
                    <BackHeading title='Services' />
                </div>
                <div className='w-full h-full flex items-center flex-col gap-6'>
                    <Heading title='Services' />

                    <div className='flex flex-col lg:gap-6 sm:gap-4 gap-2 lg:w-[95%] lg:px-0 px-3'>
                        {
                            service_data.map((service, index) => (
                                <div key={index} className='w-full lg:h-[430px] md:h-[400px] sm:h-[350px] xs:h-[300px] h-[610px] flex justify-center items-start '>
                                    <div className='w-full grid lg:h-[430px] md:h-[400px] sm:h-[350px] h-[300px] lg:grid-cols-3 xs:grid-cols-2 grid-cols-1 sm:gap-4 gap-2'>
                                        <div className={`image lg:col-span-2 cols-span-1 w-full lg:h-[430px] md:h-[400px] sm:h-[350px] h-[300px] flex justify-center items-center rounded-[40px] bg-center bg-cover ${index === 0 ? 'xs:order-1' : 'xs:order-2'} ${index === 2 ? 'xs:order-1' : 'xs:order-2'}  ${index === 4 ? 'xs:order-1' : 'xs:order-2'} `} style={{ backgroundImage: `url(${service.image})` }}>
                                            {/* <Image src={service.image} alt='image' width={500} height={300} className='w-full h-full rounded-[40px] object-cover' /> */}
                                        </div>
                                        <div style={{ backgroundColor: service.color }} className={`w-full lg:h-[430px] md:h-[400px] sm:h-[350px] h-[300px] rounded-[40px] sm:px-6 px-4 py-10 flex flex-col justify-center lg:gap-20 md:gap-16 sm:gap-12 gap-8 items-center ${index === 0 ? 'xs:order-2' : 'xs:order-1'} ${index === 2 ? 'xs:order-2' : 'xs:order-1'} ${index === 4 ? 'xs:order-2' : 'xs:order-1'}`}>
                                            <div className='flex flex-col gap-3 h-auto w-full'>
                                                <h4 className='lg:text-[40px] md:text-4xl sm:text-3xl text-2xl text-primary font-bold md:leading-11 sm:leading-9 leading-7'>{service.title}</h4>
                                                <p className='text-primary font-medium sm:text-base text-sm'>
                                                    {service.description}
                                                </p>
                                            </div>
                                            <div className='w-full h-[100px] px-3 flex justify-center items-center'>
                                                <Image src='/images/arrow.png' alt='image' width={500} height={500} className='w-full' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesPage
