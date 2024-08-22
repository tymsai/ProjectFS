const signinRequest = async (req, res)=>{
    try{
        //const body=req.body
        console.log(req)
        return res.json({"verification": "signin req reached"});
    }catch (error){
        return res.error
    }
}
const forgetpassRequest=async(req, res)=>{
    try{
        //const body=req.body
        console.log(req)
        return res.json({"verification": "forget pass req reached"});
    }catch (error){
        return res.error
    }
}
module.exports = {signinRequest, forgetpassRequest};