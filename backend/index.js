import express from 'express'
import authRoute from './Routes/auth.route.js'
import { connectDB } from './lib/db.js';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import messageRoute from './Routes/message.route.js';

dotenv.config();

const app = express();
app.use(express.json())


app.use(cookieParser())
app.use('/api/auth', authRoute)
app.use('/api/message', messageRoute)


//middleware for error
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || 'internal server error'
    return res.status(status).json({
        success: false,
        status,
        message,

    })

})



app.listen(2404, () => {
    connectDB();
    console.log("Server is running")

})