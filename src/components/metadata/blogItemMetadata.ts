interface bolgItemMetadataProps {
    lang: boolean;
    posts: postsTypesItem;
}

function blogItemMetadata({lang, posts}: bolgItemMetadataProps) {
    const { resultPost, resultUser } = posts;
    const postUrl = `https://codecraftmaster.com/${lang}/blog/${resultPost.url}`;
    const imageUrl = resultPost.img;

    return {
        title: resultPost.title + ' | CodeCraftMaster Blog',
        description: resultPost.subTitle,
        keywords: ['job search', 'interviews', 'IT careers', 'software development', 'coding interviews'],
        author: resultUser.username,
        image: imageUrl,
        url: postUrl,
        openGraph: {
            title: resultPost.title + ' | CodeCraftMaster Blog',
            description: resultPost.subTitle,
            url: postUrl,
            type: 'article',
            article: {
                publishedTime: resultPost.createdAt,
                modifiedTime: resultPost.updatedAt,
                author: resultUser.username,
                section: 'Software Development',
                tags: ['job search', 'interviews', 'IT careers', 'software development', 'coding interviews']
            },
            images: [
                {
                    url: imageUrl,
                    alt: resultPost.title,
                }
            ],
        },
        canonicalUrl: postUrl,
        alternates: {
            canonical: postUrl,
        },
    }
}

export default blogItemMetadata;
