import mongoose from "mongoose";


const UserSchema  = new mongoose.Schema({
    email:{
        type:String,
        reqiured:true,
        unique:true
    },
    fullName:{
        type:String,
        reqiured:true,
    },
    password:{
        type:String,
        reqiured:true,
        minlength:6
    },
    profilePic:{
        type:String,
        default:""
    }
},{
    timestamps:true
});


const User = mongoose.model("User",UserSchema);
export default User