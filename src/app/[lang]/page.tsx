import {Inter} from 'next/font/google'
import styles from './page.module.css'
import HeroSection from "@/components/HeroSection/HeroSection";

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <main className={styles.main}>
            <section id="section1">
                <HeroSection navigation={navigation}/>
            </section>
        </main>
    )
}
