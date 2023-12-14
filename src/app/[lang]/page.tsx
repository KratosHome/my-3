import HeroSection from "@/components/HeroSection/HeroSection";
import {fetchReviews} from "@/api/date";


export default async function Home() {
    const reviews = await fetchReviews()

    return (
        <main>
            <section id="section1">
                <HeroSection />
            </section>
        </main>
    )
}
