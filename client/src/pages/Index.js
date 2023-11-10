import { useEffect, useState } from "react";

export default function Index() {
    var doc = ""
    async function grab(){
      const response = await fetch(`http://localhost:1000/`,
                {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                },
                }
      );
      const data = await response.json()
      console.log(data.content)
    }
    useEffect( () => {
      grab()
    })
    

    async function add(x){
        var fr=new FileReader(); 
        fr.onload=async function(){ 
            doc = new DOMParser().parseFromString(fr.result, "text/xml");
            document.querySelector("#output").appendChild(doc.querySelector('.page-body'))
            const nav = document.querySelector(".table_of_contents");
            nav.remove()
            const data = document.querySelector('#output').innerHTML
            const title = doc.querySelector('.page-title').innerHTML
            const response = await fetch(`http://localhost:1000/hello`,
                {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({data, title}),
                }
            );
        } 
        fr.readAsText(x.target.files[0]);
    }


    return (
      <>
        <input type="file" accept=".html" onChange={(e) => {add(e)}}></input>
        <div id="output"></div>
      </>
    );
  }