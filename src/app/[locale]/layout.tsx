import './globals.css'
import ReduxProvider from "@/app/[locale]/provider";
import GoogleTagManager from "@/components/GoogleTagManager/GoogleTagManager";
import StarsCanvas from "@/components/UI/StarBackground/StarBackground";
import Footer from "@/components/Footer/Footer";
import Head from "next/head";
import MyThemeProvider from "@/components/MyThemeProvider/MyThemeProvider";
import {auth} from "@/server/users/auth";
import Header from "@/components/Header/Header";
import SessionWrapper from "@/components/SessionWrapper/SessionWrapper";
import BlockPageTransition from "@/components/animationTransition/BlockPageTransition/BlockPageTransition";

export const dynamic = 'force-dynamic';

export default async function LocaleLayout({
                                               children,
                                               params: {locale}
                                           }: {
    children: React.ReactNode;
    params: { locale: string };
}) {

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
        "name": locale === "en" ? "CodeCraftMaster - Frontend Developer" : "CodeCraftMaster - Frontend розробник",
        "image": "https://codecraftmaster.com/logo.png",
        "description": locale === "en" ? "I offer high-quality services in the development of mobile applications, websites, and e-commerce. Focused on innovative solutions and a personal approach to each project." : "Пропоную високоякісні послуги з розробки мобільних додатків, веб-сайтів, та електронної комерції. Націлений на інноваційні рішення та особистий підхід до кожного проекту.",
        "url": "https://codecraftmaster.com",
        "areaServed": ["USA", "Canada", "Україна", "Світ"],
        "serviceProvided": [
            {
                "@type": "Service",
                "name": "",
                "description": "Створення функціональних та візуально привабливих мобільних додатків."
            },
            {
                "@type": "Service",
                "name": "",
                "description": "Створення сучасних, швидких та відповідних веб-сайтів для бізнесу."
            },
            {
                "@type": "Service",
                "name": "",
                "description": "Розробка інтегрованих рішень для електронної комерції та інтернет-магазинів."
            }
        ],
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

    const session = await auth();

    console.log("locale", locale)

    return (
        <html lang={locale}>
        <Head>
            <link rel="preload" as="font" crossOrigin=""/>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
            />
        </Head>
        <GoogleTagManager/>
        <MyThemeProvider>
            <ReduxProvider>
                <SessionWrapper>
                    <body>
                    <BlockPageTransition/>
                    <Header session={session}/>
                    <StarsCanvas/>
                    {children}
                    </body>
                    <Footer/>
                </SessionWrapper>
            </ReduxProvider>
        </MyThemeProvider>
        </html>
    )
}

export function generateStaticParams() {
    return [
        {params: {locale: "en"}},
        {params: {locale: "ua"}},
    ];
}

