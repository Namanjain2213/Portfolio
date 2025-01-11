import React, { useEffect, useRef } from 'react';
import mypic from '../assets/mypic1.jpg';
import './About.css'
import './animations.css';
import { FaReact, FaWhatsapp, FaInstagram, FaLinkedin, FaGithub, FaHtml5, FaCss3Alt, FaNode } from "react-icons/fa";
import { SiLeetcode, SiCodechef, SiCodingninjas, SiExpress, SiCplusplus, SiRedux } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { IoLogoReact } from "react-icons/io5";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { GiWrappingStar } from "react-icons/gi";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function About() {
    const socialIconsRef = useRef(null);
    const techStackRef = useRef(null);
    const fullStackRef = useRef(null);

    useEffect(() => {
      const socialIcons = socialIconsRef.current.children;
      const techIcons = techStackRef.current.children;
      const fullStackItems = fullStackRef.current.querySelectorAll('.fullstack-item, .tech-icon');

      gsap.set([socialIcons, techIcons, fullStackItems], { opacity: 0, scale: 0.5 });

      gsap.to(socialIcons, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: socialIconsRef.current,
          start: "top 60%",
        },
      });

      gsap.to(techIcons, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: techStackRef.current,
          start: "top 60%",
        },
      });

      gsap.to(fullStackItems, {
        opacity: 1,
        scale: 1.5,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: fullStackRef.current,
          start: "top 60%",
        },
      });
    }, []);

    return (
        <div className="flex flex-col p-4 md:p-8 w-full" id='about'>
            <div className="flex flex-col lg:flex-row">
                <LeftSection />
                <RightSection socialIconsRef={socialIconsRef} techStackRef={techStackRef} />
            </div>
            <FullStackSection fullStackRef={fullStackRef} />
        </div>
    );
}

function LeftSection() {
    return (
        <div className="left text-3xl max-w-full lg:max-w-[650px] text-white lg:w-1/2 flex flex-col items-center mb-8 lg:mb-0">
            <div className="mb-4">
                <img src={mypic} alt="Profile" className="img rounded-[50px] w-[250px] h-[350px] md:w-[350px] md:h-[500px] mt-4" />
            </div>
            <div className="aboutme mb-4 mt-10 w-full lg:w-[550px] h-fit p-4 box-border flex flex-col justify-center items-center transition-all duration-200 ease-linear">
                <div className="text-2xl md:text-3xl mb-4">About Me</div>
                <p className='text-lg md:text-2xl text-center lg:text-left'>
                    I'm <span className='text-2xl md:text-3xl text-cyan-500'>Naman</span>, a full-stack developer with a passion for frontend and problem-solving. Based in India, I specialize in React and Node.js.
                </p>
            </div>
        </div>
    );
}

function RightSection({ socialIconsRef, techStackRef }) {
    return (
        <div className="right lg:w-1/2 flex flex-col items-center mt-8 lg:mt-0">
            <SocialSection socialIconsRef={socialIconsRef} />
            <TechStackSection techStackRef={techStackRef} />
        </div>
    );
}

function SocialSection({ socialIconsRef }) {
    return (
        <div className="social mb-4 mt-10 w-full max-w-[350px] h-[350px] box-border shadow-2xl flex flex-col justify-center items-center hover:shadow-black scale-100 hover:scale-110 transition-all duration-200 ease-linear">
            <div className='text-white text-2xl mb-10 font-bold'>Connect with me</div>
            <div className='grid grid-cols-3 gap-8 ' ref={socialIconsRef}>
                <SocialIcon href="https://wa.me/+916264339060" Icon={FaWhatsapp}  />
                <SocialIcon href="https://www.instagram.com/naman__jain__22?utm_source=qr&igsh=MW1iZGFyZHlzODhpMg==" Icon={FaInstagram} />
                <SocialIcon href="https://www.linkedin.com/in/naman-jain-bb3969286/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" Icon={FaLinkedin} />
                <SocialIcon href="https://leetcode.com/u/naman_jain2213/" Icon={SiLeetcode} />
                <SocialIcon href="https://www.codechef.com/users/nj626433" Icon={SiCodechef} />
                <SocialIcon href="https://github.com/Namanjain2213" Icon={FaGithub} />
                <SocialIcon href="mailto:nj626433@gmail.com" Icon={MdEmail} />
                <SocialIcon href="https://www.naukri.com/code360/profile/ec2c9e78-221d-44d9-81c7-973d96768098" Icon={SiCodingninjas} />
            </div>
        </div>
    );
}

