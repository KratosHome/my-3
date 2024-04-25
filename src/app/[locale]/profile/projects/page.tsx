"use server"
import {redirect} from "next/navigation";
import {auth} from "@/server/auth/auth";
import InProgress from "@/components/UI/InProgress/InProgress";

export default async function Page({params: {locale}, searchParams}: any) {
    const session: any = await auth();


    if (!session.user.isAdmin) {
        redirect(`/${locale}/profile`);
    }
    return (
        <div>
          <InProgress />
        </div>
    );
}