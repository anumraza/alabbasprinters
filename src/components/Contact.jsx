import React from 'react';
import MotionDiv from './common/MotionDiv';
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { contactInfo } from '../constants'; // Import contactInfo

const Contact = () => (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* ======================================================= */}
        {/* COLUMN 1: LIVE MAP & ADDRESS/CONTACT DETAILS (DYNAMIC) */}
        {/* ======================================================= */}
        <MotionDiv direction="left">
            <h2 className="mb-6 font-serif text-4xl font-bold text-white">Find Us</h2>
            <div className="relative mb-8 h-96 w-full rounded-lg shadow-xl overflow-hidden bg-gray-800">

                {/* LIVE MAP IFRAME: REMEMBER TO REPLACE THE SRC WITH YOUR GOOGLE MAPS EMBED URL! */}
                <iframe
                    // The new, full Google Maps embed URL
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.7117654884596!2d67.08354187632595!3d24.941887241992717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3411dc8422559%3A0x46564c11f0f8c19f!2sAl-Abbas%20Printers!5e0!3m2!1sen!2s!4v1761241915132!5m2!1sen!2s"
                    title="Al-Abbas Printers Location"
                    width="100%" // Uses the container width
                    height="100%" // Uses the container height (h-96)
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                ></iframe>            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 className="mb-2 font-serif text-2xl font-bold text-yellow-500">Address</h3>
                    <p className="text-lg text-gray-300 whitespace-pre-line">{contactInfo.address}</p>
                </div>
                <div>
                    <h3 className="mb-2 font-serif text-2xl font-bold text-yellow-500">Contact</h3>
                    <p className="text-lg text-gray-300">Phone: {contactInfo.phone1}</p>
                    <p className="text-lg text-gray-300">Phone: {contactInfo.phone2}</p>
                    <p className="text-lg text-gray-300">Email: {contactInfo.email}</p>
                </div>
            </div>
        </MotionDiv>

        {/* ======================================================= */}
        {/* COLUMN 2: REQUEST A QUOTE / FORM (Static details removed) */}
        {/* ======================================================= */}
        <MotionDiv direction="right" delay={0.3}>
            <h2 className="mb-4 font-serif text-4xl font-bold text-white">Request a Quote</h2>
            <p className="mb-8 text-lg text-gray-400">Let's discuss your high-end printing needs. We guarantee a prompt and precise estimate.</p>

            {/* FORM: Configured to use mailto: protocol */}
            <form
                action="mailto:info@alabbasprinters.com" // Destination email
                method="POST"
                encType="text/plain" // Essential for mailto: to format input data in the email body
                className="space-y-6"
            >
                <input
                    type="text"
                    name="Name" // Required for mailto:
                    placeholder="Your Name"
                    className="w-full rounded-md border border-gray-700 bg-gray-800 p-3 text-white transition duration-300 focus:border-yellow-600 focus:ring-yellow-600"
                />
                <input
                    type="email"
                    name="Email" // Required for mailto:
                    placeholder="Your Email"
                    className="w-full rounded-md border border-gray-700 bg-gray-800 p-3 text-white transition duration-300 focus:border-yellow-600 focus:ring-yellow-600"
                />
                <textarea
                    name="Message" // Required for mailto:
                    placeholder="Your Message / Project Details"
                    rows="6"
                    className="w-full resize-none rounded-md border border-gray-700 bg-gray-800 p-3 text-white transition duration-300 focus:border-yellow-600 focus:ring-yellow-600"
                ></textarea>
                <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full rounded-md bg-yellow-600 px-6 py-3 text-lg font-semibold uppercase tracking-wider text-black shadow-lg transition duration-300 hover:bg-yellow-500"
                >
                    Send Request
                </motion.button>
            </form>

            {/* SOCIAL MEDIA ICONS (Now placed below the form) */}
            <div className="mt-8">
                <h4 className="mb-4 text-xl font-semibold text-white">Connect with Us</h4>
                <div className="flex space-x-6">
                    <motion.a whileHover={{ scale: 1.2, color: '#facc15' }} href="#" className="text-3xl text-gray-400 transition-colors duration-300">
                        <FaLinkedin />
                    </motion.a>
                    <motion.a whileHover={{ scale: 1.2, color: '#facc15' }} href="#" className="text-3xl text-gray-400 transition-colors duration-300">
                        <FaFacebook />
                    </motion.a>
                    <motion.a whileHover={{ scale: 1.2, color: '#facc15' }} href="#" className="text-3xl text-gray-400 transition-colors duration-300">
                        <FaInstagram />
                    </motion.a>
                </div>
            </div>
        </MotionDiv>
    </div>
);

export default Contact;