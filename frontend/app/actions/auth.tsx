import React from 'react'
import axios from "axios"
export default function auth() {
    async function getUser() {
        try {
          const response = await axios.post('http://localhost:9000');
          console.log(response);
        } catch (error) {
          console.error(error);
        } finally{
            console.log("hi final")
        }
      }
}
