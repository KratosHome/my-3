"use client"
import React, {useRef} from 'react';
import "./LanguageChange.scss"
import {useRouter} from 'next/navigation';
import {usePathname} from 'next/navigation';
import ButtonAnimation from "@/components/UIA/ButtonAnimation/ButtonAnimation";
import Image from "next/image";
import {useGSAP} from "@gsap/react";
import {gsap} from 'gsap';
import {handleHover} from "@/components/UIA/Hover/hover";

export default function LanguageChange() {
    const router = useRouter();
    const pathName = usePathname();

    const ref = useRef(null);
    const {contextSafe} = useGSAP();

    const redirectedPathName = (locale: string) => {
        const newPath = pathName.replace(/^\/[a-z]{2}/, `/${locale}`);
        router.push(newPath);
    }

    const handleMouseEnter = contextSafe(() => {
        handleHover(ref)
    });

    return (
        <div
            ref={ref}
            onMouseEnter={handleMouseEnter}
            className={"container-language-change"}
            onClick={() => redirectedPathName(pathName === "/ua" ? "en" : "ua")}
        >
            <span>{pathName === "/ua" ? "en" : "ua"}</span>
            <Image
                title={pathName === "/ua" ? "перемикання мови" : "switch language"}
                src={"/icons/arrow.svg"}
                width={10}
                height={10}
                alt={pathName === "/ua" ? "UA Flag" : "US Flag"}
            />
        </div>
    )
}
