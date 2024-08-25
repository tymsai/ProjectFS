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
        const options={
            htppOnly: true
        }
        return res
            .cookie("token",token,options)
            .json({
                "flow_status": "success",
                "token": token,
                "username": username,
                "entry_status": true
        });
    }catch (error){
        return res
            .status(400)
            .json({ 
                "error": error.message,
                "entry_status": false,
            }); 
    }
}

const signupViewdeets=async(req,res)=>{
    try{
        const {username}=req.body
        const userDB=await UserModel.findOne({username})
        
        return res.json({
            "email": userDB.email,
            "username": userDB.username,
            "password": userDB.password
        })
        //const alldeets=UserModel.getCollectionNames()
    
    }catch (error){
        return res
            .status(400)
            .json({ 
                "error": error.message,
                "entry_status": false,
            }); 
    }
}

module.exports = {signupRequest,signupViewdeets};
