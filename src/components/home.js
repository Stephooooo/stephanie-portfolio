import React from 'react'


function Home() {
  return (
    <div className=' mt-10 ml-20 mr-20'>
    <h1 className='font-extrabold text-transparent bg-clip-text bg-gradient-to-bl from-indigo-400 via-red-200 to-yellow-100 text-[45px] mb-5'> Hello I'm Stephanie, nice to meet you</h1>
    <h1 className='text-green-900 text-[20px] place-content-center pl-20 pr-20 mb-5'> I am an Frontend developer and UX designer based in Kenya. I believe in building products that offer solutions with purposeful and inclusive design.</h1>
    <a className='text-green-900 text-[20px] font-bold border-2 border-green-900'  href='https://drive.google.com/file/d/1HKPGtxlqh5p9bBA72oTlxhvslsQW-dz7/view?usp=sharing'> Download My Resume</a> 
    <div className="flex flex-wrap justify-center">
  <div className="w-6/12 sm:w-4/12 px-4 mb-5 mt-5 ">
    <img src="../img/me.JPG" alt="ME" class="shadow rounded-full max-w-full h-auto align-middle border-none " />
  </div>
</div>

<div className=' bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 rounded-lg h-[1900px] md:h-[1700px] lg:h-[670px] '>

<br/>
<br/>

<h1 className='font-bold text-green-900 text-[25px] '> My services </h1>
<div className='columns-1 md:columns-1 lg:columns-3 mb-10  '>
<div>
<img src='../img/ux.webp' alt='#' className='object-scale-down h-48 w-96' />
<h1 className='text-green-900 text-[20px] font-bold ' > UX design </h1> <br/>
<p className='text-green-900 text-[20px]'> I value simple content structure, clean design patterns, and thoughtful interactions. I have skills in Prototyping, creating low and high fidelity mockups, UX research and sprint planning. </p> <br/>
<h1 className='text-green-900 text-[20px] font-semibold ' > Design Tools </h1> 
<p className='text-green-900 text-[20px]'> Figma <br/> Adobe Xd </p>
</div> 
<br/>
<div>
<img src='../img/frontend.webp' alt='#' className='object-scale-down h-48 w-96' />
<h1 className='text-green-900 text-[20px] font-bold ' > Frontend Development</h1> <br/>
<p className='text-green-900 text-[20px]'> I like to code things from scratch, and enjoy bringing ideas to life in the browser specialising in web development. I have skills in building websites using React and TailwindCSS, creating reusable components and responsive design. </p>
<h1 className='text-green-900 text-[20px] font-semibold' > Languages </h1> 
<p className='text-green-900 text-[20px]'> HTML, CSS, JavaScript, React and Java</p>
</div>
<div>
<img src='../img/graphics.webp' alt='#' className='object-scale-down h-48 w-96'/>
<h1 className='text-green-900 text-[20px] font-bold ' > Graphics and content design </h1> <br/>
<p className='text-green-900 text-[20px]'> I enjoy designing infographics, logos and general graphic content for print and digital media .</p> <br/>
<h1 className='text-green-900 text-[20px] font-semibold' > Design Tools </h1> 
<p className='text-green-900 text-[20px]'> Canva <br/> Cricut design space</p>
</div>
</div>
</div>

<div >
<h1 className='font-bold text-green-900 text-[25px] mt-10'> My Recent Work</h1>

<div className='columns-1 md:columns-1 lg:columns-2 mb-5 mt-10' >
<img src='../img/todo1.png' alt='#'/> 
<br/>
<br/>
<br/>
<a className='font-bold text-green-900 text-[20px] mt-5'> Eisenhower Todo App</a>
<p className=' text-green-900 text-[20px] mt-5'> This Todo Application is built under the Eisenhower matrix task management tool that helps one to organize and prioritize tasks by urgency and importance. </p>
<br/>
<br/>
<a className='border-2 text-green-900 border-green-900' href='https://eisenhower-todo-app.herokuapp.com/'> View website</a>
</div>

<div className='columns-1 md:columns-1 lg:columns-2'>
<img src='../img/kncci.png' alt='#' /> 
<br/>

<a className='font-bold text-green-900 text-[20px] mt-5'> Membership management System</a>
<p className=' text-green-900 text-[20px] mt-5'> This is a Membership Managemnet System designed for Kenya National Chamber of Commerce and Industry (KNCCI) organization. Its purpose is to regulate the participation of the organization's membership in organizational forums and events and to keep a record of active members. The admin will be able to log in events or forums scheduled for the month, the details of the members who attended including their names and company or business details and also a statistic of the avaerage number of members who are active in a month. </p>
<br/>
<br/>
</div>

</div>

<div className='bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 rounded-lg h-[400px] md:h-[400px] lg:h-[250px] mt-10 mb-10' > 
<h1 className='text-[25px] text-green-900 font-bold mb-5 pt-10'> Interested  in collaborating with me? </h1>
<p className='text-[20px] text-green-900 mb-5'> I am always open to discuss any work or partnership opportunities</p>

<a className='text-[20px] text-green-900 border-2 border-green-900'href='mailto:stephaniembaabu@gmail.com'> Send me an Email, I'll buy the Coffee!</a>

</div>
</div>
    
  )
}

export default Home

