import mongoose from "mongoose";
import {v4 as uuidv4} from 'uuid';

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
            required: true,
            unique: true,
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
        postId: {
            type: String,
            required: true,
            default: function () {
                return uuidv4()
            }
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