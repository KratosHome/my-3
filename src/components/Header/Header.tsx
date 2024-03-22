"use client";
import "./header.scss";
import MainHeader from "@/components/Header/MainHeader/MainHeader";
import NavBar from "@/components/Header/NavBar/NavBar";
import {usePathname} from "next/navigation";
import {menuDate} from "@/mokDate/menuDate";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Header = ({navigation, session}: any) => {
    const pathname = usePathname();
    const locale = pathname.split('/')[1];

    const filteredMenu = menuDate.filter(item => {
        if (session && item.name === "login") return false;
        if (!session && item.name === "cabinet") return false;
        return true;
    });


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


    console.log("session", session)

    return (
        <>
            <ScrollToTop/>
            <div className="container-background-main">
                <div className="inner-container"/>
                <header className="container-header-client">
                    <MainHeader/>
                    <NavBar/>
                </header>
            </div>
        </>
    );
};

export default Header;
