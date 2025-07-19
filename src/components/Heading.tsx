import React from 'react'


type HeadingProp = {
    title: string,
}

const Heading = ({title}: HeadingProp) => {
    return (
        <h3 className='lg:text-6xl sm:text-5xl xs:text-4xl text-3xl text-secondary font-bold uppercase'>{title}</h3>

    )
}

export default Heading
