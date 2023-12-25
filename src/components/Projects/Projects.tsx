"use client"
import React, {Suspense, useEffect, useRef, useState} from 'react';
import "./Projects.scss"
import {usePathname} from "next/navigation";
import FadeInAnimation from "@/components/UIA/FadeInAnimation/FadeInAnimation";
import {AnimatePresence, motion} from "framer-motion";
import Image from "next/image";
import ShowMoreText from "@/components/UI/ShowMoreText/ShowMoreText";
import {OrbitControls, Preload, useGLTF} from "@react-three/drei";
import {useSelector} from "react-redux";
import {RootState} from "@/store/store";
import {Canvas, useLoader, useThree} from "@react-three/fiber";
import Loader from "@/components/UI/Loader/Loader";
import {TextureLoader} from "three";
import * as THREE from 'three';

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
    }
]


const Laptop = ({isMobile, rotation, selectedImage}: any) => {
    const computer = useGLTF("/final_laptop/scene.gltf");
    const {scene} = computer;

    const {theme} = useSelector((state: RootState) => state.theme);



    const texture = useLoader(TextureLoader, `${selectedImage}`);
    const materialNode = scene.getObjectByName("Object_5");

    useEffect(() => {
        // Траверсування сцени для пошуку відповідного Mesh об'єкта
        scene.traverse((child) => {
            if (child instanceof THREE.Mesh && child.name === "Screen_lambert3_0") {
                // Створіть новий матеріал з новою текстурою
                const newMaterial = new THREE.MeshStandardMaterial({
                    map: texture,

                    metalness: 0, // Неметалічний матеріал
                    roughness: 1, // Повна шорсткість
                    transparent: false, // Не використовувати прозорість
                    opacity: 1, // Повна непрозорість
                });

                // Застосуйте новий матеріал до обраного Mesh об'єкта
                child.material = newMaterial;
            }
        });
        console.log("selectedImage", selectedImage)
    }, [scene, texture, selectedImage]);

    return (
        <mesh rotation={rotation}>
            <hemisphereLight intensity={theme == "light" ? 3.15 : 1.15} groundColor={"black"}/>
            <spotLight
                position={[-20, 50, 10]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={500}
            />
            <pointLight intensity={0.5}/>
            <primitive
                object={computer.scene}
                scale={isMobile ? 5.4 : 25.5}
                position={isMobile ? [0, 5, 1.5] : [10, 0, 0]}
                rotation={[0, 1.5, 0]}
            />

        </mesh>
    );
};

const Projects = () => {
    const pathName = usePathname();

    const [selectedTab, setSelectedTab] = useState(date[0]);
    const [previousIndex, setPreviousIndex] = useState(0); // Зберігайте попередній індекс

    const [isMobile, setIsMobile] = useState(false);
    const [rotation, setRotation] = useState([0, 0, 0]);
    const selectProject = (project: any) => {
        setPreviousIndex(date.findIndex((p: any) => p.id === selectedTab.id)); // Оновіть попередній індекс
        setSelectedTab(project);
    };

    const swipeDirection = date.findIndex((p: any) => p.id === selectedTab.id) > previousIndex ? '100%' : '-100%'; // Визначте напрямок свайпу
    const getBackgroundImage = (isMobile: boolean) => isMobile ? '/selectedBlock/iphone.png' : '/selectedBlock/macbook.png';


    const handleMouseMove = (event: any) => {
        const {clientX, clientY} = event;
        const mouseX = (clientX / window.innerWidth) * 2 - 1;
        const mouseY = -(clientY / window.innerHeight) * 2 + 1;

        // Обмежте максимальне обертання
        const maxRotationY = Math.PI / 10; // Максимальне обертання по вертикалі (наприклад, 45 градусів)
        const maxRotationX = Math.PI / 4; // Максимальне обертання по горизонталі

        // Використайте Math.min і Math.max для обмеження обертання
        const newYRotation = Math.max(-maxRotationY, Math.min(maxRotationY, mouseY * maxRotationY));
        const newXRotation = Math.max(-maxRotationX, Math.min(maxRotationX, mouseX * maxRotationX));

        setRotation([0, newXRotation, newYRotation]);
    };
    return (
        <div className="container-projects">

            <span className="title-block">{pathName === "/ua" ? "Мої проєкти" : "My projects"}</span>
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
                            <Canvas
                                frameloop='demand'
                                shadows
                                dpr={[1, 2]}
                                camera={{
                                    position: isMobile ? [38, 10, 10] : [18, 0, -2],
                                    fov: 28
                                }}
                                gl={{preserveDrawingBuffer: true}}
                                onPointerMove={handleMouseMove}
                            >
                                <Suspense fallback={<Loader/>}>
                                    <OrbitControls
                                        enableZoom={false}
                                        enablePan={false}
                                        enableRotate={false}
                                        target={[3, 0, 0]}
                                        maxPolarAngle={Math.PI / 1.5}
                                        minPolarAngle={Math.PI / 3}
                                        maxAzimuthAngle={Math.PI * 0.8}
                                        minAzimuthAngle={-Math.PI * 0.1}
                                    />
                                    <Laptop isMobile={isMobile} rotation={rotation} selectedImage={selectedTab.img}/>
                                </Suspense>
                            </Canvas>
                        </motion.div>
                    </AnimatePresence>
                </FadeInAnimation>
            </div>
        </div>
    );
};

export default Projects;

/*
    useEffect(() => {
        if (materialNode) {
            materialNode.material.map = texture;
            materialNode.material.needsUpdate = true;
        }
    }, [scene]);
 */