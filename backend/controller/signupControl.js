const bcrypt=require("bcrypt")
const jwt = require("jsonwebtoken")
const UserModel=require("../models/UserModel")
const signupRequest = async (req, res)=>{
    try{
        const {username, email, password}= req.body
        console.log(username)
        console.log(email)
        console.log(password)
        const usernameFind=await UserModel.findOne({username})
        console.log(usernameFind)
        const emailFind=await UserModel.findOne({email})
        console.log(emailFind)
        if((emailFind && usernameFind)){
            throw new Error("Email & Username either of them Exists")
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        console.log("hashedPassword--",hashedPassword)
        await UserModel.create({username, email, password: hashedPassword})
        
        const token = jwt.sign({username},process.env.JWT_TOKEN_SECRET)
        return res.json({
            "token": token,
            "username": username,
        });
    }catch (error){
        return res.status(400).json({ error: error.message });
    }
}
module.exports = {signupRequest};