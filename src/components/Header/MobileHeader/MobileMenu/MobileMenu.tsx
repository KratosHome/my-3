import React, {useRef, useState} from "react";
import "./MobileMenu.scss";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import HoverLink from "@/components/UI/HoverLink/HoverLink";
import ArrowDownSvg from "@/components/SVG/ArrowDownSvg";
import SubNav from "@/components/Header/DesktopHeader/SubNav/SubNav";
import {usePathname} from "next/navigation";
import {menuDate} from "@/mokDate/menuDate";


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
            ...prevState, // Копіюємо попередній стан
            [index]: !prevState[index] // Переключаємо стан для конкретного індексу
        }));
    };

    useGSAP(() => {
            if (isOpen) {
                gsap.timeline()
                    .set(menuRef.current, {display: "initial"})
                    .to(menuRef.current, MenuAnimationVariants.open);

                const elements = menuRef?.current?.querySelectorAll(".mobile-menu__item") || null;
                gsap.fromTo(elements, AnimationVariants.closed, AnimationVariants.open);
            } else {
                gsap.timeline()
                    .to(menuRef.current, MenuAnimationVariants.closed)
                    .set(menuRef.current, {display: "none"});
            }
        },
        {dependencies: [isOpen]});

    return (
        <div
            ref={menuRef}
            className={`mobile-menu__container`}
            onClick={(e) => closeMenuHandler(e)}
        >
            <div className="mobile-menu__wrapper">
                <ul className="extra-menu__list">
                    {filteredMenu.map((menu: any, index: number) =>
                        <React.Fragment key={`${menu.rout}_${index + index + index}`}>
                            <li onClick={() => subMenuToggle(index)}>
                                <HoverLink rout={`/${locale}/${menu.rout}`}>
                                    {locale === "en" ? menu.nameEn : menu.nameUa}
                                    {menu?.subMenu.length > 0 &&
                                        <button
                                            className={`sub-menu__btn ${isOpenSubMenu[index] ? "sub-menu__btn--open" : ""}`}>
                                            <ArrowDownSvg/>
                                        </button>
                                    }
                                </HoverLink>
                                {session ? <button>logout</button> : null}
                            </li>
                            {menu?.subMenu.length > 0 && isOpenSubMenu[index] && (
                                <div>
                                    {menu.subMenu.map((subMenu: any, subIndex: number) =>
                                        <ul key={subIndex}>
                                            <li>
                                                <HoverLink rout={menu.rout}>
                                                    {locale === "en" ? subMenu.nameEn : subMenu.nameUa}
                                                </HoverLink>
                                            </li>
                                        </ul>
                                    )}
                                </div>
                            )}
                        </React.Fragment>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default MobileMenu;
