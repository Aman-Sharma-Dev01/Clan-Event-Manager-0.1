import jwt from "jsonwebtoken";
import { User } from '../models/user.model.js';

const createTokenAndSaveCookie = async (userid,res)=>{
    const token = jwt.sign({userid},process.env.JWT_SECRET_KEY,{
        expiresIn: '7d'
    })
    res.cookie("jwt", token,{
        httpOnly:false, //xss
        secure:true,
        sameSite:"none"//csrf
    })
    await User.findByIdAndUpdate(userid,{token})
    return token;
};
export default createTokenAndSaveCookie;    