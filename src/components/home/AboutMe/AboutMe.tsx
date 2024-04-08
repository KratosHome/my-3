"use client"
import React, {useRef} from 'react';
import "./AboutMe.scss";
import Image from "next/image";
import Swim from "@/components/UI/Swim/Swim";
import {usePathname} from "next/navigation";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import axiosLogo from "../../../assets/aboutMe/axiosLogo.svg";
import CSSLogo from "../../../assets/aboutMe/CSSLogo.svg";
import ElectronJsLogo from "../../../assets/aboutMe/ElectronJsLogo.svg";
import gitOriginalLogo from "../../../assets/aboutMe/gitOriginalLogo.svg";
import HTMLLogo from "../../../assets/aboutMe/HTMLLogo.svg";
import JavaScriptLogo from "../../../assets/aboutMe/JavaScriptLogo.svg";
import MobXLogo from "../../../assets/aboutMe/MobXLogo.svg";
import NextLogo from "../../../assets/aboutMe/NextLogo.svg";
import ReactLogo from "../../../assets/aboutMe/ReactLogo.svg";
import reactSpringLogo from "../../../assets/aboutMe/reactSpringLogo.svg";
import ReduxLogo from "../../../assets/aboutMe/ReduxLogo.svg";
import SocketLogo from "../../../assets/aboutMe/SocketLogo.svg";
import StrapiLogo from "../../../assets/aboutMe/StrapiLogo.svg";
import TypeScriptLogo from "../../../assets/aboutMe/TypeScriptLogo.svg";
import ForwardArrow from "../../../assets/icons/ForwardArrow.svg";

