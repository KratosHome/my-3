"use client";
import "./DesktopHeader.scss";
import Link from "next/link";
import React, {useState} from "react";
import {menuDate} from "@/mokDate/menuDate";
import ArrowDownSvg from "@/components/SVG/ArrowDownSvg";
import SubNav from "@/components/Header/DesktopHeader/SubNav/SubNav";
import Image from "next/image";
import LanguageChange from "@/components/LanguageChange/LanguageChange";
import ThemeChange from "@/components/ThemeChange/ThemeChange";
import {usePathname} from "next/navigation";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import HoverLink from "@/components/UI/HoverLink/HoverLink";
import LogOut from "@/components/auth/LogOut/LogOut";

const DesktopHeader = ({session, filteredMenu}: any) => {
    const pathname = usePathname();
    const locale = pathname.split('/')[1];

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

    return (
        <nav className="container-desktop-menu">
            <Link href={`/${locale}`} className="logo">
                <Image title="logo" src={"/logo.png"} alt={"logo"} width={50} height={50}/>
            </Link>
            <ul className={`nav-bar__list`} onMouseLeave={() => setIsOpenSubMenu({})}>
                {filteredMenu.map((menu: any, index: number) =>
                    <React.Fragment key={`${menu.rout}_${index + index + index}`}>
                        <li className={`menu-item item-hover`}
                            onMouseEnter={() => subMenuToggle(index)}>
                            <HoverLink rout={`/${locale}/${menu.rout}`}>
                                {locale === "en" ? menu.nameEn : menu.nameUa}
                                {menu?.subMenu.length > 0 &&
                                    <button
                                        className={`sub-menu__btn ${isOpenSubMenu[index] ? "sub-menu__btn--open" : ""}`}
                                        onClick={() => setIsOpenSubMenu((prev) => ({
                                            ...prev,
                                            [index]: !prev[index],
                                        }))}
                                    >
                                        <ArrowDownSvg/>
                                    </button>
                                }
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
                {session ? <LogOut/> : null}
            </ul>
            <div className="nav-bar-toggle">
                <LanguageChange/>
                <ThemeChange/>
            </div>
        </nav>
    );
};

export default DesktopHeader;
