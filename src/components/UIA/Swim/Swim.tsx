import React, {FC, useEffect, useState} from 'react';
import {motion, useAnimation, MotionProps} from 'framer-motion';

type SwimProps = {
    children: React.ReactNode;
    className?: string;
    isFast?: boolean;
    delay?: number;
} & Omit<MotionProps, 'onAnimationStart'>;

const Swim: FC<SwimProps> = ({children, isFast, delay, ...props}) => {
    const controls = useAnimation();
    const [isFloating, setIsFloating] = useState(true);

    const floatAnimation = {
        x: isFast ? ["0%", "10%", "10%", "0%", "-10%", "10%", "0%"] : ["0%", "0.5%", "-0.5%", "0%", "-0.5%", "0.5%", "0%"],
        y: isFast ? ["0%", "-10%", "10%", "0%", "-10%", "10%", "0%"] : ["0%", "-0.5%", "0.5%", "0%", "-0.5%", "0.5%", "0%"],
        transition: {
            duration: isFast ? 7 : 10,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 1,
            delay: delay
        }
    };

    useEffect(() => {
        if (isFloating) {
            controls.start(floatAnimation);
        } else {
            controls.stop();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isFloating, controls]);

    const handleMouseDown = () => setIsFloating(false);
    const handleMouseUp = () => setIsFloating(true);

    return (
        <motion.div
            animate={controls}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default Swim;
