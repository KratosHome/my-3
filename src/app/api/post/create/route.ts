import {NextRequest, NextResponse} from "next/server";
import {connectToDb} from "@/lib/connectToDb";
import {User} from "@/lib/users/userSchema";
import bcrypt from "bcryptjs";
import {Post} from "@/lib/post/postSchema";
import {revalidatePath} from "next/cache";
import cloudinary from "@/lib/cloudinaryConfig";

export async function POST(request: NextRequest) {
    if (request.method !== 'POST') return NextResponse.json({error: 'Method not allowed'}, {status: 405});
    const data = await request.json();
    const {title, desc, userId, image} = data

    console.log("data", image);

    try {
        await connectToDb();
        const result = await cloudinary.uploader.upload(image);

   /*
        const newPost = new Post({
            title,
            desc,
            userId: userId.toString(),
            img: result.url,
        });
        await newPost.save();
        console.log("saved to db");
    */

        revalidatePath("/blog");
        revalidatePath("/admin");

        return NextResponse.json({success: true}, {status: 201});
    } catch (err) {
        console.error(err);
        return NextResponse.json({error: "Something went wrong!"}, {status: 500});
    }
}