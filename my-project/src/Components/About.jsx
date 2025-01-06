import React from 'react';
import mypic from '../assets/mypic1.jpg';
import './About.css'
import { FaReact, FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { SiCodingninjas } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { RiJavascriptFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { DiMongodb, DiNodejs } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { GiWrappingStar } from "react-icons/gi";
import { SiRedux } from "react-icons/si";
function About() {
    return (
        <>
            <div className="flex flex-col md:flex-row p-8 mt-4 w-screen shadow-sm shadow-slate-700 " id='about'>
                <div className="left text-3xl max-w-[650px] pl-2 text-white md:w-1/2 flex flex-col items-center">
                    <div className="mb-4">
                        <img src={mypic} alt="Profile" className=" img rounded-[50px]  w-[350px] h-[500px] mt-4 " />
                    </div>
                    <div className="aboutme mb-4 mt-10 md:w-[550px]  h-fit p-4 box-border  flex flex-col justify-center items-center    transition-all duration-200 ease-linear  ">
                        <div>About Me</div>
                        <p className='md:text-2xl  ml-10 ' >I' m <span className='text-3xl text-cyan-500'>Naman </span>, a full-stack developer with a passion for frontend and problem-solving. Based in India, I specialize in  React, Node.js.</p>
                    </div>
                </div>
                <div className="right md:w-1/2 flex flex-col items-center mt-8 md:mt-0">
                    <div className="social mb-4 mt-10 w-[350px] h-[350px] box-border shadow-2xl flex flex-col justify-center items-center   hover:shadow-black scale-110 hover:scale-125 transition-all duration-200 ease-linear ">
                        <div className='text-white text-2xl  mb-10 font-bold' >Connect with me</div>
                        <div className='flex felx-3'>
                            <div className='gap-4 mr-8 ml-2'  >
                                <a href="https://wa.me/+916264339060" target='blank' ><FaWhatsapp className='text-4xl text-white shadow-xl shadow-black scale-100 hover:scale-125 transition-all duration-200 ease-in-out mb-4 ' /></a>
                                <a href="https://www.instagram.com/naman__jain__22?utm_source=qr&igsh=MW1iZGFyZHlzODhpMg==" target='blank' ><FaInstagram className='text-4xl text-white shadow-xl shadow-black scale-100 hover:scale-125 transition-all duration-200 ease-in-out mb-4 ' /></a>
                                <a href="https://www.linkedin.com/in/naman-jain-bb3969286/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='blank' ><FaLinkedin className='text-4xl text-white shadow-xl shadow-black scale-100 hover:scale-125 transition-all duration-200 ease-in-out mb-4 ' /></a>
                            </div>
                            <div className='gap-4 mr-8 ml-2' >
                                <a href="https://leetcode.com/u/naman_jain2213/" target='blank' >  <SiLeetcode className='text-4xl text-white shadow-xl shadow-black scale-100 hover:scale-125 transition-all duration-200 ease-in-out mb-4' /></a>
                                <a href="https://www.codechef.com/users/nj626433" target='blank' ><SiCodechef className='text-4xl text-white shadow-xl shadow-black scale-100 hover:scale-125 transition-all duration-200 ease-in-out mb-4' /></a>
                                <a href="https://github.com/Namanjain2213" target='blank' ><FaGithub className='text-4xl text-white shadow-xl shadow-black scale-100 hover:scale-125 transition-all duration-200 ease-in-out mb-4' /></a>
                            </div>
                            <div className='gap-4 mr-8 ml-2' >
                                <a href="mailto:nj626433@gmail.com" target='blank' ><MdEmail className='text-4xl text-white shadow-xl shadow-black scale-100 hover:scale-125 transition-all duration-200 ease-in-out mb-4 ' /></a>
                                <a href="https://www.naukri.com/code360/profile/ec2c9e78-221d-44d9-81c7-973d96768098" target='blank' ><SiCodingninjas className='text-4xl text-white shadow-xl shadow-black scale-100 hover:scale-125 transition-all duration-200 ease-in-out mb-4' /></a>
                            </div>
                        </div>

                    </div>
                    <div className="social mb-4 mt-10 w-[350px] h-[350px] box-border shadow-2xl flex justify-center items-center   hover:shadow-black scale-110 hover:scale-125 transition-all duration-200 ease-linear ">
                        <div>
                            <p className='items-center justify-center flex text-white text-2xl font-bold ' > My Tech Stack </p>
                            <div className='flex felx-3'>

                                <div className='gap-4 mr-8 ml-2'  >
                                    <IoLogoReact className='text-4xl text-blue-600 hover:origin-bottom border-gray-400 shadow-xl shadow-black mt-8 scale-110 hover:scale-150 transition-all duration-200 ease-in-out mb-4 ' />
                                    <RiJavascriptFill className='text-4xl text-yellow-500 shadow-xl hover:origin-bottom shadow-black mt-8 scale-110 hover:scale-150 transition-all duration-200 ease-in-out mb-4 ' />
                                    <RiTailwindCssFill className='text-4xl text-cyan-600 shadow-xl shadow-black scale-110 hover:scale-150 mt-8 hover:origin-bottom  transition-all duration-200 ease-in-out mb-4 ' />
                                </div>
                                <div className='gap-4 mr-8 ml-2' >
                                    <FaNode className='text-4xl text-green-500 shadow-xl shadow-black scale-110 hover:scale-150 mt-8 transition-all duration-200 hover:origin-bottom ease-in-out mb-4' />
                                    <DiMongodb className='text-4xl text-green-800 shadow-xl shadow-black scale-110 mt-8 hover:scale-150 transition-all duration-200 hover:origin-bottom ease-in-out mb-4' />
                                    <SiExpress className='text-4xl text-white shadow-xl hover:origin-bottom mt-8 shadow-black scale-110 hover:scale-150 transition-all duration-200 ease-in-out mb-4' />
                                </div>
                                <div className='gap-4 mr-8 ml-2' >
                                    <SiCplusplus className='text-4xl text-blue-700 shadow-xl shadow-black scale-110 hover:scale-150 transition-all duration-200 ease-in-out mt-8 mb-4 hover:origin-bottom ' />
                                    <FaHtml5 className='hover:origin-bottom text-4xl text-red-800 mt-8 shadow-xl shadow-black scale-110 hover:scale-150 transition-all duration-200 ease-in-out mb-4' />
                                    <FaCss3Alt className='text-4xl text-blue-900 shadow-xl mt-8 shadow-black scale-110 hover:scale-150 transition-all duration-200 hover:origin-bottom ease-in-out mb-4' />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className=' w-[90%] mt-4 mb-4 p-2 flex justify-center box-border aboutme items-center m-auto' >
                <div className="  relative w-[900px]   h-[410px]   shadow-lg rounded-lg overflow-hidden group">
                    <div className="p-2 m-2 flex flex-col items-center justify-center">
                        <h2 className="text-2xl font-bold text-white ">Full Stack Development</h2>
                        <div className='flex mt-4  item-center gap-4 justify-center ' > <GiWrappingStar className='flex justify-center items-center text-yellow-400' /><p className="text-white ">Build a single page application using React js</p></div>
                        <div className='flex mt-4  item-center gap-4 justify-center ' > <GiWrappingStar className='flex justify-center items-center text-yellow-400' /><p className="text-white ">Build a Dynamic content using React and Tailwind</p></div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-full   bg-opacity-50 text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                    <div className='grid grid-cols-5 gap-3 text-5xl text-white w-[300px] m-auto p-2'>

                        <SiCplusplus className='text-4xl rounded-lg  text-blue-900 hover:text-[C++] shadow-xl shadow-black scale-110 hover:scale-150 transition-all duration-200 ease-in-out mt-8 mb-4 hover:origin-bottom ' />
                        <FaHtml5 className='hover:origin-bottom text-4xl text-red-800 mt-8 shadow-xl shadow-black scale-110 hover:scale-150 transition-all duration-200 ease-in-out mb-4' />
                        <FaCss3Alt className='text-4xl text-blue-900 shadow-xl mt-8 shadow-black scale-110 hover:scale-150 transition-all duration-200 hover:origin-bottom ease-in-out mb-4' />
                        <FaNode className='text-4xl text-green-400 shadow-xl shadow-black scale-110 hover:scale-150 mt-8 transition-all duration-200 hover:origin-bottom ease-in-out mb-4' />
                        <DiMongodb className='text-4xl text-green-500 shadow-xl shadow-black scale-110 mt-8 hover:scale-150 transition-all duration-200 hover:origin-bottom ease-in-out mb-4' />
                        <SiExpress className='text-4xl text-white shadow-xl hover:origin-bottom mt-8 shadow-black scale-110 hover:scale-150 transition-all duration-200 ease-in-out mb-4' />
                        <IoLogoReact className='text-4xl text-blue-600 hover:origin-bottom border-gray-400 shadow-xl shadow-black mt-8 scale-110 hover:scale-150 transition-all duration-200 ease-in-out mb-4 ' />
                        <RiJavascriptFill className='text-4xl text-yellow-500 shadow-xl hover:origin-bottom shadow-black mt-8 scale-110 hover:scale-150 transition-all duration-200 ease-in-out mb-4 ' />
                        <RiTailwindCssFill className='text-4xl text-cyan-600 shadow-xl shadow-black scale-110 hover:scale-150 mt-8 hover:origin-bottom  transition-all duration-200 ease-in-out mb-4 ' />
                        <SiRedux className='text-4xl text-cyan-600 shadow-xl shadow-black scale-110 hover:scale-150 mt-8 hover:origin-bottom  transition-all duration-200 ease-in-out mb-4 ' />
                    </div>
                </div>

            </div>
        </>
    );
}

export default About;
