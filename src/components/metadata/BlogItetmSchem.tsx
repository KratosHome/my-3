import React, {FC} from 'react';
import Head from "next/head";

interface BlogItemSchemaProps {
    locale: string;
    posts: postsTypesItem;
}

const BlogItemSchem: FC<BlogItemSchemaProps> = ({locale, posts}) => {
    const { resultPost, resultUser } = posts;
    const postUrl = `https://codecraftmaster.com/${locale}/blog/${resultPost.url}`;

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": resultPost.title,
        "description": resultPost.subTitle,
        "image": resultPost.img,
        "author": {
            "@type": "Person",
            "name": resultUser.username,
            "image": resultUser.img
        },
        "publisher": {
            "@type": "Organization",
            "name": "CodeCraftMaster",
            "logo": {
                "@type": "ImageObject",
                "url": "https://codecraftmaster.com/logo.png"
            }
        },
        "url": postUrl,
        "datePublished": resultPost.createdAt,
        "dateModified": resultPost.updatedAt,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": postUrl,
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

export default BlogItemSchem;