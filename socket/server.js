const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const socketIo = require('socket.io');

// MongoDB setup
mongoose.connect('mongodb+srv://jewihi6927:1234567890-=@cluster0.8vaf9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

const UserSchema = new mongoose.Schema({
  username: String,
});
const User = mongoose.model('User', UserSchema);

const MessageSchema = new mongoose.Schema({
  message: String,
  senderusername: String,
  recevierusername: String
});
const Message = mongoose.model('Message', MessageSchema);

const app = express();
const server = http.createServer(app);
const io = socketIo(server,{
  cors: {
    origin: "*", //specific origin you want to give access to,
},
});

//app.use(express.static('public'));

// When a user connects
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);
  socket.on("init",(message)=>{
    await User.update()
    console.log(message)
  })
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