import '../globals.scss'
import GoogleTagManager from '@/components/bloks/GoogleTagManager/GoogleTagManager'
import StarsCanvas from '@/components/UI/StarBackground/StarBackground'
import Footer from '@/components/bloks/Footer/Footer'
import { auth } from '@/server/auth/auth'
import Header from '@/components/sections/header/Header'
import SessionWrapper from '@/components/bloks/SessionWrapper/SessionWrapper'
import NextIntProvider from '@/components/NextIntProvider'
import localFont from 'next/font/local'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { MyThemeProvider } from '@/components/bloks/MyThemeProvider/MyThemeProvider'
import { ReactNode } from 'react'
import ScrollToTop from '@/components/bloks/ScrollToTop/ScrollToTop'

export const dynamic = 'force-dynamic'

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
  params: { locale },
}: {
  children: ReactNode
  params: { locale: string }
}) {
  // const session: any = await auth()

  return (
    <html lang={locale}>
      <GoogleTagManager />
      <SpeedInsights />
      <body
        className={`${myFont.className}  bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400 dark:from-slate-950 dark:via-bg-black dark:bg-black h-full`}
      >
        <div className="bg-custom-hero bg-cover bg-center w-full h-screen absolute -z-10" />
        <MyThemeProvider>
          <SessionWrapper>
            <NextIntProvider locale={locale}>
              <ScrollToTop />
              <StarsCanvas />
              <Header />
              <main className="min-h-[90vh] ">{/* children */}</main>
              <Footer />
            </NextIntProvider>
          </SessionWrapper>
        </MyThemeProvider>
      </body>
    </html>
  )
}

export function generateStaticParams() {
  return [{ params: { locale: 'en' } }, { params: { locale: 'ua' } }]
}
