import {connectToDb} from "@/lib/connectToDb";
import {Post} from "@/lib/post/postSchema";
import {revalidatePath} from "next/cache";


export const getPosts = async (page: string = "1", limit: number = 10, lang: string, userId?: string) => {
    try {
        console.log("userId", userId);
        await connectToDb();
        const matchQuery = userId ? {local: lang, userId: userId} : {isPublished: true, local: lang};
        const total = await Post.countDocuments(matchQuery);
        const totalPages = Math.ceil(total / limit);
        const startIndex = (+page - 1) * limit;

        const postsQuery = [
            {$match: matchQuery},
            {$limit: limit},
            {$skip: startIndex},
            {$project: {title: 1, img: 1, userId: 1, local: 1, subTittle: 1, isPublished: 1, createdAt: 1}},
            {$addFields: {convertedUserId: {$toObjectId: "$userId"}}},
            {$lookup: {from: "users", localField: "convertedUserId", foreignField: "_id", as: "userDetails"}},
            {$unwind: "$userDetails"},
            {
                $project: {
                    title: 1,
                    subTittle: 1,
                    img: 1,
                    userId: 1,
                    local: 1,
                    isPublished: 1,
                    createdAt: 1,
                    userDetails: {email: "$userDetails.email", username: "$userDetails.username"}
                }
            }
        ];


        const posts = await Post.aggregate(postsQuery);

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

export const getPost = async (postId: any, local: string) => {
    try {
        await connectToDb();
        const post = await Post.find({_id: postId, local: local});
        return post;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch post!");
    }
};


export const addPost = async (formData: any) => {
    "use server"
    const {title, desc, slug, userId} = Object.fromEntries(formData);

    try {
        await connectToDb();
        const newPost = new Post({
            title,
            desc,
            slug,
            userId,
        });
        await newPost.save();

        revalidatePath("/blog");
        revalidatePath("/admin");
    } catch (err) {
        console.log(err);
        return {error: "Something went wrong!"};
    }
};


export const deletePost = async (formData: any) => {
    "use server"
    const {id} = Object.fromEntries(formData);

    try {
        await connectToDb();

        await Post.findByIdAndDelete(id);
        revalidatePath("/blog");
        revalidatePath("/admin");
    } catch (err) {
        console.log(err);
        return {error: "Something went wrong!"};
    }
};