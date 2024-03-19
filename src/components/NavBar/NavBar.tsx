"use client"
import "./navbar.scss"
import {gsap} from 'gsap';
import Image from 'next/image';
import ThemeChange from '@/components/ThemeChange/ThemeChange';
import LanguageChange from '@/components/LanguageChange/LanguageChange';
import HoverLink from '@/components/UI/HoverLink/HoverLink';
import ScrollTrigger from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import {usePathname} from "next/navigation";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function NavBar({navigation}: any) {
    const pathname = usePathname();
    const lacal = pathname.split('/')[1];

    useGSAP(() => {
        gsap.fromTo(".logo", {opacity: 0, x: -100}, {opacity: 1, x: 0, duration: 1, delay: 0.2, ease: "power3.out"});
        gsap.fromTo(".menu-item", {opacity: 0, y: -20}, {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
        });
        gsap.fromTo(".nav-bar-toggle", {opacity: 0, x: 100}, {
            opacity: 1,
            x: 0,
            duration: 1,
            delay: 0.2,
            ease: "power3.out"
        });
    });

    return (
        <>
            <ScrollToTop/>
            <header className="container-background-main">
                <div className="inner-container"/>
                <nav className="container-nav">
                    <div>
                        <Link href="/" className="logo">
                            <Image title="logo" src={"/logo.png"} alt={"logo"} width={50} height={50}/>
                        </Link>
                        <ul>
                            {Object.entries(navigation).slice(0, -1).map(([key, value]) => (
                                <li key={key} className="menu-item">
                                    <HoverLink rout={value === "blog" ? `/${lacal}/blog` : `#${key}`}>
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
        </>
    );
}
