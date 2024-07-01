import React, { FC, useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

type SwimProps = {
  children: React.ReactNode
  className?: string
  isFast?: boolean
  delay?: number
}

const Swim: FC<SwimProps> = ({
  children,
  isFast = false,
  delay = 0,
  className,
}) => {
  const elementRef = useRef<HTMLDivElement>(null)
  const [isFloating, setIsFloating] = useState(true)

  useGSAP(() => {
    const speed = isFast ? 2 : 2
    const distance = isFast ? 10 : 1

    const timeline = gsap.timeline({
      defaults: { ease: 'power1.inOut' },
      repeat: -1,
      yoyo: true,
      repeatDelay: 1,
      delay,
      paused: !isFloating,
    })

    timeline
      .to(elementRef.current, {
        x: `${distance}%`,
        y: `-${distance}%`,
        duration: speed,
      })
      .to(elementRef.current, {
        x: `-${distance}%`,
        y: `${distance}%`,
        duration: speed,
      })
  })

  const handleMouseDown = () => setIsFloating(false)
  const handleMouseUp = () => setIsFloating(true)

  return (
    <div
      ref={elementRef}
      className={className}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {children}
    </div>
  )
}

export default Swim
