import React from 'react';
import { motion } from 'framer-motion';
// Assume you have a video in src/assets/hero-video.mp4
// import heroVideo from '../assets/hero-video.mp4'; 

const textVariants = {
    initial: { opacity: 0, y: 50 },
    animate: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.8,
            type: 'spring',
            stiffness: 80,
        },
    }),
};

const Hero = () => {
    const words = 'Precision. Luxury. Innovation in Every Print.'.split(' ');

    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
            {/* Background Video/Image Placeholder */}
            <div className="absolute inset-0 z-0 opacity-20">
                {/* Replace with your actual video or high-res dark image */}
                {/* <video autoPlay loop muted className="w-full h-full object-cover">
          <source src={heroVideo} type="video/mp4" />
        </video> */}
                <div className="h-full w-full bg-gradient-to-br from-gray-900 via-black to-gray-800" />
            </div>

            {/* Content */}
            <div className="relative z-10 p-6 text-center">
                <h1 className="mb-8 font-serif text-5xl font-extrabold text-white md:text-7xl lg:text-8xl">
                    {words.map((word, i) => (
                        <motion.span
                            key={i}
                            custom={i}
                            variants={textVariants}
                            initial="initial"
                            animate="animate"
                            className={`inline-block mr-3 ${word.toLowerCase().includes('luxury') ? 'text-yellow-400' : ''}`}
                        >
                            {word}
                        </motion.span>
                    ))}
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="mx-auto max-w-xl text-xl text-gray-300 md:text-2xl"
                >
                    Mastering the art and security of bespoke printing solutions.
                </motion.p>

                <motion.a
                    href="#technology"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.5, type: 'spring', stiffness: 100 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-10 inline-block rounded-full bg-yellow-600 px-8 py-3 text-lg font-semibold uppercase tracking-wider text-black shadow-lg transition duration-300 hover:bg-yellow-500 hover:shadow-yellow-500/50"
                >
                    Explore Our Technology
                </motion.a>
            </div>
        </div>
    );
};

export default Hero;