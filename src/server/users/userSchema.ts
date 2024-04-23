import mongoose from "mongoose";


const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            min: 3,
            max: 20,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            max: 50,
        },
        password: {
            type: String,
        },
        img: {
            type: String,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        resetPasswordToken: String,
        roles: {
            type: [String],
            enum: ['mentor', 'QA', 'frontend', 'backend', "full stack", "devops", "project manager", "product manager", "product owner", "HR", "UI/UX", "QA", "designer", "marketing", "sales", "finance"],
            default: []
        },
        technologies: {
            type: [String],
            default: []
        },
        reviewsId: {
            type: [String],
            default: []
        }
    },
    {timestamps: true}
);

export const User = mongoose.models?.User || mongoose.model("User", userSchema);