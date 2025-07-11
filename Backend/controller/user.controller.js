import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import createTokenAndSaveCookies from "../jwt/AuthToken.js"

export const register= async (req,res)=>{
   
   try {
     const{Firstname,Lastname,email,password,clanName}= req.body;
    if(!Firstname||!Lastname||!email||!password||!clanName){
     return res.status(400).json({message:"All fields are required"});
    }
      const user= await User.findOne({email})
      if(user) {
         return res.status(400).json({message:"User already registered with this email"});
      }
      
      const hashedPassword = await bcrypt.hash(password,10);
      const newUser = new User({
         Firstname,
         Lastname,
         email,
         password:hashedPassword,
         clanName
     });
      // Save the new user to the database
      await newUser.save()
      if(newUser){
         const token=  await createTokenAndSaveCookies(newUser._id,res)
         res.status(201).json({message:"User registered successfully", newUser, token:token})
        }
 
      if(newUser){
    
       const token = await createTokenAndSaveCookies(newUser._id,res);
       console.log(token)
         res.status(201).json({message:"User registered successfully",newUser,token:token});
      }
   } catch (error) {
    console.log('Error fetching profile:', error);
    res.status(500).json({ message: 'Internal server error' });
   }

};

export const login = async (req, resp)=>{
   
    const {email, password}=req.body;

    try {
        if(!email || !password){
            return resp.status(400).json({error: 'Please fill all the required field'});
        }
        const usersEmail = await User.findOne({email})
        if(!usersEmail){
            return resp.status(400).json({error:"Invalid email or password"})
        }
        const user = await User.findOne({email}).select("+password")
        if(!user.password){
            return resp.status(400).json({error:"user password is missing"})
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if(!user || !isMatch){
            return resp.status(400).json({error:"Invalid email or password"})
        }
        const token = await createTokenAndSaveCookies(user._id,resp);
        return resp.status(200).json({message:"User logged in successfully", user:{
            _id:user.id,
            name:user.name,
            email:user.email,
        },
            token:token
        })

    } catch (error) {
        console.log(error);
        return resp.status(500).json({error: 'internal server error'});
        
    }
}

export const logout = async(req, resp)=>{
   try {
    resp.clearCookie('jwt');
    resp.status(200).json({message:"User logout successfully"})
   } catch (error) {
    console.log(error);
    return resp.status(500).json({error:"Internal server error"})
   }
}
export const getMyProfile = async(req,resp)=>{
    try {
      const user = req.user;
      resp.status(200).json(user)
    } catch (error) {
      console.log('Error fetching profile:', error);
    resp.status(500).json({ message: 'Internal server error' });
    }
}

export const getUserProfile = async (req, resp) => {
  try {
    const user = await User.findById(req.user._id).select('-password'); // Exclude password
    if (!user) {
      return resp.status(404).json({ message: 'User not found' });
    }
    resp.status(200).json(user);
  } catch (error) {
    console.log('Error fetching profile:', error);
    resp.status(500).json({ message: 'Internal server error' });
  }
};