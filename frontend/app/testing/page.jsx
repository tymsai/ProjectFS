"use client";
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
const socket = io("http://localhost:420");
const receiverusername = "c";
//<script src="/socket.io/socket.io.js"></script>
function page() {
  const [messages, setMessages] = useState("");
  const [username, setUsername] = useState("a");
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log("hi");
    socket.emit("init", username, receiverusername);
    socket.emit("username", username);
    socket.emit("receiverusername", receiverusername);
  }, []);
  socket.on("loadprevMessage", (info) => {
    setMessages(info);
    //console.log("info");
    const messagesDiv = document.getElementById("messagesDiv");
    Object.keys(messages).map((itr) => {
      const messageDiv = document.createElement("div");
      messageDiv.textContent = `From ${messages[itr].senderusername} to ${messages[itr].recevierusername} :Message: ${messages[itr].message}`;
      messagesDiv.appendChild(messageDiv);
    });
    //console.log(messages)
    // Object.keys(messages).map((itr) => {
    //   console.log(messages[itr].message);
    // });
    // for (let index = 0; index < messages.length; index++) {
    //   console.log(messages[index].message);
    // }
  });
  function handelSubmit() {
    console.log(input);
    socket.emit("sendingInput", input, username, receiverusername);
  }
  return (
    <>
      <div id="messagesDiv"></div>
      <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
        id="message"
        placeholder="Enter message"
      />
      <button onClick={() => handelSubmit()} id="send">
        Send
      </button>
    </>
  );
}

export default page;
