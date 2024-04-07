"use server"
import {redirect} from "next/navigation";
import {getDictionary} from "@/utils/dictionary";
import {auth} from "@/server/users/auth";
import InProgress from "@/components/UI/InProgress/InProgress";

export default async function Page({params: {lang}, searchParams}: any) {
    const dict = await getDictionary(lang)
    const session: any = await auth();


    if (!session.user.isAdmin) {
        redirect(`/${lang}/profile`);
    }
    return (
        <div>
          <InProgress />
        </div>
    );
}