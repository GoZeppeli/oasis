import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import Admin from "./Admin";
import Header from "./Header";



export default function Pages() {
    const [password, setPassword] = useState('')
    const [display, setDisplay] = useState(false)

    async function redirect(){
        console.log('yes')
        const response = await fetch(`/api/protect`,
                {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    pwd : password
                })
                }
            );
        const data = await response.json()
        if(data.status === 'ok'){
            setDisplay(true)
        }
    }

    return (
      <>
        <Header></Header>
        <form onSubmit={redirect}>
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="text"
					placeholder="password..."
				/>

				<input type="submit" value="Login" />
			</form>
      {display ? (
        <Admin></Admin>
      ) : (
        <p>no!</p>
      )}
      </>
    );
  }