const AboutMe = () => {
    const pathName = usePathname();

    const heRef = useRef(null);
    const refLeft = useRef(null);
    const refRight = useRef(null);
    const refA = useRef(null);

    useGSAP(() => {

        gsap.fromTo(heRef.current,
            {
                opacity: 0,
                rotateX: 80,
            },
            {
                opacity: 1,
                rotateX: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: heRef.current,
                    start: "bottom bottom-=250",
                    end: "top top+=130",
                    toggleActions: "play reverse play reverse",
                },
                delay: 0,
                stagger: 0.1,
            })

        gsap.fromTo(refRight.current,
            {
                opacity: 0,
                x: 1000,
            },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: heRef.current,
                    start: "bottom bottom-=250",
                    end: "top top-=80",
                    toggleActions: "play reverse play reverse",
                },
                delay: 0.5,
                stagger: 0.1,
            })
        gsap.fromTo(refA.current,
            {
                opacity: 0,
                x: 1000,
            },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: heRef.current,
                    start: "bottom bottom-=250",
                    end: "top top-=80",
                    toggleActions: "play reverse play reverse",
                },
                delay: 0.5,
                stagger: 0.1,
            })


        gsap.fromTo(refLeft.current,
            {
                opacity: 0,
                x: -1000,
            },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: heRef.current,
                    start: "bottom bottom-=250",
                    end: "top top-=80",
                    toggleActions: "play reverse play reverse",
                },
                delay: 0.5,
                stagger: 0.1,
            })
    });

    return (
        <div className="container-about-me">
            <h2 className="h2-amimate" ref={heRef}>
                {pathName === "/ua" ? "Про мене" : "About me"}
            </h2>
            <div>
                <div ref={refLeft}>
                    <Swim>
                        {pathName === "/ua" ? "Вітаю! Моє ім'я Олег, і я перетворюю програмування у форму виразу, де кожна лінія коду — це частина більшої історії. Як фронтенд-розробник, я пристрасно використовую React для створення веб-сайтів, які не тільки виглядають чудово, але й працюють бездоганно, завдяки продуманій архітектурі та сильній бізнес-логіці." : "Hello! My name is Oleg, and I transform programming into a form of expression where each line of code is part of a larger story. As a frontend developer, I passionately use React to create websites that not only look great but also work flawlessly, thanks to thoughtful architecture and strong business logic."}
                    </Swim>
                </div>
                <div ref={refRight}>
                    <div className="icons-about-me">
                        <Swim isFast={true} delay={0.2}>
                            <Image
                                title={pathName === "/ua" ? "React логотип" : "React Logo"}
                                src={ReactLogo}
                                alt={"react"}
                                width={40}
                                height={40}
                            />
                        </Swim>
                        <Swim isFast={true} delay={0.4}>
                            <Image
                                title={pathName === "/ua" ? "Некст жс логотип" : "NextJS Logo"}
                                src={NextLogo}
                                alt={"nextJS"}
                                width={40}
                                height={40}
                            />
                        </Swim>
                        <Swim isFast={true} delay={0.6}>
                            <Image
                                title={pathName === "/ua" ? "ElectronJs логотип" : "ElectronJs Logo"}
                                src={ElectronJsLogo}
                                alt={"ElectronJs"}
                                width={40}
                                height={40}
                            />
                        </Swim>
                        <Swim isFast={true} delay={0.8}>
                            <Image
                                title={pathName === "/ua" ? "JavaScript логотип" : "JavaScript Logo"}
                                src={JavaScriptLogo}
                                alt={"JavaScript"}
                                width={40}
                                height={40}
                            />
                        </Swim>
                        <Swim isFast={true} delay={1}>
                            <Image
                                title={pathName === "/ua" ? "TypeScript логотип" : "TypeScript Logo"}
                                src={TypeScriptLogo}
                                alt={"TypeScript"}
                                width={40}
                                height={40}
                            />
                        </Swim>
                        <Swim isFast={true} delay={0.2}>
                            <Image
                                title={pathName === "/ua" ? "HTML логотип" : "HTML Logo"}
                                src={HTMLLogo}
                                alt={"HTML"}
                                width={40}
                                height={40}
                            />
                        </Swim>
                        <Swim isFast={true} delay={0.4}>
                            <Image
                                title={pathName === "/ua" ? "CSS логотип" : "CSS Logo"}
                                src={CSSLogo}
                                alt={"CSS"}
                                width={40}
                                height={40}
                            />
                        </Swim>
                        <Swim isFast={true} delay={0.6}>
                            <Image
                                title={pathName === "/ua" ? "Redux логотип" : "Redux Logo"}
                                src={ReduxLogo}
                                alt={"Redux"}
                                width={40}
                                height={40}
                            />
                        </Swim>
                        <Swim isFast={true} delay={0.8}>
                            <Image
                                title={pathName === "/ua" ? "MobX логотип" : "MobX Logo"}
                                src={MobXLogo}
                                alt={"MobXLogo"}
                                width={40}
                                height={40}
                            />
                        </Swim>
                        <Swim isFast={true} delay={1}>
                            <Image
                                src={SocketLogo}
                                alt={"Socket"}
                                width={40}
                                height={40}
                            />
                        </Swim>
                        <Swim isFast={true} delay={0.2}>
                            <Image
                                title={pathName === "/ua" ? "axios логотип" : "axios Logo"}
                                src={axiosLogo}
                                alt={"axios"}
                                width={40}
                                height={40}
                            />
                        </Swim>
                        <Swim isFast={true} delay={0.4}>
                            <Image
                                title={pathName === "/ua" ? "reactSpring логотип" : "reactSpring Logo"}
                                src={reactSpringLogo}
                                alt={"reactSpringLogo"}
                                width={40}
                                height={40}
                            />
                        </Swim>
                        <Swim isFast={true} delay={0.6}>
                            <Image
                                title={pathName === "/ua" ? "Strapi логотип" : "Strapi Logo"}
                                src={StrapiLogo}
                                alt={"Strapi"}
                                width={40}
                                height={40}
                            />
                        </Swim>
                        <Swim isFast={true} delay={0.8}>
                            <Image
                                title={pathName === "/ua" ? "git логотип" : "git Logo"}
                                src={gitOriginalLogo}
                                alt={"gitOriginalLogo"}
                                width={40}
                                height={40}
                            />
                        </Swim>
                    </div>
                </div>
            </div>
            <a
                ref={refA}
                href={"https://drive.google.com/file/d/1Q4PgAvuOPih8iE-Jw0XZxnKMpqCACF-N/view?usp=share_link"}
                target="_blank"
                rel="noopener noreferrer"
            >
                {pathName === "/ua" ? "Завантажити резюме" : "Download resume"}
                <Image
                    title={pathName === "/ua" ? "Стрілка вперед" : "Forward Arrow"}
                    src={ForwardArrow}
                    alt={"arrow-resume"}
                    width={20}
                    height={20}
                />
            </a>
        </div>
    );
};

export default AboutMe;