import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightArrowLeft, faCheck, faPhone } from "@fortawesome/free-solid-svg-icons";

const OurPolicy = () => {
  return (
    <div className='p-5 flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center'>

      <div className="">
      <FontAwesomeIcon className="w-12 m-auto mb-5 text-3xl" icon={faArrowRightArrowLeft} />
      <p className='font-semibold'>Easy Exchange Policy</p>
      <p className='text-gray-400'>We Offer Hassle Free Exchnage Policy</p>
      </div>

      <div className="">
      <FontAwesomeIcon className="w-12 m-auto mb-5 text-3xl" icon={faCheck} />
      <p className='font-semibold'>7 Days Return Policy</p>
      <p className='text-gray-400'>We Provide 7 days Return Policy</p>
      </div>

      <div className="">
      <FontAwesomeIcon className="w-12 m-auto mb-5 text-3xl" icon={faPhone} />
      <p className='font-semibold'>Best Custmore Support</p>
      <p className='text-gray-400'>We Provide 24/7 Custmore Support</p>
      </div>
    </div>
  )
}

export default OurPolicy