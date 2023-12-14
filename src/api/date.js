import { Reviews } from "./models";
import { connectToDb } from "@/app/lib/utils";


export const fetchReviews = async () => {
    try {
        await connectToDb();
        const reviews = await Reviews.find({ isPublic: true }).lean();

        const convertedReviews = reviews.map(review => ({
            ...review,
            _id: review._id.toString(),
        }));

        return convertedReviews;
    } catch (error) {
        throw new Error("fetchReviews: " + error.message);
    }
};
