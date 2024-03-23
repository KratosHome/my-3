"use client"
import "./navbar.scss"
import {gsap} from 'gsap';
import Image from 'next/image';
import ThemeChange from '@/components/ThemeChange/ThemeChange';
import LanguageChange from '@/components/LanguageChange/LanguageChange';
import HoverLink from '@/components/UI/HoverLink/HoverLink';
import ScrollTrigger from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import {usePathname} from "next/navigation";
import Link from "next/link";
import {menuDate} from "@/mokDate/menuDate";
import {useState} from "react";
import SubMenu from "@/components/NavBar/subMenu/subMenu";

gsap.registerPlugin(ScrollTrigger);


export default function NavBar({navigation, session}: any) {
    const pathname = usePathname();
    const locale = pathname.split('/')[1];
    const [isOpenSubMenu, setIsOpenSubMenu] = useState<number | null>(null);

    const subMenuToggle = (index: number) => setIsOpenSubMenu(index);

    console.log("session", session)

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
        <>
            <header className="container-background-main">
                <nav className="container-nav">
                    <Link href="/" className="logo">
                        <Image title="logo" src={"/logo.png"} alt={"logo"} width={50} height={50}/>
                    </Link>
                    <ul onMouseLeave={() => setIsOpenSubMenu(null)}>
                        {filteredMenu.map((item: any, index: number) => (
                            <li key={item.name} className="menu-item" onMouseEnter={() => subMenuToggle(index)}>
                                <HoverLink rout={`/${locale}/blog`}>
                                    {item.name}
                                </HoverLink>
                                {item.subMenu && isOpenSubMenu === index && (
                                    <SubMenu item={item}/>
                                )}
                            </li>
                        ))}
                        {session ? <button>logout</button> : null}
                    </ul>
                    <div className="nav-bar-toggle">
                        <LanguageChange/>
                        <ThemeChange/>
                    </div>
                </nav>
            </header>
        </>
    );
}
