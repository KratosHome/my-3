"use client"
import React, {useRef, useState} from 'react';
import "./Projects.scss"
import {usePathname} from "next/navigation";
import Image from "next/image";
import ShowMoreText from "@/components/UI/ShowMoreText/ShowMoreText";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import ForwardArrow from "../../../assets/icons/ForwardArrow.svg";
import {dateProjects} from "@/mokDate/dateProjects";


const Projects = () => {
    const pathName = usePathname();
    const refHover = useRef(null);
    const ref = useRef(null);
    const heRef = useRef(null);
    const refLeft = useRef(null);
    const refRight = useRef(null);
    const {contextSafe} = useGSAP();

    const [selectedTab, setSelectedTab] = useState(dateProjects[0]);

    const selectProject = (project: any) => {
        setSelectedTab(project);
    };


    useGSAP(() => {

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
                    start: "bottom bottom-=150",
                    end: "top top+=100",
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
                    end: "top top-=320",
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
                    end: "top top-=320",
                    toggleActions: "play reverse play reverse",
                },
                delay: 0.5,
                stagger: 0.1,
            })


    });


    const handleMouseEnter = contextSafe((projectId: any) => {
        gsap.fromTo(`.hover-clas-${projectId}`,
            {scale: 1,},
            {scale: 0.9, duration: 0.3, ease: 'power1.inOut', yoyo: true, repeat: 1}
        );
    });


    return (
        <div className="container-projects" ref={ref}>
            <h2 ref={heRef}
                className="title-block h2-animate"
            >
                {pathName === "/ua" ? "Мої проєкти" : "My projects"}
            </h2>
            <div className="wrapper-container">
                <div className="container-map-project" ref={refLeft}>
                    <span className={"script"}>{"<project>"}</span>
                    {dateProjects.map((project: any) => (
                        <div
                            key={project.id}
                            className={"wrapper-select-project"}
                            onMouseEnter={() => handleMouseEnter(project.id)}
                            onClick={() => selectProject(project)}>
                            <span className="enumeration">0{project.id}</span>
                            <div
                                className={project.id === 1 ? "wrapper-project-list-first-elem-border" : "wrapper-project-list-first-border"}>
                                <div className={`wrapper-project-list hover-clas-${project.id}`} ref={refHover}>
                                    <span
                                        className={project.id === selectedTab.id ? "name" : "name chose-name-color"}>{pathName === "/ua" ? `${project.nameUa}` : `${project.nameEn}`}</span>
                                </div>
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
                                    src={ForwardArrow}
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