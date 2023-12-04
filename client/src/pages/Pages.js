import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom";

export default function Pages() {
    const [article, setArticle] = useState(null);
    let id = useParams()
    const string = JSON.stringify(id)
    const parsed = JSON.parse(string)
    const params = parsed.id
    async function grab(){
        const response = await fetch(`/api/grabOne/${params}`,
                {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                }
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
        document.querySelector("#output").appendChild(doc.querySelector('.page-body'))
    }

    return (
      <>
        <div id="output"></div>
      </>
    );
  }