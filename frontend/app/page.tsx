"use client"
import { useState } from 'react';
import Main from './main'
import Signup from './signup/page'
export default function Home() {
  const [verified, setverified]=useState(true)
  const auth=(data:any)=>{setverified(data)}
  return (
    <main>
      {verified?<Main/>:<Signup auth={auth}/>}
    </main>
  );
}
