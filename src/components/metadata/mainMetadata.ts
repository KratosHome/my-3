interface MetadataProps {
    lang: boolean;
}

function Metadata({lang}: MetadataProps) {
    const canonicalUrl = lang ? 'https://codecraftmaster.com/en' : 'https://codecraftmaster.com/ua';

    return {
        title: lang ? 'Developing web app, e-commerce 🧑‍💻 codecraftmaster.com' : 'Розробка веб додатків, e-commerce 🧑‍💻 codecraftmaster.com',
        description: lang ? 'Developing websites with complex animations ❤️‍🔥 and interesting solutions, a platform for training young developers on real projects or startups.' : 'Розробки веб-сайтів з складними анімаціями ❤️‍🔥та цікавими рішенями, платформа для навчання молодих розробників на реальних проектах чи стартапах',
        keywords: lang ?
            ["software development", "web development", 'web app', "e-commerce development",
                "e-commerce", 'website creation', "mobile development", 'Next.js', 'React',
                'JavaScript', "mobile app development", "JavaScript programming",
                "software development", "frontend development", "Apple development"] :
            ["веб-розробка", "розробка веб-сайтів", "розробка програмного забезпечення", "е-комерція",
                "мобільна розробка", "розробка мобільних додатків", "розробка інтернет-магазинів",
                'Next.js', 'React', 'JavaScript', "програмування на JavaScript",
                "фронтенд розробка", "Apple розробник"],
        authors: [
            {name: lang ? 'Олег Ткач' : "Oleg Tkach", url: 'https://codecraftmaster.com'},
            {name: lang ? "" : 'Tanya Kucherak', url: 'https://www.linkedin.com/in/tetiana-kucherak/'}
        ],
        creator: 'Oleg Tkach',
        publisher: 'Oleg Tkach',
        openGraph: {
            title: lang ? 'Web dev 🧑‍💻 CodeCraftMaster.com' : 'Веб розробка 🧑‍💻 CodeCraftMster.com',
            description: lang ? '🚀 Developing websites with complex animations ❤️‍🔥 and interesting solutions, a platform for training young developers on real projects or startups  🖥📲🦾.' : '🚀 Розробки веб-сайтів з складними анімаціями ❤️‍🔥та цікавими рішенями, платформа для навчання молодих розробників на реальних проектах чи стартапах 🖥📲🦾.',
            url: canonicalUrl,
            siteName: 'CodeCraftMaster.com',
            images: [
                {
                    url: 'https://codecraftmaster.com/logo.png',
                    width: 800,
                    height: 600,
                    alt: lang ? 'CodeCraftMaster Logo' : 'Логотип CodeCraftMaster',
                }
            ],
            locale: lang ? 'en_US' : 'uk_UA',
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
        alternates:
            {
                canonical: canonicalUrl,
                languages: {
                    'en-US': '/en',
                    'uk-UA': '/ua',
                },
            },
        icons: {
            icon: '/logo.png',
            shortcut: '/logo.png',
            apple: '/logo.png',
            other:
                {
                    rel: 'apple-touch-icon-precomposed',
                    url: '/apple-touch-icon-precomposed.png',
                },
        },
    }
}

export default Metadata;