function SocialIcon({ href, Icon }) {
  return (
    <a href={href} target='blank' rel="noopener noreferrer" className="social-icon transform transition-all duration-200 ease-in-out hover:scale-125">
      <Icon className='text-4xl text-white' />
    </a>
  );
}

function TechStackSection({ techStackRef }) {
    return (
        <div className="social mb-4 mt-10 w-full max-w-[350px] h-[350px] box-border shadow-2xl flex flex-col justify-center items-center hover:shadow-black scale-100 hover:scale-110 transition-all duration-200 ease-linear">
            <p className='text-center text-white text-2xl font-bold mb-8'>My Tech Stack</p>
            <div className='grid grid-cols-3 gap-8' ref={techStackRef}>
                <TechIcon Icon={IoLogoReact} color="text-blue-600" />
                <TechIcon Icon={RiJavascriptFill} color="text-yellow-500" />
                <TechIcon Icon={RiTailwindCssFill} color="text-cyan-600" />
                <TechIcon Icon={FaNode} color="text-green-500" />
                <TechIcon Icon={DiMongodb} color="text-green-800" />
                <TechIcon Icon={SiExpress} color="text-white" />
                <TechIcon Icon={SiCplusplus} color="text-blue-700" />
                <TechIcon Icon={FaHtml5} color="text-red-800" />
                <TechIcon Icon={FaCss3Alt} color="text-blue-900" />
            </div>
        </div>
    );
}

function TechIcon({ Icon, color }) {
  return (
    <Icon className={`tech-icon text-4xl ${color} transform transition-all duration-200 ease-in-out hover:scale-125`} />
  );
}

function FullStackSection({ fullStackRef }) {
    return (
        <div className='w-full mt-4 mb-4 p-16 flex justify-center box-border aboutme items-center m-auto'>
            <div className="relative w-full max-w-[900px] h-auto md:h-[410px] shadow-lg rounded-lg overflow-hidden group">
                <div className="p-2 m-2 flex flex-col items-center justify-center" ref={fullStackRef}>
                    <h2 className="text-2xl font-bold text-white mb-4 fullstack-item">Full Stack Development</h2>
                    <SkillItem text="Build a single page application using React js" />
                    <SkillItem text="Build a Dynamic content using React and Tailwind" />
                    <div className='grid grid-cols-5 gap-9 text-5xl text-white w-full max-w-[300px] m-auto p-2 mt-8'>
                        <TechIcon Icon={SiCplusplus} color="text-blue-900" />
                        <TechIcon Icon={FaHtml5} color="text-red-800" />
                        <TechIcon Icon={FaCss3Alt} color="text-blue-900" />
                        <TechIcon Icon={FaNode} color="text-green-400" />
                        <TechIcon Icon={DiMongodb} color="text-green-500" />
                        <TechIcon Icon={SiExpress} color="text-white" />
                        <TechIcon Icon={IoLogoReact} color="text-blue-600" />
                        <TechIcon Icon={RiJavascriptFill} color="text-yellow-500" />
                        <TechIcon Icon={RiTailwindCssFill} color="text-cyan-600" />
                        <TechIcon Icon={SiRedux} color="text-purple-600" />
                    </div>
                </div>
            </div>
        </div>
    );
}

function SkillItem({ text }) {
    return (
        <div className='flex mt-4 items-center gap-4 justify-center fullstack-item'>
            <GiWrappingStar className='flex-shrink-0 text-yellow-400' />
            <p className="text-white text-center">{text}</p>
        </div>
    );
}

export default About;

