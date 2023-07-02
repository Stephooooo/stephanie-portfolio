import React from 'react'
import {BsCircleFill} from 'react-icons/bs';
import {HiOutlineMail } from 'react-icons/hi';
import {FaLinkedinIn} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import {RiBasketballLine} from 'react-icons/ri';



function Footer() {
  return (
    <div className='mb-10'>
    <div className='border-t-4 border-black  md:h-[400px] lg:h-[250px] mt-10 ' > 
    <h1 className='text-[25px] text-black font-bold mb-5 pt-10 text-justify flex gap-4 '> <BsCircleFill className='text-red-400 animate-pulse'/> Contacts </h1>
    
    <div className='md:block lg:flex space-y-4 lg:space-y-0 md:space-x-0 lg:space-x-12 '> 

    <div className='flex  space-x-2'>
    <HiOutlineMail className='h-7 w-7'/>
    <a className=' text-[20px] text-black text-justify hover:text-red-400' href='mailto:stephaniembaabu@gmail.com'> Email </a> 
    </div>
    
    <div className='flex  space-x-2'>
    <FaLinkedinIn className='h-7 w-7'/>
    <a className="text-[20px] text-black text-justify hover:text-red-400 " href="https://www.linkedin.com/in/stephanie-wambui/"
    > LinkedIn </a>
    </div>
    
    <div className='flex  space-x-2'>
    <FaGithub className='h-7 w-7'/>
    <a className='text-[20px] text-black text-justify hover:text-red-400' href='https://github.com/Stephooooo' > GitHub</a>
    </div>

    <div className='flex  space-x-2'>
    <RiBasketballLine className='h-7 w-7'/>
    <a className='text-[20px] text-black text-justify hover:text-red-400' href='https://dribbble.com/StephanieMbaabu' > Dribble</a>
    </div>

    
    </div>
    </div>

</div>
  )
}

export default Footer