import {useRef} from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import "./SubNav.scss";
import HoverLink from "@/components/UI/HoverLink/HoverLink";
import {usePathname} from "next/navigation";


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
        duration: 0.2,
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

const SubNav = ({isOpen = false, navLink, navIndex}: any) => {
    const pathname = usePathname();
    const locale = pathname.split('/')[1];
    const subNavRef = useRef<HTMLUListElement | null>(null);

    useGSAP(() => {
        if (isOpen) {
            gsap.timeline().set(subNavRef.current, {display: "grid"})
                .fromTo(
                    subNavRef.current,
                    SubNavAnimationVariants.closed,
                    SubNavAnimationVariants.open
                );
        } else {
            gsap.timeline().fromTo(
                subNavRef.current,
                SubNavAnimationVariants.open,
                SubNavAnimationVariants.closed
            )
                .set(subNavRef.current, {display: "none"});
        }

        if (subNavRef?.current?.children) {
            const subNavChildrenAnim = gsap.timeline()
                .fromTo(subNavRef.current.children,
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
    }, {dependencies: [isOpen]});

    return (
        <ul ref={subNavRef} className={`sub-nav__list`}>
            {navLink.map((menu: any, index: number) => (
                <li key={`${menu.rout}_${index + index}`} className={`sub-nav__item sub-nav__item--${navIndex}`}>
                    <HoverLink rout={menu.rout}>
                        {locale === "en" ? menu.nameEn : menu.nameUa}
                    </HoverLink>
                    {menu?.subMenu.length > 0 && <SubNav navLink={menu.child} isOpen={isOpen}/>}
                </li>
            ))}
        </ul>
    );
};

export default SubNav;
