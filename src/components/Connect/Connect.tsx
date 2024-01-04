"use client"
import React, {useEffect, useRef} from 'react';
import FormHireMe from "@/components/FormHireMe/FormHireMe";
import "./Connect.scss";
import {usePathname} from "next/navigation";
import Button from "@/components/UI/Button/Button";
import FadeInAnimation from "@/components/UIA/FadeInAnimation/FadeInAnimation";
import {motion, useInView} from "framer-motion";
import {variantsH2} from "@/animation/variantsH2";

const Connect = () => {
    const pathName = usePathname();
    const videoRef = useRef<any>(null);
    const ref = useRef(null);
    const isInView = useInView(ref);


    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 2;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="container-connect">
            <div className="head-block">
                <motion.h2
                    ref={ref}
                    className="name"
                    variants={variantsH2(isInView)}
                    initial={"hidden"}
                    animate={"visible"}
                >
                    {pathName === "/ua" ? "Зв'язатися" : "Let’s connect"}
                </motion.h2>
                <a className="link-another-platform" href="mailto:OlegonTkach101@gmail.com">OlegonTkach101@gmail.com</a>
            </div>
            <div className="wrapper-block">
                <FadeInAnimation direction="left" delay={0.3}>
                    <div className="container-image">
                        <div className="img-wrapper">
                        <div className="img-left"></div>
                            <div className="img-right"></div>
                        </div>
                        <video
                            title={pathName === "/ua" ? "фоновий туман" : "фоновий туман"}
                            src={"/connect/smoke-background.mp4"}
                            autoPlay={true}
                            loop
                            muted
                            ref={videoRef}
                        />
                    </div>
                </FadeInAnimation>
                <FadeInAnimation direction="right" delay={0.3}>
                    <FormHireMe/>
                </FadeInAnimation>
            </div>
            <a
                className="download-pdf"
                href={"/Front-End-React-Developerр-Oleg-Tkach.pdf"}
                download={'Front-End-React-Developerр-Oleg-Tkach'}
            >
                <Button>{pathName === "/ua" ? "Завантажити резюме" : "Download resume"}</Button>
            </a>
        </div>
    );
};

export default Connect;