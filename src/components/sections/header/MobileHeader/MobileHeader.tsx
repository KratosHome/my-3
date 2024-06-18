'use client'
import React, { useState } from 'react'
import './MobileHeader.scss'
import Link from 'next/link'
import CloseSvg from '@/assets/CloseSvg'
import BurgerMenuSvg from '@/assets/BurgerMenuSvg'
import MobileMenu from '@/components/sections/header/MobileHeader/MobileMenu/MobileMenu'
import Image from 'next/image'
import LanguageChange from '@/components/bloks/LanguageChange/LanguageChange'
import ThemeChange from '@/components/bloks/ThemeChange/ThemeChange'
import { useGsapPageTransition } from '@/hooks/useGsapPageTransition'
import { useLocale } from '@/hooks/useLocale'

const MobileHeader = ({ session, filteredMenu }: any) => {
  const triggerAnimation = useGsapPageTransition()
  const { locale } = useLocale()

  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const menuToggle = () => {
    setIsOpenMenu((prev) => !prev)
  }

  const handleLogoClick = (e: React.MouseEvent, rout: string) => {
    e.preventDefault()
    triggerAnimation('.page-transition', rout)
  }

  return (
    <div className="container-header-mobile">
      <button type="button" className="burger-menu-btn" onClick={menuToggle}>
        {isOpenMenu ? <CloseSvg /> : <BurgerMenuSvg />}
      </button>
      <MobileMenu
        session={session}
        isOpen={isOpenMenu}
        closeMenu={setIsOpenMenu}
        filteredMenu={filteredMenu}
      />
      <Link
        href="/public"
        className="logo"
        onClick={(e) => handleLogoClick(e, `/${locale}`)}
      >
        <Image
          title="logo"
          src={'/logo.png'}
          alt={'logo'}
          width={50}
          height={50}
        />
      </Link>
      <div className="nav-bar-toggle">
        <LanguageChange />
        <ThemeChange />
      </div>
    </div>
  )
}

export default MobileHeader
