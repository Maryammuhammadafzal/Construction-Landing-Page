import BackHeading from '@/components/BackHeading'
import { ArrowUpRight } from 'lucide-react'
import React from 'react'

const AboutPage = () => {
    return (
        <div className='w-full min-h-screen flex justify-center items-center'>
            <div className='w-full h-full relative flex justify-center items-center'>
                <div className='absolute w-full h-[300px] top-50 left-0 flex justify-center items-center'>
                    <BackHeading title='About Us' />
                </div>
                <div className='w-full h-full flex md:flex-row flex-col gap-3'>
                    <div className='w-1/2 h-full'>
                    </div>
                    <div className='w-1/2 h-full flex justify-center items-center'>
                        <div className='w-[410px] h-[580px] flex justify-center items-center group relative overflow-hidden transition-colors'>
                            <div className='w-full h-full relative rounded-[40px] bg-cover bg-center' style={{ backgroundImage: `url('/images/about-image.jpg')` }}>
                                <div className='overlay w-full h-full bg-black/30 absolute top-0 left-0 rounded-[40px]'></div>
                                <div className='w-full h-full absolute top-0 left-0 pl-5 z-20 flex flex-col justify-between gap-3'>
                                    <div className='flex flex-col gap-3'>
                                        <h3 className='font-bold text-5xl text-primary uppercase pt-10'>
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
