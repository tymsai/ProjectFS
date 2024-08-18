const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 9000;
mongoose
  .connect(
    "mongodb+srv://nowara8194:qdlS6tysvpSN1GXS@cluster02.6cbc2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster02"
  )
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