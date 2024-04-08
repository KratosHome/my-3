/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['res.cloudinary.com', "avatars.githubusercontent.com", "drive.google.com"],
    },
    env: {
        NEXT_URL: process.env.NEXT_URL,
        NEXT_MONGO_DB: process.env.NEXT_MONGO_DB,
        NEXT_GTM_ID: process.env.NEXT_GTM_ID,
        TELEGRAM_BOT_CHAT_ID: process.env.TELEGRAM_BOT_CHAT_ID,
        TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN,
        RECAPTCHA_SECRET_KEY: process.env.RECAPTCHA_SECRET_KEY,
        NEXT_CAPTCHA_SECRET_KEY: process.env.NEXT_CAPTCHA_SECRET_KEY,
        NEXT_PUBLIC_RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
    },
};

export default withNextIntl(nextConfig);
