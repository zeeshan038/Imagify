import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Result = () => {
  const [image, setImage] = useState(assets.sample_img_1);
  const [isImageLoaded, setIsImageLoadeded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const handleSubmit = async()=>{}
  return (
    <form onSubmit={handleSubmit} className='flex flex-col min-h-[90vh] justify-center items-center' >
      <div>
        <div className='relative'>
          <img src={image} alt="" className='max-w-sm rounded' />
          <span 
            className={`absolute bottom-0 left-0 h-1 bg-blue-500 
            ${loading ? 'w-full transition-all duration-[10s]' : 'w-8'}`} />
        </div>
        <p className={`${!loading ? 'hidden' : ''} `}>Loading......</p>
      </div>
      {
        !isImageLoaded && (
          <div className='flex w-full max-w-xl bg-neutral-500 text-white mt-10 text-sm p-0.5 rounded-full'>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text" placeholder='Describe what you want to genrate'
              className='flex-1 bg-transparent outline-none ml-8 max-sm:w-20' />
            <button type='submit'
              className='bg-zinc-900 px-10 sm:px-16 py-3 rounded-full text-white'>
              Genrate
            </button>
          </div>
        )
      }
      {
        isImageLoaded && (
          <div className='flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full'>
            <p onClick={() => { setIsImageLoadeded(false) }}
              className='bg-transparent border border-zinc-900 text-black px-8 py-3
        rounded-full cursor-pointer'>Genrate Another</p>
            <a href={image} download
              className='bg-zinc-900 px-10 py-3 rounded-full cursor-pointer'>Download</a>
          </div>
        )
      }
    </form>
  )
}

export default Result