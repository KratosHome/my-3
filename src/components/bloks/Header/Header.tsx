"use client";
import st from "./header.module.scss";
import DesktopHeader from "@/components/bloks/Header/DesktopHeader/DesktopHeader";
import {gsap} from "gsap";
import ScrollToTop from "@/components/bloks/ScrollToTop/ScrollToTop";
import ScrollTrigger from "gsap/ScrollTrigger";
import MobileHeader from "@/components/bloks/Header/MobileHeader/MobileHeader";
import {menuDate} from "@/mokDate/menuDate";

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
            <div className={st.container}>
                <div className={st.background}/>
                <MobileHeader filteredMenu={filteredMenu} session={session}/>
                <DesktopHeader filteredMenu={filteredMenu} session={session}/>
            </div>
        </>
    );
};

export default Header;
