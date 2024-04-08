"use client";
import "./header.scss";
import DesktopHeader from "@/components/Header/DesktopHeader/DesktopHeader";
import {gsap} from "gsap";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import ScrollTrigger from "gsap/ScrollTrigger";
import MobileHeader from "@/components/Header/MobileHeader/MobileHeader";
import {menuDate} from "@/mokDate/menuDate";

gsap.registerPlugin(ScrollTrigger);

const Header = ({session}: any) => {

    const filteredMenu = menuDate.filter(item => {
        if (session?.user && item.rout === "/login") return false;
        if (!session?.user && item.rout === "/profile") return false;
        return true;
    });

    return (
        <>
            <ScrollToTop/>
            <div className="container-background-main">
                <div className="inner-container"/>
                <header className="container-header-client">
                    <MobileHeader filteredMenu={filteredMenu} session={session}/>
                    <DesktopHeader filteredMenu={filteredMenu} session={session}/>
                </header>
            </div>
        </>
    );
};

export default Header;
