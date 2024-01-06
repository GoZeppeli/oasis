import { useEffect, useState } from "react";
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
        var prevA = document.querySelector('.preview a')
        if(prevH1){
          prevH1.innerHTML = `${x.title}`
        }
        if(prevIMG){
          prevIMG.style.backgroundImage = `url(${x.img}.jpg)`
        }
        if(prevA){
          prevA.href = `#/page/${x.link}`
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
      setArticles(data.content)
      preview({title : data.content[0].title, img: data.content[0].img, link : data.content[0]._id})

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
            <p>en cours de chargement...</p>
          )}
          </div> 
          <div className="preview">
            <div className="img"></div>
            <h1></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <a><span>lire l'article</span></a></p>
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
            <p>no!</p>
          )}
          </div>  
          <div className="preview">
            <div className="img"></div>
            <h1></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <a><span>lire l'article</span></a></p>
          </div>
          </>
        )}
        </div>
      </>
    );
  }