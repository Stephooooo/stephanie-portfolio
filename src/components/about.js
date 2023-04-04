import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import {BsCircleFill} from 'react-icons/bs'


function About() {
  return (
    <div className='px-5'>
    <Navbar/>
    <div> 

    <div className='mb-10'>
    <h1 className='font-extrabold text-justify text-black text-[50px] mb-5 md:mt-5 lg:mt-20'> Hello again ! </h1>
    <h1 className='text-black text-[20px] mb-5  text-justify'> 
    I was born and raised in Nairobi, Kenya. After graduating from Strathmore University with a Diploma in International Relations,
    I began my career in Marketing where I realised my passion for Product Design. I then joined a Software Development Apprenticeship program where I acquired Frontend Development skills and UI/UX Design skills. I am also an Entrepreneur. I own a small handmade gifting business called 

    <a className='text-red-400 border-b-1 border-red-400' href=' https://www.instagram.com/teesnsugar/'> Tees&Sugar </a> . </h1>

<a className= ' text-black text-[20px] font-bold border-2 border-black rounded-full px-2 py-2 hover:text-red-400 hover:border-red-400'  href='https://drive.google.com/file/d/1PHIvagyP-8SMspWapyGbJOfL9b2TxlgQ/view?usp=share_link'> My Resume</a> 
</div>

    <div> 
    <h1 className='font-extrabold text-black text-[25px] text-justify flex gap-4 mb-5'> <BsCircleFill className='text-red-400'/> My Skills  </h1>

<div > 

<h1 className='text-black text-[20px] font-bold ' > UI/UX and Product design </h1> <br/> 
<h1 className='font-normal text-[15px] bg-red-100 rounded-full px-1 py-1'> Prototyping </h1>
 <h1 className='font-normal text-[15px] bg-red-100 rounded-full px-1 py-1'> Low and high fidelity mock-ups</h1>
  <h1 className='font-normal text-[15px] bg-red-100 rounded-full px-1 py-1'> UX research </h1> 
  <h1 className='font-normal text-[15px] bg-red-100 rounded-full px-1 py-1'> Sprint planning </h1> 

<h1 className='text-black text-[20px] font-bold mt-5' > Full Stack Development</h1> 
<h1 className='font-normal text-[15px] bg-red-100 rounded-full px-1 py-1'> HTML </h1>
 <h1 className='font-normal text-[15px] bg-red-100 rounded-full px-1 py-1'> CSS </h1>
  <h1 className='font-normal text-[15px] bg-red-100 rounded-full px-1 py-1'> JavaScript </h1> 
  <h1 className='font-normal text-[15px] bg-red-100 rounded-full px-1 py-1'> ReactJS </h1> 
  <h1 className='font-normal text-[15px] bg-red-100 rounded-full px-1 py-1'> NodeJS </h1> 
  <h1 className='font-normal text-[15px] bg-red-100 rounded-full px-1 py-1'> REST APIs</h1> 

<h1 className='text-black text-[20px] font-bold mt-5 ' > Graphic design and Content Creation</h1> 
<h1 className='font-normal text-[15px] bg-red-100 rounded-full px-1 py-1'> Figma </h1>
 <h1 className='font-normal text-[15px] bg-red-100 rounded-full px-1 py-1'> Canva </h1>
  <h1 className='font-normal text-[15px] bg-red-100 rounded-full px-1 py-1'> Adobe Creative Suite </h1> 
  <h1 className='font-normal text-[15px] bg-red-100 rounded-full px-1 py-1'> SEO </h1> 
  <h1 className='font-normal text-[15px] bg-red-100 rounded-full px-1 py-1'> Social Media Marketing </h1> 

</div>
</div>
</div>

<Footer/>
</div>


    
    
    
  
  )
}

export default About
