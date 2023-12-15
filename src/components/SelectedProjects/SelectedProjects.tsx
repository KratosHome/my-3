"use client"
import React, {useState} from 'react';
import "./SelectedProjects.scss"
import {motion, AnimatePresence} from "framer-motion";
import Image from 'next/image'
import {usePathname} from "next/navigation";
import ShowMoreText from "@/components/UI/ShowMoreText/ShowMoreText";
import FadeInAnimation from "@/components/UIA/FadeInAnimation/FadeInAnimation";

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
        img: "/selectedBlock/rastcomApp.png",
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
    },
    {
        id: 5,
        nameUa: "MovingWaldo is a platform for movers",
        nameEn: "Movingwaldo - платформа для перевізників",
        img: "/selectedBlock/movingwaldo.png",
        descriptionUa: "Інтеграція інструментів для забезпечення прозорості цін і легкості порівняння послуг переїзду через MovingWaldo включає можливість безпосереднього бронювання, покращений аналіз даних для персоналізованих пропозицій та інтуїтивний інтерфейс, що забезпечує гнучкість та зручність для користувачів",
        descriptionEn: "The integration of tools to ensure transparency in pricing and ease of comparison for moving services through MovingWaldo includes the capability for direct booking, enhanced data analysis for personalized offerings, and an intuitive interface, providing flexibility and convenience for users.",
        technologies: "react, TypeScript, SCSS, git",
        link: 'https://www.movingwaldo.com',
        isMobile: false
    },
]

const SelectedProjects = () => {
    const pathName = usePathname();
    const [selectedTab, setSelectedTab] = useState(date[0]);
    const [previousIndex, setPreviousIndex] = useState(0); // Зберігайте попередній індекс

    const selectProject = (project: any) => {
        setPreviousIndex(date.findIndex((p: any) => p.id === selectedTab.id)); // Оновіть попередній індекс
        setSelectedTab(project);
    };

    const swipeDirection = date.findIndex((p: any) => p.id === selectedTab.id) > previousIndex ? '100%' : '-100%'; // Визначте напрямок свайпу
    const getBackgroundImage = (isMobile: boolean) => isMobile ? '/selectedBlock/iphone.png' : '/selectedBlock/macbook.png';


    //     {pathName === "/ua" ? "" : ""}
    return (
        <div className="container-selected-projects">
            <span>{pathName === "/ua" ? "Мої проекти" : "My projects"}</span>
            <div className="wrapper-container">
                <FadeInAnimation direction="left" delay={0.2}>
                    <div className="container-map-project">
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
                                            <span>{pathName === "/ua" ? `${project.nameUa}` : `${project.nameEn}`}</span>
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
                                                    src={"/icons/ForwardArrow.svg"}
                                                    alt={"ForwardArrow"}
                                                    width={20}
                                                    height={20}/>
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