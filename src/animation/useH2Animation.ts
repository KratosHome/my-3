import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useH2Animation = () => {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;

        if (element) {
            gsap.fromTo(element,
                {
                    opacity: 0,
                    scale: 0.5,
                    y: -50
                },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: element,
                        start: "top center+=200",
                        end: "top top+=50",
                        toggleActions: "play reverse play reverse",
                    },
                });
        }
    }, []);

    return ref;
};
