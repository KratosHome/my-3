import {NextRequest, NextResponse} from "next/server";
import {connectToDb} from "@/lib/connectToDb";
import {User} from "@/lib/users/userSchema";
import bcrypt from "bcryptjs";
import {Post} from "@/lib/post/postSchema";
import {revalidatePath} from "next/cache";
import cloudinary from "@/lib/cloudinaryConfig";

export async function POST(request: NextRequest) {
    if (request.method !== 'POST') return NextResponse.json({error: 'Method not allowed'}, {status: 405});
    const formData = await request.formData();
    const userId = formData.get('userId')
    const title = formData.get('title')
    const desc = formData.get('desc')
    const local = formData.get('local')
    const postId = formData.get('postId')
    const url = formData.get('url')
    const image = formData.get('image') as File

    try {
        await connectToDb();
        const arrBuffer = await image.arrayBuffer();
        const buffer = new Uint8Array(arrBuffer);

        const uploadResult: any = await new Promise((resolve, reject) => {
            cloudinary.uploader.upload_stream({
                tags: "blog",
            }, function (error, result) {
                if (error) {
                    reject(error)
                    return
                }
                resolve(result);
            }).end(buffer)
        });

        console.log("postId", postId)
        const postData: any = {
            title,
            desc,
            userId: userId,
            img: uploadResult.url,
            local: local,
            url: url
        };

        if (postId) {
            postData.postId = postId;
        }

        const newPost = new Post(postData);
        await newPost.save();

        revalidatePath("/blog");
        revalidatePath("/admin");

        return NextResponse.json(
            {
                success: true,
                postId: newPost.postId
            }, {status: 201});
    } catch (err) {
        console.error(err);
        return NextResponse.json({error: "Something went wrong!"}, {status: 500});
    }
}