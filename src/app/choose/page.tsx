import BackHeading from '@/components/BackHeading'
import Heading from '@/components/Heading'
import Image from 'next/image'

import React from 'react'

const ChoosePage = () => {
    const choose_data = [
        'Experienced and licensed professionals',
        'Uncompromising quality & attention to detail',
        'Transparent pricing with no hidden costs',
        'Timely delivery & strong project management',
        'Focused on safety and sustainability'
    ]
    return (
        <div className='w-full relative md:h-[760px] h-[1100px] flex flex-col md:py-20 sm:py-14 py-7 '>
         
                <div className='absolute w-full -z-10 h-full lg:-top-15 md:-top-10 sm:-top-5 top-0 text-center left-0 flex justify-center'>
                    <h2 className='font-bold 2xl:text-[160px] xl:text-[140px] lg:text-[110px]  text-center md:text-[84px] sm:text-[70px] xs:text-[52px] 2xs:text-[40px] text-[30px] text-black/5 uppercase'>
                        Why Choose Us
                    </h2>
                </div>
           
            <div className='w-full h-full z-10 absolute top-0 left-0 flex items-center xl:py-10 py-5 flex-col gap-6'>
                <Heading title='Why Choose Us?' />
                <div className='flex md:flex-row flex-col w-full h-full gap-3 justify-between items-center'>
                    <ul className="content md:w-1/2 w-full h-fit flex items-center justify-center xs:p-6 p-3 flex-col gap-5">
                        {choose_data.map((data, index) => (
                            <li key={index} className='lg:w-[85%] w-full h-fit py-2 text-center border-b border-foreground/80 font-medium xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs'>
                                {data}
                            </li>
                        ))}
                    </ul>
                    <div className="image md:w-1/2 w-full h-full flex relative gap-5">
                        <div className='-z-10 xl:h-[450px] xl:w-[450px] lg:w-[400px] lg:h-[400px] md:w-[320px] md:h-[320px] sm:w-[300px] sm:h-[300px] xs:w-[250px] xs:h-[250px] w-[200px] h-[200px] rounded-full bg-secondary absolute xl:right-[15%] xl:bottom-[15%] lg:right-[10%] lg:bottom-[32%] md:bottom-[45%] md:right-[15%]'></div>
                        <div className='w-full h-full absolute right-0 xl:bottom-100 lg:bottom-70 md:bottom-50 sm:bottom-100 xs:bottom-80 bottom-60'>
                            <Image src="/images/choose-image.png" alt='image' width={600} height={600} className='w-full' />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ChoosePage
