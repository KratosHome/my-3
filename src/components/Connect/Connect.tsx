"use client"
import React, {useEffect, useRef} from 'react';
import FormHireMe from "@/components/FormHireMe/FormHireMe";
import "./Connect.scss";
import {usePathname} from "next/navigation";
import Button from "@/components/UI/Button/Button";
import FadeInAnimation from "@/components/UIA/FadeInAnimation/FadeInAnimation";

const Connect = () => {
    const pathName = usePathname();

    const videoRef = useRef<any>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 2;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="container-connect">
            <div className="head-block">
                <span className="name">{pathName === "/ua" ? "Відправити контакт" : "Let’s connect"}</span>
                <a href="mailto:OlegonTkach101@gmail.com">OlegonTkach101@gmail.com</a>
            </div>
            <div className="wrapper-block">
                <FadeInAnimation direction="left" delay={0.3}>
                    <div className="container-image">
                        <div className="img-wrapper">
                            <div className="img-left"></div>
                            <div className="img-right"></div>
                        </div>
                        <video
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