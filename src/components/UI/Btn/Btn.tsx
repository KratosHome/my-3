"use client"
import React, {FC} from 'react';
import "./Btn.scss";
import gsap from "gsap";

interface ButtonType {
    children: React.ReactNode;
    onClick?: () => void;
    refProps: React.RefObject<HTMLButtonElement>;
}

const Btn: FC<ButtonType> = ({children, onClick, refProps}) => {

    const  onLeave = () => {
        const timeline = gsap.timeline();
        timeline.to(refProps.current, {
            scale: 0.9,
            duration: 0.3,
            ease: "power1.inOut"
        }).to(refProps.current, {
            scale: 1,
            duration: 0.3,
            ease: "power1.inOut"
        });
    };
    const onEnter = () => {
        const timeline = gsap.timeline();
        timeline.to(refProps.current, {
            scale: 1.15,
            duration: 0.3,
            ease: "power1.inOut"
        }).to(refProps.current, {
            scale: 1,
            duration: 0.3,
            ease: "power1.out"
        });
    };
    return (
        <button
            ref={refProps}
            className="container-button"
            onClick={onClick}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
        >
            {children}
        </button>
    );
};

export default Btn;