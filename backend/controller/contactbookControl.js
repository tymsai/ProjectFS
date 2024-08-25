const parseUrl=require('url')
const UserModel=require("../models/UserModel")
const ContactbookModel=require("../models/ContactbookModel")
const contactbookListRequest = async (req, res)=>{
    try{
        
    }catch (error){
        return res
            .status(400)
            .json({ 
                "error": error.message,
                "entry_status": false,
            }); 
    }
}
const contactbookViewResultRequest = async (req, res)=>{
    try{
        const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
        const parsedUrl=parseUrl.parse(fullUrl)
        const searchParam=parsedUrl.query
        if(searchParam){
            const regexi = new RegExp(searchParam, "i");
            const searchResult=await UserModel.find({username: {$regex: regexi}})
            const usernames = searchResult.map(user => user.username);
            return res.json({
                "searchResult": usernames
            })

        }else{
            throw new Error("Username Not Found")
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
const contactbookAddRequest=async(req,res)=>{
    try{
        
    }catch (error){
        return res
            .status(400)
            .json({ 
                "error": error.message,
                "entry_status": false,
            }); 
    }
}

module.exports = {contactbookListRequest, contactbookAddRequest, contactbookViewResultRequest};
