"use server"
import "./blog.scss"
import BlogList from "@/components/BlogList/BlogList";
import PaginationControl from "@/components/PaginationControl/PaginationControl";
import AnimatedPage from "@/components/animationTransition/AnimatedPage/AnimatedPage";
import {getTranslations} from "next-intl/server";
import blogdata from "@/components/metadata/blogMetadata";
import BlogSchem from "@/components/metadata/BlogSchem";


export async function generateMetadata({params}: any) {
    const lang = params.locale === "en";

    return blogdata({lang})
}

export default async function Page({params: {locale}, searchParams}: any) {
    const t = await getTranslations('page.blog');
    const page = searchParams["page"] ?? "1"
    const posts = await fetch(`${process.env.NEXT_URL}/api/post/getPosts?lang=${locale}&page=${page}&limit=${10}`, {method: 'GET'});
    const data = await posts.json();
    const totalPages = data.totalPages

    return (
        <>
            <BlogSchem locale={locale}/>
            <AnimatedPage>
                <div className="blog__container">
                    <h1>{t('title')}</h1>
                    <div className="blog-list__wrapper">
                        {data.data.map((item: any) =>
                            <BlogList key={item.title} item={item}/>
                        )}
                        <PaginationControl totalPages={totalPages}/>
                    </div>
                </div>
            </AnimatedPage>
        </>
    );
}
