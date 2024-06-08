import React from 'react'

export const TransparentBtn = ({btnLabel,btnLink}) => {
  return (
    <>
    <a href={btnLink} className='text-primary font-semibold'>{btnLabel}</a>
    </>
  )
}

