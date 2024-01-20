"use client"
import React, {useEffect, useRef, useState} from 'react';
import MainTitle from "@/components/MainTitle/MainTitle";
import ComputersCanvas from "@/components/ComputersCanvas/ComputersCanvas";
import "./HeroSection.scss";
import Swim from "@/components/UIA/Swim/Swim";
import MyModal from "@/components/UI/MyModal/MyModal";
import FormHireMe from "@/components/FormHireMe/FormHireMe";
import {usePathname} from "next/navigation";
import SocialLicks from "@/components/SocialLicks/SocialLicks";
import gsap from "gsap";
import Btn from "@/components/UI/Btn/Btn";
import {useScrollLock} from "@/hooks/useScrollLock";


const HeroSection = () => {
    const pathName = usePathname();
    const refH2 = useRef(null);
    const refComputer = useRef(null);
    const refButton = useRef(null);
    const refLinks = useRef(null);

    const [animationPlayed, setAnimationPlayed] = useState(true);



    useEffect(() => {

        const ctx = gsap.context(() => {
            gsap.fromTo(refH2.current,
                {
                    opacity: 0,
                    x: -210
                },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.5,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: refH2.current,
                        start: "bottom bottom-=100",
                        end: "top top-=10",
                        toggleActions: "play reverse play reverse",
                    },
                    delay: animationPlayed ? 2.8 : 0,
                    stagger: 0.1,
                    onComplete: () => setAnimationPlayed(false)
                })


            gsap.fromTo(refComputer.current,
                {
                    opacity: 0,
                    scale: 0.2,
                },
                {
                    opacity: 1,
                    scale: 1,
                    x: 0,
                    duration: 1.3,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: refComputer.current,
                        start: "bottom bottom-=100",
                        end: "top top-=10",
                        toggleActions: "play reverse play reverse",
                    },
                    delay: animationPlayed ? 3.5 : 0,
                    stagger: 0.1,
                    onComplete: () => setAnimationPlayed(false)
                })

            gsap.fromTo(refButton.current,
                {
                    opacity: 0.5,
                    x: -800,
                },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1.3,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: refButton.current,
                        start: "bottom bottom-=100",
                        end: "top top-=10",
                        toggleActions: "play reverse play reverse",
                    },
                    delay: animationPlayed ? 4 : 0,
                    stagger: 0.1,
                })

            gsap.fromTo(refLinks.current,
                {
                    opacity: 0,
                    x: -300
                }, {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: refButton.current,
                        start: "bottom bottom-=100",
                        end: "top top-=10",
                        toggleActions: "play reverse play reverse",
                    },
                    delay: animationPlayed ? 4.3 : 0,
                    stagger: 0.4,
                    onComplete: () => setAnimationPlayed(false)
                });

        }, [refH2, refComputer, refButton, refLinks]);

        return () => ctx.revert();

    }, []);



    return (
        <div className="container-3d">
            <MainTitle refH2={refH2}/>
            <div className="wrapper-hire-me">
                <div></div>
                <MyModal
                    childrenOpen={
                        <Btn refProps={refButton}>
                            {pathName === "/ua" ? "Найняти мене" : "Hire me"}
                        </Btn>
                    }
                    childrenModal={<FormHireMe/>}
                    layoutId={"2334342"}
                />
                <SocialLicks refLinks={refLinks}/>
            </div>
            <Swim className="computer">
                <div className="test"></div>
                <ComputersCanvas refComputer={refComputer}/>
            </Swim>
        </div>
    );
};

export default HeroSection;
