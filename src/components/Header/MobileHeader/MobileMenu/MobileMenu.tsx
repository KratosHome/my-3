import React, {useEffect, useRef, useState} from "react";
import "./MobileMenu.scss";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import HoverLink from "@/components/UI/HoverLink/HoverLink";
import ArrowDownSvg from "@/components/SVG/ArrowDownSvg";
import {usePathname} from "next/navigation";
import CloseSvg from "@/components/SVG/CloseSvg";
import {ScrollTrigger} from "gsap/ScrollTrigger";


const MenuAnimationVariants = {
    open: {
        clipPath: `circle(150% at 0 0)`,
        duration: 0.5,
        ease: "power2.inOut",
    },
    closed: {
        clipPath: "circle(0% at 0 0)",
        duration: 0.5,
        ease: "power2.inOut",
    },
};

const AnimationVariants = {
    open: {
        y: 0,
        opacity: 1,
        ease: "power4.out",
        duration: 0.6,
        stagger: 0.1,
    },
    closed: {
        y: 50,
        opacity: 0,
        ease: "power4.out",
        duration: 0.6,
        stagger: 0.2,
    },
};

const MobileMenu = ({
                        session,
                        isOpen,
                        closeMenu,
                        filteredMenu
                    }: {
    session: any;
    isOpen: boolean;
    closeMenu: (value: boolean) => void;
    filteredMenu: any
}) => {
    const {contextSafe} = useGSAP()
    const pathname = usePathname();
    const locale = pathname.split('/')[1];
    const menuRef = useRef<HTMLDivElement | null>(null);
    const [isOpenSubMenu, setIsOpenSubMenu] = useState<any>([]);

    const closeMenuHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            e.stopPropagation();
            closeMenu(false);
        }
    }

    const subMenuToggle = (index: number) => {
        setIsOpenSubMenu((prevState: any) => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    useGSAP(() => {
        if (isOpen) {
            gsap.timeline()
                .set(menuRef.current, {display: "initial"})
                .to(menuRef.current, MenuAnimationVariants.open);

            gsap.fromTo(
                ".mobile-menu__item",
                AnimationVariants.closed,
                AnimationVariants.open
            );
        } else {
            gsap.timeline()
                .to(menuRef.current, MenuAnimationVariants.closed)
                .set(menuRef.current, {display: "none"});
        }
    }, {dependencies: [isOpen]});


    useGSAP(() => {

        gsap.to(".sub-menu__container", {
            duration: 0.5,
            height: 'auto',
            opacity: 1,
        });
    }, {dependencies: [isOpenSubMenu]})


    return (
        <div
            ref={menuRef}
            className={`mobile-menu__container`}
            onClick={(e) => closeMenuHandler(e)}
        >
            <div className="mobile-menu__wrapper">
                <div className="burger-mob-menu-btn">
                    <button onClick={() => closeMenu(false)}>
                        <CloseSvg/>
                    </button>
                </div>
                <ul className="extra-menu__list">
                    {filteredMenu.map((menu: any, index: number) =>
                        <React.Fragment key={`${menu.rout}_${index + index + index}`}>
                            <li className="mobile-menu__item">
                                <HoverLink rout={`/${locale}/${menu.rout}`} click={() => closeMenu(false)}>
                                    {locale === "en" ? menu.nameEn : menu.nameUa}
                                </HoverLink>
                                {menu?.subMenu.length > 0 &&
                                    <button
                                        onClick={() => subMenuToggle(index)}
                                        className={`sub-menu__btn ${isOpenSubMenu[index] ? "sub-menu__btn--open" : ""}`}>
                                        <ArrowDownSvg/>
                                    </button>
                                }
                            </li>
                            {isOpenSubMenu[index] && (
                                <ul className="sub-menu__container">
                                    {menu.subMenu.map((subMenu: any, subIndex: number) =>
                                        <li key={subIndex}>
                                            <HoverLink rout={subMenu.rout}>
                                                {locale === "en" ? subMenu.nameEn : subMenu.nameUa}
                                            </HoverLink>
                                        </li>
                                    )}
                                </ul>
                            )}
                        </React.Fragment>
                    )}
                    {session ? <button>logout</button> : null}
                </ul>
            </div>
        </div>
    );
};

export default MobileMenu;
