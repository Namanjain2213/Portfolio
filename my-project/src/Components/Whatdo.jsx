import React from 'react'
import { FaGraduationCap } from "react-icons/fa";
import { BsSuitcaseLg } from "react-icons/bs";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Whatdo() {
  useGSAP(() => {
    gsap.to("#exp", {
      // Add your GSAP animation here
    })
  })

  return (
    <div className='flex justify-center items-center p-4 m-auto flex-col w-full min-h-screen' id='exp'>
      <h1 className='text-2xl md:text-3xl text-white font-bold mb-4'>My Experiences</h1>
      <div className='h-[2px] w-48 bg-white mb-8'></div>
      <div className='w-full max-w-6xl flex flex-col md:flex-row justify-center items-stretch gap-8'>
        <ExperienceCard
          icon={<FaGraduationCap className='text-2xl md:text-3xl text-white' />}
          title="Education Experience"
          items={[
            "Completed 12th with 73.0% PCM From Sheopur",
            "Graduated From ISBA Institute of Professional Studies with 73.0%",
            "Currently Pursuing MCA(SE) From USICT"
          ]}
        />
        <div className='hidden md:block w-[1px] bg-white self-stretch'></div>
        <div className='md:hidden h-[2px] w-full bg-white my-4'></div>
        <ExperienceCard
          icon={<BsSuitcaseLg className='text-2xl md:text-3xl text-white' />}
          title="Frontend Development"
          items={[
            "I worked for 1 month.",
            "Here I use HTML, CSS, Javascript and React.",
            <div className='flex flex-col sm:flex-row items-center gap-2'>
              <p className='text-white'>Here is my Certificate</p>
              <a href="https://drive.google.com/file/d/1-WcNXDNyqkUjX5b-f0L9Lld6MgU2y4Sh/view?usp=drivesdk" target='blank' className='text-blue-600 hover:underline'>See Now</a>
            </div>
          ]}
        />
      </div>
    </div>
  )
}

function ExperienceCard({ icon, title, items }) {
  return (
    <div className='w-full md:w-1/2 bg-zinc-700 hover:bg-zinc-600 transition-all ease-in-out duration-200 p-6 rounded-lg'>
      <div className='flex justify-center items-center gap-3 mb-4'>
        {icon}
        <h2 className='text-white text-xl md:text-2xl font-bold'>{title}</h2>
      </div>
      <ul className='space-y-4'>
        {items.map((item, index) => (
          <li key={index} className='text-lg md:text-xl text-white'>
            {typeof item === 'string' ? <p>{item}</p> : item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Whatdo

