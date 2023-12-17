import './globals.css'
import {Locale} from "../../../i18n.config";
import {getDictionary} from "@/services/dictionary";
import NavBar from "@/components/NavBar/NavBar";
import {Metadata} from "next";
import ReduxProvider from "@/app/[lang]/provider";
import localFont from 'next/font/local'
import GoogleTagManager from "@/components/GoogleTagManager/GoogleTagManager";
import {ReactNode} from "react";
import StarsCanvas from "@/components/UI/StarBackground/StarBackground";
import Footer from "@/components/Footer/Footer";
import {Html, Head, Main, NextScript} from 'next/document';

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
    title: 'Frontend-End',
    description: 'Development of complex and interesting projects',
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
        <Html lang={params.lang === "en" ? "en" : "ua"}>
            <Head>
                <GoogleTagManager/>
                <title>Cool Title</title>
                <meta property="og:title" content="CodeCraftMaster - Your Guide to the World of Programming"/>
                <meta property="og:description"
                      content="Development of complex and interesting projects"/>
                <meta property="og:image" content={"/logo.png"}/>
                <meta property="og:url" content="codecraftmaster.com"/>
                <meta property="og:type" content="website"/>

                <meta property="og:site_name" content="codecraftmaster"/>
                <meta property="og:locale" content={params.lang === "en" ? "en" : "ua"}/>
            </Head>
            <ReduxProvider>
                <body className={`${JetBrainsMono.variable} ${consolas.variable} ${JetBrainsMonoBold.variable}`}>
                <NavBar navigation={navigation}/>
                <StarsCanvas/>
                {children}
                </body>
                <Footer/>
            </ReduxProvider>
        </Html>
    )
}
