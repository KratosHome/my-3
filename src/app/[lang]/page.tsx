import styles from './page.module.css'
import HeroSection from "@/components/HeroSection/HeroSection";
import {getDictionary} from "@/api/dictionary";
import {fetchReviews} from "@/api/date";
import {Locale} from "../../../i18n.config";

export default async function Home({
                                       params: {lang}
                                   }: {
    params: { lang: Locale }
}) {
    const {navigation} = await getDictionary(lang)
    const reviews = await fetchReviews()

    return (
        <main className={styles.main}>
            <section id="section1">
                <HeroSection navigation={navigation}/>
            </section>
        </main>
    )
}
