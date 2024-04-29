import React from 'react'
import Navbar from './navbar';
import Footer from './footer'
import {BsCircleFill} from 'react-icons/bs'




function Home() {
  return (
 <div className='px-5 bg-grey-100'> 
 <Navbar/>
    <div className='md:columns-1 lg:columns-2'>

    <div className='px-10'> 
    <h1 className='font-extrabold text-justify text-black text-[50px] mb-5 md:mt-5 lg:mt-20'> Hello I'm Stephanie </h1>
    <h1 className='text-black text-[20px] mb-5  text-justify'> I am a Software developer, UI/UX and graphic designer based in Kenya. I believe in building solution based products with purposeful and inclusive design.</h1> 

    <div className='border-2 border-red-400 rounded-lg bg-red-400 bg-opacity-30 mt-2 px-6 py-2 '> 
    <h1 className='text-[20px] text-black text-justify '> I am currently doing a challenge! 100 days of UI component design by <span> <a href='https://www.dailyui.co/' className='text-red-400'> Daily UI</a></span>. Follow my designs on my <span> <a className='text-red-400' href='https://dribbble.com/StephanieMbaabu'> Dribble profile</a></span> .</h1>
    </div>
   
  </div>

<div className="flex flex-wrap justify-center">
<div className="px-4 mb-5 mt-5 ">
  <img src="../img/me3.png" alt="Stephanie Wambui Mbaabu" className=" max-w-full h-auto align-middle border-none " />
</div>
</div>
</div>



<div id="projects" className='font-bold text-black text-[25px] mt-10 text-justify flex gap-4'> <BsCircleFill className='text-red-400 animate-pulse'/> Recent Projects</div>

<div className='columns-1 md:columns-1 lg:columns-2 mb-5 mt-10' >
<img src='../img/insuarance.jpg' alt='#' className='rounded-md'/> 
<br/>
<br/>
<br/>
<a className='font-bold text-black text-[20px] mt-5'> Insuarance Brokerage system <span className='font-normal text-[15px] bg-red-100 rounded-full px-1 py-1 animate-pulse'> UI/UX Design </span></a>
<p className=' text-black text-[20px] mt-5 text-justify'> This is a web application that lists all insuarance products from various companies to be able to compare prices and benefits. Consumers can also apply for a product online to ease paperwork. </p>
</div>

<div className='columns-1 md:columns-1 lg:columns-2 mb-5 mt-10' >
<img src='../img/afircaskn.png' alt='#' className='rounded-md'/> 
<br/>
<br/>
<br/>
<a className='font-bold text-black text-[20px] mt-5'> AfricaSKN <span className='font-normal text-[15px] bg-red-100 rounded-full px-1 py-1 animate-pulse'> UX and Product Design </span></a>
<p className=' text-black text-[20px] mt-5 text-justify'>  The AfricaSKN is a brand made exclusively for skincare awareness and support. Its features include an information hub where the user can learn about their skin type and which routines and products suit them, a timer that reminds the user to follow through their skincare routine through notifications, a before and after photo feature that gives the user a platform to compare their results while using a certain product and an E-commerce feature to connect the user with local suppliers of skincare products. </p>
<br/>
<br/>
<a className='border-2 text-black border-black px-2 py-2 rounded-full hover:text-red-400 hover:border-red-400' href= 'https://www.figma.com/proto/YbtKloMU4H4CaVBuHmTNiH/Untitled?node-id=2%3A2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A2'> View Prototype</a>
</div>

<div className='columns-1 md:columns-1 lg:columns-2'>
<img src='../img/wera.jpg' alt='#' className='rounded-md' /> 
<br/>
<br/>
<br/>

<a className='font-bold text-black text-[20px] mt-5'> Wera <span className='font-normal text-[15px] bg-red-100 rounded-full px-1 py-1 animate-pulse'> Full Stack Web Application </span></a>
<p className=' text-black text-[20px] mt-5 text-justify'> Wera is a web Application system that will feature a number of opportunities for the youth including Internships, Apprenticeship programs,Industrial Attachments, Career fairs and seminars; that are geared towards career development and abolition of unemployment cases due to lack of work experience. </p>
<br/>
<br/>
</div>

<div >
<div id="projects" className='font-bold text-black text-[25px] mt-10 text-justify flex gap-4'> <BsCircleFill className='text-red-400 animate-pulse'/> Graphic designs </div>

<div className='columns-1 md:columns-1 lg:columns-2'>
<img src='../img/tees.jpg' className='rounded-md mt-5 mb-5 items-center'/>
<br/>
<br/>
<br/>
<h1 className='text-[20px]'> I love using <span className='font-bold text-red-400'> Canva </span> to create social media graphic designs.</h1>

</div>
</div>

<Footer/>


</div>

    
  )
}

export default Home

