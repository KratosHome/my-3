"use client"
import React, {useRef} from 'react';
import "./LanguageChange.scss"
import {useRouter} from 'next/navigation';
import {usePathname} from 'next/navigation';
import Image from "next/image";
import {useGSAP} from "@gsap/react";
import {handleHover} from "@/components/UI/Hover/hover";
import arrow from "../../../assets/icons/arrow.svg"
import {useLocale} from "@/hooks/useLocale";

export default function LanguageChange() {
    const {locale} = useLocale();
    const ref = useRef(null);
    const {contextSafe} = useGSAP();
    const pathname = usePathname();
    const router = useRouter();

    const redirectedPathName = (sendLocale: string) => {
        const newPathname = `/${sendLocale}/${pathname.split("/").slice(2).join("/")}`;
        router.push(`${newPathname}`);
    }

    const handleMouseEnter = contextSafe(() => {
        handleHover(ref)
    });

    return (
        <div
            ref={ref}
            onMouseEnter={handleMouseEnter}
            className={"container-language-change"}
            onClick={() => redirectedPathName(locale === "ua" ? "en" : "ua")}
        >
            <span>{locale === "ua" ? "en" : "ua"}</span>
            <Image
                title={locale === "ua" ? "перемикання мови" : "switch language"}
                src={arrow}
                width={10}
                height={10}
                alt={locale === "ua" ? "UA Flag" : "US Flag"}
            />
        </div>
    )
}
