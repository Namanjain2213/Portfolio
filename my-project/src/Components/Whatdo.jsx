import React from 'react'
import { FaGraduationCap } from "react-icons/fa";
import { BsSuitcaseLg } from "react-icons/bs";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Whatdo() {
  useGSAP(()=>{
    gsap.to("#exp",{
      
    })
  })
  return (
    <>
      <div className=' flex justify-center gap-2 items-center p-3 m-auto flex-col w-screen h-fit  ' id='exp' >
        <h1 className='text-2xl text-white font-bold' >My Experiences</h1>
        <div className='h-[2px] w-48 bg-white'></div>
        <div className=' md:w-[90%] w-full  gap-2 m-2 p-2 flex md:flex-row flex-col justify-center items-center ' >
          <div className=' w-4/5  md:w-1/2 bg-zinc-700 hover:bg-zinc-600 transition-all ease-in-out duration-200 p-4  gap-y-4 h-full flex justify-center items-center flex-col  ' >
           <div className='flex justify-center items-center gap-3' ><FaGraduationCap className='text-xl text-white' /> <h1 className='text-white text-xl font-bold ' >Education Experience</h1></div>
            <p className='text-xl text-white' >Completed 12th with 73.0% PCM From Sheopur </p>
            <p className='text-xl text-white' >Graduated From ISBA Institute of Professional Studies with 73.0% </p>
            <p className='text-xl text-white' >Currently Pursuing MCA(SE) From USICT</p>
          </div>
          <div className=' ml-1 h-[2px] w-[250px] mt-3 md:h-[200px] md:w-[1px] bg-white' ></div>
         <div className=' w-4/5  md:w-1/2 bg-zinc-700 hover:bg-zinc-600 transition-all ease-in-out duration-200 p-[30px]  gap-y-4 h-full flex justify-center items-center flex-col  ' >
           <div className='flex justify-center items-center gap-3' ><BsSuitcaseLg className='text-xl text-white' /> <h1 className='text-white text-xl font-bold ' >Frontend Development</h1></div>
            <p className='text-xl text-white' >I worked for 1 month.</p>
            <p className='text-xl text-white' >Here I use HTML , CSS , Javascript and React.</p>
            <div className=' md:flex ml-[-80px]  md:justify-center md:items-center md:gap-4' > <p className='text-xl text-white' >Here is my Certificate</p> <a href="https://drive.google.com/file/d/1-WcNXDNyqkUjX5b-f0L9Lld6MgU2y4Sh/view?usp=drivesdk" target='blank' className='text-blue-600 md:text-xl' >See Now</a> </div>
          </div>

        </div>
      </div>
    </>

  )
}

export default Whatdo