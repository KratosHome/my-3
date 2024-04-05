"use client"
import React, {Suspense, useEffect, useState} from "react";
import {Canvas} from "@react-three/fiber";
import {OrbitControls, Preload} from "@react-three/drei";
import Loader from "@/components/UI/loaders/Loader/Loader";
import Computers from "@/components/home/ComputersCanvas/Computers";

const ComputersCanvas = React.memo(() => {
    const refComputer = React.useRef(null);
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
            ref={refComputer}
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
            gl={{preserveDrawingBuffer: true}}
        >
            <Suspense fallback={<Loader/>}>
                <OrbitControls
                    enabled={!isMobile}
                    enableZoom={false}
                    target={[3, 0, 0]}
                    maxPolarAngle={Math.PI / 1.5}
                    minPolarAngle={Math.PI / 3}
                    maxAzimuthAngle={Math.PI * 0.8}
                    minAzimuthAngle={-Math.PI * 0.1}
                />
                <Computers isMobile={isMobile} rotation={rotation} refComputer={refComputer}/>
            </Suspense>
            <Preload all/>
        </Canvas>
    );
});

ComputersCanvas.displayName = 'ComputersCanvas';
export default ComputersCanvas;