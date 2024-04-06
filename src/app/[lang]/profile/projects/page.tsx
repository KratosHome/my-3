"use server"
import {redirect} from "next/navigation";
import {getDictionary} from "@/services/dictionary";
import {auth} from "@/lib/users/auth";
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