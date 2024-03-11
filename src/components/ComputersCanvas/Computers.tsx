"use client"
import React from 'react';
import {useGLTF} from "@react-three/drei";
import {useSelector} from "react-redux";
import {RootState} from "@/store/store";
import gsap from "gsap";
import {useThree} from "@react-three/fiber";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Computers = ({isMobile, rotation}: any) => {
    const computer = useGLTF("./desktop_pc/scene.gltf");

    const {theme} = useSelector((state: RootState) => state.theme);


    const {scene, camera} = useThree();
    const tl = gsap.timeline();

    useGSAP(() => {
        const triggers = [
            {
                trigger: ".hero-section",
                start: "top bottom",
                end: "top top",
                positions: {x: camera.position.x, y: camera.position.y, z: camera.position.z}
            },
            {
                trigger: ".about-section",
                start: "top bottom",
                end: "top top",
                toggleClass: "hide-model",
                positions: {x: 50, y: -50, z: 50}
            },
            {
                trigger: ".project-section",
                start: "top bottom",
                end: "top top",
                toggleClass: "project-model",
                positions: {x: 40, y: 0, z: 10}
            },
            {
                trigger: ".hide-model",
                start: "top bottom",
                end: "top top",
                toggleClass: "hide-model",
                positions: {x: 0, y: 0, z: 1000}
            }
        ];

        triggers.forEach(({trigger, start, end, positions, toggleClass}) => {
            ScrollTrigger.create({
                trigger,
                start,
                end,
                toggleClass,
                scrub: true,
                markers: true,
                onEnter: () => gsap.to(camera.position, {
                    ...positions,
                    ease: "power1.out",
                    duration: 1.5
                }),
                onEnterBack: () => gsap.to(camera.position, {
                    ...positions,
                    ease: "power1.out",
                    duration: 1.5
                }),
            });
        });

    }, {dependencies: [camera]});

    return (
        <mesh rotation={[0, rotation, 0]}>
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
                scale={isMobile ? 0.7 : 0.75}
                position={isMobile ? [0, 5, -1.5] : [5, -2, -2.5]}
                rotation={[-0.01, -0.2, -0.1]}
            />
        </mesh>
    );
};
export default Computers;