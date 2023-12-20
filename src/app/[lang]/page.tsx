import HeroSection from "@/components/HeroSection/HeroSection";
import WrapperRequest from "@/components/WrapperRequest/WrapperRequest";
import AboutMe from "@/components/AboutMe/AboutMe";
import Connect from "@/components/Connect/Connect";
import SelectedProjects from "@/components/SelectedProjects/SelectedProjects";
import Services from "@/components/Services/Services";
import Experience from "@/components/Experience/Experience";
import {Metadata} from "next";

export const metadata: Metadata = {
    openGraph: {
        title: 'Frontend Developer',
        description: 'Development of websites and applications',
        url: 'https://codecraftmaster.com',
        siteName: 'codecraftmaster.com',
        images: [
            {
                url: '/logo.png',
                width: 800,
                height: 600,
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
}


export default function Home() {

    return (
        <main>
            <section id="section1">
                <HeroSection/>
            </section>
            <section id="about">
                <AboutMe/>
            </section>
            <section id="projects">
                <SelectedProjects/>
            </section>
            <section id="services">
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
