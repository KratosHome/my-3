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

const NavBar = ({isMobileMenuOpen = false}) => {
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

    return (
        <div className="container-desktop-menu">
            <Link href="/" className="logo">
                <Image title="logo" src={"/logo.png"} alt={"logo"} width={50} height={50}/>
            </Link>
            <ul className={`nav-bar__list ${isMobileMenuOpen ? "open" : "desktop-only"}`}
                onMouseLeave={() => !isMobileMenuOpen && setIsOpenSubMenu({})}
            >
                {menuDate.map((menu, index) =>
                    <li key={menu.name} className={`nav-bar__item mobile-menu__item`}>
                        <div
                            className={`nav-bar__item--main} ${isOpenSubMenu[index] ? "focused" : ""}`}
                            onMouseEnter={() => !isMobileMenuOpen && subMenuToggle(index)}
                        >
                            <Link
                                href={menu.rout}
                                onClick={() => (isMobileMenuOpen ? null : subMenuToggle(index))}
                            >
                                {menu.name}
                            </Link>
                            {menu?.subMenu.length > 0 && (
                                <button
                                    type="button"
                                    className={`sub-menu__btn mobile-only ${isOpenSubMenu[index] ? "sub-menu__btn--open" : ""}`}
                                    onClick={() => setIsOpenSubMenu((prev) => ({
                                        ...prev,
                                        [index]: !prev[index],
                                    }))}
                                >
                                    <ArrowDownSvg/>
                                </button>
                            )}
                        </div>
                        {menu?.subMenu.length > 0 && (
                            <SubNav
                                isOpen={isOpenSubMenu[index]}
                                navLink={menu.subMenu}
                                navIndex={index}
                                isMobile={isMobileMenuOpen}
                            />
                        )}
                    </li>
                )}
            </ul>
            <div className="nav-bar-toggle">
                <LanguageChange/>
                <ThemeChange/>
            </div>
        </div>
    );
};

export default NavBar;
