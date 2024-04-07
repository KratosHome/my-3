import {getPost} from "@/server/post/postController";
import PostEditor from "@/components/admin/PostEditor/PostEditor";

export default async function Page({params: {lang, postId}, searchParams}: any) {
    const posts = await getPost(postId, lang)

    return (
        <>
            <PostEditor post={posts[0]}/>
        </>
    );
}