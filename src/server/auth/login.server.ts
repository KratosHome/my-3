"use server"
import {signIn} from "@/server/users/auth";

export const loginAction = async (data: { email: string; password: string; }) => {

    try {
        await signIn("credentials", {
            email: data.email.toLowerCase(),
            password: data.password
        });
        return {
            success: true,
            error: false
        };
    } catch (e) {
        return {error: true};
    }
}