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

const Computers = ({isMobile, rotation, refComputer}: any) => {
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
                cameraPositions: {x: camera.position.x, y: camera.position.y, z: camera.position.z},
                computerPositions: {x: 0, y: 0, z: 0, opacity: 1},
            },
            {
                trigger: ".about-section",
                start: "top bottom",
                end: "top top",
                cameraPositions: {x: 50, y: -50, z: 50},
                computerPositions: {x: 2, y: 0, z: -1.5, opacity: 1},
            },
            {
                trigger: ".project-section",
                start: "top bottom",
                end: "top top",
                cameraPositions: {x: 40, y: 0, z: 10},
                computerPositions: {x: 220, y: 0, z: -1.5, position: "absolute", opacity: 1},
            },
            {
                trigger: ".hide-model",
                start: "top bottom",
                end: "top top",
                pin: true,
                cameraPositions: {x: 0, y: 0, z: 0},
                computerPositions: {x: 20, y: 0, z: -1.5, opacity: 0},
            }
        ];

        triggers.forEach(({trigger, start, end, cameraPositions, computerPositions, pin}) => {
            ScrollTrigger.create({
                trigger,
                start,
                end,
                pin,
                scrub: true,
                markers: true,
                onEnter: () => {
                    gsap.to(camera.position, {
                        ...cameraPositions,
                        ease: "power1.out",
                        duration: 1.5
                    });
                    gsap.to(refComputer.current, {
                        ...computerPositions,
                        ease: "power1.out",
                        duration: 1.5
                    });
                },
                onEnterBack: () => {
                    gsap.to(camera.position, {
                        ...cameraPositions,
                        ease: "power1.out",
                        duration: 1.5
                    });
                    gsap.to(refComputer.current, {
                        ...computerPositions,
                        ease: "power1.out",
                        duration: 1.5
                    });
                },
            });
        });

    });

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