import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
        img: {
            type: String,
        },
        userId: {
            type: String,
            required: true,
        },
        isPublished: {
            type: Boolean,
            default: false,
        },
        slug: {
            type: String,
            required: false,
            unique: false,
        },
    },
    {timestamps: true}
);

export const Post = mongoose.models?.Post || mongoose.model("Post", postSchema);