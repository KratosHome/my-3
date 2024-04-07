"use server"

import axios from "axios"

export async function verifyCaptcha(token: string | null) {
    const res = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`)
    if (res.data.success) {
        return console.log("Captcha Success")
    } else {
        return console.log("Captcha Failed")
    }
}