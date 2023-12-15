'use client'
import React, {useEffect, useState} from 'react';
import {AnimatePresence, motion, useAnimation, Variants} from "framer-motion";
import "./ExperienceList.scss"
import {useInView} from "react-intersection-observer";
import {usePathname} from "next/navigation";

const ExperienceList = ({item, index}: any) => {
    const pathName = usePathname();
    const controls = useAnimation();
    const [isOpen, setIsOpen] = useState(false);
    const [refView, inView] = useInView();

    const toggleOpen = () => setIsOpen(!isOpen);


    const textVariants = {
        hidden: {opacity: 0, y: -20},
        visible: {opacity: 1, y: 0}
    };


    const showAnimate: Variants = {
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 0.8,
                damping: 10,
                stiffness: 100,
                delay: 0.2,
            }
        },
        hidden: {
            x: index % 2 === 0 ? -300 : 300,
            opacity: 0,
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
            ref={refView}
            initial="hidden"
            animate={controls}
            variants={showAnimate}
        >
            <motion.div
                layout
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                transition={{duration: 0.5}}
                className="wrapper-experience-list"
                onClick={toggleOpen}
                data-isopen={isOpen}
            >
                <motion.div layout className="child">
                    <div className="wrapper-title">
                        <div>
                            {pathName === "/ua" ? `${item.titleUa}` : `${item.titleEn}`}
                        </div>
                        <a className="link-another-platform" href={item.link} target="_blank">{item.company}</a>
                    </div>
                    <div>
                        <span>
                            {pathName === "/ua" ? `${item.dateUa}` : `${item.dateEn}`}
                        </span>
                        <span
                            className="open-icon"
                        >
                            {isOpen ? "-" : "+"}
                        </span>
                    </div>
                </motion.div>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            layout
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={textVariants}
                            transition={{duration: 0.3}}
                            className="additional-content"
                        >
                            <div>
                                {
                                    pathName === "/ua" ? (
                                        Array.isArray(item.descriptionUa) ? (
                                            item.descriptionUa.map((item: any) => <div key={item.text}>{item.text}</div>)
                                        ) : (
                                            <div>{item.descriptionUa}</div>
                                        )
                                    ) : (
                                        Array.isArray(item.descriptionEn) ? (
                                            item.descriptionEn.map((item: any) => <div key={item.text}>{item.text}</div>)
                                        ) : (
                                            <div>{item.descriptionEn}</div>
                                        )
                                    )
                                }
                            </div>
                            <div className="wrapper-technologies">
                                {item.technologies.map((item: any) =>
                                    <span key={item}>{item}</span>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
};

export default ExperienceList;