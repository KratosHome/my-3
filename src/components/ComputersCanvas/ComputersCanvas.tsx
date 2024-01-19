"use client"
import React, {Suspense, useEffect, useLayoutEffect, useRef, useState} from "react";
import {Canvas, useThree} from "@react-three/fiber";
import {Environment, OrbitControls, Preload, useGLTF} from "@react-three/drei";
import Loader from "@/components/UI/Loader/Loader";
import {useSelector} from "react-redux";
import {RootState} from "@/store/store";
import gsap from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Computers = ({isMobile, rotation}: any) => {
    const computer = useGLTF("./desktop_pc/scene.gltf");

    const {theme} = useSelector((state: RootState) => state.theme);


    const {scene, camera} = useThree();
    const tl = gsap.timeline();

    useEffect(() => {
        const triggers = [
            {
                trigger: ".about-section",
                start: "top bottom",
                end: "top top",
                positions: { x: 50, y: -50, z: 50 }
            },
            {
                trigger: ".project-section",
                start: "top bottom",
                end: "top top",
                positions: { x: 0, y: 0, z: 20 }
            },
            {
                trigger: ".services-section",
                start: "top bottom",
                end: "top top",
                positions: { x: 0, y: -2, z: 500 }
            }
        ];
        const initialPosition = { x: camera.position.x, y: camera.position.y, z: camera.position.z };


        triggers.forEach(({ trigger, start, end, positions }) => {
            ScrollTrigger.create({
                trigger,
                start,
                end,
                scrub: 1.5, // Збільшений параметр scrub для плавності
                onEnter: () => gsap.to(camera.position, {
                    ...positions,
                    ease: "power1.out",
                    duration: 2 // Додавання тривалості анімації
                }),
                onLeaveBack: () => gsap.to(camera.position, {
                    ...initialPosition,
                    ease: "power1.in",
                    duration: 2
                })
            });
        });

        return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }, []);

// services-section
    return (
        <>
            <directionalLight
                castShadow
                position={[-2.38, 1.32, 0.74]}
                intensity={5}
            />

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
        </>
    );
};


const ComputersCanvas = ({refComputer}: any) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 767px)");
        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event: any) => {
            setIsMobile(event.matches);
        };

        mediaQuery.addEventListener("change", handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    const [rotation, setRotation] = useState(0);
    useEffect(() => {
        if (isMobile) {
            const interval = setInterval(() => {
                setRotation((prev) => prev + 0.005); // Змінити швидкість обертання тут
            }, 16); // ~60 кадрів в секунду
            return () => clearInterval(interval);
        }
    }, [isMobile]);

    const handleTouchMove = (event: any) => {
        if (isMobile) {
            event.stopPropagation();
            event.preventDefault()
        }
    };

    return (
        <Canvas
            style={{touchAction: 'auto !important'}}
            key={isMobile ? "mobile" : "desktop"}
            frameloop='demand'
            onPointerDown={handleTouchMove}
            onPointerMove={handleTouchMove}
            onPointerUp={handleTouchMove}
            shadows
            dpr={[1, 2]}
            camera={{
                position: isMobile ? [38, 10, 10] : [18, 0, -2],
                fov: 28
            }}
        >
            <Suspense fallback={<Loader/>}>
                <OrbitControls
                    enablePan={false}
                    enableRotate={false}
                    enabled={!isMobile}
                    enableZoom={false}
                    target={[3, 0, 0]}
                    maxPolarAngle={Math.PI / 1.5}
                    minPolarAngle={Math.PI / 3}
                    maxAzimuthAngle={Math.PI * 0.8}
                    minAzimuthAngle={-Math.PI * 0.1}
                />
                <Computers isMobile={isMobile} rotation={rotation}/>
            </Suspense>
            <Preload all/>
        </Canvas>
    );
};

export default ComputersCanvas;