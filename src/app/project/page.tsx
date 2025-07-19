import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Heading from '@/components/Heading'
const ProjectPage = () => {
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
                    <h2 className='font-bold 2xl:text-[120px] xl:text-[105px] lg:text-[84px]  text-center md:text-[84px] sm:text-[70px] xs:text-[52px] 2xs:text-[40px] text-[30px] text-black/5 uppercase'>
                        Projects Showcase
                    </h2>
                </div>

                <div className='flex flex-col gap-10 justify-center lg:py-10 py-6 items-center w-full h-auto'>
                    <div className='max-w-4xl text-center'>
                        <Heading title='We let our work speak for itself' />
                    </div>

                    <Accordion type="single" collapsible className='lg:w-[90%] w-[99%]'>
                        {project_data.map((project, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className='border-b-0 md:py-2 w-full '>
                                <AccordionTrigger><p className='font-medium lg:text-lg md:text-base sm:text-sm text-xs flex xs:items-center xs:flex-row flex-col text-[#525252] sm:gap-2 gap-1 '><span className='font-bold lg:text-3xl md:text-xl sm:text-lg text-start text-sm'>{project.title} </span> <span className='xs:block hidden'>— </span> {project.subtitle}</p></AccordionTrigger>
                                <AccordionContent>
                                    {project.content}
                                </AccordionContent>
                            </AccordionItem>
                        ))
                        }
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default ProjectPage
