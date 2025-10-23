import React from 'react';
import { servicesData } from '../constants';
import { motion } from 'framer-motion';
import MotionDiv from './common/MotionDiv';

const Services = () => (
    <div className="text-center">
        <MotionDiv direction="down">
            {/* 1. Adjusted Heading Size: text-4xl on mobile, scaling up to text-5xl on medium screens */}
            <h2 className="mb-4 font-serif text-4xl font-bold text-white md:text-5xl">Our Signature Services</h2>
            {/* 2. Adjusted Subtitle Size: text-lg on mobile, scaling up to text-xl on medium screens */}
            <p className="mb-16 text-lg text-gray-400 md:text-xl">Where complex requirements meet flawless execution.</p>
        </MotionDiv>

        {/* The grid is already mobile-friendly (grid-cols-1) */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {servicesData.map((service, index) => (
                <MotionDiv key={service.title} direction="up" delay={index * 0.1}>
                    <motion.div
                        whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255, 215, 0, 0.5)' }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className="group flex flex-col items-center rounded-lg bg-gray-800 p-8 shadow-xl transition duration-300 hover:bg-gray-700"
                    >
                        {/* Icon Size is perfect for mobile and desktop */}
                        <div className="mb-4 text-5xl text-yellow-500 transition-colors duration-300 group-hover:text-yellow-300">
                            <service.icon />
                        </div>
                        <h3 className="mb-3 text-xl font-semibold text-white">{service.title}</h3>
                        <p className="text-sm text-gray-400 group-hover:text-gray-200">{service.description}</p>
                    </motion.div>
                </MotionDiv>
            ))}
        </div>
    </div>
);

export default Services;