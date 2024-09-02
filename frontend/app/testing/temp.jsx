import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './App.css';

// Initialize socket connection
const socket = io();

function App() {
    const [username, setUsername] = useState('');
    const [recipientId, setRecipientId] = useState('');
    const [message, setMessage] = useState('');
    const [users, setUsers] = useState([]);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        // Register user
        socket.on('updateUsers', (users) => {
            setUsers(users);
        });

        // Load message history
        socket.on('loadMessages', (messages) => {
            setMessages(messages);
        });

        // Receive new messages
        socket.on('receiveMessage', ({ senderId, message }) => {
            setMessages(prevMessages => [...prevMessages, { senderId, message }]);
        });

        // Clean up on unmount
        return () => {
            socket.off('updateUsers');
            socket.off('loadMessages');
            socket.off('receiveMessage');
        };
    }, []);

    const handleRegister = () => {
        if (username) {
            socket.emit('register', username);
        }
    };

    const handleSend = () => {
        if (recipientId && message) {
            socket.emit('sendMessage', { recipientId, message });
            setMessage('');
        }
    };

    return (
        <div>
            <h1>Socket.IO Chat</h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button onClick={handleRegister}>Register</button>
            </div>
            <div>
                <select
                    value={recipientId}
                    onChange={(e) => setRecipientId(e.target.value)}
                >
                    <option value="">Select recipient</option>
                    {users.map(user => (
                        <option key={user.id} value={user.id}>
                            {user.username}
                        </option>
                    ))}
                </select>
                <input
                    type="text"
                    placeholder="Enter message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button onClick={handleSend}>Send</button>
            </div>
            <div id="users">
                {users.map(user => (
                    <div key={user.id}>{user.username}</div>
                ))}
            </div>
            <div id="messages" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                {messages.map((msg, index) => (
                    <div key={index}>
                        From {msg.senderId}: {msg.message}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
