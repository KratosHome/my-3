'use client'
import React from 'react';
import "./Experience.scss";
import {motion} from 'framer-motion';
import ExperienceList from "@/components/Experience/ExperienceList/ExperienceList";
import {usePathname} from "next/navigation";
import {useH2Animation} from "@/animation/useH2Animation";

const experience = [
    {
        id: 1,
        company: "Rastcom",
        titleEn: "Front-End React Developer",
        titleUa: "Розробник Front-End на React",
        workPlace: "Remote",
        descriptionEn: "Service ordering platform. Worked on the development of a calendar, chat, access system based on subscription levels, user profiles, verification, admin panel. Transfer project's to mobile devices using React Native.",
        descriptionUa: "Платформа замовлення послуг. Працював над розробкою календаря, чату, системи доступу на основі рівнів підписки, профілів користувачів, верифікації, адмінпанель. Переносив проект на мобільні пристрої за допомогою React Native.",
        dateUa: "05.2023 - 01.2024",
        dateEn: "05.2023 - 01.2024",
        technologies: ["React", "React Native", "TypeScript", "SCSS", "Redux Toolkit", "Mui", "Socket.io", "React Big Calendar", "framer motion", "Git"],
        link: "https://rastcom.com"
    },
    {
        id: 2,
        company: "Team Сhallenge",
        titleEn: "Front-End React Developer",
        titleUa: "Розробник Front-End на React",
        workPlace: "Remote",
        descriptionEn: "Conducted code reviews, provided motivation and direction, assisted in problem solving and\n" +
            "development tasks, reviews documentation. The team included 2 designers, 1 project\n" +
            "manager, 2 back-end developers and 4 front-end developers",
        descriptionUa: "Проводив перевірки коду, забезпечував мотивацію та напрямок, допомагав у вирішенні проблем та постановка задач, огляди документації.\n" +
            "Команда включала: 2 дизайнера, 1 проект менеджер, 2 back-end розробники та 4 front-end розробники.",
        dateUa: "05.2023 - дотепер",
        dateEn: "05.2023 - for now",
        technologies: ["React", "NextJS", "TypeScript", "SCSS", "Redux Toolkit", "framer motion", "Mui", "GSAP", "Git"],
        link: "https://teamchallenge.io"
    },
    {
        id: 3,
        company: "ETERE",
        titleEn: "Front-End React Developer",
        titleUa: "Розробник Front-End на React",
        workPlace: "Remote",
        descriptionEn: "Platforms for finding video materials. Сutting video into segments, adding metadata, structuring data, rubber UI, optimizing video streaming and developing functions to store and modify data on the user's computer.",
        descriptionUa: "Платформи для пошуку відеоматеріалів. Розрізання відео на сегменти, додавання метаданих, структурування даних, гумовий UI, оптимізація потокового відео та розробка функцій для зберігання та зміни даних на комп’ютері користувача.",
        dateUa: "05.2022 - 04.2023",
        dateEn: "05.2022 - 04.2023",
        technologies: ["React", "TypeScript", "SCSS", "Greensock", "SOAP", "XML", "SVN"],
        link: "https://www.etere.com"
    },
    {
        id: 4,
        company: "Robin Bobbin",
        titleEn: "Front-End React Developer",
        titleUa: "Розробник Front-End на React",
        workPlace: "Remote",
        descriptionEn: "Coffee shop. Adaptive UI development, shopping cart, admin panel, delivery order acceptance, reviews, delivery time.",
        descriptionUa: "Кав'ярня. Розробка адаптивного інтерфейсу користувача, кошик для покупок, адмін панель, прийом замовлень на доставку, огляди, час доставки.",
        dateUa: "10.2021 - 05.2022",
        dateEn: "10.2021 - 05.2022",
        technologies: ["NextJS", "TypeScript", "Redux Toolkit", "Styled Component", "Greensock", "SOAP", "XML", "SVN"],
        link: null
    },
    {
        id: 5,
        company: "Sharm Beauty",
        titleEn: "Project Manager",
        titleUa: "Менеджер",
        workPlace: "Office",
        descriptionEn: [
            {id: 6, text: "2020 - 2021 - Opening and development coffee shop “RobinBobbin”"},
            {id: 7, text: "2018 - 2021 - Product Owner SharmBeauty.ua"},
            {id: 8, text: "2017 - 2021 - Working on expanding on Sharm"},
            {id: 9, text: "2017 - 2021 - Head of the Lux department of the Shram"},
            {id: 10, text: "2014 - 2019 - Improvement of conditions with suppliers"},
        ],
        descriptionUa: [
            {id: 11, text: "2020 - 2021 - Відкриття та розвиток кав'ярні “RobinBobbin”"},
            {id: 12, text: "2018 - 2021 - Керівние продукту SharmBeauty.ua"},
            {id: 13, text: "2017 - 2021 - Робота над розширенням Sharm"},
            {id: 14, text: "2017 - 2021 - Керівник відділу Lux компанії Shram"},
            {id: 15, text: "2014 - 2019 - Покращення умов співпраці з постачальниками"},
        ],
        dateUa: "2014 - 2020",
        dateEn: "2014 - 2020",
        technologies: [],
        link: "https://sharmbeauty.ua"
    },
]


const Experience = () => {
    const pathName = usePathname();
    const animatedRef = useH2Animation();

    return (
        <motion.div layout className="container-experience">
            <h2 ref={animatedRef} className="title-block">
                {pathName === "/ua" ? `Професійний досвід` : `Professional experience`}
            </h2>
            <div className="container-experience-list">
                {experience.map((item, index) => (
                    <ExperienceList key={item.id} item={item} index={index}/>
                ))}
            </div>
        </motion.div>
    );
};

export default Experience;
