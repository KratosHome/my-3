import HeroSection from "@/components/HeroSection/HeroSection";
import WrapperRequest from "@/components/WrapperRequest/WrapperRequest";


export default function Home() {

    return (
        <main>
            <section id="section1">
                <HeroSection/>
            </section>
            <section>
                <WrapperRequest/>
            </section>
        </main>
    )
}
