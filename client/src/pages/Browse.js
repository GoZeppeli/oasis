import React, { useState, useEffect, useRef } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

import { useOutletContext } from "react-router-dom";


export default function Browse() {
    const [articles, setArticles] = useState(null)
    const { allarticles, allcountries } = useOutletContext();
    const [all, setAll] = useState(null)
    useEffect(() => {
      if(allarticles){
        setArticles(allarticles)
        setAll(allarticles)
      }
    })

    const [limit, setLimit] = useState(6)

    function load(){
      var search = []
      var val = document.querySelector('.search-bar').value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
      all.map((a)=> {
        const newT = a.title.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
        if(newT.includes(val)){
          search.push(a)
        }
      })
      setArticles(search)
      
  }
    const arr = Array.from(Array(limit).keys())
    return (
      <>
        <Header bottom="360px" right="550px"></Header>
        <div className="search-wrapper">
          <input type="text" className="search-bar" placeholder="rechercher un article, un livre..." onChange={() => load()}></input>
        </div>
        <div className="results">
          {articles ? (
            articles.map((a, index) => {
              return(
                <>
                  {index < limit &&
                    <>
                      <Link to={`/page/${a._id.$oid}`}>
                        <div className="card-results">
                          <div className="arrow-results-wrapper"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>7-Arrow Up</title><g id="_7-Arrow_Up" data-name="7-Arrow Up"><path d="M3.41,2H16V0H1A1,1,0,0,0,0,1V17H2V3.41L30.29,31.71l1.41-1.41Z"/></g></svg></div></div>
                          <div className="title-results"><h1>{a.title}</h1></div>
                          <p>{a.description} <Link  to={`/page/${a._id.$oid}`}><span>lire l'article</span></Link ></p>
                        </div>
                      </Link>
                      <div className="separation"></div>
                    </>
                  }
                </>
              )
            }) 
          ) : (
            arr.map(() => {
              return (
                <div className="background">
                  <div className="none">
                    <Link to={`/`}>
                      <div className="grey-card">
                        <div className="grey-title"><h1>Pomme pomme pomme</h1></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <Link  to={``}><span>lire l'article</span></Link ></p>
                      </div>
                    </Link>
                    <div className="separation"></div>
                  </div>
                </div>
              )
            })
          )}
        </div>
        { articles && articles.length > limit &&
           <div className="load-more" onClick={() => setLimit(limit + 3)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>7-Arrow Up</title><g id="_7-Arrow_Up" data-name="7-Arrow Up"><path d="M3.41,2H16V0H1A1,1,0,0,0,0,1V17H2V3.41L30.29,31.71l1.41-1.41Z"/></g></svg><p>voir plus</p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>7-Arrow Up</title><g id="_7-Arrow_Up" data-name="7-Arrow Up"><path d="M3.41,2H16V0H1A1,1,0,0,0,0,1V17H2V3.41L30.29,31.71l1.41-1.41Z"/></g></svg></div>
        }
        
      </>
    );
  }