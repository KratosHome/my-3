import {auth} from "@/lib/users/auth";
import {getPost, getPosts} from "@/lib/post/postController";

export default async function Page({params: {lang, postId}, searchParams}: any) {
    const posts = await getPost(postId, lang)

    console.log(posts)

    return (
        <>
            {postId}
        </>
    );
}