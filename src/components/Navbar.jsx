import React, { useState, useEffect } from 'react';
import { navLinks } from '../constants';
import { motion } from 'framer-motion';
import logoImage from '../assets/images/logo1.png';
// 1. Import icons for the menu button
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    // 2. State for controlling the mobile menu's open/close status
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Framer Motion variants for the mobile menu appearance
    const menuVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
            y: -20,
            transition: { type: 'tween', duration: 0.3 }
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 100, damping: 20 }
        },
    };

    return (
        <motion.nav
            className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-gray-900/90 shadow-2xl backdrop-blur-sm' : 'bg-transparent'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 100 }}
        >
            <div className="container mx-auto flex items-center justify-between px-6 py-4 md:px-12">

                {/* Logo/Brand Name */}
                <a
                    href="#home"
                    onClick={() => setToggle(false)} // Close menu if logo is clicked
                    className="flex flex-col items-center transition-colors duration-300 group z-50"
                >
                    <img
                        src={logoImage}
                        alt="Al-Abbas Printers Logo"
                        className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.05]"
                    />
                    <div className="text-xs font-semibold tracking-widest text-white mt-1 uppercase transition-colors duration-300 group-hover:text-yellow-400">
                        AL-ABBAS <span className="text-yellow-500">PRINTERS</span>
                    </div>
                </a>

                {/* 3. Desktop Links */}
                <ul className="hidden space-x-8 md:flex">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a
                                href={`#${link.id}`}
                                className="text-lg font-medium uppercase tracking-wider text-gray-300 transition-all duration-300 hover:text-yellow-400 hover:scale-105"
                            >
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* 4. Mobile Menu Button */}
                <div className="md:hidden flex items-center z-50">
                    <button
                        onClick={() => setToggle(!toggle)}
                        className="text-white text-3xl hover:text-yellow-500 transition-colors duration-300"
                        aria-label="Toggle navigation menu"
                    >
                        {toggle ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

            </div>

            {/* 5. Mobile Menu Content (Collapsible) */}
            <motion.div
                variants={menuVariants}
                initial="hidden"
                animate={toggle ? "visible" : "hidden"}
                className={`md:hidden absolute top-0 left-0 w-full h-screen ${toggle ? 'pointer-events-auto' : 'pointer-events-none'}`}
            >
                {/* Background overlay to close menu and add darkness */}
                <div
                    className="absolute inset-0 bg-gray-900/95 backdrop-blur-sm"
                    onClick={() => setToggle(false)}
                ></div>

                {/* The menu links container, placed strategically below the logo/nav bar */}
                <ul className={`absolute w-full top-16 flex flex-col items-center justify-center p-8 space-y-8 bg-gray-900/0`}>
                    {navLinks.map((link) => (
                        <motion.li
                            key={link.id}
                            // Staggered animation for links
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.1 * link.id, type: 'spring', stiffness: 150 }}
                        >
                            <a
                                href={`#${link.id}`}
                                // Close menu on click
                                onClick={() => setToggle(false)}
                                className="text-md font-bold uppercase text-gray-200 transition-colors duration-300 hover:text-yellow-500 block p-2"
                            >
                                {link.title}
                            </a>
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
        </motion.nav>
    );
};

export default Navbar;