"use client";
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
const socket = io("http://localhost:420");
const user = "h1";
//<script src="/socket.io/socket.io.js"></script>
function page() {
  const message="hello user1"
  const [currentuser, setCurrentuser] = useState();
  socket.emit("init",(user))
  return (
    <div>
      <h1>hi</h1>
    </div>
  );
}

export default page;
