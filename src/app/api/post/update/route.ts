import {NextRequest, NextResponse} from "next/server";
import {connectToDb} from "@/server/connectToDb";
import {Post} from "@/server/post/postSchema";
import {revalidatePath} from "next/cache";

export async function POST(request: NextRequest) {
    if (request.method !== 'POST') return NextResponse.json({error: 'Method not allowed'}, {status: 405});
    const formData = await request.formData();
    const id = formData.get('id')

    const title = formData.get('title')
    const desc = formData.get('desc')

    const url = formData.get('url')
    const subTitle = formData.get('subTitle')
    const image = formData.get('image') as File | null

    try {
        await connectToDb();
        console.log("id", id)
        const existingPost = await Post.findById(id);
        let imgURL;

        if (image !== null) {
            console.log("image", image)
            imgURL = existingPost.img;
        } else {
            imgURL = existingPost.img;
        }

        const updatedData: any = {
            title,
            desc,
            img: imgURL,
            url: url,
            subTitle: subTitle,
        };

        await Post.findByIdAndUpdate(id, updatedData, {new: true});

        revalidatePath("/blog");
        revalidatePath("/profile");

        return NextResponse.json(
            {
                success: true,
            }, {status: 201});
    } catch (err) {
        console.error(err);
        return NextResponse.json({error: "Something went wrong!"}, {status: 500});
    }
}