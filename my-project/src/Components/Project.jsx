import React, { useEffect, useRef } from 'react';
import bookbank from '../../src/assets/bbw.png';
import cw from '../../src/assets/cw.png';
import Qr from '../../src/assets/QR.png';
import { FaGithub } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa6';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './project.css';

gsap.registerPlugin(ScrollTrigger);

function Project() {
  const titleRef = useRef(null);
  const underlineRef = useRef(null);

  useEffect(() => {
    // Existing animation for project cards
    gsap.fromTo(
      '.project-card',
      {
        opacity: 0,
        y: 50,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: '#project',
          start: 'top 90%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // New animation for title
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // New animation for underline
    gsap.fromTo(
      underlineRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: underlineRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <div className="flex justify-center items-center m-auto flex-col w-full min-h-screen px-4 sm:px-6 lg:px-8" id="project">
      <h2 ref={titleRef} className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-center">My Projects</h2>
      <div ref={underlineRef} className="h-[2px] w-48 sm:w-56 lg:w-64 bg-white mb-8"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
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
  );
}

function ProjectCard({ image, title, githubLink, liveLink, techStack }) {
  return (
    <div className="project-card bg-gray-800 rounded-lg overflow-hidden shadow-lg flex flex-col">
      <img src={image} alt={title} className="w-full h-48 sm:h-56 lg:h-64 object-cover" />
      <div className="p-4 flex-grow flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-white font-medium text-lg sm:text-xl">{title}</h3>
            <div className="flex space-x-3">
              <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                <FaGithub className="text-xl sm:text-2xl" />
              </a>
              <a href={liveLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                <FaLink className="text-xl sm:text-2xl" />
              </a>
            </div>
          </div>
          <p className="text-gray-400 text-sm sm:text-base mb-4">
            <span className="font-bold">Tech Stack:</span> {techStack}
          </p>
        </div>
        <a href={liveLink} target="_blank" rel="noopener noreferrer" className="block mt-auto">
          <button className="w-full py-2 px-4 bg-[#00A6ED] text-white rounded hover:bg-[#0088C3] transition duration-300 text-sm sm:text-base">
            Check site
          </button>
        </a>
      </div>
    </div>
  );
}

export default Project;

