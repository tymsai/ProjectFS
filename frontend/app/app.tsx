"use client"
import Main from './main'
import Signup from './signup/page'
import store from './redux/store'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function Home() {
  //const [verified, useVerified]= useState(store.getState().authenticationStatus.authenticationStatus) 
  const [verified, useVerified] = useState(useSelector((state) => state.authenticationStatus.authenticationStatus))
  console.log("conditional verified render", verified)
  useEffect(()=>{
    useVerified(store.getState().authenticationStatus.authenticationStatus)
    console.log("useeffect")
  },[verified])
return (
    <main>
      {verified && <Main/>}
      <p></p>
      {!verified && <Signup/>}
    </main>
  );
}
