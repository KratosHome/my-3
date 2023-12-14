import React, {FC, ReactNode} from 'react';
import "./HoverLink.scss"
import Link from "next/link";

interface activeLinkType {
    children: ReactNode;
    rout: string
}

const HoverLink: FC<activeLinkType> = ({children, rout}) => {
    return (
        <Link className="active-link" href={rout}>
            {children}
        </Link>
    );
};

export default HoverLink;