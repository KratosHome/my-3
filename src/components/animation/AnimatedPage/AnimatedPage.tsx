"use client"
import {gsap} from 'gsap';
import {useGSAP} from "@gsap/react";

const AnimatedPage = ({children}: { children: React.ReactNode }) => {

    useGSAP(() => {
        gsap.fromTo(".page-transition", {
            x: '100%',
        }, {
            duration: 1,
            x: '0%',
            ease: 'power2.inOut',
        });
    });

    return (
        <>
            {children}
        </>
    );
};

export default AnimatedPage;
