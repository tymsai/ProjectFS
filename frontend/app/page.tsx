"use client"
import { useState } from 'react';
import Main from './main'
import Signinup from './loginUi/signinup'
export default function Home() {
  const [verified, setverified]=useState(0)
  const auth=(data:any)=>{setverified(data)}
  return (
    <main>
      {verified?<Main/>:<Signinup auth={auth}/>}
    </main>
  );
}
