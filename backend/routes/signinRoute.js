const express = require("express")
const {signinRequest, forgetpassRequest}=require("../controller/signinControl")
const signinRouter = express.Router();

signinRouter.post("/signin/auth", signinRequest);
signinRouter.post("/signin/forget", forgetpassRequest);

module.exports=signinRouter;