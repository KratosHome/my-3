"use client"
import React from 'react';
import {useGLTF} from "@react-three/drei";
import {useSelector} from "react-redux";
import {RootState} from "@/store/store";

const Computers = ({isMobile, rotation}: any) => {
    const computer = useGLTF("./desktop_pc/scene.gltf");

    const {theme} = useSelector((state: RootState) => state.theme);

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