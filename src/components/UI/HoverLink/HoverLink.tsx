"use client"
import React, {FC, ReactNode} from 'react';
import "./HoverLink.scss"
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useGsapPageTransition} from "@/hooks/useGsapPageTransition";
import ArrowDownSvg from "@/assets/ArrowDownSvg";


interface activeLinkType {
    children: ReactNode;
    rout: string
    click?: () => void
    isSub?: boolean
}

const HoverLink: FC<activeLinkType> = ({children, rout, click, isSub}) => {
    const pathName = usePathname()
    const isActive = pathName === rout;
    const triggerAnimation = useGsapPageTransition();

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        triggerAnimation(".page-transition", rout, click);
    };

    return (
        <Link className={`container-link ${isActive ? "active-link " : "animate-link"}`}
              href={rout}
              onClick={handleClick}
        >
            {children}
            {isSub ? <ArrowDownSvg/> : false}
        </Link>
    );
};

export default HoverLink;