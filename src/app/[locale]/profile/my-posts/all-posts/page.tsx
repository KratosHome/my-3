"use server"
import {getPosts} from "@/server/post/postController";
import PaginationControl from "@/components/PaginationControl/PaginationControl";
import {auth} from "@/server/users/auth";
import WrapperPosts from "@/components/admin/WrapperPosts/WrapperPosts";
import {redirect} from "next/navigation";

export default async function Page({params: {lang}, searchParams}: any) {
    const page = searchParams["page"] ?? "1"
    const session: any = await auth();
    const posts = await getPosts(page, 10, lang, session.user._id)
    const totalPages = posts.totalPages

    if (!session.user.isAdmin) {
        redirect(`/${lang}/profile`);
    }
    return (
        <>
            <WrapperPosts posts={posts.data}/>
            <PaginationControl totalPages={totalPages}/>
        </>
    );
}