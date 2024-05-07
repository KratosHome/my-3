import '../globals.scss'
import GoogleTagManager from "@/components/bloks/GoogleTagManager/GoogleTagManager";
import StarsCanvas from "@/components/UI/StarBackground/StarBackground";
import Footer from "@/components/bloks/Footer/Footer";
import MyThemeProvider from "@/components/bloks/MyThemeProvider/MyThemeProvider";
import {auth} from "@/server/auth/auth";
import Header from "@/components/bloks/Header/Header";
import SessionWrapper from "@/components/bloks/SessionWrapper/SessionWrapper";
import BlockPageTransition from "@/components/animation/BlockPageTransition/BlockPageTransition";
import NextIntProvider from "@/components/NextIntProvider";
import localFont from 'next/font/local'
import {SpeedInsights} from '@vercel/speed-insights/next';

export const dynamic = 'force-dynamic';

const myFont = localFont({
    src: [
        {
            path: '../../components/fonts/Consolas.ttf',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../components/fonts/Consolas-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
    ],
})

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
                <NextIntProvider locale={locale}>
                    <body className={myFont.className}>
                    <header>
                        <BlockPageTransition/>
                        <Header session={session}/>
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
        <SpeedInsights/>
        </html>
    )
}

export function generateStaticParams() {
    return [
        {params: {locale: "en"}},
        {params: {locale: "ua"}},
    ];
}

