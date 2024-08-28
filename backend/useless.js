const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const socketIo = require('socket.io');

// Create express app
const app = express();
const server = http.createServer(app);
const io = socketIo(server);



// Serve static files from 'public' directory
app.use(express.static('public'));

