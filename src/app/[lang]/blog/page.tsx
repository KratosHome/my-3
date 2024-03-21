import {blogDate} from "@/mokDate/blogDate";
import BlogList from "@/components/BlogList/BlogList";
import {getPosts} from "@/lib/post/postController";



export default async function Page() {

    const posts = await getPosts()

    console.log("posts", posts)
    return (
        <>
            {blogDate.map((item, index) =>
                <BlogList key={item.id} item={item}/>
            )}
        </>
    );
}