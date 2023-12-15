'use client'
import React, {useState} from 'react';
import "./Experience.scss";
import {motion} from 'framer-motion';
import ExperienceList from "@/components/Experience/ExperienceList/ExperienceList";
import {usePathname} from "next/navigation";

const experience = [
    {
        id: 1,
        company: "Rastcom",
        titleEn: "Front-End React Developer",
        titleUa: "Розробник Front-End на React",
        workPlace: "Remote",
        descriptionEn: "An intermediary platform for delivery with three admin panels.",
        descriptionUa: "Посередницька платформа для доставки з трьома адміністративними панелями.",
        dateUa: "05.2023 - дотепер",
        dateEn: "05.2023 - for now",
        technologies: ["React", "React Native", "TypeScript", "SCSS", "Redux Toolkit", "Mui", "Socket.io", "React Big Calendar", "framer motion", "Git"],
        link: "https://rastcom.com"
    },
    {
        id: 2,
        company: "Team Сhallenge",
        titleEn: "Front-End React Developer",
        titleUa: "Розробник Front-End на React",
        workPlace: "Remote",
        descriptionEn: "In the role of a mentor, I undertake project building, organize its architecture, create tasks for the team, and review code to ensure quality and improve team knowledge.",
        descriptionUa: "У ролі ментора я займаюся створенням проекту, організацією його архітектури, створенням завдань для команди та перевіркою коду для забезпечення якості та підвищення рівня знань команди.",
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
        descriptionEn: "A search platform for video content (playback, video cutting, adding metadata, and more).",
        descriptionUa: "Платформа пошуку відеоконтенту (відтворення, редагування відео, додавання метаданих тощо).",
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
        descriptionEn: "Coffee shop website.",
        descriptionUa: "Вебсайт кав'ярні.",
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
    return (
        <motion.div layout className="container-experience">
            <span className="title-block">
                {pathName === "/ua" ? `Професійний досвід` : `Professional experience`}
            </span>
            {experience.map((item, index) => (
                <ExperienceList key={item.id} item={item} index={index}/>
            ))}
        </motion.div>
    );
};

export default Experience;
