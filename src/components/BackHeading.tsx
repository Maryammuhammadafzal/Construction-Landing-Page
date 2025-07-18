import React from 'react'

type BackHeadingProp = {
    title: string,
}

const BackHeading = ({title}: BackHeadingProp) => {
  return (
    <h2 className='font-bold 2xl:text-[263px] xl:text-[230px] lg:text-[180px] md:text-[140px] sm:text-[110px] xs:text-[84px] 2xs:text-[60px] text-[48px] text-black/5 uppercase'>
      {title}
    </h2>
  )
}

export default BackHeading
