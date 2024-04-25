"use server"
import {redirect} from "next/navigation";
import {auth} from "@/server/auth/auth";
import {getUsers} from "@/server/users/userController";
import PaginationControl from "@/components/UI/PaginationControl/PaginationControl";
import UsersWrapper from "@/components/admin/UsersWrapper/UsersWrapper";

export default async function Page({params: {lang}, searchParams}: any) {
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