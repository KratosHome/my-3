"use client"
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AnimatedPage = ({ children }: any) => {
    const elementRef = useRef();

    useEffect(() => {
        const el = elementRef.current;

        // Анімація "закриваючого" блоку, який з'являється зліва
        const tl = gsap.timeline();

        tl.to(el, {
            duration: 1,
            x: '100%',
            ease: 'power2.inOut',
        })
            .to(el, {
                duration: 1,
                x: '0%',
                ease: 'power2.inOut',
                delay: 1 // Затримка перед початком зворотної анімації
            });

    }, []);

    return (
        <>
            <div ref={elementRef} style={{
                position: 'fixed',
                top: 0,
                left: '-100%', // Початкова позиція зліва за екраном
                width: '100vw',
                height: '100vh',
                backgroundColor: 'black',
                zIndex: 9999,
            }}></div>
            <div className="content">
                {children}
            </div>
        </>
    );
};

export default AnimatedPage;
