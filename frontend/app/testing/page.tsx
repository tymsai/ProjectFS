/**
 * v0 by Vercel.
 * @see https://v0.dev/t/B1cxNpr4F0o
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState,useEffect } from "react";
import io from "socket.io-client";

import axios from "axios";
//import { useDispatch, useSelector } from "react-redux";
//import { valid, invalid } from "../redux/slices/authenticationSlice";
//import store from "../redux/store";
import { useRouter } from "next/navigation";
import { revalidatePath } from "next/cache";
var socket,user={}
export default function Component(props: any) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("soyabean");
  const [password, setPassword] = useState("password soya");
  const [socketConnected, setSocketConnected] = useState(false);

  function handelSubmit() {
    
    const details = {
      username: username,
      email: email,
      password: password,
    };
    user={username}
    console.log(details)
  }
  useEffect(() => {
    socket = io("http://localhost:9000");
    socket.emit("setup", user);
    socket.on("connected", () => setSocketConnected(true));
    socket.emit("join chat", username);
    socket.emit("new message", password);

    //socket.on("typing", () => setIsTyping(true));
    //socket.on("stop typing", () => setIsTyping(false));
  }, []);



















  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Welcome</h1>
          <p className="text-muted-foreground">
            Enter your credentials to create your account.
          </p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Card>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  placeholder="Enter your username"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">email</Label>
                <Input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="Enter your password"
                  required
                />
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <div>
                Have an account ?
                <p className="text-sm font-medium underline underline-offset-4 hover:text-primary">
                  <Link href="../signin">SignIn</Link>
                </p>
              </div>
              <Button type="submit" onClick={() => handelSubmit()}>
                Sign in
              </Button>
            </CardFooter>
          </Card>
        </form>
      </div>
    </div>
  );
}