import React from 'react';
import { navLinks, contactInfo } from '../constants';
import logoImage from '../assets/images/logo1.png'; // Assuming logo1.png is the image
import { FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    // Determine the base URL for navigation links
    const getLinkUrl = (id) => (id === 'home' ? '#home' : `#${id}`);

    return (
        // The main footer container
        <footer className="bg-gray-900 border-t border-yellow-500/10 mt-12 pt-10 pb-4">
            <div className="container mx-auto px-6 lg:px-12">

                {/* --------------------- TOP SECTION (GRID LAYOUT) --------------------- */}
                <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 pb-8 border-b border-gray-700/50">

                    {/* Column 1: Logo and Branding */}
                    <div className="col-span-1 md:col-span-1">
                        <a href="#home" className="flex flex-col items-start mb-4">
                            <img
                                src={logoImage}
                                alt="Al-Abbas Printers Logo"
                                className="h-10 w-auto object-contain mb-2"
                            />
                            <div className="text-base font-extrabold tracking-widest text-white uppercase">
                                AL-ABBAS <span className="text-yellow-500">PRINTERS</span>
                            </div>
                        </a>
                        <p className="text-gray-400 text-sm mt-3">
                            Mastery in Print and Security.
                        </p>
                    </div>

                    {/* Column 2: Quick Contact Info */}
                    <div className="col-span-1 md:col-span-1">
                        <h4 className="text-xl font-semibold text-white mb-4">Quick Contact</h4>
                        <div className="space-y-2 text-gray-400">
                            <p className="text-base">{contactInfo.address.replace(/\n/g, ', ')}</p>
                            <p className="text-base">Phone: {contactInfo.phone1}</p>
                            <p className="text-base">Email: <a href={`mailto:${contactInfo.email}`} className="hover:text-yellow-500 transition">{contactInfo.email}</a></p>
                        </div>
                    </div>

                    {/* Column 3: Navigation Links (2x2 on Desktop, 1x1 on Mobile) */}
                    <div className="col-span-1 md:col-span-1 lg:col-span-1">
                        <h4 className="text-xl font-semibold text-white mb-4">Navigation</h4>
                        <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-y-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.id}
                                    href={getLinkUrl(link.id)}
                                    className="text-gray-400 text-base hover:text-yellow-500 transition uppercase tracking-wide"
                                >
                                    {link.title}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 4 (LG): Social & Action */}
                    <div className="col-span-1 lg:col-span-1 md:col-span-3 lg:col-span-1">
                        <h4 className="text-xl font-semibold text-white mb-4">Connect & Request</h4>

                        {/* Social Icons */}
                        <div className="flex space-x-4 mb-6">
                            <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-yellow-500 transition text-2xl"><FaLinkedinIn /></a>
                            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-yellow-500 transition text-2xl"><FaFacebookF /></a>
                            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-yellow-500 transition text-2xl"><FaInstagram /></a>
                        </div>

                        {/* Send Request Button */}
                        <a
                            href="#contact"
                            className="inline-block px-8 py-3 bg-yellow-600 text-gray-900 font-bold uppercase rounded-lg 
                                       shadow-lg hover:bg-yellow-500 transition duration-300 transform hover:scale-[1.02]"
                        >
                            SEND REQUEST
                        </a>
                    </div>

                </div>

                {/* --------------------- BOTTOM SECTION (COPYRIGHT) --------------------- */}
                <div className="text-center pt-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Al-Abbas Printers. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;