/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['res.cloudinary.com', "avatars.githubusercontent.com", "drive.google.com"],
    },
    env: {
        AUTH_URL: process.env.AUTH_URL,
        NEXT_URL: process.env.NEXT_URL,
        NEXT_MONGO_DB: process.env.NEXT_MONGO_DB,
        NEXT_GTM_ID: process.env.NEXT_GTM_ID,
        TELEGRAM_BOT_CHAT_ID: process.env.TELEGRAM_BOT_CHAT_ID,
        TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN,
        RECAPTCHA_SECRET_KEY: process.env.RECAPTCHA_SECRET_KEY,
        NEXT_CAPTCHA_SECRET_KEY: process.env.NEXT_CAPTCHA_SECRET_KEY,
        NEXT_PUBLIC_RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
        AUTH_SECRET: process.env.AUTH_SECRET,
        GITHUB_ID: process.env.GITHUB_ID,
        GITHUB_SECRET: process.env.GITHUB_SECRET,
        EMAIL_USERNAME: process.env.EMAIL_USERNAME,
        EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
        EMAIL_FROM: process.env.EMAIL_FROM,
        CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
        CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
        CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,

    },
};

export default withNextIntl(nextConfig);
