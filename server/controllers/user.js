import { User } from "../models/userModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const Register = async(req, res)=> {
    try {
        const {fullname, email, password} = req.body;
        if(!fullname || !email || !password){
            return res.staus(401).json({
                message: "invalid data",
                success: false
            })
        }
        const user = await User.findOne({
            email
        });
        if(user){
            return res.status(401).json({
                message: "this email is already taken",
                success: false
            })
        }
        const salt =await bcrypt.genSalt(10);
        const hashed_password = await bcrypt.hash(password, salt);
        await User.create({
            fullname,
            email,
            password: hashed_password
        });
        res.status(200).json({
            message: "Your Account Created/Registered successfully",
            success: true
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Internal server error"
        })
    }
}

export const Login = async(req, res)=> {
    try {
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(401).json({
                message: "invalid submission",
                success: false
            })
        }
        const user = await User.findOne({
            email,
        });
        if(!user){
            return res.status(400).json({
                message: "this email is not valid/registered",
                success:false
            })
        }
        const matching_password = await bcrypt.compare(password, user.password);
        if(!matching_password){
            return res.status(400).json({
                message: "password is not valid",
                success:false
            })
        }
        const token_data = {id: user._id};
        const token = await jwt.sign(token_data, process.env.SECRET_KEY, {expiresIn: "1d"});
        res.status(200).cookie("token", token, {httpOnly: true}).json({
            message: "logged in Successfully",
            success: true,
            user: user,
            token
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Internal Server Error"
        })
    }
};


export const Logout = async(req, res)=> {
    res.status(200).cookie("token", "",{expiresIn: new Date(Date.now()), httpOnly: true}).json({
        message: "User Logged Out Successfully",
        success: true
    })
}