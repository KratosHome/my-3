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

    return (
        <Swim className="computer"
              style={{
                  position: 'absolute',
                  zIndex: scrollPosition > 500 ? 1 : -1,
              }}>
            <div className="test"></div>
            <ComputersCanvas/>
        </Swim>
    );
};

export default ContainerModel;