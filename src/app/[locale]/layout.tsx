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
    <html lang={locale} suppressHydrationWarning>
      <GoogleTagManager />
      <SpeedInsights />
      <body
        className={`${myFont.className} dark:from-slate-750 h-full bg-gradient-to-b from-purple-50 via-purple-200 to-purple-300 dark:bg-black dark:from-slate-950`}
      >
        <div className="absolute -z-10 h-screen w-full bg-custom-hero bg-cover bg-center" />
        <MyThemeProvider>
          <SessionWrapper>
            <NextIntProvider locale={locale}>
              <ScrollToTop />
              <StarsCanvas />
              <Header />
              <main className="min-h-[90vh]">{/* children */}</main>
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
