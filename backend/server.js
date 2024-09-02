const cookieParser=require("cookie-parser");
const mongoose = require("mongoose");
const express = require("express");
const http = require("http");
const cors =require("cors");
require("dotenv").config();


const app = express();
app.use(cors());
const signinRouter = require("./routes/signinRoute")
const signupRouter = require("./routes/signupRoute")
const contactbookRouter = require("./routes/contactbookRoute")
const server = http.createServer(app);


// const io = require('socket.io')(server, {
//   cors: {
//     origin: "*"
//   }
// });


app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));
app.use(signinRouter);
app.use(signupRouter);
app.use(contactbookRouter);


app.get("/", (req, res) => {
  res.send("Hello World!");
});

async function startServer() {
  await mongoose.connect(process.env.MONGODB_ATLAS_API_KEY);
  console.log("Connected to MongoDB!");
  server.listen(process.env.PORT, () => {
    console.log(`Server Listening on port ${process.env.PORT}...`);
  });
}
startServer();