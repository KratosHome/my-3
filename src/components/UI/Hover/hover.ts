import {gsap} from "gsap";
export const handleHover = (svgRef: any) => {
    gsap.fromTo(svgRef.current,
        { scale: 1 },
        {
            scale: 0.6,
            duration: 0.3,
            ease: 'power1.inOut',
            yoyo: true,
            repeat: 1
        }
    );
};