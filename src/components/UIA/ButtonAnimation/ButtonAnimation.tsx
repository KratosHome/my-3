'use client'
import React, {FC, HTMLAttributes, AnchorHTMLAttributes, useState} from 'react';
import {motion, useAnimation} from 'framer-motion';
import PulseComponent from "@/components/UIA/PulseComponent/PulseComponent";

type ButtonType = HTMLAttributes<HTMLElement> & AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: React.ReactNode;
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
    isPulse: boolean
};

const ButtonAnimation: FC<ButtonType> = ({children, as = 'div', isPulse, ...props}) => {
    const controls = useAnimation();

    const handleMouseEnter = () => {
        controls.start({
            scale: 0.9,
            transition: {duration: 0.2}
        }).then(() => {
            controls.start({
                scale: 1.0,
                transition: {duration: 0.3}
            });
        });
    };

    const Component = motion(as);

    return (
        <Component
            initial={{scale: 1}}
            animate={controls}
            onMouseEnter={handleMouseEnter}
            whileTap={{
                scale: 0.9,
                transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 10
                }
            }}
            {...props}
        >
            {children}
        </Component>
    );
};

export default ButtonAnimation;
