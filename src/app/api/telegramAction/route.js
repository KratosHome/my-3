import {formatDate} from "../../../utils/formatDate";
import TelegramBot from "node-telegram-bot-api";


export async function POST(formData) {
    const chatId = `${process.env.TELEGRAM_BOT_CHAT_ID}`;
    try {
        const formattedDate = formatDate(new Date());
        const bot = new TelegramBot(`${process.env.TELEGRAM_BOT_TOKEN}`, {polling: true});

        await bot.sendMessage(chatId, `
                                Data: ${formattedDate},
                                Name: ${formData.name},
                                Email: ${formData.email},
                                Number: ${formData.message},
                                Message: ${formData.message},
    `)

    } catch (error) {
        return new Response(JSON.stringify({message: error.message}), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
