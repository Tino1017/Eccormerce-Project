import React from 'react'

export const CategoriesCard = ({categoryImage,categoryLabel}) => {
  return (
    <>
     <div className='relative rounded-xl hover:shadow-lg  hover:scale-105 duration-500 ease-in-out' >
        <img src={categoryImage}  className='w-[260px] md:w-max-[340px]' alt="Category Images" />
        <div className='absolute top-4 left-16 '>
            {categoryLabel}
        </div>
    </div>
    </>
   
  )
}

