import React from 'react'

const Footer = () => {
  return (
    <div>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-10 my-10 mt-20 text-sm'>
      <div className="">
      <h1 className='text-2xl font-bold m-2 text-orange-600'>
      HK BRAND
      </h1>
      <p className='text-blacck-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div>
      <p className="text-xl  mb-5 font-bold  text-orange-600">COMPANY</p>
      <ul className='flex flex-col gap-1 text-black-700'>
      <li>HOME</li>
      <li>ABOUT US</li>
      <li>DELIVERY</li>
      <li>PRIVACY POLICY</li>
      </ul>
      </div>
      <div>
      <p  className="text-xl mb-5 font-bold  text-orange-600">GET IN TOUCH</p>
      <ul className='flex flex-col gap-1 text-black-700'>
      <li>
      +92 325 910 917 6
      </li>
      <li>hamzashakir22@gmail.com</li>
      </ul>
      </div>
    </div>
<div className='text-center'>
<hr />
<p className='py-5 text-sm text-center'>Copyright 2025@ hk.com - All Rights Reserved</p>
</div>
    </div>
  )
}

export default Footer