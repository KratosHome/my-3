import './globals.css'
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
    const session: any = await auth();

    return (
        <html lang={locale}>
        <GoogleTagManager/>
        <MyThemeProvider>
            <SessionWrapper>
                <body>
                <BlockPageTransition/>
                <Header session={session}/>
                <StarsCanvas/>
                {children}
                </body>
                <Footer/>
            </SessionWrapper>
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

