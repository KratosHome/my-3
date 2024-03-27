"use server"
import {redirect} from "next/navigation";
import {getDictionary} from "@/services/dictionary";
import {auth} from "@/lib/users/auth";
import {getUsers} from "@/lib/users/userController";

export default async function Page({params: {lang}}: any) {
    const dict = await getDictionary(lang)
    const session: any = await auth();

    const getUsers2 = await getUsers(1, 10);

    console.log(getUsers2);

    if (!session.user.isAdmin) {
        redirect(`/${lang}/admin`);
    }
    return (
        <div>
            users
        </div>
    );
}