import React, {FC, ReactNode} from 'react';
import "./HoverLink.scss"
import Link from "next/link";
import {usePathname} from "next/navigation";

interface activeLinkType {
    children: ReactNode;
    rout: string
}

const HoverLink: FC<activeLinkType> = ({children, rout}) => {
    const pathName = usePathname()
    const isActive = pathName.includes(rout);

    return (
        <Link className={`container-link ${isActive ? "active-link" : "animate-link"}`} href={rout}>
            {children}
        </Link>
    );
};

export default HoverLink;