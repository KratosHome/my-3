import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import {connectToDb} from "@/lib/connectToDb";
import {User} from "@/lib/users/userSchema";
import {createUsers} from "@/lib/users/userController";

export const {
    handlers,
    auth,
    signIn,
    signOut,
} = NextAuth({
    providers: [
        GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
    callbacks: {
        async signIn({user, account, profile}) {
            return true;
        },
    },
});