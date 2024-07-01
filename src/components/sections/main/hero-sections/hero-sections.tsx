'use client'
import React from 'react'
import Image from 'next/image'
import Swim from '@/components/animation/Swim/Swim'
import { usePathname } from 'next/navigation'
import axiosLogo from '../../../../assets/aboutMe/axiosLogo.svg'
import astroLight from '../../../../assets/aboutMe/astro-light.svg'
import vue from '../../../../assets/aboutMe/vue.svg'
import CSSLogo from '../../../../assets/aboutMe/CSSLogo.svg'
import GSAP from '../../../../assets/aboutMe/gsap-greensock.svg'
import tailwindcss from '../../../../assets/aboutMe/tailwindcss.svg'
import gitOriginalLogo from '../../../../assets/aboutMe/gitOriginalLogo.svg'
import HTMLLogo from '../../../../assets/aboutMe/HTMLLogo.svg'
import JavaScriptLogo from '../../../../assets/aboutMe/JavaScriptLogo.svg'
import MobXLogo from '../../../../assets/aboutMe/MobXLogo.svg'
import NextLogo from '../../../../assets/aboutMe/NextLogo.svg'
import ReactLogo from '../../../../assets/aboutMe/ReactLogo.svg'
import reactSpringLogo from '../../../../assets/aboutMe/reactSpringLogo.svg'
import ReduxLogo from '../../../../assets/aboutMe/ReduxLogo.svg'
import SocketLogo from '../../../../assets/aboutMe/SocketLogo.svg'
import StrapiLogo from '../../../../assets/aboutMe/StrapiLogo.svg'
import TypeScriptLogo from '../../../../assets/aboutMe/TypeScriptLogo.svg'
import Button from '@/components/UI/Button/Button'

const technologies = [
  { name: 'React-React Native', logo: ReactLogo, delay: 0.2 },
  { name: 'Next JS', logo: NextLogo, delay: 0.4 },
  { name: 'Vue', logo: vue, delay: 0.8 },
  { name: 'Astro JS', logo: astroLight, delay: 0.2 },
  { name: 'Strapi', logo: StrapiLogo, delay: 0.3 },
  { name: 'JavaScript', logo: JavaScriptLogo, delay: 0.8 },
  { name: 'TypeScript', logo: TypeScriptLogo, delay: 0.4 },
  { name: 'HTML', logo: HTMLLogo, delay: 0.6 },
  { name: 'CSS', logo: CSSLogo, delay: 0.2 },
  { name: 'tailwindcss', logo: tailwindcss, delay: 0.2 },
  { name: 'GSAP', logo: GSAP, delay: 0.2 },
  { name: 'ReactSpring', logo: reactSpringLogo, delay: 0.8 },
  { name: 'Redux', logo: ReduxLogo, delay: 0.8 },
  { name: 'MobX', logo: MobXLogo, delay: 0.4 },
  { name: 'Socket', logo: SocketLogo, delay: 0.2 },
  { name: 'Axios', logo: axiosLogo, delay: 0.6 },
  { name: 'Git', logo: gitOriginalLogo, delay: 0.5 },
]

const HeroSection = () => {
  const pathName = usePathname()

  const startDate = new Date('2021-10-01')

  const calculateYears = (start: Date, end: Date): number => {
    const years: number = end.getFullYear() - start.getFullYear()
    return years
  }

  const years = calculateYears(startDate, new Date())

  return (
    <section
      id="hero-section"
      className="mx-auto mt-[192px] flex max-w-[2600px] flex-col justify-between px-10 lg:flex-row"
    >
      <div className="w-full whitespace-nowrap font-jetbrains">
        <h1 className="mb-[24px] text-7xl font-extrabold uppercase tracking-[3px]">
          Frontend-Developer
        </h1>
        <h2 className="mb-[24px] text-5xl font-extrabold uppercase tracking-[3px] text-primary-light">
          {years} years in developer
        </h2>
        <h3 className="mb-[48px] block font-сonsolas text-[28px]">
          Code as Art: Engineering Functional Beauty
        </h3>
        <Button>Hire me</Button>
      </div>
      <div className="relative w-full">
        <div className="absolute right-[400px] top-[200px]">
          <h2 className="text-center font-jetbrains text-5xl font-bold uppercase">
            Technologies
          </h2>
          <div className="mt-16 grid grid-cols-5 place-content-center gap-4">
            {technologies.map((tech, index) => (
              <Swim
                key={index}
                isFast={true}
                delay={tech.delay}
                className="group flex flex-col items-center justify-center"
              >
                <div className="text-center text-2xl transition-transform duration-500 ease-in-out group-hover:scale-110">
                  {tech.name}
                </div>
                <Image
                  title={tech.name}
                  src={tech.logo}
                  alt={tech.name}
                  width={80}
                  height={80}
                  className="transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
              </Swim>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
