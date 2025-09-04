import mongoose from "mongoose";

const userSchema = new  mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        minlength:8
    },
    profilepic:{
        type:String,
        default:'https://media.istockphoto.com/id/1393750072/vector/flat-white-icon-man-for-web-design-silhouette-flat-illustration-vector-illustration-stock.jpg?s=612x612&w=0&k=20&c=s9hO4SpyvrDIfELozPpiB_WtzQV9KhoMUP9R9gVohoU='
    }

},{timestamps:true})


const User = mongoose.model('user',userSchema);

export default User;