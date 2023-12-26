import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/*?*sort=', '/*?*new='],
            },
        ],
        sitemap: 'https://codecraftmaster.com/sitemap.xml',
    }
}
