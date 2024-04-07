import {connectToDb} from "@/services/connectToDb";
import {Reviews} from "../server/reviws/reviewsSchema";


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
