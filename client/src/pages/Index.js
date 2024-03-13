import { createElement, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import {isMobile} from 'react-device-detect';

export default function Index() {
    const [articles, setArticles] = useState(null);
    var doc = ""
    window.scrollTo(0, 0)
    function preview(x) {
        var prevH1 = document.querySelector('.preview h1')
        var prevIMG = document.querySelector('.preview .img')
        var a = document.createElement("a");
        a.href = `#/page/${x.link}`
        var span = document.createElement("span");
        var inside = document.createTextNode("lire l'article");
        span.appendChild(inside);
        a.appendChild(span);
        var prevP = document.querySelector('.preview p')
        var prev = document.querySelector('.preview')
        if(prevH1){
          prevH1.innerHTML = `${x.title}`
        }
        if(prevIMG){
          prevIMG.style.backgroundImage = `url(${x.img}.jpg)`
        }
        if(prevP){
          prevP.innerHTML = `${x.description} `
          prevP.appendChild(a)
        }
    }

    async function grab(){
      const response = await fetch(`/api/grab10`,
                {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                },
                }
      );
      const data = await response.json()
      preview({title : data.content[0].title, img: data.content[0].img, link : data.content[0]._id, description: data.content[0].description})
      setArticles(data.content)
    }
    useEffect( () => {
      grab()
    }, [])

    
    function clickLeft() {
      let container = document.querySelector('.lasttenarticles');
      var width = window.innerWidth
        container.scrollTo({
          left:container.scrollLeft - (width * 0.75),
          top: 0,
          behavior: "smooth"
        });
		}

		function clickRight() {
      let container = document.querySelector('.lasttenarticles');
      var width = window.innerWidth
			container.scrollTo({
				left:container.scrollLeft + (width * 0.75),
				top: 0,
				behavior: "smooth"
			});
		}

    const arrI = Array.from(Array(10).keys())
    


    return (
      <>  
        <Header bottom="340px" right="420px"></Header>
        <div className="all">
        <div className="intro">
          <p>Politique, littérature, philosophie, histoire... oasis a l'objectif d'agréger une large palette de thèmes. C'est cela l'idée directrice de cette plateforme : créer un espace de partage de savoir. En plus de permettre aux lecteurs de s'informer sur différents sujets <a href="/#/browse">(voir tous nos articles)</a>, de lui ouvrir des portes de connaissances, oasis espère permettre à chacun de s'exprimer. Autrement dit chacun peut écrire un article sur le sujet qui le passionne de la poésie aux énergies renouvelables en passant par la Seconde Guerre Mondiale. Rendez-vous sur la page <a href="/#/about-us">à propos</a> pour plus d'informations et bonne lecture à tous !  </p>
        </div>
        <div className="headerIndex"><h1>articles récents.</h1></div>
        {isMobile ? (
          <>
            <div className="lasttenarticles" >
            <div className="slide">
              <div id="leftArrow" onClick={() => {clickLeft()}}>
                <svg className="LR-arrows" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g id="_7-Arrow_Up" data-name="7-Arrow Up"><path d="M3.41,2H16V0H1A1,1,0,0,0,0,1V17H2V3.41L30.29,31.71l1.41-1.41Z"/></g></svg>
              </div>
              <div id="rightArrow" onClick={() => {clickRight()}}>
                <svg className="LR-arrows" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g id="_7-Arrow_Up" data-name="7-Arrow Up"><path d="M3.41,2H16V0H1A1,1,0,0,0,0,1V17H2V3.41L30.29,31.71l1.41-1.41Z"/></g></svg>
              </div>
            </div>
          {articles ? (
            articles.map((a, index) => {
              return(
                <div>
              <div className="boxten" id={index} onClick={() => preview({title : a.title,img: a.img, link: a._id, description : a.description})}>
                <span>{index + 1}.</span>
                <p id={index} >{a.title}</p>
              </div>
              </div>
              )
            })
            
          ) : (
            <div className="grey-index">
              <div className="boxten">
                <span>1.</span>
                <p>vive sankara !</p>
              </div>
            </div>
          )}
          </div> 
          <a><div className="preview">
            <div className="img"></div>
            <h1></h1>
            <p><span>lire l'article</span></p>
          </div></a>
          </>
        ) : (
          <>
              <div className="lasttenarticles" >
            <div className="slide">
              <div id="leftArrow" onClick={() => {clickLeft()}}>
                <svg className="LR-arrows" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g id="_7-Arrow_Up" data-name="7-Arrow Up"><path d="M3.41,2H16V0H1A1,1,0,0,0,0,1V17H2V3.41L30.29,31.71l1.41-1.41Z"/></g></svg>
              </div>
              <div id="rightArrow" onClick={() => {clickRight()}}>
                <svg className="LR-arrows" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g id="_7-Arrow_Up" data-name="7-Arrow Up"><path d="M3.41,2H16V0H1A1,1,0,0,0,0,1V17H2V3.41L30.29,31.71l1.41-1.41Z"/></g></svg>
              </div>
            </div>
          {articles ? (
            articles.map((a, index) => {
              return(
              <Link to={`/page/${a._id}`}>
              <div className="boxten" id={index} onMouseEnter={() => preview({title : a.title,img: a.img, link: a._id, description : a.description})}>
                <span>{index + 1}.</span>
                <p id={index} >{a.title}</p>
              </div>
              </Link>
              )
            })
            
          ) : (
            arrI.map(() => {
              return (
                <div className="grey-index">
                  <div className="boxten">
                    <span>1.</span>
                    <p>vive sankara !</p>
                  </div>
                </div>
              )
            })
          )}
          </div>  
          <div className="preview">
            <div className="img"></div>
            <h1></h1>
            <p></p>
          </div>
          </>
        )}
        </div>
      </>
    );
  }