import {connectToDb} from "@/lib/connectToDb";
import {Post} from "@/lib/post/postSchema";


export const getPosts = async (page: number = 1, limit: number = 10) => {
    try {
        connectToDb();
        const total = await Post.countDocuments();
        const totalPages = Math.ceil(total / limit);
        const startIndex = (page - 1) * limit;
        const posts = await Post.find().limit(limit).skip(startIndex);
        return {
            data: posts,
            total,
            currentPage: page,
            totalPages
        };
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch posts!");
    }
};

export const getPost = async (slug: any) => {
    try {
        connectToDb();
        const post = await Post.findOne({slug});
        return post;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch post!");
    }
};