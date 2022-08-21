import React from 'react'


function Home() {
  return (
    <div className=' mt-10'>
    <h1 className='font-extrabold text-transparent bg-clip-text bg-gradient-to-bl from-indigo-400 via-red-200 to-yellow-100 text-[45px] mb-10'> UX Designer and Frontend Developer </h1>
    <div className="flex flex-wrap justify-center">
  <div className="w-6/12 sm:w-4/12 px-4 mb-10 ">
    <img src="../img/me.JPG" alt="ME" class="shadow rounded-full max-w-full h-auto align-middle border-none" />
  </div>
</div>
<div className=' bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100'>
<h1 className='text-green-900 text-[20px] place-content-center pl-20 pr-20'> <br/> <span className='font-bold'> Hello I'm Stephanie, nice to meet you </span> <br/> <br/>  I am an Frontend developer Apprentice at Apprentice Cloud and I also do freelance work. I am based in Nairobi Kenya. I believe in building products that offer solutions with purposeful and inclusive design.</h1>
<br/>
<br/>
</div>

<div className='box-border border-4'>
<div className='columns-3 mt-10'>
<div>
<img src='../img/ux.webp' alt='#' className='object-scale-down h-48 w-96' />
<h1 className='text-green-900 text-[15px] font-bold ' > UX designer </h1> <br/>
<p className='text-green-900 text-[15px]'> I value simple content structure, clean design patterns, and thoughtful interactions.</p> <br/>
<h1 className='text-green-900 text-[15px] font-semibold ' > Design Tools </h1> 
<p className='text-green-900 text-[15px]'> Figma <br/> Adobe Xd </p>
</div> 
<br/>
<div>
<img src='../img/frontend.webp' alt='#' className='object-scale-down h-48 w-96' />
<h1 className='text-green-900 text-[15px] font-bold ' > Frontend Developer</h1> <br/>
<p className='text-green-900 text-[15px]'> I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
<h1 className='text-green-900 text-[15px] font-semibold' > Languages </h1> 
<p className='text-green-900 text-[15px]'> HTML, CSS, JavaScript, React and Java</p>
<h1 className='text-green-900 text-[15px] font-semibold' > Dev Tools </h1> 
<p className='text-green-900 text-[15px]'>  Github <br/> Jira </p>
</div>
<div>
<img src='../img/graphics.webp' alt='#' className='object-scale-down h-48 w-96'/>
<h1 className='text-green-900 text-[15px] font-bold ' > Graphics and content designer </h1> <br/>
<p className='text-green-900 text-[15px]'> I enjoy designing infographics, logos and general graphic content for print and digital media .</p> <br/>
<h1 className='text-green-900 text-[15px] font-semibold' > Design Tools </h1> 
<p className='text-green-900 text-[15px]'> Canva <br/> Cricut design space</p>
</div>
</div>
</div>

<div>
<h1 className='font-bold '> My Recent Work</h1>
<div className='columns-3'>

</div>
</div>
    </div>
  )
}

export default Home

