import { Viewport } from 'next'
import AnimatedPage from '@/components/animation/AnimatedPage/AnimatedPage'
import MainSchem from '@/components/metadata/MainSchem'
import mainMetadata from '@/components/metadata/mainMetadata'
import AboutMe from '@/components/sections/main/AboutMe/AboutMe'
import Projects from '@/components/sections/main/Projects/Projects'
import ServicesNew from '@/components/sections/main/ServicesNew/ServicesNew'
import Experience from '@/components/sections/main/Experience/Experience'
import WrapperRequest from '@/components/sections/main/WrapperRequest/WrapperRequest'
import Connect from '@/components/sections/main/Connect/Connect'
import HeroSection from '@/components/sections/main/hero-sections/hero-sections'

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
}

export async function generateMetadata({ params }: any) {
  const lang = params.locale === 'en'

  return mainMetadata({ lang })
}

export default function Home({ params: { locale } }: any) {
  return (
    <>
      <MainSchem locale={locale} />
      <HeroSection />
      <section id="about" className="about-section">
        <AboutMe />
      </section>
      <section id="projects" className="project-section">
        <Projects />
      </section>
      <section id="services" className="hide-model">
        <ServicesNew />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="trustedBy">
        <WrapperRequest />
      </section>
      <section id="contact">
        <Connect />
      </section>
    </>
  )
}
