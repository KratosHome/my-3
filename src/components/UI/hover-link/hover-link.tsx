'use client'
import React, { FC, ReactNode } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useGsapPageTransition } from '@/hooks/useGsapPageTransition'
import ArrowDownSvg from '@/assets/ArrowDownSvg'

interface activeLinkType {
  children: ReactNode
  rout: string
  click?: () => void
  isSub?: boolean
}

const HoverLink: FC<activeLinkType> = ({ children, rout, click, isSub }) => {
  const pathName = usePathname()
  const isActive = pathName === rout
  const triggerAnimation = useGsapPageTransition()

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    triggerAnimation('.page-transition', rout, click)
  }

  return (
    <Link
      className={`group flex gap-2 rounded-sm px-2 text-lg capitalize transition-all duration-300 ${isActive ? 'bg-violet-100 dark:bg-slate-900' : 'hover:text-gray-400'}`}
      href={rout}
      onClick={handleClick}
    >
      {children}
      {isSub ? (
        <ArrowDownSvg className="mt-[4px] transition-all duration-300 group-hover:rotate-180" />
      ) : (
        false
      )}
    </Link>
  )
}

export default HoverLink
