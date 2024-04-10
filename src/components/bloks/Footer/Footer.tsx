"use client"
import React from 'react';
import "./Footer.scss";
import {usePathname} from "next/navigation";
import SocialLicks from "@/components/home/SocialLicks/SocialLicks";

const Footer = () => {
    const pathName = usePathname();
    const currentYear = new Date().getFullYear();

    return (
        <div className="container-footer">
            <div>(c) {currentYear} {pathName === "/ua" ? "Олег Ткач" : "Oleg Tkach"}</div>
            <div className="footer-sociale">
                <SocialLicks isAbsolute={false}/>
            </div>
            <div> {pathName === "/ua" ? "Дизайн зроблений " : "Design by "}
                <a
                    href="https://www.linkedin.com/in/tetiana-kucherak/"
                    target="_blank"
                    aria-label="linkedin"
                    className="link-another-platform"
                >{pathName === "/ua" ? "Тетяна Кучеракй" : "Tetiana Kucherak"}</a></div>
        </div>
    );
};


export default Footer;