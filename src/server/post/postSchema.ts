import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        subTitle: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            unique: false,
            sparse: true,
        },
        local: {
            type: String,
            required: true,
        },
        img: {
            type: String,
            required: true,
        },
        userId: {
            type: String,
            required: true,
        },
        keywords: {
            type: [String],
            default: []
        },
        isPublished: {
            type: Boolean,
            required: true,
            default: false,
        },
        postId: {
            type: String,
            required: true
        }
    },
    {timestamps: true}
);

export const Post = mongoose.models?.Post || mongoose.model("Post", postSchema);