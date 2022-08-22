
import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import {AiOutlineLinkedin} from "react-icons/ai";
import {AiOutlineGithub} from "react-icons/ai";

function Navbar() {
    return (
            
             
                  <div className="ml-5 mt-5 w-full relative flex justify-between lg-w-full lg:static lg:block lg:justify-start">
                  
                  <h1 className="  px-3 py-2 flex items-center text-xl  font-bold leading-snug text-green-700 hover:text-green-500 "
                  > Stephanie Wambui 
                  </h1>
                  <div className='flex  lg:flex-row list-none '> 
                    
                     <li className="nav-item">
                     <a
                          className=" px-3  py-2 flex items-center text-xl  font-bold leading-snug text-green-700 hover:text-green-500 "
                          href="mailto:stephaniembaabu@gmail.com"
                        >
                        Email <MdOutlineEmail />
                        </a>
                        
                      </li>
                      <li className="nav-item">
                     <a
                          className=" px-3  py-2 flex items-center text-xl  font-bold leading-snug text-green-700 hover:text-green-500 "
                          href="https://www.linkedin.com/in/stephanie-wambui/"
                        >
                       LinkedIn <AiOutlineLinkedin/>
                        </a>
                        
                      </li>
                      <li className="nav-item">
                     <a
                          className=" px-3  py-2 flex items-center text-xl  font-bold leading-snug text-green-700 hover:text-green-500 "
                          href="https://github.com/Stephooooo"
                        >
                       Github <AiOutlineGithub />
                        </a>
                        
                      </li>
                     
                </div>
                </div>
             
            
          );
        }
        
  
  export default Navbar;
  