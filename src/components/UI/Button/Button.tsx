'use client'
import React, { FC } from 'react'

interface ButtonType {
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
}

const Button: FC<ButtonType> = ({ children, onClick, disabled }) => {
  const buttonClasses = `text-white  group duration-300 hover:scale-105 active:scale-95 h-[62px] w-[169px] rounded-[8px] bg-primary-light dark:bg-brand-violet-primary-dark text-[20px] font-bold leading-normal tracking-[0.8px] uppercase ${disabled ? 'bg-[#7d7c7c]' : ''} ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`

  return (
    <button className={buttonClasses} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
