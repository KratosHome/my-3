import mongoose from "mongoose";


const projectSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            min: 3,
            max: 20,
        },
        img: {
            type: String,
        },
        userId: {
            type: [String],
            default: []
        },
        status: {
            type: [String],
            enum: ['release', 'active', 'search'],
            default: []
        },
        difficulty: {
            type: [String],
            enum: ['easy', 'medium', 'hard'],
            default: []
        },
        technologies: {
            type: [String],
            default: []
        },
        isPaid: {
            type: Boolean,
            default: false,
        },
        isMotivation: {
            type: Boolean,
            default: false,
        },
    },
    {timestamps: true}
);

export const Project = mongoose.models?.Project || mongoose.model("Project", projectSchema);