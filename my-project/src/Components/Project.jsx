import React from 'react'
import bookbank from '../../src/assets/bbw.png'
import cw from '../../src/assets/cw.png'
import Qr from '../../src/assets/QR.png'
import { FaGithub } from 'react-icons/fa'
import { FaLink } from 'react-icons/fa6'
import './project.css'

function Project() {
  return (
    <div className='flex justify-center items-center p-3 m-auto flex-col w-full min-h-screen ' id='project'>
      <h2 className='text-white text-2xl md:text-3xl font-bold mb-4'>My Projects</h2>
      <div className='h-[2px] w-48 bg-white mb-8'></div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl px-4'>
        <ProjectCard 
          image={cw}
          title="Cake ordering Website"
          githubLink="https://github.com/Namanjain2213/cake-del"
          liveLink="https://cake-del.vercel.app/"
          techStack="React js, Css, Express js, Node js"
        />
        <ProjectCard 
          image={bookbank}
          title="BookBank Website"
          githubLink="https://github.com/Namanjain2213/Bookstore"
          liveLink="https://bookbank-nine-lime.vercel.app/"
          techStack="React js, Css, Express js, Node js"
        />
        <ProjectCard 
          image={Qr}
          title="QR Code Generator"
          githubLink="https://github.com/Namanjain2213/QR-generator"
          liveLink="https://qr-generator-rho-smoky.vercel.app/"
          techStack="HTML, Css, JavaScript"
        />
      </div>
    </div>
  )
}

function ProjectCard({ image, title, githubLink, liveLink, techStack }) {
  return (
    <div className='bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105'>
      <img src={image} alt={title} className='w-full h-48 object-cover' />
      <div className='p-4'>
        <div className='flex justify-between items-center mb-4'>
          <h3 className='text-white font-medium text-lg'>{title}</h3>
          <div className='flex space-x-3'>
            <a href={githubLink} target='_blank' rel="noopener noreferrer" className='text-white hover:text-gray-300'>
              <FaGithub className='text-xl' />
            </a>
            <a href={liveLink} target='_blank' rel="noopener noreferrer" className='text-white hover:text-gray-300'>
              <FaLink className='text-xl' />
            </a>
          </div>
        </div>
        <p className='text-gray-400 text-sm mb-4'>
          <span className='font-bold'>Tech Stack:</span> {techStack}
        </p>
        <a href={liveLink} target='_blank' rel="noopener noreferrer" className='block'>
          <button className='w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300'>
            Check site
          </button>
        </a>
      </div>
    </div>
  )
}

export default Project

