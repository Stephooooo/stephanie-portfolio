import React from 'react'
import { Link} from "react-router-dom";   
import AnchorLink from "react-anchor-link-smooth-scroll";


function Navbar() {
    return (
      <div className="  w-full flex justify-between  items-center px-10 py-2  ">
                  
      <Link to="/" className=" flex font-bold text-[35px] text-red-400 "
      >  S
      </Link>
      <div className='flex  lg:flex-row list-none '> 
        
        
     
          <li className="nav-item">
         <Link
              className=" text-black text-[20px] hover:text-red-400"
              to="/about"
            >
           About me 
            </Link>
            
          </li>
         
     </div>
     </div>
                  
          );
        }
        
  
  export default Navbar;
  