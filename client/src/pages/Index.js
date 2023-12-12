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
    



    return (
      <>  
        <Header></Header>
        {articles ? (
          articles.map((a)=>{
            return(<><Link to={`/page/${a._id}`}>{a.title}</Link><br></br></>)
          })
        ) : (
          <p>no!</p>
        )}
        <div className="block"></div>
      </>
    );
  }