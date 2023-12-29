import './globals.css'
import {Locale} from "../../../i18n.config";
import {getDictionary} from "@/services/dictionary";
import NavBar from "@/components/NavBar/NavBar";
import ReduxProvider from "@/app/[lang]/provider";
import localFont from 'next/font/local'
import GoogleTagManager from "@/components/GoogleTagManager/GoogleTagManager";
import {ReactNode} from "react";
import StarsCanvas from "@/components/UI/StarBackground/StarBackground";
import Footer from "@/components/Footer/Footer";
import Head from "next/head";

const JetBrainsMono = localFont({
    src: '../fonts/webfonts/JetBrainsMono-Light.woff2',
    variable: '--font-jetbrains-mono',
});

const consolas = localFont({
    src: '../fonts/consolas/consolas.ttf',
    variable: '--font-consolas',
});

const JetBrainsMonoBold = localFont({
    src: '../fonts/webfonts/JetBrainsMono-Bold.woff2',
    variable: '--font-jetbrains-mono-bold',
});


export default async function RootLayout({
                                             children,
                                             params
                                         }: {
    children: ReactNode
    params: { lang: Locale }
}) {
    const {navigation} = await getDictionary(params.lang)

    const serviceNames = {
        en: {
            appDevelopment: "Development of mobile applications",
            webDevelopment: "Web Development",
            ecommerceDevelopment: "E-commerce Development"
        },
        ua: {
            appDevelopment: "Розробка мобільних додатків",
            webDevelopment: "Розробка веб-сайтів",
            ecommerceDevelopment: "Розробка електронної комерції"
        }
    };

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Professional Service",
        "name": params.lang === "en" ? "CodeCraftMaster - Frontend Developer" : "CodeCraftMaster - Frontend розробник",
        "image": "https://codecraftmaster.com/logo.png",
        "description": params.lang === "en" ? "I offer high-quality services in the development of mobile applications, websites, and e-commerce. Focused on innovative solutions and a personal approach to each project." : "Пропоную високоякісні послуги з розробки мобільних додатків, веб-сайтів, та електронної комерції. Націлений на інноваційні рішення та особистий підхід до кожного проекту.",
        "url": "https://codecraftmaster.com",
        "areaServed": ["USA", "Canada", "Україна", "Світ"],
        "serviceProvided": [
            {
                "@type": "Service",
                "name": serviceNames[params.lang].appDevelopment,
                "description": "Створення функціональних та візуально привабливих мобільних додатків."
            },
            {
                "@type": "Service",
                "name": serviceNames[params.lang].webDevelopment,
                "description": "Створення сучасних, швидких та відповідних веб-сайтів для бізнесу."
            },
            {
                "@type": "Service",
                "name": serviceNames[params.lang].ecommerceDevelopment,
                "description": "Розробка інтегрованих рішень для електронної комерції та інтернет-магазинів."
            }
        ],
        "founder": {
            "@type": "Person",
            "name": "Олег Ткач",
            "url": "https://codecraftmaster.com"
        },
        "sameAs": [
            "https://www.linkedin.com/in/oleg-tkach",
            "https://twitter.com/olegTkach",
            "https://github.com/olegTkach"
        ],
        "logo": "https://codecraftmaster.com/logo.png",
        "openingHours": "Mo-Fr 09:00-17:00",
        "additionalType": "http://www.productontology.org/id/Web_development",
    }


    return (
        <html lang={params.lang === "en" ? "en" : "ua"}>
        <Head>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
            />
        </Head>
        <GoogleTagManager/>
        <ReduxProvider>
            <body className={`${JetBrainsMono.variable} ${consolas.variable} ${JetBrainsMonoBold.variable}`}>
            <NavBar navigation={navigation}/>
            <StarsCanvas/>
            {children}
            </body>
            <Footer/>
        </ReduxProvider>
        </html>
    )
}
