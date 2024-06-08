
import React from 'react';
import { SquarePrimaryBtn } from '../../UI/SquarePrimaryBtn';

export const Profile = () => {
  const continueBtn = ['Continue','/Upload-Picture']
  return (
    <form action="submit" className='relative flex h-[130vh] items-center justify-center' id='profile'>
    <div className='relative z-[1] flex flex-col mx-auto text-center px-8 py-10 shadow-lg space-y-6 bg-white/65 rounded-lg' >
      <h1 className='text-3xl font-medium mb-5'>Your Profile</h1>
      <p className='text-left text-sm font-bold'>Your Information</p>
      <input type="text" placeholder='First Name' className='bg-transparent border-[1.5px] rounded-lg p-2 border-gray-500  outline-none' required />
      <input type="text" placeholder='Last Name' className='bg-transparent border-[1.5px] rounded-lg p-2 border-gray-500  outline-none' required/>
      <input type="date" placeholder='Date Birth' className='bg-transparent border-[1.5px] rounded-lg p-2 border-gray-500  outline-none' required />
      <select  placeholder='Gender' name="" className='bg-transparent border-[1.5px] rounded-lg p-2 border-gray-500  outline-none' id="">
        <option value="">Male</option>
        <option value="">Female</option>
        <option value="">Other</option>
      </select>
      <input type="tel" placeholder='Mobile Number' className='bg-transparent border-[1.5px] rounded-lg p-2 border-gray-500  outline-none' name="" id="" />
      <p className='text-left text-sm font-bold'>Home Address</p>
      <input type="text" placeholder='Street Address' className='bg-transparent border-[1.5px] rounded-lg p-2 border-gray-500  outline-none' required />
      <input type="text" placeholder='City' className='bg-transparent border-[1.5px] rounded-lg p-2 border-gray-500  outline-none' required/>
      <input type="text" placeholder='Zip Code' className='bg-transparent border-[1.5px] rounded-lg p-2 border-gray-500  outline-none ' required />
      <SquarePrimaryBtn 
      btnLabel={continueBtn[0]}
      btnLink={continueBtn[1]}/>
    </div>
    <div className="absolute top-3 left-4 z-0 bg-primary w-[180px] h-[180px] rounded-full blur-3xl opacity-60"></div>
    <div className="absolute top-30 right-0 bg-primary w-[240px] h-[240px] rounded-full blur-3xl opacity-60"></div>
    <div className="absolute bottom-0 right-0 bg-primary w-24 h-24 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 left-0 bg-primary w-[150px] h-[150px] rounded-full blur-3xl opacity-60"></div>
    
  </form>
  )
}

