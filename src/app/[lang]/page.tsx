import HeroSection from "@/components/HeroSection/HeroSection";
import WrapperRequest from "@/components/WrapperRequest/WrapperRequest";
import AboutMe from "@/components/AboutMe/AboutMe";
import Connect from "@/components/Connect/Connect";
import SelectedProjects from "@/components/SelectedProjects/SelectedProjects";
import Services from "@/components/Services/Services";
import Experience from "@/components/Experience/Experience";


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
        </main>
    )
}

/*


            <section id="services">
                <Services/>
            </section>
            <section id="experience">
                <Experience/>
            </section>



            <section id="trustedBy">
                <WrapperRequest/>
            </section>
            <section id="connect">
                <Connect/>
            </section>
 */