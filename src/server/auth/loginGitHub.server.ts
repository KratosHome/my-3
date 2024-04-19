"use server"


import {signIn} from "@/server/users/auth";

export const loginGitHubAction = async () => {
    await signIn("gitHub");
}