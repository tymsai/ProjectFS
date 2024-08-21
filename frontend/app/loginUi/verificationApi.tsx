import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useQueryClient, QueryClientProvider } from "@tanstack/react-query";

export default async function verificationApi(props: any) {
  console.log(props)
  return await axios.post('http://localhost:9000/login/auth',props).then(response => response.data.verification)  
  ;
}

/*import React, { useEffect, useState } from "react";

var authBool = false;
function check(props: any) {
  const body = JSON.stringify(props);
  fetch("http://localhost:9000/login/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  })
    .then((response) => {
      if (response.ok) {
        console.log(response);
        return response.json();
      } else {
        throw response.status;
      }
    })
    .then((data) => {
      authBool = data.verification;
      console.log("me" + authBool);
    })
    .catch((error) => console.log(error));
}

export default function verificationApi(props: any) {
  check(props);
  return authBool;
}
*/
