interface MetadataProps {
    lang: boolean;
}
function blogMetadata({lang}: MetadataProps) {
    const blogUrl = lang ? 'https://codecraftmaster.com/en/blog' : 'https://codecraftmaster.com/ua/blog';

    return {
        title: lang ? 'Latest in Web Development | CodeCraftMaster Blog' : 'Новітнє в розробці веб-додатків | Блог CodeCraftMaster',
        description: lang ? 'Explore our blog for insights on the latest web development technologies, problems, and solutions. Learn with CodeCraftMaster.' : 'Дізнайтесь більше на нашому блозі про новітні технології веб-розробки, проблеми та рішення. Навчайтесь разом з CodeCraftMaster.',
        keywords: lang ?
            ["web development blog", "technology solutions", "IT problems", "software development insights",
                "e-commerce trends", "programming tutorials", "Next.js blog", "React updates"] :
            ["блог про веб-розробку", "технологічні рішення", "IT проблеми", "ознайомлення з розробкою програмного забезпечення",
                "тенденції е-комерції", "посібники з програмування", "блог про Next.js", "оновлення React"],
        creator: 'CodeCraftMaster Team',
        publisher: 'CodeCraftMaster',
        openGraph: {
            title: lang ? 'Dive into Web Development with CodeCraftMaster Blog' : 'Зануртесь у веб-розробку з блогом CodeCraftMaster',
            description: lang ? 'Stay ahead in the tech world with our articles on web development technologies, problems, and solutions. Join CodeCraftMaster in exploring the digital landscape.' : 'Будьте на крок попереду в технологічному світі з нашими статтями про технології веб-розробки, проблеми та рішення. Приєднуйтесь до CodeCraftMaster для дослідження цифрового ландшафту.',
            url: blogUrl,
            siteName: 'CodeCraftMaster Blog',
            images: [
                {
                    url: 'https://codecraftmaster.com/logo.png',
                    width: 800,
                    height: 600,
                    alt: lang ? 'CodeCraftMaster Blog Logo' : 'Логотип блогу CodeCraftMaster',
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
        metadataBase: new URL(blogUrl),
        alternates: {
            canonical: blogUrl,
            languages: {
                'en-US': '/en/blog',
                'uk-UA': '/ua/blog',
            },
        },
        icons: {
            icon: '/logo.png',
            shortcut: '/logo.png',
            apple: '/logo.png',
            other: {
                rel: 'apple-touch-icon-precomposed',
                url: '/logo.png',
            },
        },
    }
}

export default blogMetadata;
