import {useRef, useEffect} from 'react';
import gsap from 'gsap';


export const useSideAnimation = ({direction}: any) => {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const xStart = direction === 'left' ? -1000 : 1000;

        gsap.fromTo(element,
            {
                opacity: 0,
                scale: 0.5,
                x: xStart,
            },
            {
                opacity: 1,
                scale: 1,
                x: 0,
                duration: 1.3,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: element,
                    start: "bottom bottom-=100",
                    end: "top top+=50",
                    toggleActions: "play reverse play reverse",
                },
                delay: 0,
                stagger: 0.1,
            }
        );
    }, [direction]);

    return ref;
};

