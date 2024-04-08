import "./blog.scss"
import BlogList from "@/components/BlogList/BlogList";
import {getPosts} from "@/server/post/postController";
import PaginationControl from "@/components/PaginationControl/PaginationControl";
import AnimatedPage from "@/components/animationTransition/AnimatedPage/AnimatedPage";


export default async function Page({params: {locale}, searchParams}: any) {
    const page = searchParams["page"] ?? "1"

    const posts = await getPosts(page, 10, locale)
    const totalPages = posts.totalPages

    console.log("posts", posts)


    return (
        <AnimatedPage>
            <div className="blog__container">
        fvsfdv
                <PaginationControl totalPages={totalPages}/>
            </div>
        </AnimatedPage>
    );
}

/*



    <PaginationControl totalPages={totalPages}/>
 */