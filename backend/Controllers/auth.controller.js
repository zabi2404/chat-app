import { mongo } from "mongoose";
import User from "../Modals/user.modal.js";
import {HandleError} from "../utlis/HandleError.js";
import bcrypt from 'bcryptjs'
import { GenerateToken } from "../utlis/GenerateToken.js";


export const signUp = async(req, res, next) => {
const {username,email,password} = req.body;

try {
    
    const user = await User.findOne({email});
    if(user)return next(HandleError(409,'User exist already'));

    if(password.length<8)return next(HandleError(400,'Password must be 8 character long'))

    const hashedpassword = bcrypt.hashSync(password,10);

    const NewUser = await User.create({
        username,
        email,
        password:hashedpassword
    })

    if(NewUser){
        GenerateToken(NewUser._id,res);
    }
    const {password:pass,...rest}=NewUser._doc
    

res.status(201).json(rest)

} catch (error) {
    next(error)
}

}


export const login = (req, res, next) => {
}



export const logout = (req, res, next) => {

}
