"use clent"
import React, {FC} from 'react';
import Image from "next/image";
import "./Avatar.scss";

interface AvatarProps {
    src: string;
    alt: string;
    size: "small" | "medium" | "large";
}

const Avatar: FC<AvatarProps> = ({src, alt, size}) => {
    return (
        <div className={`avatar__container avatar__${size}`}>
            <Image src={src} alt={alt} fill={true}/>
        </div>
    );
};

export default Avatar;