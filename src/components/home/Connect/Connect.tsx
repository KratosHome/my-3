"use client"
import React, {useEffect, useRef} from 'react';
import FormHireMe from "@/components/home/FormHireMe/FormHireMe";
import "./Connect.scss";
import {usePathname} from "next/navigation";
import Button from "@/components/UI/Button/Button";
import FadeInAnimation from "@/components/UI/FadeInAnimation/FadeInAnimation";
import {useH2Animation} from "@/animation/useH2Animation";

const Connect = () => {
    const pathName = usePathname();
    const videoRef = useRef<any>(null);
    const animatedRef = useH2Animation();

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 2;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="container-connect">
            <div className="head-block">
                <h2 ref={animatedRef} className="name">
                    {pathName === "/ua" ? "Зв'язатися" : "Let’s connect"}
                </h2>
                <a className="link-another-platform" href="mailto:OlegonTkach101@gmail.com">OlegonTkach101@gmail.com</a>
            </div>
            <div className="wrapper-block">
                <FadeInAnimation direction="left" delay={0.3}>
                    <div className="container-image">
                        <div className="img-wrapper">
                        <div className="img-left"></div>
                            <div className="img-right"></div>
                        </div>
                    </div>
                </FadeInAnimation>
                <FadeInAnimation direction="right" delay={0.3}>
                    <FormHireMe/>
                </FadeInAnimation>
            </div>
            <a
                className="download-pdf"
                href={"https://drive.google.com/file/d/1Q4PgAvuOPih8iE-Jw0XZxnKMpqCACF-N/view?usp=share_link"}
                target="_blank"
                rel="noopener noreferrer"
            >
                <Button>{pathName === "/ua" ? "Завантажити резюме" : "Download resume"}</Button>
            </a>
        </div>
    );
};

export default Connect;