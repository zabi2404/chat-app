import express from 'express'
import { login, logout, signUp } from '../Controllers/auth.controller.js';

const Router = express.Router();

Router.post('/login',login)
Router.post('/signUp',signUp)
Router.post('/logOut',logout)

export default Router;

