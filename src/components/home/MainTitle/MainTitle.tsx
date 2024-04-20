"use client"
import React, {useRef} from 'react';
import './MainTitle.scss';
import {useTranslations} from "next-intl";
import {gsap} from 'gsap';
import {useGSAP} from "@gsap/react";

const MainTitle = ({refH2, refH1}: any) => {
    const t = useTranslations('page.home.HeroSection');
    const textRef = useRef<any>(null);
    const textRef2 = useRef<any>(null);

    useGSAP(() => {
        const width1 = `${textRef.current.scrollWidth}px`;
        const width2 = `${textRef2.current.scrollWidth}px`;
        const tl = gsap.timeline({paused: true});

        tl.fromTo(textRef.current, {width: "0"}, {width: width1, duration: 2, ease: "steps(37)"}, 0)
            .to(textRef.current, {borderRight: "none", duration: 0.1}, `+=2.1`);

        tl.fromTo(textRef2.current, {width: "0"}, {width: width2, duration: 1, ease: "steps(37)"}, "-=2")
            .to(textRef2.current, {borderRight: "none", duration: 0.1}, `+=2.6`);

        tl.play();
    }, {dependencies: [textRef, textRef2]});


    return (
        <div className="container-main-title">
            <h1 ref={refH1}>
                <span ref={textRef} className="line-1">
                    FRONT-END REACT
                </span>
                <span ref={textRef2} className="line-1">
                    DEVELOPER
                </span>
            </h1>
            <h2 ref={refH2}>{t('description')}</h2>
        </div>
    );
};

export default MainTitle;

