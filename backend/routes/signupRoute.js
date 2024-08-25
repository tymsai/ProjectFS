const express = require("express")
const {signupRequest, signupViewdeets}=require("../controller/signupControl")
const signupRouter = express.Router();

signupRouter.post("/signup/register", signupRequest);
signupRouter.post("/signup/viewdeets", signupViewdeets);

module.exports=signupRouter;