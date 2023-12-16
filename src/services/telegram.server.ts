'use server';
import TelegramBot from 'node-telegram-bot-api';
import got from 'got';

const formatDate = (date: Date): string => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString().slice(-2);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${day}.${month}.${year} о ${hours}.${minutes}`;
};
const sendTelegramMessage = async (chatId: string, text: string) => {
    const telegramApiUrl = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;
    try {
        await got.post(telegramApiUrl, {
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: text,
            }),
        });
    } catch (error) {
        console.error('Error sending message to Telegram:', error);
        throw error;
    }
};


export async function telegramAction(formData: any) {
    const formattedDate = formatDate(new Date());
    const chatId = process.env.TELEGRAM_BOT_CHAT_ID || 'default_chat_id';

    const message = `
        Data: ${formattedDate},
        Name: ${formData.name},
        Email: ${formData.email},
        Number: ${formData.number},  
        Message: ${formData.message},
    `;

    await sendTelegramMessage(chatId, message);
}