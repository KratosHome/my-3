import HeroSection from "@/components/HeroSection/HeroSection";
import WrapperRequest from "@/components/WrapperRequest/WrapperRequest";
import AboutMe from "@/components/AboutMe/AboutMe";
import Connect from "@/components/Connect/Connect";
import SelectedProjects from "@/components/SelectedProjects/SelectedProjects";
import Services from "@/components/Services/Services";
import Experience from "@/components/Experience/Experience";
import Head from "next/head";
import GoogleTagManager from "@/components/GoogleTagManager/GoogleTagManager";


export default function Home() {

    return (
        <>
            <Head>
                <GoogleTagManager/>
                <title>Frontend-End</title>
                <meta property="og:title"
                      content="CodeCraftMaster - Your Guide to the World of Programming"/>
                <meta property="og:description"
                      content="Development of complex and interesting projects"/>
                <meta property="og:image" content={"/logo.png"}/>
                <meta property="og:url" content="codecraftmaster.com"/>
                <meta property="og:type" content="website"/>

                <meta property="og:site_name" content="codecraftmaster"/>
            </Head>
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
        </>
    )
}
