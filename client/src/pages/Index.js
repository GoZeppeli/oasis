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
        var span = document.createElement("span");
        var inside = document.createTextNode("lire l'article");
        span.appendChild(inside);
        a.appendChild(span);
        var prevP = document.querySelector('.preview p')
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
        <Header bottom="350px" right="320px"></Header>
        <div className="all">
        <div className="intro">
          <p>oasis.media est un site regroupant des essais qui touchent des sujets variés et aussi des livres tombés dans le domaine public. Pour avoir plus d'informations sur le site, rendez vous sur la page à propos. Pour découvrir nos articles, allez sur le menu et cliquez sur la page articles. Enfin pour nous supporter et nous permettre de payer un service d'hébérgement, rendez vous sur la page don. Merci et bonne lecture !</p>
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
              <div className="boxten" id={index} onClick={() => preview({title : a.title,img: a.img, link: a._id})}>
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
          <div className="preview">
            <div className="img"></div>
            <h1></h1>
            <p><a><span>lire l'article</span></a></p>
          </div>
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
              <div className="boxten" id={index} onMouseEnter={() => preview({title : a.title,img: a.img, link: a._id})}>
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