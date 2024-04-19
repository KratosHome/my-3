"use server"
import {getPosts} from "@/server/post/postController";
import PaginationControl from "@/components/UI/PaginationControl/PaginationControl";
import {auth} from "@/server/users/auth";
import WrapperPosts from "@/components/admin/WrapperPosts/WrapperPosts";

export default async function Page({params: {locale}, searchParams}: any) {
    const page = searchParams["page"] ?? "1"
    const session: any = await auth();
    const posts = await getPosts(page, 10, locale, session.user._id)
    const totalPages = posts.totalPages

    return (
        <>
            <WrapperPosts posts={posts.data}/>
            <PaginationControl totalPages={totalPages}/>
        </>
    );
}