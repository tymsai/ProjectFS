"use client";
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
const socket = io("http://localhost:420");
const receiverusername = "b";
//<script src="/socket.io/socket.io.js"></script>
function page() {
  const [messages, setMessages]=useState("")
  const [username, setUsername] = useState("a");
  useEffect(() => {
    console.log("hi")
    socket.emit("init")
    socket.emit("username", username);
    socket.emit("receiverusername", receiverusername);
  }, []);
  socket.on("loadprevMessage",(info)=>{
    setMessages(info)
    console.log("info")
    console.log(messages)
  });
  return (
    <>
      <h1>hii</h1>
    </>
  );
}

export default page;
