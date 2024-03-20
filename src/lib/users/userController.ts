import {connectToDb} from "@/lib/connectToDb";
import {User} from "@/lib/users/userSchema";

export const getUsers = async (page: number = 1, limit: number = 10) => {
    try {
        connectToDb();
        const total = await User.countDocuments();
        const totalPages = Math.ceil(total / limit);
        const startIndex = (page - 1) * limit;
        const users = await User.find().limit(limit).skip(startIndex);

        return {
            users: users,
            total,
            currentPage: page,
            totalPages
        };
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch users!");
    }
};

export const getUser = async (id: any) => {
    // noStore();
    try {
        connectToDb();
        const user = await User.findById(id);
        return user;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch user!");
    }
};

