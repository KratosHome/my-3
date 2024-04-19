"use client";
import "./DesktopHeader.scss";
import Link from "next/link";
import React, {useState} from "react";
import {menuDate} from "@/mokDate/menuDate";
import SubNav from "@/components/bloks/Header/DesktopHeader/SubNav/SubNav";
import Image from "next/image";
import LanguageChange from "@/components/bloks/LanguageChange/LanguageChange";
import ThemeChange from "@/components/bloks/ThemeChange/ThemeChange";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import HoverLink from "@/components/UI/HoverLink/HoverLink";
import LogOut from "@/components/auth/LogOut/LogOut";
import {useLocale} from "@/hooks/useLocale";
import {useGsapPageTransition} from "@/hooks/useGsapPageTransition";

const DesktopHeader = ({session, filteredMenu}: any) => {
    const triggerAnimation = useGsapPageTransition();
    const {locale} = useLocale();
    const [isOpenSubMenu, setIsOpenSubMenu] = useState<{ [key: number]: boolean; }>({});

    const subMenuToggle = (index: number) => {
        const newSubMenuState: {
            [key: number]: boolean;
        } = {};

        for (let i = 0; i < menuDate.length; i++) {
            newSubMenuState[i] = false;
        }

        newSubMenuState[index] = true;
        setIsOpenSubMenu(newSubMenuState);
    };


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


    const handlePageClick = (e: React.MouseEvent, rout: string) => {
        e.preventDefault();
        triggerAnimation(".page-transition", rout);
    };


    return (
        <nav className="container-desktop-menu">
            <Link href={`/${locale}`} className="logo" onClick={(e) => handlePageClick(e, `/${locale}`)}>
                <Image title="logo" src={"/logo.png"} alt={"logo"} width={50} height={50}/>
            </Link>
            <ul className={`nav-bar__list`} onMouseLeave={() => setIsOpenSubMenu({})}>
                {filteredMenu.map((menu: any, index: number) =>
                    <React.Fragment key={`${menu.rout}_${index + index + index}`}>
                        <li className={`menu-item`} onMouseEnter={() => subMenuToggle(index)}>
                            <HoverLink rout={`/${locale}${menu.rout}`} isSub={menu?.subMenu.length}>
                                {locale === "en" ? menu.nameEn : menu.nameUa}
                            </HoverLink>
                        </li>
                        {menu?.subMenu.length > 0 && (
                            <SubNav
                                isOpen={isOpenSubMenu[index]}
                                navLink={menu.subMenu}
                                navIndex={index}
                            />
                        )}
                    </React.Fragment>
                )}
                {session?.user ? <LogOut/> : null}
            </ul>
            <div className="nav-bar-toggle">
                <LanguageChange/>
                <ThemeChange/>
            </div>
        </nav>
    );
};

export default DesktopHeader;
