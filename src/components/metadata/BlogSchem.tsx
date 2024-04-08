import React, {FC} from 'react';
import Head from "next/head";

interface BlogSchemSchemaProps {
    locale: string;
}

const BlogSchem: FC<BlogSchemSchemaProps> = ({locale}) => {

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": locale === "en" ? "CodeCraftMaster - Software Development Blog" : "CodeCraftMaster - Блог про розробку програмного забезпечення",
        "image": "https://codecraftmaster.com/logo.png",
        "description": locale === "en" ? "A blog focused on web development with complex animations and interesting solutions, a platform for training young developers on real projects or startups." : "Блог, орієнтований на розробку веб-сайтів зі складними анімаціями та цікавими рішеннями, платформа для навчання молодих розробників на реальних проектах чи стартапах.",
        "url": locale === "en" ? "https://codecraftmaster.com/en/blog" : "https://codecraftmaster.com/ua/blog",
        "publisher": {
            "@type": "Organization",
            "name": "CodeCraftMaster",
            "logo": {
                "@type": "ImageObject",
                "url":  "https://codecraftmaster.com/logo.png"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": locale === "en" ? "https://codecraftmaster.com/en/blog" : "https://codecraftmaster.com/ua/blog",
        },
        "inLanguage": locale === "en" ? "English" : "Ukrainian",
    }


    return (
        <Head>
            <link rel="preload" as="font" crossOrigin=""/>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
            />
        </Head>
    );
};

export default BlogSchem;