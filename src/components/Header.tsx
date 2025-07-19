'use client'
import { MenuIcon, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const nav_data = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'About',
            link: '/about'
        },
        {
            name: 'Services',
            link: '/services'
        },
        {
            name: 'Project',
            link: '/project'
        },
        {
            name: 'Contact Us',
            link: '/contact'
        },
    ];
    return (
        <div className={`sticky bg-secondary shadow-sm top-0 left-0 z-50 w-full h-[72px] flex gap-6 items-center`}>
            <div className='lg:w-[90%] w-full flex justify-betwwen items-center lg:px-0 md:px-2 sm:px-1 p-4 h-auto'>
                <div className='lg:min-w-md w-1/2 flex lg:justify-center lg:pl-0 pl-6 items-center '>
                    <Image src='/images/logo.png' alt='logo' width={170} height={30} />
                </div>
                <div className='lg:min-w-lg w-1/2 flex justify-end items-center text-primary'>
                    <ul className='sm:flex hidden xl:gap-10 lg:gap-10 md:gap-6 gap-3 items-center lg:text-base md:text-sm text-[13px]'>
                        {nav_data.map((data, index) => (
                            <li key={index} className='hover:font-medium'>
                                <Link href={data.link}>{data.name}</Link>
                            </li>
                        ))}
                    </ul>
                    <MenuIcon className='sm:hidden block' onClick={()=> setIsOpen(!isOpen)} />
                </div>
                <ul className={`${isOpen ? 'block' : 'hidden'} w-50 p-6  sm:hidden flex-col absolute top-0 right-0 h-screen bg-white text-secondary xl:gap-10 lg:gap-10 md:gap-6 gap-3 items-center lg:text-base md:text-sm text-[13px]`}>
                   <li className='hover:font-medium py-2 w-full justify-end flex'>
                         <X onClick={()=> setIsOpen(false)} />
                        </li>
                    {nav_data.map((data, index) => (
                        <li key={index} className='hover:font-medium py-2'>
                            <Link href={data.link}>{data.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Header