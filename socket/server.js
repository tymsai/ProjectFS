const express = require("express");
const http = require("http");
const mongoose = require("mongoose");
const socketIo = require("socket.io");

// MongoDB setup
mongoose.connect(
  ""
);

// const UserSchema = new mongoose.Schema({
//   username: String,
// });
//const User = mongoose.model('User', UserSchema);

const MessageSchema = new mongoose.Schema({
  message: String,
  senderusername: String,
  recevierusername: String,
});
const Message = mongoose.model("Message", MessageSchema);
// const adddata=new Message({
//   message: "hello b msg from a",
//   senderusername: "a",
//   recevierusername: "b"
// })
//adddata.save()

function adder(message, senderusername, receiverusername) {}

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*", //specific origin you want to give access to,
  },
});

//app.use(express.static('public'));
const addmessage = async (message, senderusername, receiverusername) => {
  const adddata= Message.create({
    message: message,
    senderusername: senderusername,
    recevierusername: receiverusername
  })
  //adddata.save()
  return fetcher(senderusername, receiverusername);
};
const fetcher = async (senderusername, receiverusername) => {
  const searchResultStraightway = await Message.find({ senderusername: senderusername, recevierusername: receiverusername });
  const searchResultReverseway = await Message.find({ senderusername: receiverusername, recevierusername: senderusername });
  const finalMerged=searchResultReverseway.concat(searchResultStraightway)
  console.log(finalMerged)
  return finalMerged;
};
// When a user connects
io.on("connection", async (socket) => {
  console.log("A user connected:", socket.id);
  //socket.emit(messages)
  socket.on("init", async (senderusername, receiverusername) => {
    const oldMessages = await fetcher(senderusername, receiverusername);
    socket.emit("loadprevMessage", oldMessages);
  });
  socket.on("username", (senderusername) => {
    console.log(senderusername);
  });
  socket.on("receiverusername", (receiverusername) => {
    console.log(receiverusername);
  });
  socket.on(
    "sendingInput",
    async (message, senderusername, receiverusername) => {
      console.log(message);
      const addMessage = await addmessage(
        message,
        senderusername,
        receiverusername
      );
      console.log(addMessage);
    }
  );
});

const PORT = process.env.PORT || 420;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

/*
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Store connected users and their socket IDs
const users = {};

io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  // Register a new user
  socket.on('register', (username) => {
    users[socket.id] = { username, socketId: socket.id };
    io.emit('updateUsers', Object.values(users).map(user => ({
      id: user.socketId,
      username: user.username
    })));
  });

  // Send a message to a specific recipient
  socket.on('sendMessage', ({ recipientId, message }) => {
    if (users[recipientId]) {
      io.to(recipientId).emit('receiveMessage', {
        senderId: socket.id,
        message,
        senderUsername: users[socket.id].username
      });
    }
  });

  // Handle user disconnection
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
    delete users[socket.id];
    io.emit('updateUsers', Object.values(users).map(user => ({
      id: user.socketId,
      username: user.username
    })));
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
*/
