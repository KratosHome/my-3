'use client'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { menuDate } from '@/mokDate/menuDate'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect } from 'react'
import HoverLink from '@/components/UI/hover-link/hover-link'
import LogOut from '@/components/sections/auth/LogOut/LogOut'
import LanguageChange from '@/components/bloks/LanguageChange/LanguageChange'
import ThemeChange from '@/components/bloks/ThemeChange/ThemeChange'
import { useLocale } from 'use-intl'
import MobileMenu from '@/components/bloks/mobile-menu/mobile-menu'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const Header = () => {
  const { data: session, status } = useSession()
  const locale = useLocale()

  useGSAP(() => {
    gsap.to('.header-bg', {
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      borderBottom: '1px solid rgba(31,65,129,0.25)',
      duration: 0.5,
      paddingTop: '-10px',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '.header-bg',
        start: 'top top',
        toggleActions: 'play none none reverse',
        invalidateOnRefresh: true,
      },
    })
  })

  const filteredMenu = menuDate.filter((item) => {
    if (session?.user && item.rout === '/login') return false
    if (!session?.user && item.rout === '/profile') return false
    return true
  })

  return (
    <header className="relative overflow-hidden px-10">
      <nav className="z-10 px-5">
        <div className="header-bg border-1 fixed left-0 top-0 z-50 mx-auto w-full border-neutral-700 px-10 pt-5">
          <div className="mx-auto flex max-w-[2600px] justify-between px-10">
            <Link href={`/${locale}`}>
              <Image
                title="logo"
                src={'/logo.png'}
                alt={'logo'}
                width={50}
                height={50}
              />
            </Link>
            <ul className="hidden items-center gap-10 lg:flex">
              {filteredMenu.map((menu: any, index: number) => (
                <React.Fragment key={`${menu.rout}_${index + index + index}`}>
                  <li>
                    <HoverLink
                      rout={`/${locale}${menu.rout}`}
                      isSub={menu?.subMenu.length}
                    >
                      {locale === 'en' ? menu.nameEn : menu.nameUa}
                    </HoverLink>
                  </li>
                </React.Fragment>
              ))}
              {session?.user ? <LogOut /> : null}
            </ul>
            <div className="flex items-center gap-10 lg:gap-5">
              <LanguageChange />
              <ThemeChange />
              <MobileMenu menu={filteredMenu} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
