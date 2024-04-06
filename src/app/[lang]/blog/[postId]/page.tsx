import "./blogPost.scss"
import {getPostByUrl} from "@/lib/post/postController";
import {formatDate} from "@/services/formatDate";
import React from "react";
import Avatar from "@/components/UI/Avatar/Avatar";
import AnimatedPage from "@/components/animationTransition/AnimatedPage/AnimatedPage";


export default async function Page({params: {lang, postId}}: any) {
    const posts: any = await getPostByUrl(postId, lang)

    return (
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
    );
}
