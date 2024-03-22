import {useRef} from "react";

import gsap from "gsap";
import {useGSAP} from "@gsap/react";

import "./SubNav.scss";

interface SubNavProps {
    isOpen: boolean;
    navLink: any[];
    menuToggle?: (index: number, resetAll?: boolean) => void;
    navIndex?: number;
    isMobile: boolean;
}

const AnimationVariants = {
    open: {
        y: 0,
        opacity: 1,
        ease: "power4.out",
        duration: 1,
        stagger: 0.2,
    },
    closed: {
        y: 20,
        opacity: 0,
        ease: "power4.out",
        // duration: 0.2,
        stagger: 0.2,
    },
};

const SubNavAnimationVariants = {
    open: {
        y: "99%",
        opacity: 1,
        ease: "power1.out",
        duration: 1,
    },
    closed: {
        opacity: 0,
        ease: "power1.out",
        duration: 1,
    },
    openMobile: {
        opacity: 1,
        ease: "power1.out",
        duration: 1,
    },
    closedMobile: {
        opacity: 0,
        ease: "power1.out",
        duration: 0.5,
    },
};

const SubNav = ({
                    isOpen = false,
                    navLink,
                    navIndex,
                    isMobile = false,
                }: SubNavProps) => {
    const subNavRef = useRef<HTMLUListElement | null>(null);

    useGSAP(
        () => {
            if (isOpen) {
                gsap
                    .timeline()
                    .set(subNavRef.current, {display: "grid"})
                    .fromTo(
                        subNavRef.current,
                        isMobile
                            ? SubNavAnimationVariants.closedMobile
                            : SubNavAnimationVariants.closed,
                        isMobile
                            ? SubNavAnimationVariants.openMobile
                            : SubNavAnimationVariants.open
                    );
            } else {
                gsap
                    .timeline()
                    .fromTo(
                        subNavRef.current,
                        isMobile
                            ? SubNavAnimationVariants.openMobile
                            : SubNavAnimationVariants.open,
                        isMobile
                            ? SubNavAnimationVariants.closedMobile
                            : SubNavAnimationVariants.closed
                    )
                    .set(subNavRef.current, {display: "none"});
            }

            if (subNavRef?.current?.children) {
                const subNavChildrenAnim = gsap
                    .timeline()
                    .fromTo(
                        subNavRef.current.children,
                        AnimationVariants.closed,
                        AnimationVariants.open
                    )
                    .reverse();

                if (isOpen) {
                    subNavChildrenAnim.reversed(!subNavChildrenAnim);
                } else {
                    subNavChildrenAnim.reversed();
                }
            }
        },
        {dependencies: [isOpen]}
    );

    return (
        <ul ref={subNavRef} className={`sub-nav__list`}>
            {navLink.map((menu, index) => (
                <li
                    key={`${menu.name}_${index}`}
                    className={`sub-nav__item sub-nav__item--${navIndex}`}
                >
                    {menu.name}
                    {menu?.subMenu.length > 0 && (
                        <SubNav navLink={menu.child} isMobile={isMobile} isOpen={isOpen}/>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default SubNav;
