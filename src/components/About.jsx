import React from 'react';
import MotionDiv from './common/MotionDiv';
// Assume you have an image for the about section
import aboutImage from '../assets/images/16.jpg';

const About = () => (
    <MotionDiv direction="up" className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
            <h2 className="mb-4 font-serif text-4xl font-bold text-yellow-500">
                The Art and Science of Premium Print
            </h2>
            <p className="mb-6 text-lg text-gray-300">
                For over three decades, Al-Abbas Printers has been the trusted partner for brands demanding **uncompromising quality and security** in their printed materials. We blend traditional craftsmanship with cutting-edge technology—from flawless offset color reproduction to advanced security features like **holograms, microtext, and UV coatings**.
            </p>
            <p className="text-md text-gray-400">
                Our specialty lies in converting standard projects into **luxurious, tactile experiences** through bespoke finishes like foil stamping, embossing, and precision die-cutting. Excellence is not just a goal; it's our standard in every sheet we produce.
            </p>
        </div>
        <MotionDiv direction="right" delay={0.4}>
            {/* Placeholder for About Image */}
            <div
                className="h-96 w-full rounded-lg bg-gray-800 shadow-xl"
                style={{ backgroundImage: "url('/src/assets/images/16.JPG')", backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <div className="flex h-full items-center justify-center text-gray-500 text-xl italic">

                </div>
            </div>
        </MotionDiv>
    </MotionDiv>
);

export default About;