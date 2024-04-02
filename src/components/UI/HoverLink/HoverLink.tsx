"use client"
import React, {FC, ReactNode} from 'react';
import "./HoverLink.scss"
import Link from "next/link";
import {usePathname} from "next/navigation";

interface activeLinkType {
    children: ReactNode;
    rout: string
    click?: () => void
}

const HoverLink: FC<activeLinkType> = ({children, rout, click}) => {
    const pathName = usePathname()
    const isActive = pathName === rout; // pathName.includes(rout);


    return (
        <Link
            className={`container-link ${isActive ? "active-link" : "animate-link"}`}
            href={rout}
            onClick={click}
        >
            {children}
        </Link>
    );
};

export default HoverLink;