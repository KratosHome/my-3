import HeroSection from "@/components/HeroSection/HeroSection";
import WrapperRequest from "@/components/WrapperRequest/WrapperRequest";
import AboutMe from "@/components/AboutMe/AboutMe";
import Connect from "@/components/Connect/Connect";
import SelectedProjects from "@/components/SelectedProjects/SelectedProjects";
import Services from "@/components/Services/Services";
import Experience from "@/components/Experience/Experience";

export async function generateMetadata({params, theme}: any) {
    console.log("params, params", params.lang)
    console.log("params, params", theme)
    return {
        title: 'Frontend Developer',
        description: 'Development of websites and applications',
        keywords: ['Next.js', 'React', 'JavaScript'],
        authors: [{name: 'Олег Ткач', url: 'https://codecraftmaster.com'}, {name: 'Tanya Kucherak', url: 'https://www.linkedin.com/in/tetiana-kucherak/'}],
        creator: 'Oleg Tkach',
        publisher: 'Oleg Tkach',
        openGraph: {
            title: params.lang === "en" ? 'Frontend Developer' : 'Фронтенд Розробник',
            description: 'Development of websites and applications',
            url: 'https://codecraftmaster.com',
            siteName: 'codecraftmaster.com',
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

        icons: {
            icon: '/logo.png',
            shortcut: '/logo.png',
            apple: '/logo.png',
            other: {
                rel: 'apple-touch-icon-precomposed',
                url: '/apple-touch-icon-precomposed.png',
            },
        },
    }
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
