import React from 'react';
import MotionDiv from './common/MotionDiv';
// Assume you have an image for the about section
import aboutImage from '../assets/images/16.jpg';

const About = () => (
    <MotionDiv direction="up" className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
        {/* Text Column */}
        <div>
            <h2 className="mb-4 font-serif text-[40px] font-bold text-yellow-500 tracking-tight">
                The Art and Science of Premium Print
            </h2>
            <p className="mb-6 text-xl text-gray-300">
                For over three decades, Al-Abbas Printers has been the trusted partner for brands demanding **uncompromising quality and security** in their printed materials. We blend traditional craftsmanship with cutting-edge technology—from flawless offset color reproduction to advanced security features like **holograms, microtext, and UV coatings**.
            </p>
            <p className="text-lg text-gray-400">
                Our specialty lies in converting standard projects into **luxurious, tactile experiences** through bespoke finishes like foil stamping, embossing, and precision die-cutting. Excellence is not just a goal; it's our standard in every sheet we produce.
            </p>
        </div>

        {/* Image Column (FIXED) */}
        <MotionDiv direction="right" delay={0.4}>
            {/* Using the imported image variable in a standard <img> tag */}
            <img
                src={aboutImage}
                alt="Al-Abbas Printers Workshop and Machinery"
                className="h-96 w-full rounded-xl object-cover shadow-2xl transition duration-500 hover:scale-[1.02]"
            />
        </MotionDiv>
    </MotionDiv>
);

export default About;