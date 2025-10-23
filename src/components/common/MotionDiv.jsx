import { motion } from 'framer-motion';

const fadeIn = (direction, type, delay, duration) => ({
    hidden: {
        x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
        y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
        opacity: 0,
    },
    show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            type,
            delay,
            duration,
            ease: 'easeOut',
        },
    },
});

const MotionDiv = ({ children, direction = 'up', type = 'spring', delay = 0.2, duration = 0.8, className = '' }) => (
    <motion.div
        variants={fadeIn(direction, type, delay, duration)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={className}
    >
        {children}
    </motion.div>
);

export default MotionDiv;