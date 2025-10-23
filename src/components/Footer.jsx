import React from 'react';
import { navLinks, contactInfo } from '../constants';
import logoImage from '../assets/images/logo1.png';

const Footer = () => (
    <footer className="mt-20 border-t border-gray-800 bg-black py-10">
        <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col items-center justify-between md:flex-row">

                {/* Logo/Brand Name and Info (Corrected structure: Logo stacked with Name) */}
                <div className="mb-4 flex items-start md:mb-0 md:text-left">

                    {/* Logo and Name (Stacked Vertically) */}
                    <div className="flex flex-col items-center mr-6">
                        <img
                            src={logoImage}
                            alt="Al-Abbas Printers Logo"
                            // Set a manageable size for the logo in the footer
                            className="h-16 w-auto object-contain"
                        />
                        {/* The Text AL-ABBAS PRINTERS is now BELOW the image */}
                        <span className="text-xs font-semibold tracking-widest text-white mt-1 uppercase">
                            AL-ABBAS <span className="text-yellow-500">PRINTERS</span>
                        </span>
                    </div>

                    {/* Additional Contact Details (Placed NEXT TO the stacked logo/name) */}
                    <div className="mb-4 text-center md:mb-0 md:text-left">
                        <p className="mt-2 text-sm text-gray-500">
                            Mastery in Print and Security.
                        </p>
                        {/* Contact Details */}
                        <div className="mt-4 text-sm text-gray-400">
                            <p>{contactInfo.phone1}</p>
                            <p>{contactInfo.email}</p>
                        </div>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="mb-4 text-center md:mb-0">
                    <ul className="flex flex-wrap justify-center space-x-6">
                        {navLinks.map((link) => (
                            <li key={link.id} className="mb-2 md:mb-0">
                                <a
                                    href={`#${link.id}`}
                                    className="text-sm font-medium uppercase text-gray-400 transition-colors duration-300 hover:text-yellow-500"
                                >
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Copyright */}
                <div className="text-center text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Al-Abbas Printers. All Rights Reserved.
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;