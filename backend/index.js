import express from 'express'
import authRoute from './Routes/auth.route.js'
import { connectDB } from './lib/db.js';
import dotenv from 'dotenv'

dotenv.config();

const app = express();

app.use('/api/auth',authRoute)

app.listen(2404,()=>{
    connectDB();
    console.log("Server is running")

})