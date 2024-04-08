import {Viewport} from 'next'
import React, {lazy} from "react";
import ContainerModel from "@/components/ContainerModel/ContainerModel";
import AnimatedPage from "@/components/animationTransition/AnimatedPage/AnimatedPage";
import MainSchem from "@/components/metadata/MainSchem";
import mainMetadata from "@/components/metadata/mainMetadata";

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
    const lang = params.locale === "en";

    return mainMetadata({lang})
}

export default function Home({
                                 params: {locale}
                             }: {
    children: React.ReactNode;
    params: { locale: string };
}) {

    return (
        <>
            <MainSchem locale={locale}/>
            <AnimatedPage>
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
            </AnimatedPage>
        </>
    )
}
