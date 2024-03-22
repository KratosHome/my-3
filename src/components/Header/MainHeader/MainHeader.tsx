"use client";
import {useState} from "react";
import "./MainHeader.scss";
import {usePathname} from "next/navigation";
import Link from "next/link";
import CloseSvg from "@/components/SVG/CloseSvg";
import BurgerMenuSvg from "@/components/SVG/BurgerMenuSvg";
import MobileMenu from "../MobileMenu/MobileMenu";
import UserNav from "@/components/Header/UserNavLink/UserNav";
import Image from "next/image";

const MainHeader = () => {
    const pathname = usePathname();
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const menuToggle = () => {
        setIsOpenMenu((prev) => !prev);
    };

    return (
        <div className="main-header-client">
            <div className="mobile-only">
                <button type="button" className="burger-menu-btn" onClick={menuToggle}>
                    {isOpenMenu ? <CloseSvg/> : <BurgerMenuSvg/>}
                </button>
                <MobileMenu isOpen={isOpenMenu} closeMenu={menuToggle}/>
            </div>

            <Link href="/" className="logo">
                <Image title="logo" src={"/logo.png"} alt={"logo"} width={50} height={50}/>
            </Link>
            {!isOpenMenu && <UserNav/>}
        </div>
    );
};

export default MainHeader;
