import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from 'cookie-parser';
import userRoute from "./routes/user.route.js"
import eventRoute from "./routes/event.route.js"
import fileUpload from "express-fileupload";
import { v2 as cloudinary } from "cloudinary";
import cors from "cors";

const app = express()
dotenv.config()

const port = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

//Middleware ExpressJS
app.use(express.json());
app.use(cookieParser()); 

app.use(fileUpload({ useTempFiles: true }));

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

//DBCODE
try {
    mongoose.connect(MONGO_URL)
    console.log("connected to MongoDB")
} catch (error) {
    console.log(error)
    
}

//DEFINING ROUTES
app.use("/api/users",userRoute);
app.use("/api/event",eventRoute);

//cloudinary config
cloudinary.config({ 
        cloud_name: process.env.CLOUD_NAME, 
        api_key: process.env.CLOUD_API_KEY, 
        api_secret: process.env.CLOUD_SECRET_KEY
    });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})