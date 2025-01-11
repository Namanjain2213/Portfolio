import React, { useEffect } from 'react';
import Typed from 'typed.js';
import { MdOutlineFileDownload } from "react-icons/md";
import './home.css';
import About from './About';
import Whatdo from './Whatdo';
import Project from './Project';
import Contact from './Contact';
import Footer from './Footer';

function Home() {
    useEffect(() => {
        const typed = new Typed(".role", {
            strings: [
                "Full Stack Developer",
                "Web Developer",
                "Frontend Developer",
                "Backend Developer",
            ],
            loop: true,
            typeSpeed: 100,
            backSpeed: 80,
            backDelay: 1000,
        });

        // Clean up the Typed instance on unmount
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div>
            <div className='w-screen h-screen  justify-center flex items-center' id="home">
                <div className=' flex flex-col p-2 m-2 max-w-[800px] justify-center items-center'>
                    <div className='text-white text-3xl md:text-6xl mt-3'>Hi!! I'M <span className='text-sky-500'>Naman Jain</span>,</div>
                    <div className="text-2xl md:text-5xl mt-3 text-white"> <span className="role text-cyan-500"></span></div>
                    <div className=" mt-3 text-xl md:text-3xl text-white">I built things for the web using HTML, CSS, Javascript, React, and Nodejs</div>
                    <a href="https://drive.google.com/file/d/1YFs_nGrqG6q_h5LOZkL15wzT3KCafNaF/view?usp=drivesdk" target='blank' rel="noreferrer">
                        <div className='flex mt-4'>
                            <button className="btn-101 flex">
                                Download Resume
                                <svg>
                                    <defs>
                                        <filter id="glow">
                                            <fegaussianblur result="coloredBlur" stddeviation="5"></fegaussianblur>
                                            <femerge>
                                                <femergenode in="coloredBlur"></femergenode>
                                                <femergenode in="coloredBlur"></femergenode>
                                                <femergenode in="coloredBlur"></femergenode>
                                                <femergenode in="SourceGraphic"></femergenode>
                                            </femerge>
                                        </filter>
                                    </defs>
                                    <rect />
                                </svg>
                            </button>
                            <span className='absolute ml-56 mt-4 text-white text-xl'><MdOutlineFileDownload /></span>
                        </div>
                    </a>
                </div>
            </div>
            <About />
            <Whatdo/>
            <Project/>
            <Contact/>
            <hr />
            <Footer/>
        </div>
    );
}

export default Home;
