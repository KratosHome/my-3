"use client";
import "./header.scss";
import DesktopHeader from "@/components/bloks/Header/DesktopHeader/DesktopHeader";
import {gsap} from "gsap";
import ScrollToTop from "@/components/bloks/ScrollToTop/ScrollToTop";
import ScrollTrigger from "gsap/ScrollTrigger";
import MobileHeader from "@/components/bloks/Header/MobileHeader/MobileHeader";
import {menuDate} from "@/mokDate/menuDate";
import {useSession} from "next-auth/react";

gsap.registerPlugin(ScrollTrigger);

const Header = ({session}: any) => {
   // const { data: session, status } = useSession()

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
                <div className="container-header-client">
                    <MobileHeader filteredMenu={filteredMenu} session={session}/>
                    <DesktopHeader filteredMenu={filteredMenu} session={session}/>
                </div>
            </div>
        </>
    );
};

export default Header;
