import React from 'react'
import {BsCircleFill} from 'react-icons/bs'


function Footer() {
  return (
    <div className='mb-10'>
    <div className='border-t-4 border-black  md:h-[400px] lg:h-[250px] mt-10 ' > 
    <h1 className='text-[25px] text-black font-bold mb-5 pt-10 text-justify flex gap-4'> <BsCircleFill className='text-red-400'/> Contacts </h1>
    
    <div className='flex gap-12'> 
    <a className=' text-[20px] text-black text-justify hover:text-red-400' href='mailto:stephaniembaabu@gmail.com'> Email </a> 
    
    <a className="text-[20px] text-black text-justify hover:text-red-400 " href="https://www.linkedin.com/in/stephanie-wambui/"
    > LinkedIn </a>
    
    <a className='text-[20px] text-black text-justify hover:text-red-400' href='https://github.com/Stephooooo' > GitHub</a>
    
    </div>
    </div>

</div>
  )
}

export default Footer