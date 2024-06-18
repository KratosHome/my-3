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
import HoverLink from '@/components/UI/HoverLink/HoverLink'
import SubNav from '@/components/sections/header/DesktopHeader/SubNav/SubNav'
import LogOut from '@/components/auth/LogOut/LogOut'
import LanguageChange from '@/components/bloks/LanguageChange/LanguageChange'
import ThemeChange from '@/components/bloks/ThemeChange/ThemeChange'
import { useLocale } from 'use-intl'

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
    <header>
      <nav className="z-10 flex justify-between">
        <Link
          href={`/${locale}`}
          className="logo"
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
          className={`nav-bar__list`}
          // onMouseLeave={() => setIsOpenSubMenu({})}
        >
          {filteredMenu.map((menu: any, index: number) => (
            <React.Fragment key={`${menu.rout}_${index + index + index}`}>
              <li
                className={`menu-item`}
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
        <div className="nav-bar-toggle">
          <LanguageChange />
          <ThemeChange />
        </div>
      </nav>
    </header>
  )
}

export default Header
