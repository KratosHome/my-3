"use client";
import "./header.scss";
import NavBar from "@/components/Header/NavBar/NavBar";
import {gsap} from "gsap";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import ScrollTrigger from "gsap/ScrollTrigger";
import MobileHeader from "@/components/Header/MobileHeader/MobileHeader";

gsap.registerPlugin(ScrollTrigger);

const Header = ({navigation, session}: any) => {

    return (
        <>
            <ScrollToTop/>
            <div className="container-background-main">
                <div className="inner-container"/>
                <header className="container-header-client">
                    <MobileHeader/>
                    <NavBar navigation={navigation} session={session}/>
                </header>
            </div>
        </>
    );
};

export default Header;
