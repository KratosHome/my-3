'use client'
import React, { useRef } from 'react'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import { handleHover } from '@/components/UI/Hover/hover'
import arrow from '../../../assets/icons/arrow.svg'
import { useLocale } from '@/hooks/useLocale'
import ArrowDownSvg from '@/assets/ArrowDownSvg'

export default function LanguageChange() {
  const { locale } = useLocale()
  const ref = useRef(null)
  const { contextSafe } = useGSAP()
  const pathname = usePathname()
  const router = useRouter()

  const redirectedPathName = (sendLocale: string) => {
    const newPathname = `/${sendLocale}/${pathname.split('/').slice(2).join('/')}`
    router.push(`${newPathname}`)
  }

  const handleMouseEnter = contextSafe(() => {
    handleHover(ref)
  })

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onClick={() => redirectedPathName(locale === 'ua' ? 'en' : 'ua')}
      className="group flex cursor-pointer gap-2 text-lg uppercase"
    >
      <span>{locale === 'ua' ? 'en' : 'ua'}</span>
      <ArrowDownSvg className="mt-[4px] fill-black transition-all duration-300 group-hover:rotate-180 dark:fill-white" />
    </div>
  )
}
