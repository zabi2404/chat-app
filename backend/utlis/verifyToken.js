import jwt from 'jsonwebtoken'
import { HandleError } from './HandleError.js';

const verifyToken = (req, res, next) => {
    const token = req.cookies?.token;
  
    if (!token) return next(HandleError(404, "forbidden"))

        jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
            if (error) return next(HandleError(403, "Forbidden"))
            req.decoded = decoded;
            next();
        })
  

}

export default verifyToken;