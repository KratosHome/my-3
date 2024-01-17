"use client"
import React, {useState, useEffect, useRef} from 'react';
import './MainTitle.scss';
import {Typewriter} from 'react-simple-typewriter';
import {usePathname} from "next/navigation";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MainTitle = () => {
    const pathName = usePathname();

    const [showReactText, setShowReactText] = useState(false);

    const [showDevText, setShowDevText] = useState(false);

    useEffect(() => {
        const totalTime = ('Front-end'.length * 100) + 1000; // adjust based on your typeSpeed and delaySpeed
        const timer = setTimeout(() => setShowReactText(true), totalTime);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const totalTime = ('developer'.length * 100) + 1500; // adjust based on your typeSpeed and delaySpeed
        const timer = setTimeout(() => setShowDevText(true), totalTime);
        return () => clearTimeout(timer);
    }, []);

    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;

        if (element) {
            gsap.fromTo(element, {
                opacity: 0,
                y: -20
            }, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                delay: 3.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: element,
                    start: "bottom bottom-=100",
                    end: "top top-=10",
                    toggleActions: "play reverse play reverse",
                }
            });
        }
    }, []);

    return (
        <div className="container-main-title">
            <h1>
                <div>
                    <Typewriter
                        words={['Front-end']}
                        loop={1}
                        cursor={!showReactText}
                        cursorStyle='|'
                        typeSpeed={100}
                        deleteSpeed={100}
                        delaySpeed={1000}
                    />
                    {showReactText && (
                        <Typewriter
                            words={['dev', 'react']}
                            loop={1}
                            cursor={!showDevText}
                            cursorStyle='|'
                            typeSpeed={200}
                            deleteSpeed={300}
                            delaySpeed={1500}
                        />
                    )}
                </div>
                {showDevText && (
                    <Typewriter
                        words={['developer']}
                        loop={1}
                        cursor
                        cursorStyle='|'
                        typeSpeed={80}
                        deleteSpeed={100}
                        delaySpeed={1500}
                    />
                )}
            </h1>
            <h2 ref={ref}>{pathName === "/ua" ? "Код як мистецтво: Інженерія, що дарує функціональну красу" : "Code as Art: Engineering Functional Beauty"}</h2>
        </div>
    );
};

export default MainTitle;

