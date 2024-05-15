import React from 'react'
import Logo from "../image/logo.png"
import { FaHeadphones } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { IoMdHelpCircle } from "react-icons/io";
import {AiOutlineLogin} from 'react-icons/ai'
const Navbar = () => {
  return (
   
      
    <div className=' bg-[#112432] text-white p-6 '>
        <div className='flex flex-row pl-20 items-center'>
        <img src={Logo} alt="logo" className='w-1/4 h-1/2'/>
      <div className='flex flex-col'>
        <div className='flex gap-8 m-6 4 4 4'>
          <div className='flex flex-col justify-center items-center'>
          <FaUserCircle className='text-2xl'/>
          About Us
          </div>
          <div className='flex flex-col justify-center items-center'>
          <IoMdHelpCircle  className='text-2xl'/>
          Help
          </div>
          <div className='flex flex-col justify-center items-center'>
          <FaHeadphones className='text-2xl'/>
          Contact
          </div>
        </div>
        <div className='flex gap-4 mt-6 ml-4'>
          <p>Home</p> 
          <p>Add Events</p>
          <p>Subscribe</p>
          <p>F.A.Q</p>
          <p>Blog</p>
          <p>Journals</p>

          {/* <button className='border-2 border-solid border-blue-700 p-1 flex items-center  '><AiOutlineLogin className='mx-1'/>Login</button> */}

        </div>
      </div>

        </div>

        
    </div>
    
    

  )
}

export default Navbar