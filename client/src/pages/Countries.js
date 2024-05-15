import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import Admin from "./Admin";
import Header from "./Header";
import Dot from "./Dot";



export default function NotFound() {
    let id = useParams()
    const [article, setArticle] = useState(null);
    async function graball(){
      const response = await fetch(`/api/onecountry/${id.code}`,
              {
                method: "GET",
                headers: {
                  'Content-Type': 'application/json',
                }
              }
          );
      const data = await response.json()
      console.log()
      setTimeout(()=> {

        setArticle(data.content)
        
      }, 10)
  }

    
    useEffect(() => {
      graball()
    }, [])
    
    function scrollinto(x){
      var w = x.replace('.','');
      const y = w.split(" ");
      const z = document.querySelector(`.${y[0]}`)
      if(z){
        if(z.classList[0] === "partyCard"){
          z.scrollIntoView({behavior: 'smooth',block: 'center', inline: 'center'})
          z.classList.add('card-scroll')
          setTimeout(()=> {

            z.classList.remove('card-scroll')
            
          }, 1000)
        } else {
        z.scrollIntoView({behavior: 'smooth'})
        }
      }
    }

    function openDisplay(x){
      const pW = document.querySelector('.partyDisplay-wrapper')
      pW.style.display = "flex"
      setTimeout(function(){
        document.querySelector("body").style.overflowY= "hidden"
      }, 200);
      pW.querySelector('.party-name').innerHTML = x.name;
      pW.querySelector('.party-euro').innerHTML = "<b>Groupe politique européen : </b>" + x.groupeEuro;
      pW.querySelector('.party-history').innerHTML = x.histoire;
      pW.querySelector('.party-logo img').src = x.logo;
      pW.querySelector('.party-logo img').scrollIntoView({behavior: 'smooth',block: 'center', inline: 'center'})
      pW.querySelector('.party-logo img').alt = x.IDs[0];

      if(x.figH){
        x.figH.map((fH)=> {
          const wrapper = document.querySelector(".historical-figures");
          const card = document.createElement('div')
          card.classList.add("figure-card")
          card.style.backgroundImage = `url(${fH.img})`
          card.innerHTML = `<div class="figure-info">
              <h3>${fH.name}</h3>
              <span>${fH.job}</span>
            </div>`
          wrapper.appendChild(card)
        })
      }
      if(x.figA){
        x.figA.map((fA)=> {
          const wrapper = document.querySelector(".recent-figures");
          const card = document.createElement('div')
          card.classList.add("figure-card")
          card.style.backgroundImage = `url(${fA.img})`
          card.innerHTML = `<div class="figure-info">
              <h3>${fA.name}</h3>
              <span>${fA.job}</span>
            </div>`
          wrapper.appendChild(card)
        })
      }
    }

    function closeDisplay(){
      document.querySelector('.partyDisplay-wrapper').style.display = "none"
      document.querySelector("body").style.overflowY= ""
      const wrapper1 = document.querySelector(".recent-figures");
      const wrapper2 = document.querySelector(".historical-figures");
      wrapper1.innerHTML = ""
      wrapper2.innerHTML = ""
    }

    return (
      <>
        <Header></Header>
        <div className="country">
          {article ? (
            <>
            <div className="country-header">
                <div className="flag">
                  <img src={window.location.origin + '/img/flags/' + id.code.toLowerCase() + ".png"} alt="diewelt"></img>
                </div>
              <h1>{article.name}</h1>
            </div>
              <div className="table-of-contents">
                {article.data ? (
                  <>
                    {article.data.map((d) => {
                      return(<h3 onClick={() => {scrollinto(d)}}>{d}</h3>)
                    })}
                  </>
                ) : (
                  <></>
                )
                }
                <h3 onClick={() => {scrollinto("II - partis")}}>II - Partis politiques</h3>
              </div>
              <div className="votes I">
                <h1 className="country-title">Composition des Parlements</h1>
                {article.votes ? (
                  <>
                    {article.votes.map((v) => {
                  return(<div className="chamber">
                    <h2>{v.name} ({v.totalSeats} sièges)</h2>
                    {v.composition.map((w)=>{
                      return(
                      <div className="vote-display">
                        {w.gouvernement ? (
                          <><p className="parti" onClick={() => {scrollinto(w.name)}}>{w.name}<span>★</span></p></>
                        ) : (
                          <p className="parti" onClick={() => {scrollinto(w.name)}}>{w.name}</p>
                        )
                        }
                        <div className="dot-wrapper">
                          {Array.from({length: w.seats}).map(()=>{
                            return(<div className="dot" style={{backgroundColor: `${w.color}`}}></div>)
                          })}
                        </div>
                        <div className="seats-number"><p>{w.seats}</p> <p>{Math.round(w.seats / 348 * 1000) /10}%</p></div>
                      </div>)
                    })}
                  </div>)
                  })}
                  </>
                ) : (
                  <></>
                )
                }
                
              </div>
              <div className="partis II">
                <h1 className="country-title">Liste des différents partis politiques</h1>
                <div className="allparties">
                {article.partis ? (
                  <>
                    {article.partis.map((p) => {
                      return(<div className={"partyCard" + " " + p.IDs[0] + " " + p.IDs[1] + " " + p.IDs[2]} onClick={() => {openDisplay(p)}}>
                        <div className="partyLogo" style={{backgroundImage : `url(${p.logo})`}}>
                        </div>
                        <div className="partyData">
                          <h3>{p.name}</h3>
                          <h4>{p.IDs[0]}</h4>
                          <p>{p.orientation}</p>
                          <p>{p.mainIdeas}</p>
                        </div>
                        <p className="partyMore" >en savoir +</p>
                      </div>)
                    })}
                    <div className="partyDisplay-wrapper">
                      <span className="close-display" onClick={() => {closeDisplay()}}>X</span>
                      <div className="partyDisplay">
                        <div className="party-logo">
                          <img></img>
                        </div>
                        <h1 className="party-name"></h1>
                        <p className="party-euro"></p>
                        <b>Histoire :</b><p className="party-history"></p>
                        <b>Figures importantes dans l'histoire :</b>
                          <div className="important-figures historical-figures">
                          </div>
                        <b>Figures importantes actuelles :</b>
                        <div className="important-figures recent-figures">
                          </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <></>
                )
                }
                </div>
                
              </div>
            </>
          ) : (
            <p>à remplir</p>
          )}
        </div>
        <p style={{fontFamily: "rowan", marginLeft: "10px"}}>NA*: non affilié; Partis classés du plus à gauche en haut au plus à droite en bas; <span>★</span> : partis au gouvernement</p>
      </>
    );
  }