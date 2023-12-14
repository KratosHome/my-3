// app/api/reviews/route.js
import { connectToDb } from "@/api/connectToDb";
import { Reviews } from "@/api/models";

export async function GET() {
    try {
        await connectToDb();
        const reviews = await Reviews.find({ isPublic: true }).lean();
        const convertedReviews = reviews.map(review => ({
            ...review,
            _id: review._id.toString(),
        }));

        return new Response(JSON.stringify(convertedReviews), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        return new Response(JSON.stringify({ message: error.message }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
