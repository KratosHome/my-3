'use client'
import React, {useEffect, useState} from 'react';
import "./CloseIcon.scss"
import {motion, useMotionValue, useTransform, useSpring} from "framer-motion";


const CloseIcon = () => {
    const scrollYProgressMV = useMotionValue(0);
    const scrollYProgress = useSpring(scrollYProgressMV, {duration: 2000});
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 0.5]);

    const menuTopLineRange = useTransform(scrollYProgress, [0, 1], [0.14, 1]);
    const menuTopLineRangeOffset = useTransform(
        scrollYProgress,
        [0, 1],
        [0, 0.71]
    );
    const menuTopPathLength = useSpring(menuTopLineRange, {
        stiffness: 400,
        damping: 50
    });

    const menuMiddleLineRange = useTransform(scrollYProgress, [0, 1], [1, 1]);
    const menuMiddleLineRangeOffset = useTransform(
        scrollYProgress,
        [0, 1],
        [0, 1]
    );
    const menuMiddlePathLength = useSpring(menuMiddleLineRange, {
        stiffness: 400,
        damping: 50
    });

    const menuBottomLineRange = useTransform(scrollYProgress, [0, 1], [0.115, 1]);
    const menuBottomLineRangeOffset = useTransform(
        scrollYProgress,
        [0, 1],
        [0, 0.754]
    );
    const menuBottomPathLength = useSpring(menuBottomLineRange, {
        stiffness: 400,
        damping: 50
    });


    const onMouseEnter = () => {
        scrollYProgressMV.set(1);
    };

    const onMouseLeave = () => {
        scrollYProgressMV.set(0);
    };

    const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 768px)").matches);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.matchMedia("(max-width: 768px)").matches);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (isMobile) {
            scrollYProgressMV.set(1);
        } else {
            scrollYProgressMV.set(0);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isMobile]);


    return (
        <div
            className={"container-close-icon"}
        >
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                style={{
                    cursor: "pointer",
                    left: "20px",
                    top: "20px",
                    width: 54,
                    height: 54
                }}
            >
                <motion.div
                    style={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        scale
                    }}
                >
                    <svg
                        style={{
                            position: "absolute",
                            left: 0,
                            top: 0,
                            transformOrigin: "0 0"
                        }}
                        viewBox="0 0 100 100"
                    >
                        <motion.path
                            d="M 30 40, L 70 40, C 90 40 90 75 60 85, A 40 40 0 0 1 20 20, L 80 80"
                            strokeWidth={"2px"}
                            stroke={"white"}
                            fill="none"
                            style={{
                                pathOffset: menuTopLineRangeOffset,
                                pathLength: menuTopPathLength
                            }}
                        />
                        <motion.path
                            d="M 30 50 L 70 50"
                            strokeWidth={"2px"}
                            stroke={"white"}
                            fill="none"
                            style={{
                                pathOffset: menuMiddleLineRangeOffset,
                                pathLength: menuMiddlePathLength
                            }}
                        />
                        <motion.path
                            d="M 70 60 L 30 60 C 10 60 10 20 40 15 A 40 38 0 1 1 20 80 L 80 20"
                            strokeWidth={"2px"}
                            stroke={"white"}
                            fill="none"
                            style={{
                                pathOffset: menuBottomLineRangeOffset,
                                pathLength: menuBottomPathLength
                            }}
                        />
                    </svg>
                </motion.div>
            </div>
        </div>
    );
};
export default CloseIcon;