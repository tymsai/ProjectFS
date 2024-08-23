const express = require("express");
const cors =require("cors")
const signinRouter = require("./routes/signinRoute")
const signupRouter = require("./routes/signupRoute")
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(signinRouter);
app.use(signupRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports=app;