'use client'
import DesktopHeader from '@/components/sections/header/DesktopHeader/DesktopHeader'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import MobileHeader from '@/components/sections/header/MobileHeader/MobileHeader'
import { menuDate } from '@/mokDate/menuDate'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import HoverLink from '@/components/UI/hover-link/hover-link'
import SubNav from '@/components/sections/header/DesktopHeader/SubNav/SubNav'
import LogOut from '@/components/sections/auth/LogOut/LogOut'
import LanguageChange from '@/components/bloks/LanguageChange/LanguageChange'
import ThemeChange from '@/components/bloks/ThemeChange/ThemeChange'
import { useLocale } from 'use-intl'
import MobileMenu from '@/components/bloks/mobile-menu/mobile-menu'

gsap.registerPlugin(ScrollTrigger)

const Header = () => {
  const { data: session, status } = useSession()
  const locale = useLocale()

  const filteredMenu = menuDate.filter((item) => {
    if (session?.user && item.rout === '/login') return false
    if (!session?.user && item.rout === '/profile') return false
    return true
  })

  return (
    <header className="relative overflow-hidden">
      <nav className="z-10 flex justify-between px-5 py-5">
        <Link
          href={`/${locale}`}
          // onClick={(e) => handlePageClick(e, `/${locale}`)}
        >
          <Image
            title="logo"
            src={'/logo.png'}
            alt={'logo'}
            width={50}
            height={50}
          />
        </Link>
        <ul
          className={`hidden items-center gap-10 lg:flex`}
          // onMouseLeave={() => setIsOpenSubMenu({})}
        >
          {filteredMenu.map((menu: any, index: number) => (
            <React.Fragment key={`${menu.rout}_${index + index + index}`}>
              <li
              //  onMouseEnter={() => subMenuToggle(index)}
              >
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
      </nav>
    </header>
  )
}

export default Header
