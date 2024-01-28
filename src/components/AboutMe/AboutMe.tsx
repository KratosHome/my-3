"use client"
import React, {useEffect, useRef} from 'react';
import "./AboutMe.scss";
import Image from "next/image";
import Swim from "@/components/UIA/Swim/Swim";
import {usePathname} from "next/navigation";
import gsap from "gsap";

const AboutMe = () => {
    const pathName = usePathname();

    const heRef = useRef(null);
    const refLeft = useRef(null);
    const refRight = useRef(null);
    const refA = useRef(null);

    useEffect(() => {

        const ctx = gsap.context(() => {
            gsap.fromTo(heRef.current,
                {
                    opacity: 0,
                    rotateX: 80,
                },
                {
                    opacity: 1,
                    rotateX: 0,
                    duration: 0.5,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: heRef.current,
                        start: "bottom bottom-=80",
                        end: "top top+=80",
                        toggleActions: "play reverse play reverse",
                        scrub: true,
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


        }, [heRef]);

        return () => ctx.revert();

    }, []);
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
                                src={"./aboutMe/ReactLogo.svg"}
                                alt={"react"}
                                width={40}
                                height={40}
                            />
                        </Swim>
                        <Swim isFast={true} delay={0.4}>
                            <Image
                                title={pathName === "/ua" ? "Некст жс логотип" : "NextJS Logo"}
                                src={"./aboutMe/NextLogo.svg"}
                                alt={"nextJS"}
                                width={40}
                                height={40}
                            />
                        </Swim>
                        <Swim isFast={true} delay={0.6}>
                            <Image
                                title={pathName === "/ua" ? "ElectronJs логотип" : "ElectronJs Logo"}
                                src={"./aboutMe/ElectronJsLogo.svg"}
                                alt={"ElectronJs"}
                                width={40}
                                height={40}
                            />
                        </Swim>
                        <Swim isFast={true} delay={0.8}>
                            <Image
                                title={pathName === "/ua" ? "JavaScript логотип" : "JavaScript Logo"}
                                src={"./aboutMe/JavaScriptLogo.svg"}
                                alt={"JavaScript"}
                                width={40}
                                height={40}
                            />
                        </Swim>
                        <Swim isFast={true} delay={1}>
                            <Image
                                title={pathName === "/ua" ? "TypeScript логотип" : "TypeScript Logo"}
                                src={"./aboutMe/TypeScriptLogo.svg"}
                                alt={"TypeScript"}
                                width={40}
                                height={40}
                            />
                        </Swim>
                        <Swim isFast={true} delay={0.2}>
                            <Image
                                title={pathName === "/ua" ? "HTML логотип" : "HTML Logo"}
                                src={"./aboutMe/HTMLLogo.svg"}
                                alt={"HTML"}
                                width={40}
                                height={40}
                            />
                        </Swim>
                        <Swim isFast={true} delay={0.4}>
                            <Image
                                title={pathName === "/ua" ? "CSS логотип" : "CSS Logo"}
                                src={"./aboutMe/CSSLogo.svg"}
                                alt={"CSS"}
                                width={40}
                                height={40}
                            />
                        </Swim>
                        <Swim isFast={true} delay={0.6}>
                            <Image
                                title={pathName === "/ua" ? "Redux логотип" : "Redux Logo"}
                                src={"./aboutMe/ReduxLogo.svg"}
                                alt={"Redux"}
                                width={40}
                                height={40}
                            />
                        </Swim>
                        <Swim isFast={true} delay={0.8}>
                            <Image
                                title={pathName === "/ua" ? "MobX логотип" : "MobX Logo"}
                                src={"./aboutMe/MobXLogo.svg"}
                                alt={"MobXLogo"}
                                width={40}
                                height={40}
                            />
                        </Swim>
                        <Swim isFast={true} delay={1}>
                            <Image
                                src={"./aboutMe/SocketLogo.svg"}
                                alt={"Socket"}
                                width={40}
                                height={40}
                            />
                        </Swim>
                        <Swim isFast={true} delay={0.2}>
                            <Image
                                title={pathName === "/ua" ? "axios логотип" : "axios Logo"}
                                src={"./aboutMe/axiosLogo.svg"}
                                alt={"axios"}
                                width={40}
                                height={40}
                            />
                        </Swim>
                        <Swim isFast={true} delay={0.4}>
                            <Image
                                title={pathName === "/ua" ? "reactSpring логотип" : "reactSpring Logo"}
                                src={"./aboutMe/reactSpringLogo.svg"}
                                alt={"reactSpringLogo"}
                                width={40}
                                height={40}
                            />
                        </Swim>
                        <Swim isFast={true} delay={0.6}>
                            <Image
                                title={pathName === "/ua" ? "Strapi логотип" : "Strapi Logo"}
                                src={"./aboutMe/StrapiLogo.svg"}
                                alt={"Strapi"}
                                width={40}
                                height={40}
                            />
                        </Swim>
                        <Swim isFast={true} delay={0.8}>
                            <Image
                                title={pathName === "/ua" ? "git логотип" : "git Logo"}
                                src={"./aboutMe/gitOriginalLogo.svg"}
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
                className="download-pdf-about-me"
                href={"/Front-End-React-Developerр-Oleg-Tkach.pdf"}
                download={'Front-End-React-Developerр-Oleg-Tkach'}
            >
                {pathName === "/ua" ? "Завантажити резюме" : "Download resume"}
                <Image
                    title={pathName === "/ua" ? "Стрілка вперед" : "Forward Arrow"}
                    src={"/icons/ForwardArrow.svg"}
                    alt={"arrow-resume"}
                    width={20}
                    height={20}
                />
            </a>
        </div>
    );
};

export default AboutMe;