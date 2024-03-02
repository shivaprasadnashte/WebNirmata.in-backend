import express  from "express";
import dotenv from "dotenv";
import {ApiResponse} from "./utills/ApiResponse.js"
import {ApiError} from "./utills/ApiError.js"
import connectDb from "./db/connectDb.js";
const app = express();
dotenv.config();
connectDb();
app.get("/", (req, res) => {
    const daa = {
        message: "Hello World",
    };
    
   res.send( new ApiError(200, "Success", "Hello World"));
    }
);

app.listen(4000, () => {
    console.log("Server is running on port 4000");
    }
);
