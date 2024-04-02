"use client"
import React, {useState} from 'react';
import "./SelectedProjects.scss"
import {motion, AnimatePresence} from "framer-motion";
import Image from 'next/image'
import {usePathname} from "next/navigation";
import ShowMoreText from "@/components/UI/ShowMoreText/ShowMoreText";
import FadeInAnimation from "@/components/UIA/FadeInAnimation/FadeInAnimation";
import {dateProjects} from "@/mokDate/dateProjects";
import ForwardArrow from "@/assets/aboutMe/ForwardArrow.svg";

const SelectedProjects = () => {
    const pathName = usePathname();
    const [selectedTab, setSelectedTab] = useState(dateProjects[0]);
    const [previousIndex, setPreviousIndex] = useState(0); // Зберігайте попередній індекс

    const selectProject = (project: any) => {
        setPreviousIndex(dateProjects.findIndex((p: any) => p.id === selectedTab.id)); // Оновіть попередній індекс
        setSelectedTab(project);
    };

    const swipeDirection = dateProjects.findIndex((p: any) => p.id === selectedTab.id) > previousIndex ? '100%' : '-100%'; // Визначте напрямок свайпу
    const getBackgroundImage = (isMobile: boolean) => isMobile ? '/selectedBlock/iphone.png' : '/selectedBlock/macbook.png';


    return (
        <div className="container-selected-projects">
            <h2 className="title-block">{pathName === "/ua" ? "Мої проєкти" : "My projects"}</h2>
            <div className="wrapper-container">
                <FadeInAnimation direction="left" delay={0.2}>
                    <div className="container-map-project">
                        <span className={"script"}>{"<project>"}</span>
                        {dateProjects.map((project: any) => (
                            <div key={project.id} className={"wrapper-select-project"}>
                                <span className="enumeration">0{project.id}</span>
                                <div
                                    className={project.id === 1 ? "wrapper-project-list-first-elem-border" : "wrapper-project-list-first-border"}
                                >
                                    <motion.div
                                        key={project.id}
                                        className={"wrapper-project-list"}
                                        onClick={() => selectProject(project)}
                                        whileHover={{
                                            scale: 1.05,
                                            transition: {
                                                duration: 0.5,
                                                damping: 10,
                                                ease: [0.17, 0.67, 0.83, 0.67],
                                                type: "spring",
                                                stiffness: 400,
                                            }
                                        }}
                                        whileTap={{
                                            scale: 0.99,
                                            transition: {
                                                type: "spring",
                                                stiffness: 400,
                                                damping: 10
                                            }
                                        }}
                                    >
                                        <div>
                                            <span
                                                className={project.id === selectedTab.id ? "name" : "name chose-name-color"}>{pathName === "/ua" ? `${project.nameUa}` : `${project.nameEn}`}</span>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        ))}
                        <span className={"script"}>{"</project>"}</span>
                    </div>
                </FadeInAnimation>
                <FadeInAnimation direction="right" delay={0.2}>
                    <AnimatePresence>
                        <motion.div className="continer-resilt">
                            {selectedTab &&
                                <div>
                                    <div
                                        className={selectedTab.isMobile ? "image-container-mobile" : "image-container"}
                                        style={{backgroundImage: `url(${getBackgroundImage(selectedTab.isMobile)})`}}>
                                        <motion.div
                                            key={selectedTab.id}
                                            initial={{x: swipeDirection, opacity: 0}}
                                            animate={{x: 0, opacity: 1}}
                                            exit={{x: -swipeDirection, opacity: 0}}
                                            transition={{
                                                x: {type: "tween", duration: 0.5},
                                                opacity: {duration: 0.25, delay: 0.25}
                                            }}
                                            className="image"
                                        >
                                            <Image
                                                src={selectedTab.img}
                                                alt={selectedTab.nameUa}
                                                className="image"
                                                fill={true}
                                                priority={true}
                                            />
                                        </motion.div>
                                    </div>
                                    <ShowMoreText
                                        text={pathName === "/ua" ? `${selectedTab.descriptionUa}` : `${selectedTab.descriptionEn}`}
                                        maxLength={200}
                                    />
                                    {
                                        selectedTab.link === null
                                            ?
                                            <span
                                                className="openProject">{pathName === "/ua" ? "В процесі..." : "In progress..."}
                                        </span>
                                            :
                                            <a
                                                className="openProject"
                                                href={selectedTab.link}
                                                target="_blank"
                                                title={pathName === "/ua" ? `${selectedTab.nameUa}` : `${selectedTab.nameUa}`}
                                            >
                                                {pathName === "/ua" ? `Переглянути проект` : `View the project`}
                                                <Image
                                                    src={ForwardArrow}
                                                    alt={"ForwardArrow"}
                                                    width={20}
                                                    height={20}
                                                />
                                            </a>
                                    }
                                </div>
                            }
                        </motion.div>
                    </AnimatePresence>
                </FadeInAnimation>
            </div>
        </div>
    );
};

export default SelectedProjects;