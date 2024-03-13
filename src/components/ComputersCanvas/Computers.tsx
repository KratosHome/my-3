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

    useGSAP(() => {
        const triggers = [
            {
                trigger: ".hero-section",
                start: "top center",
                end: "bottom center",
                cameraPositions: {x: camera.position.x, y: camera.position.y, z: camera.position.z},
                computerPositions: {
                    x: 0,
                    y: 0,
                    z: 0,
                    opacity: 1,
                    height: "60vh",
                    width: "95vw"
                },
            },
            {
                trigger: ".about-section",
                start: "top center",
                end: "bottom center",
                cameraPositions: {x: camera.position.x, y: camera.position.y, z: camera.position.z},
                computerPositions: {
                    x: 100, y: 0, z: 0, opacity: 1,
                    height: "20vh",
                    width: "35vw"
                },
            },
            {
                trigger: ".project-section",
                start: "top bottom",
                end: "bottom bottom",
                cameraPositions: {x: camera.position.x, y: camera.position.y, z: camera.position.z},
                computerPositions: {
                    x: 720, y: 20, z: 0, opacity: 1,
                    height: "30vh",
                    width: "40vw"
                },
                markers: true
            },
            {
                trigger: ".hide-model",
                start: "top bottom",
                end: "bottom bottom",
                computerPositions: {
               opacity: 0,
                },
            }
        ];


        triggers.forEach(({trigger, start, end, cameraPositions, computerPositions, markers}) => {
            ScrollTrigger.create({
                trigger,
                start,
                end,
                scrub: true,
                markers,
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

        gsap.to(refComputer.current, {
            stagger: 0.5,
            duration: 5,
            scrollTrigger: {
                trigger: ".main",
                start: "top top",
                end: "bottom bottom",
                scrub: true,
                pin: true,
            }
        })

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