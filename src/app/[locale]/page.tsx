import { Viewport } from 'next'
import AnimatedPage from '@/components/animation/AnimatedPage/AnimatedPage'
import MainSchem from '@/components/metadata/MainSchem'
import mainMetadata from '@/components/metadata/mainMetadata'
import HeroSection from '@/components/sections/home/HeroSection/HeroSection'
import AboutMe from '@/components/sections/home/AboutMe/AboutMe'
import Projects from '@/components/sections/home/Projects/Projects'
import ServicesNew from '@/components/sections/home/ServicesNew/ServicesNew'
import Experience from '@/components/sections/home/Experience/Experience'
import WrapperRequest from '@/components/sections/home/WrapperRequest/WrapperRequest'
import Connect from '@/components/sections/home/Connect/Connect'

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
      <AnimatedPage>
        <section id="section1" className="hero-section">
          <HeroSection />
        </section>
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
      </AnimatedPage>
    </>
  )
}
