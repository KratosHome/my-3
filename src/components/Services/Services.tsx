'use client'
import "./Services.scss";
import React from "react";
import Image from "next/image";
import {usePathname} from "next/navigation";
import Swiper from "@/components/UI/Swiper/Swiper";


const services = [
    {
        id: 1,
        nameUa: "Веб застосунок",
        nameEn: "Web App",
        descriptionEn: "I specialize in developing dynamic web applications, using React to create flexible and interactive user interfaces. My web applications are optimized for high performance and reliability, perfectly suited for various online services and corporate applications.",
        descriptionUa: "Спеціалізуюся на розробці динамічних веб-додатків, використовуючи React для створення гнучких та інтерактивних користувацьких інтерфейсів. Мої веб-додатки оптимізовані для досягнення високої продуктивності та надійності, ідеально підходящи для різноманітних онлайн-сервісів та корпоративних застосунків.",
        icon: "/services/webSite.svg",
    },
    {
        id: 2,
        nameUa: "E-commerce проект",
        nameEn: "E-commerce Project",
        descriptionEn: "Using Next.js, I create SEO-optimized E-commerce platforms that ensure fast page loading and improved interaction with search engines.",
        descriptionUa: "Використовуючи Next.js, я створюю оптимізовані під SEO E-commerce платформи, що забезпечують швидке завантаження сторінок та покращену взаємодію з пошуковими системами.",
        icon: "/services/store.svg",
    },
    {
        id: 3,
        nameUa: "Застосунок для iOS та Android",
        nameEn: "App Development for iOS & Android",
        descriptionEn: "Using React Native, I specialize in creating mobile applications that function excellently on both iOS and Android platforms. My applications not only look and feel native but also stand out for their high performance and optimal adaptation to user needs. I ensure a smooth integration with the features of each platform, ensuring that the applications are efficient and convenient to use.",
        descriptionUa: "Використовуючи React Native, я спеціалізуюся на створенні мобільних додатків, які відмінно функціонують на обох iOS та Android платформах. Мої додатки не тільки виглядають і відчуваються як нативні, але й вирізняються високою продуктивністю та оптимальною адаптацією до потреб користувача. Я забезпечую плавну інтеграцію з особливостями кожної платформи, гарантуючи, що додатки будуть ефективними та зручними у використанні.",
        icon: "/services/phone.svg",
    },
    {
        id: 4,
        nameUa: "Застосунок для Mac та Windows",
        nameEn: "App Development for Mac & Windows",
        descriptionEn: "Developing desktop applications for Mac and Windows using Electron. This allows me to create multi-platform solutions with equally high performance and native capabilities for each OS, including integration with system resources and user interfaces.",
        descriptionUa: "Розробка десктопних додатків для Mac та Windows з використанням Electron. Це дозволяє мне створювати багатоплатформні рішення з однаково високою продуктивністю та нативними можливостями для кожної ОС, включаючи інтеграцію з системними ресурсами та користувацькими інтерфейсами.",
        icon: "/services/displayCode.svg",
    },
    {
        id: 5,
        nameUa: "Оптимізація продуктивності",
        nameEn: "Performance Optimization",
        descriptionEn: "I specialize in optimizing the performance of web and mobile applications. My approach includes streamlining code, reducing load times, and ensuring responsive design. This results in faster, more efficient applications, enhancing user experience and search engine rankings.",
        descriptionUa: "Спеціалізуюся на оптимізації продуктивності веб- та мобільних додатків. Мій підхід включає оптимізацію коду, скорочення часу завантаження та забезпечення відгуку дизайну. Це призводить до швидших і ефективніших додатків, покращуючи користувацький досвід та рейтинги в пошукових системах.",
        icon: "/services/tachometer.svg",
    },
    {
        id: 6,
        nameUa: "Анімації",
        nameEn: "Animation",
        descriptionEn: "Using advanced tools such as GSAP for animations and Framer Motion to add movement and dynamics, I ensure that your digital products not only perform quickly but also provide users with a pleasant and engaging experience.",
        descriptionUa: "Використовуючи передові інструменти, такі як GSAP для анімацій та Framer Motion для додавання руху і динаміки, я забезпечую, що ваші цифрові продукти не тільки швидко працюють, але й надають користувачам приємний та залучаючий досвід.",
        icon: "/services/panorama.svg",
    }
]


const Services = () => {
    const pathName = usePathname();


    return (
        <div className='container-services'>
            <span className="title-block">
                {pathName === "/ua" ? `Мої послуги` : `My services`}
            </span>
            <Swiper
                cards={services}
                numberCards={0}
                isButtonToggle={true}
                renderItem={(item: any) => (
                    <div className="iner-box">
                        <Image src={item.icon} alt={item.nameUa} width={50} height={50}/>
                        <span>
                            {pathName === "/ua" ? `${item.nameUa}` : `${item.nameEn}`}
                        </span>
                        <div className="inner-box-description">
                            {pathName === "/ua" ? `${item.descriptionUa}` : `${item.descriptionEn}`}
                        </div>
                    </div>
                )}
            />
        </div>
    );
};


export default Services;