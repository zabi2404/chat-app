import jwt from 'jsonwebtoken'

export const GenerateToken = (id,res)=>{

const token = jwt.sign(
    { id },
    process.env.JWT_SECRET,
    { expiresIn: "2h" }
)
res.cookie('token',token,{httpOnly:true,expiresIn:new Date(Date.now() +2*60* 60 * 1000)})
}