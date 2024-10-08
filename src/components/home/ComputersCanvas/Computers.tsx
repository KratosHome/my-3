"use client"
import React from 'react';
import {useGLTF} from "@react-three/drei";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";

const Computers = ({isMobile, rotation, refComputer}: any) => {
    const computer = useGLTF("./desktop_pc/scene.gltf");
    const theme = "light"


    useGSAP(() => {

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".computer__container",
                start: "top top",
                end: "bottom bottom",
                scrub: true,
                pin: ".computer__container",
                pinSpacing: false,
            }
        })

        tl.to(refComputer.current, {
            ease: "Power3.out ",
            duration: 0.5,
            scale: 0.5,
            x: 220,
        })
            .to(".computer__container", {
                x: -400,
                y: 0,
                z: 0,
                ease: "Power0.out",
                duration: 1.5,
            })
            .to(".computer__container", {
                x: 0,
                y: -110,
                z: 0,
                ease: "Power0.out",
                duration: 1.5,
            })

    }, {dependencies: [refComputer]});


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

/*

gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {

        ScrollTrigger.create({
            trigger: ".about-section",
            start: "top center",
            end: "bottom center",
            pin: ".main",
        })

    }, {dependencies: [refComputer]});
 */