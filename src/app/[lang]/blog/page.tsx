import {blogDate} from "@/mokDate/blogDate";
import BlogList from "@/components/BlogList/BlogList";
import {getPosts} from "@/lib/post/postController";
import PaginationControl from "@/components/PaginationControl/PaginationControl";


export default async function Page() {

    const posts = await getPosts()
    const totalPages = posts.totalPages

    console.log(posts)

    return (
        <>
            {posts.data.map((item, index) =>
                <BlogList key={item.title} item={item}/>
            )}
            <PaginationControl totalPages={totalPages}/>
        </>
    );
}