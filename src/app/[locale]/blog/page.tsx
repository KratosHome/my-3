import "./blog.scss"
import BlogList from "@/components/BlogList/BlogList";
import {getPosts} from "@/server/post/postController";
import PaginationControl from "@/components/PaginationControl/PaginationControl";
import AnimatedPage from "@/components/animationTransition/AnimatedPage/AnimatedPage";


export default async function Page({params: {locale}, searchParams}: any) {

    const posts = await getPosts("1", 10, locale)


    return (
        <AnimatedPage>
            <div className="blog__container">
                {posts.data.map((item) =>
                    <BlogList key={item.title} item={item}/>
                )}
            </div>
        </AnimatedPage>
    );
}

/*
    const page = searchParams["page"] ?? "1"
    const totalPages = posts.totalPages


    <PaginationControl totalPages={totalPages}/>
 */