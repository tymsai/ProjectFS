const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const UserModel=require("../models/UserModel")
const signinRequest = async (req, res)=>{
    try{
        const {username, password}=req.body
        const usernameFind= await UserModel.findOne({username})
        console.log(usernameFind)
        if(usernameFind && (await bcrypt.compare(password, usernameFind.password))){
            const token=jwt.sign(username, process.env.JWT_TOKEN_SECRET)
            const options={
                htppOnly: true
            }
            return res
                .cookie("token", token, options)
                .json({
                    "his email": usernameFind.email,
                    "entry_status": true,
                    "username": username,
                    "token": token,
                    "flow_status": "success"
                });
        }
        else{
            throw new Error("Username not exists or password is incorrect")
        }
    }catch (error){
        return res
        .status(400)
        .json({ 
            "error": error.message,
            "entry_status": false,
        });
    }
}
const forgetpassRequest=async(req, res)=>{
    try{
        const {email, password}=req.body
        const emailFind=await UserModel.findOne({email})
        if(emailFind){
            const hashedPassword=await bcrypt.hash(password, 10)
            const updateStatus=await UserModel.updateOne(
                {email},
                {$set:{"password": hashedPassword}}
            )
            console.log(updateStatus)
            return res
            .json({
                "changed": true,
                "entry_status": false 
            })
        }
        else{
            throw new Error("Email not found")
        }
    }catch (error){
        return res
        .status(400)
        .json({ 
            "error": error.message,
            "entry_status": false,
        });
    }
}
module.exports = {signinRequest, forgetpassRequest};