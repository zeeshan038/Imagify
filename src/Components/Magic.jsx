import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Magic = () => {
  return (
    <div
    className='pd-16 text-center'
    >
        <h1 className='text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold
        text-neutral-800 py-6 md:py-16 '>See the magic. Try now</h1>
     <Link to={'/result'}>
     <button
                className="inline-flex items-center gap-2 px-12 py-3 rounded-full
                bg-black text-white m-auto hover:scale-105 transition-all duration-500"
            >
                Genrate Images
                <img src={assets.star_group} alt="" className="h-6" />
            </button>
     </Link>
    </div>
  )
}

export default Magic