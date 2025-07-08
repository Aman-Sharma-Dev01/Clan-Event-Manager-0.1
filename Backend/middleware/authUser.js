import { User } from '../models/user.model.js';
import jwt from 'jsonwebtoken';


//authentication
export const isAuthentication = async(req,resp,next)=>{
    try {
        const token = req.cookies.jwt;
        if(!token){
            return resp.status(401).json({message:"User not authenticated"})
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)

        const user = await User.findById(decoded.userid)
        
        if(!user){
            return resp.status(404).json({message:"User not found"})
        }
        
        req.user = user;
        next();
         
    } catch (error) {
        console.log("Error in Authentication"+error);
        return resp.status(401).json({message:"User not authenticated"})
    }
}


