import React, { Component, useState, useEffect } from "react";
import {useParams} from "react-router-dom";

export default function Pages() {
    const [article, setArticle] = useState(null);
    let id = useParams()
    const string = JSON.stringify(id)
    const parsed = JSON.parse(string)
    const params = parsed._id
    async function grab(){
        const response = await fetch(`http://localhost:1000/grab`,
                {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({params}),
                }
            );
        const data = await response.json()
        setArticle(data.content)
    }

    useEffect( () => {
        grab()
    }, [])
    var doc = ''
    if(article){
        doc = new DOMParser().parseFromString(article.content, "text/html");
        document.querySelector("#output").innerHTML = ""
        console.log(doc.querySelector('.page-body'))
        document.querySelector("#output").appendChild(doc.querySelector('.page-body'))
    }

    return (
      <>
        <div id="output"></div>
      </>
    );
  }