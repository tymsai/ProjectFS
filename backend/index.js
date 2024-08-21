const express = require("express");
const mongoose = require("mongoose");
const cors=require("cors")
const app = express();
const port = 9000;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}))

require('dotenv').config()


mongoose
  .connect(process.env.MONGODB_ATLAS_API_KEY)
  .then(() => {
    console.log("\nsuccessfully connected to DB");
    app.listen(port, () => {
      console.log(`app listening on port ${port}`);
    });
  })
  .catch(() => {
    console.log("Failed to connect to DB");
  });

app.get("/", (req, res) => {
  res.send("Hellosd Worfrdld!");
});

app.post("/login/auth", (req, res) => {
  const body=req.body
  console.log(body)
  return res.json({verification: true});
});