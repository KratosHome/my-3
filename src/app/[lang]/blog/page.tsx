import "./blog.scss"
import BlogList from "@/components/BlogList/BlogList";
import {getPosts} from "@/lib/post/postController";
import PaginationControl from "@/components/PaginationControl/PaginationControl";
import AnimatedPage from "@/components/animationTransition/AnimatedPage/AnimatedPage";


export default async function Page({params: {lang}, searchParams}: any) {
    const page = searchParams["page"] ?? "1"
    const posts = await getPosts(page, 10, lang)
    const totalPages = posts.totalPages

    return (
        <AnimatedPage>
            <div className="blog__container">
                {posts.data.map((item, index) =>
                    <BlogList key={item.title} item={item}/>
                )}
            </div>
            <PaginationControl totalPages={totalPages}/>
        </AnimatedPage>
    );
}