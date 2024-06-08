import React from 'react'

export const ProductCard = ({productImage,productName,productPrice,productDescription,cartButton}) => {
  return (
    <>
    <div className='flex flex-col items-start px-10 space-y-5'>
        <img src={productImage} alt="Product Image" className='w-[280px]' />
        <div className=''>
        <p className='font-semibold pb-1'>{productName}</p>
        <p className='font-bold text-sm opacity-80'>R{productPrice}</p>
        <p className='max-w-xs text-sm py-5'>{productDescription}</p>
        <button  className="bg-primary py-1 px-3 text-white  rounded-2xl hover:opacity-70 active:scale-50 duration-500">Add to cart</button>
        </div>
       
    </div>
    </>
  )
}

