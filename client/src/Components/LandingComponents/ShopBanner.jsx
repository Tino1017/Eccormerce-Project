import React from 'react';
import shopBag from '../../Pages/Landing/Assets/shopBag.svg'


export const ShopBanner = ({shopName,products}) => {
  return (
    <div className='hover:scale-105 inline-flex shadow-xl  space-x-7 py-3 pl-5 pr-24 mr-5  bg-white/5 rounded-xl items-center'>
        <div className='w-18 h-18 rounded-full flex justify-center items-center p-5' style={{backgroundColor:'#E6E6E6'}}><img src={shopBag} width={35} className='flex justify-center items-center' alt='Bag Icon'/>
        </div>
        <div>
            <p className='font-bold'>{shopName}</p>
            <p className='opacity-80'>{products}</p>
        </div>

    </div>
  )
}

