const parseUrl=require('url')
const UserModel=require("../models/UserModel")
const ContactbookModel=require("../models/ContactbookModel")
const contactbookListRequest = async (req, res)=>{
    try{
        const {username}=req.body
        console.log(username)
        const friendrequestsenderInDB=await UserModel.findOne({username})
        const searchResult=await ContactbookModel.find({friendrequestsender: friendrequestsenderInDB._id})
        console.log(searchResult)
        const usernames = searchResult.map(user => user.friendrequestreceiver._id);
        return res.json({
            "searchResult": usernames
        })
        
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
        const {friendrequestsender, friendrequestreceiver}=req.body
        console.log(friendrequestsender,friendrequestreceiver)
        const friendrequestsenderInDB=await UserModel.findOne({username: friendrequestsender})
        const friendrequestreceiverInDB=await UserModel.findOne({username: friendrequestreceiver})
        //console.log(friendrequestreceiverInDB._id)
        if(friendrequestreceiver==""){
            throw new Error("enter receiver username!")
        }
        await ContactbookModel.create({
            friendrequestsender: friendrequestsenderInDB._id,
            senderusername: friendrequestsender,
            receiverusername: friendrequestreceiver,
            friendrequestreceiver: friendrequestreceiverInDB._id
        })
        return res
            .json({
                "friend": "added"
            })

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
