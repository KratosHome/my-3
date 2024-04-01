import {connectToDb} from "@/lib/connectToDb";
import {Post} from "@/lib/post/postSchema";
import {revalidatePath} from "next/cache";


export const getPosts = async (page: string = "1", limit: number = 10, lang: string) => {
    try {
        await connectToDb();
        const total = await Post.countDocuments({isPublished: false, local: lang});
        const totalPages = Math.ceil(total / limit);
        const startIndex = (+page - 1) * limit;
        const posts = await Post.aggregate([
            {$match: {isPublished: false, local: lang}},
            {$limit: limit},
            {$skip: startIndex},
            {$project: {title: 1, img: 1, userId: 1, local: 1}},
            {$addFields: {convertedUserId: {$toObjectId: "$userId"}}},
            {$lookup: {from: "users", localField: "convertedUserId", foreignField: "_id", as: "userDetails"}},
            {$unwind: "$userDetails"},
            {
                $project: {
                    title: 1,
                    img: 1,
                    userId: 1,
                    local: 1,
                    userDetails: {email: "$userDetails.email", username: "$userDetails.username"}
                }
            }
        ]);


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
        await connectToDb();
        const post = await Post.findOne({slug});
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