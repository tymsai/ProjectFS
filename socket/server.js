const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');
require("dotenv").config();

// MongoDB setup
mongoose.connect('process.env.MONGO_API_KEY');

const UsernameSchema = new mongoose.Schema({
  username: String,
  socketId: String
});
const UserSchema = mongoose.model('UsernameSchema', UsernameSchema);

const MessagesSchema = new mongoose.Schema({
  senderUsername: String,
  recipientUsername: String,
  message: String,
  timestamp: { type: Date, default: Date.now }
});
const Message = mongoose.model('Message', MessagesSchema);

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public'));

// When a user connects
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  // Register a new user
  socket.on('register', async (username) => {
    try {
      let user = await UserSchema.findOne({ socketId: socket.id });
      if (user) {
        user.username = username;
      } else {
        user = new UserSchema({ username, socketId: socket.id });
      }
      await user.save();

      const users = await User.find();
      io.emit('updateUsers', users.map(user => ({
        id: user.socketId,
        username: user.username
      })));

      // Fetch and send the user's message history
      const messages = await Message.find({
        $or: [
          { senderId: socket.id },
          { recipientId: socket.id }
        ]
      }).sort({ timestamp: 1 }); // Sort by timestamp to show older messages first

      socket.emit('loadMessages', messages);
    } catch (err) {
      console.error(err);
    }
  });

  // Send a message to a specific recipient
  socket.on('sendMessage', async ({ recipientId, message }) => {
    try {
      if (await User.exists({ socketId: recipientId })) {
        const msg = new Message({
          senderId: socket.id,
          recipientId,
          message
        });
        await msg.save();

        io.to(recipientId).emit('receiveMessage', {
          senderId: socket.id,
          message
        });
      }
    } catch (err) {
      console.error(err);
    }
  });

  // Handle user disconnection
  socket.on('disconnect', async () => {
    console.log('User disconnected:', socket.id);
    await User.deleteOne({ socketId: socket.id });
    const users = await User.find();
    io.emit('updateUsers', users.map(user => ({
      id: user.socketId,
      username: user.username
    })));
  });
});

const PORT = process.env.PORT || 3000;
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