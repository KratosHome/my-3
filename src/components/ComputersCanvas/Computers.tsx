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

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".main",
                start: "top top",
                end: "bottom bottom",
                scrub: true,
                pin: true,
            }
        })

        tl.to(refComputer.current, {
            ease: "Power3.out ",
            duration: 0.5,
            scale: 0.5,
            x: 220,
        })
            .to(".main", {
                x: -400,
                y: 0,
                z: 0,
                ease: "Power0.out",
                duration: 1.5,
            })
            .to(".main", {
                x: 0,
                y: -80,
                z: 0,
                ease: "Power0.out",
                duration: 1.5,
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