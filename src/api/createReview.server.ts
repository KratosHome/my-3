'use server'

import {Reviews} from "@/app/lib/models";
import {connectToDb} from "@/app/lib/utils";
import TelegramBot from "node-telegram-bot-api";

export const createReviewAction = async (formData: any) => {
    console.log("formData", formData);

    try {
        const chatId = `${process.env.TELEGRAM_BOT_CHAT_ID}`;
        const bot = new TelegramBot(`${process.env.TELEGRAM_BOT_TOKEN}`, {polling: true});
        await connectToDb();

        const newReview = new Reviews({
            userName: formData.userName,
            email: formData.email,
            company: formData.company,
            reviews: formData.reviews,
            isPublic: false,
        });
        await newReview.save();

        await bot.sendMessage(chatId, `
               Name: ${formData.userName},
               Email: ${formData.email},
               Company: ${formData.company},
               Reviews: ${formData.reviews},
      `)
    } catch (error) {
        throw new Error("createReviewAction");
    }
};
