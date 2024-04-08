import React, {FC} from 'react';
import Head from "next/head";

interface MainSchemaProps {
    locale: string;
}

const MainSchem: FC<MainSchemaProps> = ({locale}) => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Professional Service",
        "name": locale === "en" ? "CodeCraftMaster - Software development" : "CodeCraftMaster - Розробка програмного забезпечення",
        "image": "https://codecraftmaster.com/logo.png",
        "description": locale === "en" ? "" : "Розробки веб-сайтів з складними анімаціями та цікавими рішенями, платформа для навчання молодих розробників на реальних проектах чи стартапах",
        "url": "https://codecraftmaster.com",
        "areaServed": ["USA", "Canada", "Україна", "Світ"],
        "founder": {
            "@type": "Person",
            "name": "Олег Ткач",
            "url": "https://codecraftmaster.com"
        },
        "sameAs": [
            "https://www.linkedin.com/in/olegtkach101/",
            "https://t.me/KratosHome",
            "https://github.com/KratosHome"
        ],
        "logo": "https://codecraftmaster.com/logo.png",
        "openingHours": "Mo-Fr 09:00-17:00",
    }


    return (
        <Head>
            <link rel="preload" as="font" crossOrigin=""/>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
            />
        </Head>
    );
};

export default MainSchem;