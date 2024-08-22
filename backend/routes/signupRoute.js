const express = require("express")
const {signupRequest}=require("../controller/signupControl")
const signupRouter = express.Router();

signupRouter.post("/signup/register", signupRequest);

module.exports=signupRouter;