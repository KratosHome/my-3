"use client"
import React, {useRef, useState} from 'react';
import "./Projects.scss"
import {usePathname} from "next/navigation";
import FadeInAnimation from "@/components/UIA/FadeInAnimation/FadeInAnimation";
import {AnimatePresence, motion, useInView} from "framer-motion";
import Image from "next/image";
import ShowMoreText from "@/components/UI/ShowMoreText/ShowMoreText";
import {variantsH2} from "@/animation/variantsH2";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const date: any = [
    {
        id: 1,
        nameUa: "Rastcom - платформа для профісионалів та замовників",
        nameEn: "Rastcom - a platform for professionals and clients.",
        img: "/selectedBlock/rastcomFront.png",
        descriptionUa: "Rastcom перетворює спосіб, яким клієнти та професіонали знаходять один одного. Від юристів до офіціантів, наша платформа пропонує інтуїтивний календар, персоналізовані профілі, інтегрований чат, зручне відстеження замовлень та гнучке укладення контрактів, контроль робіт адміністраторами сайту за допомогою адмін панелі. З Rastcom, кожна послуга - це лише кілька кліків.",
        descriptionEn: "Rastcom transforms the way clients and professionals find each other. From lawyers to waiters, our platform offers an intuitive calendar, personalized profiles, integrated chat, convenient order tracking, flexible contract management, and site administrator work control via an admin panel. With Rastcom, every service is just a few clicks away",
        technologies: "react, TypeScript, mui, Redux Toolkit,  React Router, Socket.io, Braintree, React Big Calendar, Git",
        link: 'https://www.rastcom.ca',
        isMobile: false
    },
    {
        id: 2,
        nameUa: "Rastcom мобільний застосунок для профісионалів та замовників",
        nameEn: "Rastcom mobile app for professionals and clients.",
        img: "/selectedBlock/mobRastcom.jpeg",
        descriptionUa: "Додаток Rastcom - це ваш шлях до швидкого і надійного з'єднання з професіоналами у будь-якій сфері. Він забезпечує легке управління замовленнями, гнучке планування та безперервне спілкування, все в одному додатку, який завжди з вами.",
        descriptionEn: "The Rastcom app is your path to a quick and reliable connection with professionals in any field. It ensures easy order management, flexible planning, and continuous communication, all in one app that's always with you.",
        technologies: "React Native, TypeScript, Redux Toolkit, git",
        link: null,
        isMobile: true
    },
    {
        id: 3,
        nameUa: "Sharm Beauty - інтернет магазин косметики та парфюмерії",
        nameEn: "Sharm Beauty - an online store for cosmetics and perfumes.",
        img: "/selectedBlock/sharm.png",
        descriptionUa: "Як ментор та тім лід, я веду студентську команду у процесі розробки та модернізації вебсайту https://sharmbeauty.ua, забезпечуючи інтеграцію найкращих практик у дизайні, SEO та розробці за допомогою NextJS та React.",
        descriptionEn: "As a mentor and team leader, I lead a student team in the development and modernization of the website https://sharmbeauty.ua, ensuring the integration of best practices in design, SEO, and development using NextJS and React.",
        technologies: "react, NextJs, Redux Toolkit, framer motion, GSAP. Git",
        link: null,
        isMobile: false
    },
    {
        id: 4,
        nameUa: "meta data index",
        nameEn: "meta data index",
        img: "/selectedBlock/metaData.png",
        descriptionUa: "Частина системи Etere Media Asset Management, яка оркеструє робочі процеси та оптимізує цінність активів через централізоване управління медіа-контентом та пов'язаними метаданими",
        descriptionEn: "A part of the Etere Media Asset Management system, which orchestrates workflows and optimizes the value of assets through centralized management of media content and associated metadata",
        link: 'https://www.etere.com/DocView/9710/Etere-Launches-Web-Application-for-the-Fast-Insertion-of-Metadata.aspx',
        technologies: "React, ElectronJS, SCSS, MobX, SOAP, XML, SVN",
        isMobile: false
    }
]


const Projects = () => {
    const pathName = usePathname();
    const ref = useRef(null);
    const heRef = useRef(null);
    const refLeft = useRef(null);
    const refRight = useRef(null);

    const [selectedTab, setSelectedTab] = useState(date[0]);

    const selectProject = (project: any) => {
        setSelectedTab(project);
    };


    useGSAP(() => {

        const ctx = gsap.context(() => {
            gsap.fromTo(heRef.current,
                {
                    opacity: 0,
                    rotateX: 80,
                },
                {
                    opacity: 1,
                    rotateX: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: heRef.current,
                        start: "bottom bottom-=250",
                        end: "top top+=180",
                        toggleActions: "play reverse play reverse",
                    },
                    delay: 0,
                    stagger: 0.1,
                })

            gsap.fromTo(refRight.current,
                {
                    opacity: 0,
                    x: -1000,
                },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: heRef.current,
                        start: "bottom bottom-=250",
                        end: "top top-=80",
                        toggleActions: "play reverse play reverse",
                    },
                    delay: 0.5,
                    stagger: 0.1,
                })


            gsap.fromTo(refLeft.current,
                {
                    opacity: 0,
                    x: 1000,
                },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: heRef.current,
                        start: "bottom bottom-=250",
                        end: "top top-=80",
                        toggleActions: "play reverse play reverse",
                    },
                    delay: 0.5,
                    stagger: 0.1,
                })

        }, [heRef]);

        return () => ctx.revert();

    }, []);


    return (
        <div className="container-projects" ref={ref}>
            <h2 ref={heRef}
                className="title-block h2-animate"
            >
                {pathName === "/ua" ? "Мої проєкти" : "My projects"}
            </h2>
            <div className="wrapper-container" >
                <div className="container-map-project" ref={refLeft}>
                    <span className={"script"}>{"<project>"}</span>
                    {date.map((project: any) => (
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
                <div className="continer-resilt" ref={refRight}>
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
                                    src={"/icons/ForwardArrow.svg"}
                                    alt={"ForwardArrow"}
                                    width={20}
                                    height={20}
                                />
                            </a>
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;