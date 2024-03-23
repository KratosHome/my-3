"use client";
import "./NavBar.scss";
import Link from "next/link";
import React, {useState} from "react";
import {menuDate} from "@/mokDate/menuDate";
import ArrowDownSvg from "@/components/SVG/ArrowDownSvg";
import SubNav from "@/components/Header/SubNav/SubNav";
import Image from "next/image";
import LanguageChange from "@/components/LanguageChange/LanguageChange";
import ThemeChange from "@/components/ThemeChange/ThemeChange";
import {usePathname} from "next/navigation";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import HoverLink from "@/components/UI/HoverLink/HoverLink";

const NavBar = ({navigation, session}: any) => {
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


    return (
        <nav className="container-desktop-menu">
            <Link href="/" className="logo">
                <Image title="logo" src={"/logo.png"} alt={"logo"} width={50} height={50}/>
            </Link>
            <ul className={`nav-bar__list`} onMouseLeave={() => setIsOpenSubMenu({})}>
                {filteredMenu.map((menu, index) =>
                    <React.Fragment key={`${menu.name} ${index}`}>
                        <li className={`menu-item item-hover`}
                            onMouseEnter={() => subMenuToggle(index)}>
                            <HoverLink rout={`${locale}/${menu.rout}`}>
                                {navigation && navigation[menu.name] ? navigation[menu.name] : menu.name}
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
                            {session ? <button>logout</button> : null}
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
            </ul>
            <div className="nav-bar-toggle">
                <LanguageChange/>
                <ThemeChange/>
            </div>
        </nav>
    );
};

export default NavBar;
