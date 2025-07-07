import { generateToken } from '../lib/utils.js';
import User from '../models/userModel.js';
import bcrypt from 'bcryptjs'
export const signin = async (req, res) => {
    const {fullName, email, password} = req.body;
    
    try {
        if(password.length < 6){
           return res.status(400).json({message:"Password must be at least 6 characters"});
        }
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({message:"User already exists"});
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);
        const newUser = new User({
            fullName,
            email,
            password:hashedPassword
        })
        if(newUser){
            generateToken(newUser._id, res);
            await newUser.save();
            res.status(200).json({
                _id:newUser._id,
                fullName:newUser.fullName,
                email:newUser.email,
                profilePic:newUser.profilePic
            })
        }else{
            res.status(400).json({message:"Invalid user data"});
        }
    } catch (error) {
        console.log("There is an error in authController in signin", error);
        res.status(500).json({message:"Internal server error"});
    }
}

export const signup = (req, res) => {
    res.send('signup route')
}

export const login = (req, res) => {
    res.send('login route')
}