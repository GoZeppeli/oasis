import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

export default function Index() {
    const [articles, setArticles] = useState(null);
    var doc = ""
    async function grab(){
      const response = await fetch(`/api/grabAll`,
                {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                },
                }
      );
      const data = await response.json()
      setArticles(data.content)

    }
    useEffect( () => {
      grab()
    }, [])
    

    async function add(x){
        var fr=new FileReader(); 
        fr.onload=async function(){ 
            doc = new DOMParser().parseFromString(fr.result, "text/xml");
            document.querySelector("#output").appendChild(doc.querySelector('.page-body'))
            const nav = document.querySelector(".table_of_contents");
            if(nav){
              nav.remove()
            }
            const data = document.querySelector('#output').innerHTML
            const title = doc.querySelector('.page-title').innerHTML
            const response = await fetch(`http://localhost:1000/api/hello`,
                {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({data, title}),
                }
            );
            grab()
        } 
        fr.readAsText(x.target.files[0]);

    }

    async function suppr(x){
        var urlll = x.target.previousElementSibling.getAttribute("href").split('/')
        var id = urlll.pop()
        const response = await fetch(`http://localhost:1000/api/delete`,
                {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({id}),
                }
            );
            const data = await response.json()
            grab()
    }


    return (
      <>  
        <input type="file" accept=".html" onChange={(e) => {add(e)}}></input>
        <div id="output"></div>
        {articles ? (
          articles.map((a)=>{
            return(<><Link to={`/page/${a._id}`}>{a.title}</Link><span onClick={(e) => {suppr(e)}}>delete</span><br></br></>)
          })
        ) : (
          <p>no!</p>
        )}
      </>
    );
  }