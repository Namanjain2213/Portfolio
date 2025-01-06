import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

function Navbar() {
    return (
        <div className='w-full flex items-center justify-center p-2'>
            <div className='flex text-white'>
                <ul className='fixed z-50 top-8 inset-x-0 mx-auto p-4 md:px-10 md:py-5 rounded-lg border border-black shadow-lg md:backdrop-blur-3xl md:backdrop-saturate-[150%] flex items-center max-w-[600px] justify-evenly space-x-3 md:space-x-4'>
                    <ScrollLink to='home' smooth={true} duration={500} className='cursor-pointer' ><li>Home</li></ScrollLink>
                    <ScrollLink to="about" smooth={true} duration={500} className='cursor-pointer' ><li>About me</li></ScrollLink>
                    <ScrollLink to="exp" smooth={true} duration={500} className='cursor-pointer' ><li>Experience</li></ScrollLink>
                    <ScrollLink to="project" smooth={true} duration={500} className='cursor-pointer' ><li>Project</li></ScrollLink>    
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
