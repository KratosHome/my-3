"use client";
import React, {useState} from "react";
import "./MobileHeader.scss";
import Link from "next/link";
import CloseSvg from "@/components/SVG/CloseSvg";
import BurgerMenuSvg from "@/components/SVG/BurgerMenuSvg";
import MobileMenu from "@/components/Header/MobileHeader/MobileMenu/MobileMenu";
import Image from "next/image";
import LanguageChange from "@/components/LanguageChange/LanguageChange";
import ThemeChange from "@/components/ThemeChange/ThemeChange";

const MobileHeader = ({session, filteredMenu}: any) => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const menuToggle = () => {
        setIsOpenMenu((prev) => !prev);
    };

    return (
        <div className="container-header-mobile">
            <button type="button" className="burger-menu-btn" onClick={menuToggle}>
                {isOpenMenu ? <CloseSvg/> : <BurgerMenuSvg/>}
            </button>
            <MobileMenu
                session={session}
                isOpen={isOpenMenu}
                closeMenu={setIsOpenMenu}
                filteredMenu={filteredMenu}
            />
            <Link href="/" className="logo">
                <Image title="logo" src={"/logo.png"} alt={"logo"} width={50} height={50}/>
            </Link>
            <div className="nav-bar-toggle">
                <LanguageChange/>
                <ThemeChange/>
            </div>
        </div>
    );
};

export default MobileHeader;
