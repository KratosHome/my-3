'use server';
import TelegramBot from 'node-telegram-bot-api';

const formatDate = (date: Date): string => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString().slice(-2);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${day}.${month}.${year} о ${hours}.${minutes}`;
};

export async function telegramAction(formData: any) {
    const formattedDate = formatDate(new Date());
    const bot = new TelegramBot(`${process.env.TELEGRAM_BOT_TOKEN}`, {polling: true});

    const chatId = `${process.env.TELEGRAM_BOT_CHAT_ID}`;
    await bot.sendMessage(chatId, `
    Data: ${formattedDate},
    Name: ${formData.name},
    Email: ${formData.email},
    Number: ${formData.message},
    Message: ${formData.message},
    `)
}