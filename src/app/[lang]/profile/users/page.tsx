"use server"
import {redirect} from "next/navigation";
import {getDictionary} from "@/services/dictionary";
import {auth} from "@/lib/users/auth";
import {getUsers} from "@/lib/users/userController";
import PaginationControl from "@/components/PaginationControl/PaginationControl";
import UsersWrapper from "@/components/admin/UsersWrapper/UsersWrapper";

export default async function Page({params: {lang}, searchParams}: any) {
    const dict = await getDictionary(lang)
    const session: any = await auth();

    const page = searchParams["page"] ?? "1"
    const users = await getUsers(page, 10);
    const totalPages = users.totalPages

    if (!session.user.isAdmin) {
        redirect(`/${lang}/profile`);
    }
    return (
        <div>
            <UsersWrapper users={users}/>
            <PaginationControl totalPages={totalPages}/>
        </div>
    );
}