import React from 'react'

type BackHeadingProp = {
    title: string,
}

const BackHeading = ({title}: BackHeadingProp) => {
  return (
    <h2 className='font-bold text-[263px] text-black/5 uppercase'>
      {title}
    </h2>
  )
}

export default BackHeading
