import HeroSection from "@/components/HeroSection/HeroSection";
import WrapperRequest from "@/components/WrapperRequest/WrapperRequest";
import AboutMe from "@/components/AboutMe/AboutMe";
import Connect from "@/components/Connect/Connect";


export default function Home() {

    return (
        <main>
            <section id="section1">
                <HeroSection/>
            </section>
            <section id="about">
                <AboutMe/>
            </section>
            <section id="connаect">
                <WrapperRequest/>
            </section>
            <section id="connect">
                <Connect/>
            </section>
        </main>
    )
}
