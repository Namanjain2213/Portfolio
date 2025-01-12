import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const formRef = useRef(null);
    const titleRef = useRef(null);
    const titRef = useRef(null);
    const leftSectionRef = useRef(null);
    const leftTitleRef = useRef(null);

    useEffect(() => {
        // Animation for the titles
        gsap.fromTo(
            [titleRef.current, leftTitleRef.current],
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse',
                },
            }
        );

        gsap.fromTo(
            titRef.current,
            { width: 0 },
            {
                width: '100%',
                duration: 0.8,
                ease: 'power3.inOut',
                scrollTrigger: {
                    trigger: titRef.current,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse',
                },
            }
        );

        // Animation for the form and left section
        gsap.fromTo(
            [formRef.current, leftSectionRef.current],
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power3.out',
                stagger: 0.2,
                scrollTrigger: {
                    trigger: formRef.current,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse',
                },
            }
        );
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', { name, email, message });
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <section id="contact" className="py-16 min-h-screen w-full flex justify-center items-center  text-white">
            <div className="container mx-auto px-4 flex flex-col items-center">
                <div className="w-full text-center mb-12">
                    <h2
                        ref={titleRef}
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white"
                    >
                        Contact me
                    </h2>
                    <div className='h-1 bg-white w-0 mx-auto' ref={titRef}></div>
                </div>
                <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
                    <div className="w-full lg:w-1/2 space-y-6" ref={leftSectionRef}>
                        <h2 ref={leftTitleRef} className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-white">Let's Connect</h2>
                        <p className="text-base sm:text-lg lg:text-xl">
                            Hey there! I'm always excited to connect with fellow developers, potential collaborators, or anyone interested in web development. Whether you have a project idea, a question about my work, or just want to say hi, I'd love to hear from you!
                        </p>
                        <p className="text-base sm:text-lg lg:text-xl">
                            Feel free to drop me a message using the form, or connect with me on LinkedIn, GitHub, or Instagram. Let's chat about code, create something awesome together, or discuss the latest tech trends. Your message could be the start of an amazing collaboration!
                        </p>
                        <div className="flex items-center space-x-4 mt-6">
                            <div className="w-10 h-10 bg-[#00A6ED] rounded-full flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <span className="text-lg">nj626433@gmail.com</span>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className="space-y-6"
                        >
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full px-3 py-2 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-[#00A6ED] text-white"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-3 py-2 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-[#00A6ED] text-white"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block mb-2 text-sm font-medium">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="w-full px-3 py-2 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-[#00A6ED] h-32 text-white"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-[#00A6ED] text-white px-6 py-3 rounded hover:bg-[#0088C3] transition-colors duration-300 font-medium"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

