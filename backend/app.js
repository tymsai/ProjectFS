/*
const express = require("express");
const cors =require("cors")
const signinRouter = require("./routes/signinRoute")
const signupRouter = require("./routes/signupRoute")
const contactbookRouter = require("./routes/contactbookRoute")
const cookieParser=require("cookie-parser")
const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));
app.use(signinRouter);
app.use(signupRouter);
app.use(contactbookRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports=app;
*/