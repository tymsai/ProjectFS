const mongoose = require("mongoose");
const http = require("http");
require("dotenv").config();

const app = require("./app");
const server = http.createServer(app);

async function startServer() {
  // MongoDB connect
  await mongoose.connect(process.env.MONGODB_ATLAS_API_KEY);
  console.log("Connected to MongoDB!");
  server.listen(process.env.PORT, () => {
    console.log(`Server Listening on port ${process.env.PORT}...`);
  });
}
startServer();