import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        titleEn: {
            type: String,
            required: true,
        },
        titleUa: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
        descEn: {
            type: String,
            required: true,
        },
        descUa: {
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
            required: true,
            default: false,
        }
    },
    {timestamps: true}
);

export const Post = mongoose.models?.Post || mongoose.model("Post", postSchema);