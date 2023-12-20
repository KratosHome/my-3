import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://codecraftmaster.com',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1.0,
        },
    ]
}
