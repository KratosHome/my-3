import { useRef, useEffect } from 'react';
import gsap from 'gsap';


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
                        start: "bottom bottom-=100",
                        end: "top top-=10",
                        toggleActions: "play reverse play reverse",
                    },
                });
        }
    }, []);

    return ref;
};
