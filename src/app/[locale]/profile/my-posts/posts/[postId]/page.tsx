import {getPost} from "@/server/post/postController";
import PostEditor from "@/components/admin/PostEditor/PostEditor";

export default async function Page({params: {locale, postId}, searchParams}: any) {
    const posts = await getPost(postId, locale)

    return (
        <>
            <PostEditor post={posts[0]}/>
        </>
    );
}