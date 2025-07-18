import React from 'react'


type HeadingProp = {
    title: string,
}

const Heading = ({title}: HeadingProp) => {
    return (
        <h3 className='lg:text-6xl text-5xl text-secondary font-bold'>{title}</h3>

    )
}

export default Heading
