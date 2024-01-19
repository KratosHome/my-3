import React, {useEffect} from 'react';
import {useGLTF} from "@react-three/drei";
import {useSelector} from "react-redux";
import {RootState} from "@/store/store";
import {useLoader} from "@react-three/fiber";
import {TextureLoader} from "three";
import * as THREE from "three";

const LaptopNew = ({rotation, selectedImage}: any) => {
    const computer = useGLTF("./desktop_pc/scene.gltf");

    const {scene} = computer;

    const {theme} = useSelector((state: RootState) => state.theme);

    const texture = useLoader(TextureLoader, `${selectedImage}`);

    useEffect(() => {
        scene.traverse((child) => {
            if (child instanceof THREE.Mesh && child.name === "Screen_lambert3_0") {
                const newMaterial = new THREE.MeshStandardMaterial({
                    map: texture,
                    color: theme == "light" ? new THREE.Color(1, 1, 1) : new THREE.Color(2.5, 2.5, 2.5),
                });
                child.material = newMaterial;
            }
        });
    }, [scene, texture, selectedImage, theme]);

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
                scale={25.5}
                position={[8, -1, 0]}
                rotation={[0, 1.5, 0]}
            />
        </mesh>
    );
};
export default LaptopNew;