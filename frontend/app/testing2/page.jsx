"use client";
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
const users = ["h1"];
//<script src="/socket.io/socket.io.js"></script>
const socket = io("http://localhost:420");
function page() {
  const message="hello user2"
  const [currentuser, setCurrentuser] = useState();
  useEffect(() => {
    socket.emit("username", users);
    socket.emit("recieveMessage", message);
    
  }, []);
  socket.on("responseLo",(messages)=>{
    console.log(messages)
  })
  return (
    <>
      <h1>hi</h1>
    </>
  );
}

export default page;
