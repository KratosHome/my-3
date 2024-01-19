"use client";
import React, {Suspense, useEffect, useRef, useState} from 'react';
import './ProjectsNew.scss';
import {projectsDate} from "@/mokDate/projectsDate";
import {usePathname} from "next/navigation";
import gsap from "gsap";
import {Canvas} from "@react-three/fiber";
import Loader from "@/components/UI/Loader/Loader";
import {OrbitControls} from "@react-three/drei";
import LaptopNew from "@/components/ProjectsNew/LaptopNew";
import ComputersCanvas from "@/components/ComputersCanvas/ComputersCanvas";

const ProjectsNew = () => {
    const pathName = usePathname();
    const [selectedTab, setSelectedTab] = useState(projectsDate[0]);

    const h2Animate = useRef(null);
    const refList = useRef(null);
    const refLeft = useRef(null);
    const refRight = useRef(null);


    useEffect(() => {

        const ctx = gsap.context(() => {
            gsap.fromTo(h2Animate.current,
                {
                    opacity: 0,
                    rotateX: -390,
                    x: 1010
                },
                {
                    opacity: 1,
                    x: 0,
                    rotateX: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: h2Animate.current,
                        start: "bottom bottom-=150",
                        end: "top top+=50",
                        toggleActions: "play reverse play reverse",
                    },
                    delay: 0,
                    stagger: 0.1,
                })


        }, [h2Animate, refList]);

        return () => ctx.revert();

    }, []);

// -----
    const [rotation, setRotation] = useState([0, 0, 0]);

    const handleMouseMove = (event: any) => {
        const {clientX, clientY} = event;
        const mouseX = (clientX / window.innerWidth) * 2 - 1;
        const mouseY = -(clientY / window.innerHeight) * 2 + 1;

        // Обмежте максимальне обертання
        const maxRotationY = Math.PI / 30; // Максимальне обертання по вертикалі (наприклад, 45 градусів)
        const maxRotationX = Math.PI / 20; // Максимальне обертання по горизонталі

        // Використайте Math.min і Math.max для обмеження обертання
        const newYRotation = Math.max(-maxRotationY, Math.min(maxRotationY, mouseY * maxRotationY));
        const newXRotation = Math.max(-maxRotationX, Math.min(maxRotationX, mouseX * maxRotationX));

        setRotation([0, newXRotation, newYRotation]);
    };


    return (
        <div className="container-projects-new">
            <h2 ref={h2Animate} className="title-block">
                {pathName === "/ua" ? "Мої проєкти" : "My projects"}
            </h2>
            <div className="wrapper-container">
                <div>
                    <span className={"script"}>{"<project>"}</span>
                    {projectsDate.map((item, index) =>
                        <div key={item.id} className="project-list">
                            <div className="line"/>
                            <div className="cintainer-name">
                                <div>
                                    <span className="enumeration">0{item.id}</span>
                                </div>
                                <span>{item.nameUa}</span>
                            </div>
                            {projectsDate.length === index + 1 ? <div className="line"/> : null}
                        </div>
                    )}
                    <span className={"script"}>{"</project>"}</span>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default ProjectsNew;