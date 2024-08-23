const bcrypt=require("bcrypt")
const jwt = require("jsonwebtoken")
const UserModel=require("../models/UserModel")
const signupRequest = async (req, res)=>{
    try{
        const {username, email, password}= req.body
        const hashedPassword = await bcrypt.hash(password, 10)
        const usernameFind=await UserModel.findOne({username: username})
        console.log(usernameFind)
        const emailFind=await UserModel.findOne({email: email})
        console.log(emailFind)
        if(!emailFind && !usernameFind){
            throw new Error("Email & Username either of them Exists")
        }
        //const userAdded=await UserModel.create({username, email, hashedPassword})
        const token = jwt.sign(buildToken(userAdded),process.env.JWT_TOKEN_SECRET)
        
        return res.json({"verification": token});
    }catch (error){
        return res.status(400).json({ error: error.message });
    }
}
module.exports = {signupRequest};