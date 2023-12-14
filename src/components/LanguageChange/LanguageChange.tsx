"use client"
import React from 'react';
import "./LanguageChange.scss"
import {useRouter} from 'next/navigation';
import {usePathname} from 'next/navigation';
import ButtonAnimation from "@/components/UIA/ButtonAnimation/ButtonAnimation";
import Image from "next/image";

export default function LanguageChange() {
    const router = useRouter();
    const pathName = usePathname();

    const redirectedPathName = (locale: string) => {
        const newPath = pathName.replace(/^\/[a-z]{2}/, `/${locale}`);
        router.push(newPath);
    }

    return (
        <ButtonAnimation isPulse={false}>
            <section className={"container-language-change"}
                     onClick={() => redirectedPathName(pathName === "/ua" ? "en" : "ua")}
            >
                <span>{pathName === "/ua" ? "en" : "ua"}</span>
                <Image src={"/icons/arrow.svg"}
                       width={10}
                       height={10}
                       alt={pathName === "/ua" ? "UA Flag" : "US Flag"}
                />
            </section>
        </ButtonAnimation>
    )
}
