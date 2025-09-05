import express from 'express';
import verifyToken from '../utlis/verifyToken.js';
import { getMessages, getUsers, sendMessage } from '../Controllers/message.controller.js';

const messageRoute = express.Router();

messageRoute.get('/users',verifyToken,getUsers);
messageRoute.get('/:id',verifyToken,getMessages)
messageRoute.get('send-message/:id',verifyToken,sendMessage)



export default messageRoute;