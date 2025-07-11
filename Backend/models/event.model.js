import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({

EventTitle:{
    type:String,
    required:true,   
},

Description:{
    type:String,
    required:true,   
},

Category:{
    type:String,
    required:true
},

Date:{
type:Date,
required:true
},

Time:{
    type:String,
    required:true,   
},
Location: {
    type: String,
    required: true,
  },
Reward: {
    type: String,
    required: true,
  },
Requirements: {
    type: String,
  } ,
poster: {
    public_id:{
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    }
},
clanName: {
    type: String,
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

})


export const Event = mongoose.model("Event",eventSchema)