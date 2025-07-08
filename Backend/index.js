import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from 'cookie-parser';
import userRoute from "./routes/user.route.js"

const app = express()
dotenv.config()

const port = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

//Middleware ExpressJS
app.use(express.json());
app.use(cookieParser()); 

//DBCODE
try {
    mongoose.connect(MONGO_URL)
    console.log("connected to MongoDB")
} catch (error) {
    console.log(error)
    
}

//DEFINING ROUTES
app.use("/api/users",userRoute);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})