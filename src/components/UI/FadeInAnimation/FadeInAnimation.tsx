"use client"
import React, { ReactNode, useEffect } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FadeInAnimationProps {
    children: ReactNode;
    direction: 'left' | 'right';
    delay?: number
}

const FadeInAnimation: React.FC<FadeInAnimationProps> = ({ children, direction, delay }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    const variants: Variants = {
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 0.5,
                damping: 10,
                stiffness: 100,
                delay
            }
        },
        hidden: {
            x: direction === "left" ? -200 : 200,
            opacity: 0
        }
    };

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
        >
            {children}
        </motion.div>
    );
};

export default FadeInAnimation;
