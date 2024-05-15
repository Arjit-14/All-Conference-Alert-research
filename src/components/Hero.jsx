import React from 'react'
import { FaRegBuilding } from "react-icons/fa";
import { MdHealthAndSafety, MdOutlineHealthAndSafety } from "react-icons/md";
import { FaCalculator } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { FaFlask } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { PiGraduationCapFill } from "react-icons/pi";
import { FaBook } from "react-icons/fa6";
import { IoHammerSharp } from "react-icons/io5";
import { IoIosVideocam } from "react-icons/io";
import { ImHammer2 } from "react-icons/im";


const Hero = () => {
  return (
    <div className='bg-cyan-600 p-5  '>
      <div className='flex flex-row justify-center gap-3 items-center'>
        <div className='flex items-center flex-col text-white'>
          <FaRegBuilding className='text-white'/>
          Business
        </div>
        <div className='flex items-center flex-col text-white'>
          <MdHealthAndSafety className='text-white'/>
          Health
        </div> 
        <div className='flex items-center flex-col text-white'>
          <FaCalculator className='text-white'/>
          Mathematics
        </div> 
        <div className='flex items-center flex-col text-white'>
          <MdComputer className='text-white'/>
          Engineering
        </div>
        <div className='flex items-center flex-col text-white'>
        <FaFlask className='text-white'/>
          Physical
        </div>
        <div className='flex items-center flex-col text-white'>
          <FaPerson className='text-white'/>
          Social Sciences
        </div>
        <div className='flex items-center flex-col text-white'>
          <PiGraduationCapFill className='text-white'/>
          Education
        </div>
        <div className='flex items-center flex-col text-white'>
          <FaBook className='text-white'/>
          Regional Studies
        </div>
        <div className='flex items-center flex-col text-white'>
          <ImHammer2 className='text-white'/>
          Law
        </div>
        <div className='flex items-center flex-col text-white'>
          <IoIosVideocam className='text-white'/>
          Webinar
        </div>
      </div>
    </div>
  )
}

export default Hero