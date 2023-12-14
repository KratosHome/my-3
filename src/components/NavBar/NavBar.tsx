"use client"
import "./navbar.scss"
import {useEffect} from 'react';
import {gsap} from 'gsap';
import Image from 'next/image';
import ThemeChange from '@/components/ThemeChange/ThemeChange';
import LanguageChange from '@/components/LanguageChange/LanguageChange';
import HoverLink from '@/components/UI/HoverLink/HoverLink';

export default function NavBar({navigation}: any) {
    useEffect(() => {
        gsap.fromTo(".logo", {opacity: 0, y: -20}, {opacity: 1, y: 0, duration: 0.5, delay: 0.2, ease: "power3.out"});
        gsap.fromTo(".menu-item", {opacity: 0, y: -20}, {opacity: 1, y: 0, duration: 0.5, stagger: 0.2, ease: "power3.out"});
        gsap.fromTo(".nav-bar-toggle", {opacity: 0, y: -20}, {opacity: 1, y: 0, duration: 0.5, delay: 0.5, ease: "power3.out"});
    }, []);

    return (
        <header className="container-background-main">
            <div className="inner-container"/>
            <nav className="container-nav">
                <div>
                    <div className="logo">
                        <Image src={"/logo.png"} alt={"logo"} width={50} height={50}/>
                    </div>
                    <ul>
                        {Object.entries(navigation).slice(0, -1).map(([key, value], index) => (
                            <li key={key} className="menu-item">
                                <HoverLink rout={`#${key}`}>
                                    <>{value}</>
                                </HoverLink>
                            </li>
                        ))}
                    </ul>
                    <div className="nav-bar-toggle">
                        <LanguageChange/>
                        <ThemeChange/>
                    </div>
                </div>
            </nav>
        </header>
    );
}
