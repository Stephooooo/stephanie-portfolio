import React from 'react'
import {AiOutlineLinkedin} from "react-icons/ai";
import {AiOutlineGithub} from "react-icons/ai";


function Home() {
  return (
    <div className=' md:px-5 lg:px-10'> 
    <div className='md:columns-1 lg:columns-2'>

    <div> 
    <h1 className='font-extrabold text-transparent bg-clip-text bg-black text-[50px] mb-5 md:mt-5 lg:mt-20'> Hello I'm Stephanie </h1> <br/>
    <h1 className='text-black text-[20px] place-content-center pl-10 pr-10 mb-5  text-justify'> I am a Software developer and UI/UX designer based in Kenya. I believe in building solution based products with purposeful and inclusive design.</h1> 
    <a className='text-black text-[20px] font-bold border-2 border-black rounded-md px-2 py-2 hover:text-red-400 hover:border-red-400'  href='https://drive.google.com/file/d/1CJOLzIt68l3ytLnom8r0tqH4uQ0XO7Xj/view?usp=sharing'> My Resume</a> 
  </div>

<div className="flex flex-wrap justify-center">
<div className="px-4 mb-5 mt-5 ">
  <img src="../img/me2.png" alt="Stephanie Wambui Mbaabu" class="shadow rounded-md max-w-full h-auto align-middle border-none " />
</div>
</div>
</div>


<div className=' bg-white rounded-lg  '>

<br/>
<br/>

<h1 className='font-extrabold text-black text-[30px] '> My services </h1>
<div className='columns-1 md:columns-1 lg:columns-3 mb-10 px-5 '>



<div className='border-2 border-black rounded-md px-2 py-2'>
<img src='../img/ux.webp' alt='#' className='object-scale-down h-36 w-96' />
<h1 className='text-black text-[20px] font-bold ' > UI/UX and Product design </h1> <br/>
<p className='text-black text-[15px] text-justify'> I value simple content structure, clean design patterns, and thoughtful interactions in both web and mobile app designs. I have skills in creating Prototypes,low and high fidelity mockups, UX research and sprint planning. </p> <br/>
<h1 className='text-black text-[20px] font-semibold ' > Design Tools </h1> 
<p className='text-black text-[15px]'> Figma, Adobe Xd, Jira </p>
</div> 


<br/>
<div className='border-2 border-black rounded-md px-2 py-2'>
<img src='../img/frontend.webp' alt='#' className='object-scale-down h-36 w-96' />
<h1 className='text-black text-[20px] font-bold ' > Full Stack Development</h1> <br/>
<p className='text-black text-[15px] text-justify'> I enjoy bringing ideas to life in the browser specialising in web development. I have skills in creating reusable components, responsive design on the frontend and building APIs and databases on the backend. </p>
<h1 className='text-black text-[20px] font-semibold' > Languages </h1> 
<p className='text-black text-[15px]'> HTML, CSS, JavaScript, ReactJS, NodeJS, and PostgreSQL</p>
</div>

<div className='border-2 border-black rounded-md px-2 py-2'>
<img src='../img/graphics.webp' alt='#' className='object-scale-down h-36 w-96'/>
<h1 className='text-black text-[20px] font-bold ' > Graphics and content design </h1> <br/>
<p className='text-black text-[15px] text-justify'> I enjoy designing infographics, logos and general graphic content for print and digital media. I am also skilled in writing blogs about Technology, Business and Marketing strategies.</p> <br/>
<h1 className='text-black text-[20px] font-semibold' > Design Tools </h1> 
<p className='text-black text-[15px]'> Canva, Adobe Illustrator </p>
<br/>
</div>
</div>
</div>

<div >
<h1 className='font-extrabold text-black text-[30px] mt-10'> My Recent Work</h1>

<div className='columns-1 md:columns-1 lg:columns-2 mb-5 mt-10' >
<img src='../img/todo1.png' alt='#'/> 
<br/>
<br/>
<br/>
<a className='font-bold text-black text-[20px] mt-5'> Eisenhower Todo App - <span className='italic font-normal'> Full Stack Web Application </span></a>
<p className=' text-black text-[20px] mt-5 text-justify'> This Todo Application is built under the Eisenhower matrix task management tool that helps one to organize and prioritize tasks by urgency and importance. </p>
</div>

<div className='columns-1 md:columns-1 lg:columns-2 mb-5 mt-10' >
<img src='../img/afircaskn.png' alt='#'/> 
<br/>
<br/>
<br/>
<a className='font-bold text-black text-[20px] mt-5'> AfricaSKN - <span className='italic font-normal'> UX and Product Design </span></a>
<p className=' text-black text-[20px] mt-5 text-justify'>  The AfricaSKN is a brand made exclusively for skincare awareness and support. Its features include an information hub where the user can learn about their skin type and which routines and products suit them, a timer that reminds the user to follow through their skincare routine through notifications, a before and after photo feature that gives the user a platform to compare their results while using a certain product and an E-commerce feature to connect the user with local suppliers of skincare products. </p>
<br/>
<br/>
<a className='border-2 text-black border-green-900 px-2 py-2 rounded-md hover:text-red-400 hover:border-red-400' href= 'https://www.figma.com/proto/YbtKloMU4H4CaVBuHmTNiH/Untitled?node-id=2%3A2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A2'> View Prototype</a>
</div>

<div className='columns-1 md:columns-1 lg:columns-2'>
<img src='../img/werabanner.png' alt='#' /> 
<br/>

<a className='font-bold text-black text-[20px] mt-5'> Wera - <span className='italic font-normal'> Full Stack Web Application </span></a>
<p className=' text-black text-[20px] mt-5 text-justify'> Wera is a web Application system that will feature a number of opportunities for the youth including Internships, Apprenticeship programs,Industrial Attachments, Career fairs and seminars; that are geared towards career development and abolition of unemployment cases due to lack of work experience. </p>
<br/>
<br/>
</div>

</div>

<div className='bg-black rounded-lg  md:h-[400px] lg:h-[250px] mt-10 mb-5' > 
<h1 className='text-[25px] text-white font-bold mb-5 pt-10'> Interested  in collaborating with me? </h1>
<p className='text-[20px] text-white mb-5'> I am always open to discuss any work or partnership opportunities</p>

<a className=' md:text-[20px] lg:text-[20px] text-white border-2 border-white md:px-1 md:py-1 lg:px-2 lg:py-2 rounded-md hover:text-red-400 hover:border-red-400 mb-5 'href='mailto:stephaniembaabu@gmail.com'> Send me an Email, I'll buy the Coffee!</a> <br/><br/>
<a
className=" md:text-[15px] lg:text-[20px] text-white border-2 border-white md:px-1 md:py-1 lg:px-2 lg:py-2 rounded-md hover:text-red-400 hover:border-red-400 "
href="https://www.linkedin.com/in/stephanie-wambui/"
>
Let's interact on LinkedIn 
</a>

</div>
</div>

    
  )
}

export default Home

