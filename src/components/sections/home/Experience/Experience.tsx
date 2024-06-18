'use client'
import React from 'react'
import './Experience.scss'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useH2Animation } from '@/animation/useH2Animation'
import { experience } from '@/mokDate/experience'
import ExperienceList from '@/components/sections/home/Experience/ExperienceList/ExperienceList'

const Experience = () => {
  const pathName = usePathname()
  const animatedRef = useH2Animation()

  return (
    <motion.div layout className="container-experience">
      <h2 ref={animatedRef} className="title-block">
        {pathName === '/ua' ? `Професійний досвід` : `Professional experience`}
      </h2>
      <div className="container-experience-list">
        {experience.map((item, index) => (
          <ExperienceList key={item.id} item={item} index={index} />
        ))}
      </div>
    </motion.div>
  )
}

export default Experience
