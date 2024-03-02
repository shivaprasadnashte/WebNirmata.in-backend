import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export default async function connectDb() {
    if (mongoose.connections[0].readyState) {
        console.log("Already connected.");
        return;
    }
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");
    }


