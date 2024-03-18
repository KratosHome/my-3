"use client"
import "./ContainerModel.scss";
import Swim from "@/components/UIA/Swim/Swim";
import React, {useEffect, useState} from 'react';
import ComputersCanvas from "@/components/ComputersCanvas/ComputersCanvas";

const ContainerModel = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    console.log("scrollPosition", scrollPosition > 500 || scrollPosition === 0 ? "1" : "-1",)
    return (
        <div
            style={{
                position: 'absolute',
                top: "70px",
                zIndex: scrollPosition > 500 || scrollPosition === 0 ? 1 : -1,
            }}>
            <section className="main">
                <Swim className="computer">
                    <div className="test"></div>
                    <ComputersCanvas/>
                </Swim>
            </section>
        </div>
    );
};

export default ContainerModel;