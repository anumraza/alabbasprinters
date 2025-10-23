import React, { useState } from 'react';
import { technologySteps } from '../constants';
import { motion } from 'framer-motion';
import MotionDiv from './common/MotionDiv';

// Removed the incorrect getTechImageUrl function entirely.

const Technology = () => {
    // Initialize with the first step from constants
    const [activeStep, setActiveStep] = useState(technologySteps[0]);

    // Framer Motion variants for the image/text transition
    const stepVariants = {
        initial: { opacity: 0, x: -50 },
        animate: { opacity: 1, x: 0, transition: { duration: 0.6 } },
        exit: { opacity: 0, x: 50, transition: { duration: 0.6 } },
    };

    return (
        <div className="text-center">
            <MotionDiv direction="down">
                <h2 className="mb-4 font-serif text-5xl font-bold text-white">Advanced Printing Technology</h2>
                <p className="mb-12 text-xl text-gray-400">See the precision process that defines our quality.</p>
            </MotionDiv>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                {/* Step List (LHS) */}
                <div className="lg:col-span-1">
                    {technologySteps.map((step, index) => (
                        <MotionDiv key={step.name} direction="left" delay={index * 0.1}>
                            <button
                                onClick={() => setActiveStep(step)}
                                className={`mb-4 w-full rounded-lg p-4 text-left transition-all duration-300 ${activeStep.name === step.name
                                    ? 'bg-yellow-600 text-black shadow-lg shadow-yellow-600/30'
                                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                                    }`}
                            >
                                <h3 className="text-xl font-semibold">{step.name}</h3>
                                {/* Shows first 50 characters of description for button context */}
                                <p className="text-sm">{step.description.substring(0, 50)}...</p>
                            </button>
                        </MotionDiv>
                    ))}
                </div>

                {/* Visual Showcase (RHS) */}
                <div className="relative h-[500px] lg:col-span-2 rounded-xl bg-gray-800 p-6 shadow-2xl overflow-hidden">
                    <MotionDiv direction="up" className="h-full">
                        <motion.div
                            key={activeStep.name}
                            variants={stepVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="h-full w-full"
                        >
                            <img
                                // FIXED: Use the imported variable directly!
                                src={activeStep.visual}
                                alt={activeStep.name}
                                className="h-4/5 w-full rounded-lg object-cover transition-all duration-500"
                            />
                            {/* Full description is shown below the image */}
                            <p className="mt-4 text-left text-lg text-gray-300">{activeStep.description}</p>
                        </motion.div>
                    </MotionDiv>
                </div>
            </div>
        </div>
    );
};

export default Technology;