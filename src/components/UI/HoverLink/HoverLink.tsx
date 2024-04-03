"use client"
import React, {FC, ReactNode} from 'react';
import "./HoverLink.scss"
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";
import {useRef} from 'react';
import {gsap} from 'gsap';
import {useGSAP} from "@gsap/react";


interface activeLinkType {
    children: ReactNode;
    rout: string
    click?: () => void
}

const HoverLink: FC<activeLinkType> = ({children, rout, click}) => {
    const router = useRouter();
    const pathName = usePathname()
    const isActive = pathName === rout;


    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();

        gsap.fromTo(".page-transition", {
            x: '0%',
        }, {
            duration: 1,
            x: '100%',
            ease: 'power2.inOut',
            onComplete: () => router.push(rout)
        });
        if (click) click();
    };

    return (
        <Link className={`container-link ${isActive ? "active-link" : "animate-link"}`}
              href={rout}
              onClick={handleClick}
        >
            {children}
        </Link>
    );
};

export default HoverLink;