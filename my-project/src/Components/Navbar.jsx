import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

function Navbar() {
    const navItems = [
        { to: 'home', label: 'Home' },
        { to: 'about', label: 'About' },
        { to: 'exp', label: 'Experience' },
        { to: 'project', label: 'Project' },
        { to: 'contact', label: 'Contact' },
    ];

    return (
        <div className='w-full flex items-center justify-center p-2'>
            <div className='flex text-white'>
                <ul className='fixed z-50 top-8 inset-x-0 mx-auto p-4 md:px-5 md:py-5 rounded-lg border border-black shadow-lg md:backdrop-blur-3xl md:backdrop-saturate-[150%] flex items-center max-w-[600px] justify-evenly flex-wrap'>
                    {navItems.map((item) => (
                        <ScrollLink
                            key={item.to}
                            to={item.to}
                            smooth={true}
                            duration={500}
                            className='cursor-pointer px-2 py-1 md:px-3 md:py-2'
                        >
                            <li>{item.label}</li>
                        </ScrollLink>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Navbar;

