import './globals.css'
import GoogleTagManager from "@/components/bloks/GoogleTagManager/GoogleTagManager";
import StarsCanvas from "@/components/UI/StarBackground/StarBackground";
import Footer from "@/components/bloks/Footer/Footer";
import Head from "next/head";
import MyThemeProvider from "@/components/bloks/MyThemeProvider/MyThemeProvider";
import {auth} from "@/server/users/auth";
import Header from "@/components/bloks/Header/Header";
import SessionWrapper from "@/components/bloks/SessionWrapper/SessionWrapper";
import BlockPageTransition from "@/components/animation/BlockPageTransition/BlockPageTransition";
import NextIntProvider from "@/components/NextIntProvider";

export const dynamic = 'force-dynamic';

export default async function LocaleLayout({
                                               children,
                                               params: {locale}
                                           }: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    //   const session: any = await auth();

    return (
        <html lang={locale}>
        <GoogleTagManager/>
        <MyThemeProvider>
            <SessionWrapper>
                <NextIntProvider locale={locale}>
                    <body>
                    <header>
                        <BlockPageTransition/>
                        <Header/>
                        <StarsCanvas/>
                    </header>
                    <main>
                        {children}
                    </main>
                    <Footer/>
                    </body>
                </NextIntProvider>
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

