const express = require("express")
const {contactbookListRequest, contactbookAddRequest, contactbookViewResultRequest}=require("../controller/contactbookControl")
const contactbookRouter = express.Router();

contactbookRouter.post("/contactbook/add", contactbookAddRequest);
contactbookRouter.post("/contactbook/list", contactbookListRequest);
contactbookRouter.get("/contactbook/viewresult?", contactbookViewResultRequest);

module.exports=contactbookRouter;