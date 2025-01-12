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
                    onEnter: () => gsap.to([titleRef.current, leftTitleRef.current], { opacity: 1, scale: 1 }),
                    onLeave: () => gsap.to([titleRef.current, leftTitleRef.current], { opacity: 0, scale: 0.8 }),
                    onEnterBack: () => gsap.to([titleRef.current, leftTitleRef.current], { opacity: 1, scale: 1 }),
                    onLeaveBack: () => gsap.to([titleRef.current, leftTitleRef.current], { opacity: 0, scale: 0.8 }),
                },
            }
        );

        gsap.fromTo(
            titRef.current,
            { opacity: 0, scale: 0.8 },
            {
                opacity: 1,
                scale: 1,
                duration: 0.8,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: titRef.current,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    onEnter: () => gsap.to(titRef.current, { opacity: 1, scale: 1 }),
                    onLeave: () => gsap.to(titRef.current, { opacity: 0, scale: 0.8 }),
                    onEnterBack: () => gsap.to(titRef.current, { opacity: 1, scale: 1 }),
                    onLeaveBack: () => gsap.to(titRef.current, { opacity: 0, scale: 0.8 }),
                },
            }
        );

        // Animation for the form and left section
        gsap.fromTo(
            [formRef.current, leftSectionRef.current],
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: formRef.current,
                    start: 'top 80%',
                    end: 'bottom 0%',
                    onEnter: () => gsap.to([formRef.current, leftSectionRef.current], { opacity: 1, y: 0 }),
                    onLeave: () => gsap.to([formRef.current, leftSectionRef.current], { opacity: 0, y: 50 }),
                    onEnterBack: () => gsap.to([formRef.current, leftSectionRef.current], { opacity: 1, y: 0 }),
                    onLeaveBack: () => gsap.to([formRef.current, leftSectionRef.current], { opacity: 0, y: 50 }),
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
                        className="text-3xl font-bold mb-4 text-white"
                    >
                        Contact me
                    </h2>
                    <div className='h-1 bg-white w-40 mx-auto' ref={titRef}></div>
                </div>
                <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    <div className="w-full md:w-1/2 space-y-6" ref={leftSectionRef}>
                        <h2 ref={leftTitleRef} className="text-3xl font-bold mb-4 text-white">Let's Connect</h2>
                        <p className="text-lg">
                            I am always open to new opportunities and collaborations. Feel free to reach out to me for any queries, feedback or just to say hi!
                        </p>
                        <p className="text-lg">
                            You can contact me through the form or connect via LinkedIn, Twitter, or GitHub. Let's collaborate and build something amazing together!
                        </p>
                        <div className="flex items-center space-x-4 mt-6">
                            <div className="w-10 h-10 bg-[#00A6ED] rounded-full flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <span className="text-lg">nj626433@example.com</span>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
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

