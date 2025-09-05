import express from 'express'
import { checkAuth, login, logout, signUp } from '../Controllers/auth.controller.js';
import verifyToken from '../utlis/verifyToken.js';
const Router = express.Router();

Router.post('/login',login)
Router.post('/signUp',signUp)
Router.get('/logOut',verifyToken,logout)
Router.get('/check',verifyToken,checkAuth)



export default Router;

