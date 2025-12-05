import React from 'react'

const NewsLetterBox = () => {

const onSubmitHandler = (e) => {
    event.preventDefault();
}

  return (
    
    
    <div className='text-center mt-10'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe Now & Get 20% Off</p>
      <p className='text-gray-400 mt-3'>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores ad aperiam deserunt, modi consequuntur optio ex minus sit .
      </p>
      <form onSubmitHandler={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
      <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter Your Email'/>
      <button type='submit' className='bg-orange-600 text-white font-bold text-xs px-10 py-4'>SubScribe</button>
      </form>
    </div>
  )
}

export default NewsLetterBox