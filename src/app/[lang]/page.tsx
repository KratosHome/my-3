import {Viewport} from 'next'
import React, {lazy} from "react";
import ContainerModel from "@/components/ContainerModel/ContainerModel";

const HeroSection = lazy(() => import('@/components/home/HeroSection/HeroSection'));
const WrapperRequest = lazy(() => import('@/components/home/WrapperRequest/WrapperRequest'));
const AboutMe = lazy(() => import('@/components/home/AboutMe/AboutMe'));
const Connect = lazy(() => import('@/components/Connect/Connect'));
const Services = lazy(() => import('@/components/home/Services/Services'));
const Experience = lazy(() => import('@/components/home/Experience/Experience'));
const Projects = lazy(() => import('@/components/home/Projects/Projects'));


export const viewport: Viewport = {
    themeColor: [
        {media: '(prefers-color-scheme: light)', color: '#ffffff'},
        {media: '(prefers-color-scheme: dark)', color: '#000000'},
    ],
}

export async function generateMetadata({params}: any) {
    const canonicalUrl = params.lang === "en" ? 'https://codecraftmaster.com/en' : 'https://codecraftmaster.com/ua';


    return {
        title: params.lang === "en" ? 'Frontend Developer 🧑‍💻 CodeCraftMaster.com' : 'Фронтенд Розробник 🧑‍💻 CodeCraftMster.com',
        description: params.lang === "en" ? '🚀 Your partner in mobile app, website, and e-commerce development. Innovative solutions with a personal touch 🖥📲🦾' : '🚀 Ваш партнер у розробці мобільних додатків, веб-сайтів та інтернет-магазинів. Інноваційні рішення та особистий підхід 🖥📲🦾.',
        keywords: params.lang === "en" ?
            ['Next.js',
                'React',
                'JavaScript',
                "mobile app development",
                "website creation",
                "e-commerce development",
                "JavaScript programming",
                "web development",
                "UI/UX design",
                "software development",
                "web design",
                "mobile development",
                "e-commerce",
                "frontend development",
                "Apple development"] :
            ['Next.js',
                'React',
                'JavaScript',
                "розробка мобільних додатків",
                "створення веб-сайтів",
                "розробка інтернет-магазинів",
                "програмування на JavaScript",
                "веб-розробка",
                "UI/UX дизайн",
                "розробка програмного забезпечення",
                "веб-дизайн",
                "мобільна розробка",
                "е-комерція",
                "фронтенд розробка",
                "Apple розробник"],
        authors: [
            {name: 'Олег Ткач', url: 'https://codecraftmaster.com'},
            {
                name: 'Tanya Kucherak',
                url: 'https://www.linkedin.com/in/tetiana-kucherak/'
            }],
        creator: 'Oleg Tkach',
        publisher: 'Oleg Tkach',
        openGraph: {
            title: params.lang === "en" ? 'Frontend Developer 🧑‍💻 CodeCraftMaster.com' : 'Фронтенд Розробник 🧑‍💻 CodeCraftMster.com',
            description: params.lang === "en" ? '🚀 Your partner in mobile app, website, and e-commerce development. Innovative solutions with a personal touch 🖥📲🦾' : '🚀 Ваш партнер у розробці мобільних додатків, веб-сайтів та інтернет-магазинів. Інноваційні рішення та особистий підхід 🖥📲🦾.',
            url: canonicalUrl,
            siteName: 'CodeCraftMaster.com',
            images: '/logo.png',
            locale: params.lang === "en" ? 'en_US' : 'uk_UA',
            type: 'website',
        },
        robots: {
            index: true,
            follow: true,
            nocache: true,
            googleBot: {
                index: true,
                follow: true,
                noimageindex: false,
            },
        },
        metadataBase: new URL('https://codecraftmaster.com'),
        alternates:
            {
                canonical: canonicalUrl,
                languages: {
                    'en-US': '/en',
                    'uk-UA': '/ua',
                },
            },
        icons: {
            icon: '/logo.png',
            shortcut: '/logo.png',
            apple: '/logo.png',
            other:
                {
                    rel: 'apple-touch-icon-precomposed',
                    url: '/apple-touch-icon-precomposed.png',
                },
        },
    }
}

export default function Home() {
    return (
        <main>
            <ContainerModel/>
            <section id="section1" className="hero-section">
                <HeroSection/>
            </section>
            <section id="about" className="about-section">
                <AboutMe/>
            </section>
            <section id="projects" className="project-section">
                <Projects/>
            </section>
            <section id="services" className="hide-model">
                <Services/>
            </section>
            <section id="experience">
                <Experience/>
            </section>
            <section id="trustedBy">
                <WrapperRequest/>
            </section>
            <section id="contact">
                <Connect/>
            </section>
        </main>
    )
}
