import HeroSection from "@/components/HeroSection/HeroSection";
import WrapperRequest from "@/components/WrapperRequest/WrapperRequest";
import AboutMe from "@/components/AboutMe/AboutMe";
import Connect from "@/components/Connect/Connect";
import SelectedProjects from "@/components/SelectedProjects/SelectedProjects";
import Services from "@/components/Services/Services";
import Experience from "@/components/Experience/Experience";
import {Viewport} from 'next'

export const viewport: Viewport = {
    themeColor: 'black',
}

export async function generateMetadata({params}: any) {
    return {
        title: params.lang === "en" ? 'Frontend Developer 🧑‍💻' : 'Фронтенд Розробник 🧑‍💻',
        description: params.lang === "en" ? '🚀 Your reliable partner in software development! 🖥 Specializing in creating innovative mobile apps, 📲 websites, and e-commerce stores. Bringing your ideas to life with the latest technologies and a personalized approach 🦾.' : '🚀 Ваш надійний партнер у розробці програмного забезпечення! 🖥 Спеціалізуюсь на створенні інноваційних мобільних додатків, 📲 веб-сайтів та інтернет-магазинів. Втілюю у життя ваші ідеї з найсучаснішими технологіями та індивідуальним підходом 🦾',
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
        authors: [{name: 'Олег Ткач', url: 'https://codecraftmaster.com'}, {name: 'Tanya Kucherak', url: 'https://www.linkedin.com/in/tetiana-kucherak/'}],
        creator: 'Oleg Tkach',
        publisher: 'Oleg Tkach',
        themeColor: '#000000',
        openGraph: {
            title: params.lang === "en" ? 'Frontend Developer 🧑‍💻' : 'Фронтенд Розробник 🧑‍💻',
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
        metadataBase: new URL('https://codecraftmaster.com'),
        alternates: {
            canonical: '/',
            languages: {
                'en-US': '/en',
                'uk-UA': '/ua',
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
