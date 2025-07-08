import mongoose from "mongoose";
import validator from "validator";
const userSchema = new mongoose.Schema({

Firstname:{
    type:String,
    required:true,   
},

Lastname:{
    type:String,
    required:true,   
},

email:{

    type:String,
    required:true,
    validate:[validator.isEmail,"Please enter a valid email"]
},

password:{
type:String,
required:true,
select:false,
minlength:8
},

clanName:{
    type:String,
    required:true,   
},
token: {
    type: String,
  }

})


export const User=mongoose.model("User",userSchema)