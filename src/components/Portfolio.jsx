import React from 'react';
import { portfolioItems } from '../constants';
import { motion } from 'framer-motion';
import MotionDiv from './common/MotionDiv';

const Portfolio = () => (
    <div className="text-center">
        <MotionDiv direction="down">
            <h2 className="mb-4 font-serif text-5xl font-bold text-white">Our Showcase of Craftsmanship</h2>
            <p className="mb-12 text-xl text-gray-400">A gallery of projects where luxury meets precision.</p>
        </MotionDiv>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {portfolioItems.map((item, index) => (
                <MotionDiv key={item.id} direction="up" delay={index * 0.1}>
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        className="group relative h-80 overflow-hidden rounded-lg shadow-xl"
                    >
                        {/* Image Placeholder */}
                        <div
                            className="h-full w-full bg-gray-700 transition-transform duration-500 group-hover:scale-110"
                            style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                        >
                            <div className="flex h-full items-center justify-center text-gray-400 text-lg">

                            </div>
                        </div>

                        {/* Overlay Details */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            // 👇️ THIS LINE NEEDS A STRONG BACKGROUND AND BLUR
                            className="absolute inset-0 flex flex-col justify-end bg-black/70 p-4 backdrop-blur-sm"
                        >
                            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                            <p className="text-sm font-light text-yellow-400">{item.category}</p>
                            <a href="#" className="mt-2 text-sm text-gray-300 underline hover:text-yellow-300">View Details</a>
                        </motion.div>
                    </motion.div>
                </MotionDiv>
            ))}
        </div>
    </div>
);

export default Portfolio;