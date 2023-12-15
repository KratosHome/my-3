import './globals.css'
import {Locale} from "../../../i18n.config";
import {getDictionary} from "@/services/dictionary";
import NavBar from "@/components/NavBar/NavBar";
import {Metadata} from "next";
import ReduxProvider from "@/app/[lang]/provider";
import localFont from 'next/font/local'
import GoogleTagManager from "@/components/GoogleTagManager/GoogleTagManager";

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
    children: React.ReactNode
    params: { lang: Locale }
}) {
    const {navigation} = await getDictionary(params.lang)

    return (
        <>
            <GoogleTagManager/>
            <ReduxProvider>
                <body className={`${JetBrainsMono.variable} ${consolas.variable} ${JetBrainsMonoBold.variable}`}>
                <NavBar navigation={navigation}/>
                {children}
                </body>
            </ReduxProvider>
        </>
    )
}
