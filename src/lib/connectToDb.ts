import mongoose from "mongoose";

interface Connection {
    isConnected?: number;
}

const connection: Connection = {};

export const connectToDb = async () => {
    try {
        if(connection.isConnected) {
            console.log("Using existing connection");
            return;
        }
        const dbUri = process.env.NEXT_MONGO_DB;
        if (typeof dbUri !== "string") throw new Error('NEXT_MONGO_DB is not set or not a string');
        const db = await mongoose.connect(dbUri);
        connection.isConnected = db.connections[0].readyState;
    } catch (error) {
        console.log(error);
        throw new Error('Failed to connect to MongoDB');
    }
};
