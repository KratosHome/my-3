import "./blogPost.scss"
import {getPostByUrl} from "@/server/post/postController";
import {formatDate} from "@/utils/formatDate";
import React from "react";
import Avatar from "@/components/UI/Avatar/Avatar";
import AnimatedPage from "@/components/animation/AnimatedPage/AnimatedPage";
import BlogItemSchem from "@/components/metadata/BlogItetmSchem";
import blogItemMetadata from "@/components/metadata/blogItemMetadata";

export async function generateMetadata({params}: any) {
    const posts: any = await getPostByUrl(params.postId, params.locale)
    const lang = params.locale === "en";
    return blogItemMetadata({lang, posts})
}

export default async function Page({params: {locale, postId}}: any) {
    const posts: any = await getPostByUrl(postId, locale)

    return (
        <>
            <BlogItemSchem locale={locale} posts={posts}/>
            <AnimatedPage>
                <div className="container__blog-post">
                    <div className="wrapper__blog-post">
                        <h1>{posts.resultPost.title}</h1>
                        <div className="desc__blog-post" dangerouslySetInnerHTML={{__html: posts.resultPost.desc}}/>
                    </div>
                    <div className="info__blog-list">
                        <div>
                            <Avatar src={posts.resultUser.img} alt={posts.resultUser.username} size={"small"}/>
                            <span>{posts.resultUser.username}</span>
                        </div>
                        <div className="create-at__blog-list">
                            {formatDate(posts.resultPost.createdAt, false)}
                        </div>
                    </div>
                </div>
            </AnimatedPage>
        </>
    );
}
