const path = require('path');

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/en',
                permanent: true,
            },
        ];
    },
    env: {
        NEXT_GTM_ID: process.env.NEXT_GTM_ID,
        TELEGRAM_BOT_CHAT_ID: process.env.TELEGRAM_BOT_CHAT_ID,
        TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN,
        // Додайте тут інші змінні середовища, якщо це необхідно
    },
    // Додаткові конфігурації та налаштування
};
