"use client"
import Main from './main'
import Signup from './signup/page'
import store from './redux/store'
import { useSelector } from 'react-redux'
const verified= store.getState(); 
const validity=verified.authenticationStatus.authenticationStatus
console.log("conditional render", validity)
export default function Home() {
return (
    <main>
      {validity?<Main/>:<Signup/>}
    </main>
  );
}
