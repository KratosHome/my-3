import './globals.css'
import {Locale} from "../../../i18n.config";
import {getDictionary} from "@/services/dictionary";
import NavBar from "@/components/NavBar/NavBar";
import {Metadata} from "next";
import ReduxProvider from "@/app/[lang]/provider";
import localFont from 'next/font/local'
import GoogleTagManager from "@/components/GoogleTagManager/GoogleTagManager";
import {ReactNode} from "react";
import Head from "next/head";
import StarsCanvas from "@/components/UI/StarBackground/StarBackground";
import {useSelector} from "react-redux";
import {RootState} from "@/store/store";
import Footer from "@/components/Footer/Footer";

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


export const metadata: Metadata = {
    openGraph: {
        title: 'Frontend Developer',
        description: 'Development of websites and applications',
        url: 'https://codecraftmaster.com',
        siteName: 'codecraftmaster.com',
        images: [
            {
                url: '/logo.png',
                width: 800,
                height: 600,
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
}

export default async function RootLayout({
                                             children,
                                             params
                                         }: {
    children: ReactNode
    params: { lang: Locale }
}) {
    const {navigation} = await getDictionary(params.lang)

    return (
        <html lang={params.lang === "en" ? "en" : "ua"}>
        <Head>
            <GoogleTagManager/>
        </Head>
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
