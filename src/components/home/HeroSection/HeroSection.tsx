"use client"
import {useRef, useState} from 'react';
import MainTitle from "@/components/home/HeroSection/MainTitle/MainTitle";
import st from "./heroSection.module.scss";
import MyModal from "@/components/UI/MyModal/MyModal";
import FormHireMe from "@/components/home/FormHireMe/FormHireMe";
import SocialLicks from "@/components/home/SocialLicks/SocialLicks";
import gsap from "gsap";
import Btn from "@/components/UI/Btn/Btn";
import {useGSAP} from "@gsap/react";
import ContainerModel from "@/components/home/HeroSection/ContainerModel/ContainerModel";
import {useTranslations} from "next-intl";


const HeroSection = () => {
    const t = useTranslations('page.home.HeroSection');
    const refH1 = useRef(null);
    const refH2 = useRef(null);
    const refButton = useRef(null);
    const refLinks = useRef(null);

    const [animationPlayed, setAnimationPlayed] = useState(true);


    useGSAP(() => {

        gsap.fromTo(refH1.current,
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
                    trigger: refH1.current,
                    start: "bottom bottom-=100",
                    end: "top top-=10",
                    toggleActions: "play reverse play reverse",
                },
                delay: 0,
                stagger: 0.1,
            })

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
                delay: animationPlayed ? 3 : 0,
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
                delay: animationPlayed ? 4.3 : 0,
                stagger: 0.4,
                onComplete: () => setAnimationPlayed(false)
            });
    });


    return (
        <>
            <div className={st.container}>
                <MainTitle refH1={refH1} refH2={refH2}/>
                <div className={st.hire_me}>
                    <MyModal
                        childrenOpen={
                            <Btn refProps={refButton}>
                                {t('hire-me')}
                            </Btn>
                        }
                        childrenModal={<FormHireMe/>}
                        layoutId={"head-hire-me"}
                    />
                    <SocialLicks refLinks={refLinks}/>
                </div>
            </div>
            <ContainerModel/>
        </>
    );
};

export default HeroSection;
