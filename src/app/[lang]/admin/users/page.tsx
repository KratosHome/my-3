"use server"
import {addPost} from "@/lib/post/postController";
import {redirect} from "next/navigation";
import {getDictionary} from "@/services/dictionary";
import {auth} from "@/lib/users/auth";

export default async function Page({params: {lang}}: any) {
    const dict = await getDictionary(lang)
    const session: any = await auth();

    console.log(session)

    if (!session.user.isAdmin) {
        redirect(`/${lang}/admin`);
    }
    return (
        <div>
            users
        </div>
    );
}