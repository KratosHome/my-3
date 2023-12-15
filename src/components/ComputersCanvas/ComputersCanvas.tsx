"use client"
import React, {Suspense, useEffect, useState} from "react";
import {Canvas} from "@react-three/fiber";
import {OrbitControls, Preload, useGLTF} from "@react-three/drei";
import Loader from "@/components/UI/Loader/Loader";
import {useSelector} from "react-redux";
import {RootState} from "@/store/store";


const Computers = ({ isMobile }: any) => {
    const computer = useGLTF("./desktop_pc/scene.gltf");

    const {theme} = useSelector((state: RootState) => state.theme);

    return (
        <mesh>
            <hemisphereLight intensity={theme == "light" ? 3.15 : 1.15} groundColor={"black"} />
            <spotLight
                position={[-20, 50, 10]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={500}
            />
            <pointLight intensity={0.5} />
            <primitive
                object={computer.scene}
                scale={isMobile ? 0.7 : 0.75}
                position={isMobile ? [0, 5, -1.5] : [5, -2, -2.5]}
                rotation={[-0.01, -0.2, -0.1]}
            />
        </mesh>
    );
};


const ComputersCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 800px)");
        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event: any) => {
            setIsMobile(event.matches);
        };

        mediaQuery.addEventListener("change", handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    return (
        <Canvas
            key={isMobile ? "mobile" : "desktop"}
            frameloop='demand'
            shadows
            dpr={[1, 2]}
            camera={{
                position: isMobile ? [38, 10, 10] : [18, 0, -2],
                fov: 28
            }}
            gl={{preserveDrawingBuffer: true}}
        >
            <Suspense fallback={<Loader/>}>
                <OrbitControls
                    enableZoom={false}
                    target={[3, 0, 0]}
                    maxPolarAngle={Math.PI / 1.5}
                    minPolarAngle={Math.PI / 3}
                    maxAzimuthAngle={Math.PI * 0.8}
                    minAzimuthAngle={-Math.PI * 0.1}
                />
                <Computers isMobile={isMobile}/>
            </Suspense>
            <Preload all/>
        </Canvas>
    );
};

export default ComputersCanvas;