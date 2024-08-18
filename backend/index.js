const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 9000;
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