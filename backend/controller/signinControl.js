const signinRequest = async (req, res)=>{
    try{
        //const body=req.body
        console.log(req.body)
        return res.json({"verification": "true"});
    }catch (error){
        return res.error
    }
}
const forgetpassRequest=async(req, res)=>{
    try{
        //const body=req.body
        console.log(req.body)
        return res.json({"verification": "true"});
    }catch (error){
        return res.error
    }
}
module.exports = {signinRequest, forgetpassRequest};