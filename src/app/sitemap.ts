import {MetadataRoute} from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://codecraftmaster.com/ua',
            lastModified: new Date(),
        },
        {
            url: 'https://codecraftmaster.com/en',
            lastModified: new Date(),
        },
    ]
}
