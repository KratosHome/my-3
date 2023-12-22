import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://codecraftmaster.com/ua',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1.0,
        },
        {
            url: 'https://codecraftmaster.com/en',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1.0,
        },
    ]
}
