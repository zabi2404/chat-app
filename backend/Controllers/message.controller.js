import Message from "../Modals/message.modal.js";
import User from "../Modals/user.modal.js";

export const getUsers = async (req, res, next) => {

    try {
        const id = req.decoded;

        const user = await User.find(
            { _id: { $ne: id.id } }
        ).select('-password');


        res.status(200).json(user)
    } catch (error) {
        next(error)
    }
}


export const getMessages = async (req, res, next) => {

    const { id } = req.params;

    const senderId = req.body.id;

    try {
        const message = await Message.find({

            $or: [
                { senderId, reciverId: id },
                { senderId: id, reciverId: senderId }
            ]
        }).sort({ createdAt: 1 })
        if (!message || message.length === 0) {
            return next(HandleError(404, "No messages found"));
        }
        res.status(200).json(message)
    } catch (error) {
        next(error)
    }

}


export const sendMessage= async (req,res,next)=>{
    const {id:reciverId} = req.params;
    const senderId = req.decoded.id;
    const {text,image}=req.body;

    try {
        if (!text && !image) {
            return next(HandleError(400, "Message must contain text or image"));
          }
        const message = await Message.create({
            senderId:senderId,
            reciverId:reciverId,
            text,
            image
        })
        res.status(201).json(message)
    } catch (error) {
        next(error)
    }

}