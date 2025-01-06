import React from 'react'
import bookbank from '../../src/assets/bbw.png'
import cw from '../../src/assets/cw.png'
import Qr from '../../src/assets/QR.png'
import { FaGithub } from 'react-icons/fa'
import { FaLink } from 'react-icons/fa6'
import './project.css'
function Project() {
  return (
    <>
      <div className='flex justify-center gap-2 items-center p-3 m-auto flex-col w-screen h-fit' id='project'>
        <div className='text-white text-xl font-bold'>My Project</div>
        <div className='h-[2px] w-48 bg-white'></div>
        <div className='project-container  md:w-[90%] w-full  gap-2 m-2 p-2 flex md:flex-row flex-col justify-center items-center  '>

        <a href="https://cake-del.vercel.app/" target='_blank' className='project  w-1/2 m-3 p-1 h-[400px]  rounded-md  gap-3 flex flex-col justify-center items-center box-border  shadow-md border border-gray-400 shadow-zinc-700  hover:scale-105 transition-all duration-200 ease-linear '>
            <div className="flex flex-col justify-center gap-y-5 items-center  ">
              <img src={cw} alt="Qr image" className='h-[230px] mt-[-25px] m-x-2 rounded-t-md ' />
              <div className='flex flex-row items-center gap-x-32 justify-around'>
                <div className="text-white font-medium ">Cake ordering Website </div>
                <div className='flex justify-between items-center gap-x-2'>
                  <a href="https://github.com/Namanjain2213/cake-del" target='_blank'><FaGithub className='font-medium text-white' /></a>
                  <a href="https://cake-del.vercel.app/" target='_blank'><FaLink className='font-medium text-white' /></a>
                </div>
              </div>
                <div className='text-white font-bold'>Tech Stack : <span> React js , Css , Express js, Node js </span> </div>
               <a href="https://cake-del.vercel.app/" target='_blank'><button className='py-1 butt text-white px-14'>Check site</button></a>
            </div>
          </a>
          <a href="https://bookbank-nine-lime.vercel.app/" target='_blank' className='project  w-1/2 m-3 p-1 h-[400px]  rounded-md  gap-3 flex flex-col justify-center items-center box-border  shadow-md border border-gray-400 shadow-zinc-700  hover:scale-105 transition-all duration-200 ease-linear '>
            <div className="flex flex-col justify-center gap-y-5 items-center  ">
              <img src={bookbank} alt="Qr image" className='h-[230px] mt-[-25px] m-x-2 rounded-t-md ' />
              <div className='flex flex-row items-center gap-x-32 justify-around'>
                <div className="text-white font-medium ">BookBank Website </div>
                <div className='flex justify-between items-center gap-x-2'>
                  <a href="https://github.com/Namanjain2213/Bookstore" target='_blank'><FaGithub className='font-medium text-white' /></a>
                  <a href="https://bookbank-nine-lime.vercel.app/" target='_blank'><FaLink className='font-medium text-white' /></a>
                </div>
              </div>
                <div className='text-white font-bold'>Tech Stack : <span> React js, Css, Express js, Node js</span> </div>
                <a href="https://bookbank-nine-lime.vercel.app/" target='_blank'><button className='py-1 butt text-white px-14'>Check site</button></a>
            </div>
          </a>
          <a href="https://qr-generator-rho-smoky.vercel.app/" target='_blank' className='project  w-1/2 m-3 p-1 h-[400px]  rounded-md  gap-3 flex flex-col justify-center items-center box-border  shadow-md border border-gray-400 shadow-zinc-700  hover:scale-105 transition-all duration-200 ease-linear '>
            <div className="flex flex-col justify-center gap-y-5 items-center  ">
              <img src={Qr} alt="Qr image" className='h-[230px] mt-[-25px] m-x-2 rounded-t-md ' />
              <div className='flex flex-row items-center gap-x-32 justify-around'>
                <div className="text-white font-medium ">QR Code Generator </div>
                <div className='flex justify-between items-center gap-x-2'>
                  <a href="https://github.com/Namanjain2213/QR-generator" target='_blank'><FaGithub className='font-medium text-white' /></a>
                  <a href="https://qr-generator-rho-smoky.vercel.app/" target='_blank'><FaLink className='font-medium text-white' /></a>
                </div>
              </div>
                <div className='text-white font-bold'>Tech Stack : <span> HTML , Css , JavaScript</span> </div>
              <a href="https://qr-generator-rho-smoky.vercel.app/" target='_blank'><button className='py-1 butt text-white px-14'>Check site</button> </a>  
            </div>
          </a>
        </div>
      </div>
    </>
  )
}

export default Project