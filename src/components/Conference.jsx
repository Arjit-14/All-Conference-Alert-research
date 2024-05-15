import React from 'react'
import { SlCalender } from "react-icons/sl";
import { IoIosPin } from "react-icons/io";
import OrganizerContactForm from './OrganizerContactForm';

const Conference = () => {
  return (
    <div className=' rounded-md bg-white p-2 '>
        <text className='text-xl font-bold  p-2 text-blue-400'>
        International Conference on Recent advancement in Medical Education, Nursing, and Health Sciences
        </text>
        <div className='flex items-center p-5 gap-3'> 
            <text className=' flex flex-row items-center ' ><SlCalender className='text-red-400 mx-2'/><text>2024-05-27</text></text>
            <text className=' flex flex-row items-center ' ><IoIosPin className='text-red-400 '/><text> Punjab, Ludhiana</text></text>

        </div>

        <div>
            <text className='text-sm text-blue-400'>Conference Details:</text>
        </div>
        <a className='text-xs'>International Conference on Recent advancement in Medical Education, Nursing, and Health Sciences , on 26-27th May 2024 at Ludhiana, Punjab, India . The key motive of ICRAMNH is to provide a world-class platform for the global participants to share their ideas and experience in person with their peers expected to join from different parts of the world. In addition, this gathering will help the delegates to establish research or business relations as well as to find international linkage for future collaborations in their career path. We hope that ICRAMNH outcome will lead to significant contributions to the knowledge base in these up-to-date scientific fields in scope. This event will be organized by Irfconference at the city of Ludhiana, Punjab, India.</a>
        <div className='flex gap-1 items-center'><text className='text-blue-400 text-sm ' >status:</text><div className='bg-green-400 p-1 text-white font-bold text-xs items-center flex rounded'>active</div></div>
        <div className='flex gap-1 items-center'>
        <span className='text-blue-400 text-sm'>Organizer:</span>
        <span className=' text-xs'>Irfconference</span>
      </div>
      <div className='flex gap-1 items-center'>
        <span className='text-blue-400 text-sm'>Important Dates:</span>
      </div>
      <div className='flex gap-1 items-center'>
        <span className='text-blue-400 text-sm'>Deadline for submission / Apply:</span>
        <span className='text-xs'>2024-05-14</span>
      </div>
      <div className='flex gap-1 items-center'>
        <span className='text-blue-400 text-sm'>Conference Start Date:</span>
        <span className='text-xs'>2024-05-26</span>
      </div>
      <div className='flex gap-1 items-center'>
        <span className='text-blue-400 text-sm'>Conference End Date:</span>
        <span className='text-xs'>2024-05-27</span>
      </div>
      <div className='flex gap-1 items-center'>
        <span className='text-blue-400 text-sm'>Organizing Secretary:</span>
        <span className='text-xs'>Conference coordinator</span>
      </div>
      <div className='flex gap-1 items-center'>
        <span className='text-blue-400 text-sm'>Conference Inquiry Email ID:</span>
        <span className='text-xs'>info.irfconference@gmail.com</span>
      </div>
      <div className='flex gap-1 items-center'>
        <span className='text-blue-400 text-sm'>URL:</span>
        <a href='https://irfconference.org/Conference/23440/ICRAMNH/'  className='font-bold text-xs bg-blue-400 rounded p-1 text-white'>Register Here</a>
      </div>
      <div className='flex gap-1 items-center'>
        <span className='text-blue-400 text-sm'>Status:</span>
      </div>
      <OrganizerContactForm/>
    </div>
  )
}

export default Conference