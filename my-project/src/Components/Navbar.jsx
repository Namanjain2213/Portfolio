import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navItems = [
        { to: 'home', label: 'Home' },
        { to: 'about', label: 'About-me' },
        { to: 'exp', label: 'Experience' },
        { to: 'project', label: 'Project' },
        { to: 'contact', label: 'Contact' },
    ];

    return (
        <div className='w-full flex items-center justify-center p-2'>
            <div className='flex text-white'>
                <ul className={`fixed z-50 top-8 inset-x-0 mx-auto p-4 md:px-5 md:py-5 rounded-lg border border-black shadow-lg md:backdrop-blur-3xl md:backdrop-saturate-[150%] ${isMenuOpen ? 'flex flex-col' : 'hidden md:flex'} items-center max-w-[600px] justify-evenly md:space-x-2`}>
                    {navItems.map((item) => (
                        <ScrollLink
                            key={item.to}
                            to={item.to}
                            smooth={true}
                            duration={500}
                            className='cursor-pointer py-2 md:py-0'
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <li>{item.label}</li>
                        </ScrollLink>
                    ))}
                </ul>
                <button 
                    onClick={toggleMenu} 
                    className='md:hidden fixed z-50 top-4 right-4 text-white border border-white rounded px-2 py-1'
                >
                    {isMenuOpen ? 'Close' : 'Menu'}
                </button>
            </div>
        </div>
    );
}

export default Navbar;

