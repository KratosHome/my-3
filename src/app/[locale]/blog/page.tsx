import "./blog.scss"
import BlogList from "@/components/BlogList/BlogList";
import {getPosts} from "@/server/post/postController";
import PaginationControl from "@/components/PaginationControl/PaginationControl";
import AnimatedPage from "@/components/animationTransition/AnimatedPage/AnimatedPage";
import {getTranslations} from "next-intl/server";


export default async function Page({params: {locale}, searchParams}: any) {
    const t = await getTranslations('page.blog');
    const page = searchParams["page"] ?? "1"
// process.env.NEXT_URL
    const posts = await fetch(`${process.env.NEXT_URL}/api/post/getPosts?lang=${locale}&page=${page}&limit=${10}`, {method: 'GET'});

    const data = await posts.json();
    console.log(data)
    return (
        <AnimatedPage>
            <div className="blog__container">
                <h1>{t('title')}</h1>
            </div>
        </AnimatedPage>
    );
}

/*


const page = searchParams["page"] ?? "1"

    const posts = await getPosts(page, 10, locale)
    const totalPages = posts.totalPages

    console.log(posts.data)

    return (
        <AnimatedPage>
            <div className="blog__container">
                {posts.data.map((item) =>
                    <BlogList key={item.title} item={item}/>
                )}
                <PaginationControl totalPages={totalPages}/>
            </div>
        </AnimatedPage>
    );
}
 */