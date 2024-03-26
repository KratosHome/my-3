import {connectToDb} from "@/lib/connectToDb";
import {User} from "@/lib/users/userSchema";
import {revalidatePath, unstable_noStore as noStore} from "next/cache";
import {Post} from "@/lib/post/postSchema";
import bcrypt from "bcrypt";
import {signIn} from "@/lib/users/auth";

export const createUsers = async (session: any) => {
    "use server"
    try {
        connectToDb();

        const user = await User.findOne({email: session.user.email.toLowerCase()});
        if (!user) {
            const newUser = new User({
                username: session.user.name,
                email: session.user.email.toLowerCase(),
                image: session.user.image,
            });

            await newUser.save();
        }
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch user!");
    }
};


export const getUsers = async (page: number = 1, limit: number = 10) => {
    noStore(); // прибирання кешування
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


export const addUser = async (prevState: any, formData: any) => {
    const {username, email, password, img} = Object.fromEntries(formData);

    try {
        connectToDb();
        const newUser = new User({
            username,
            email: email.toLowerCase(),
            password,
            img,
        });

        await newUser.save();
        console.log("saved to db");
        revalidatePath("/admin");
    } catch (err) {
        console.log(err);
        return {error: "Something went wrong!"};
    }
};


export const deleteUser = async (formData: any) => {
    const {id} = Object.fromEntries(formData);

    try {
        connectToDb();

        await Post.deleteMany({userId: id});
        await User.findByIdAndDelete(id);
        console.log("deleted from db");
        revalidatePath("/admin");
    } catch (err) {
        console.log(err);
        return {error: "Something went wrong!"};
    }
};

export const register = async (formData: any) => {
    "use server"
    const {username, email, password, img, passwordRepeat} = Object.fromEntries(formData);
    if (password !== passwordRepeat) return {error: "Passwords do not match"};

    try {
        connectToDb();
        const user = await User.findOne({email: email.toLowerCase()});
        if (user) return {error: "Username already exists"};

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            email: email.toLowerCase(),
            password: hashedPassword,
            img,
        });

        await newUser.save();
        return {success: true};
    } catch (err) {
        console.log(err);
        return {error: "Something went wrong!"};
    }
};


export const login = async (formData: any) => {
    "use server"
    const {email, password} = Object.fromEntries(formData);

    try {
        await signIn("credentials", {
            email: email.toLowerCase(),
            password});
    } catch (err) {
        console.log(err);
        throw err;
    }
};


