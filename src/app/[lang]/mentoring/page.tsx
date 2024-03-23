import {blogDate} from "@/mokDate/blogDate";
import BlogList from "@/components/BlogList/BlogList";

export default async function Page() {

    return (
        <>
            {blogDate.map((item, index) =>
                <BlogList key={item.id} item={item}/>
            )}
        </>
    );
}