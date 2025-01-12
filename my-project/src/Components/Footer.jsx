import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" text-white py-8 flex justify-center items-center m-auto w-[90%]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="mb-4 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p>&copy; {currentYear} Naman Jain. All rights reserved.</p>
          </motion.div>
          <motion.div 
            className="flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a href="https://github.com/Namanjain2213" target="_blank" rel="noopener noreferrer" className=" transition-colors duration-300">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/naman-jain-bb3969286" target="_blank" rel="noopener noreferrer" className="hover:text-[#00A6ED] transition-colors duration-300">
              <FaLinkedin size={24} />
            </a>
            <a href="https://www.instagram.com/naman__jain__22/?igsh=MW1iZGFyZHlzODhpMg%3D%3D" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors duration-300">
              <FaInstagram size={24} />
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

