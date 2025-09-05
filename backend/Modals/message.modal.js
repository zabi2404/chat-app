import mongoose from "mongoose";


const messageSchema = new mongoose.Schema({
    senderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    },
    reciverId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    },
    text:{
        type:String,

    },
    image:{
        type:String,
        
    }

},{timestamps:true});

const Message = mongoose.model('message',messageSchema);

export default Message;