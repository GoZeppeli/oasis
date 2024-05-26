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

    var pol= ""
    var comm=""
    if(article){
      if(article.politics){
        pol = new DOMParser().parseFromString(article.politics, "text/html")
        setTimeout(()=> {
          if(document.querySelector(".fct")){
             
          } else {
            document.querySelector(".fonctionnement").appendChild(pol.querySelector('.fct'))
          }
        }, 10)
        
      } 
      if(article.actu){
        comm = new DOMParser().parseFromString(article.actu, "text/html")
        setTimeout(()=> {
          if(document.querySelector('.comm')){

          } else {
            document.querySelector('.actu').appendChild(comm.querySelector('.comm'))
          }
        }, 10)
      } 
    }


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
      const pD = document.querySelector('.partyDisplay')
      const pC = document.querySelector('.close-display')
      pW.style.display = "flex"
      setTimeout(function(){
        document.querySelector("body").style.overflowY= "hidden"
        document.querySelector("body").style.marginRight= "0.5em"
        pW.style.backgroundColor = "rgb(0,0,0, 0.25)"
        pC.style.top = "45px"
        pD.style.opacity = "1"
      }, 200);
      pW.querySelector('.party-name').innerHTML = x.name;
      pW.querySelector('.party-euro').innerHTML = x.groupeEuro;
      pW.querySelector('.bottomEuro p').innerHTML = x.infoEuro;
      pW.querySelector('.party-history').innerHTML = x.histoire;
      pW.querySelector('.euro-logo').style.backgroundImage = `url(${x.logoEuro})`;
      pW.querySelector('.party-logo img').src = x.logo;
      pW.querySelector('.party-logo img').scrollIntoView({behavior: 'smooth',block: 'center', inline: 'center'})
      pW.querySelector('.party-logo img').alt = x.IDs[0];

      if(x.fig){
        x.fig.map((fH)=> {
          const wrapper = document.querySelector(".important-figures");
          const card = document.createElement('div')
          card.classList.add("figure-card")
          card.innerHTML = `<div class="left-figure">
          <h2>${fH.name}</h2>
          <span>${fH.job}</span>
        </div>
        <div class="right-figure">
        <span>${fH.date}</span>
        </div>
        <div class="figure-img-wrapper"><div class="figure-img" style='background-image: url(${fH.img})'></div></div>`
            
          wrapper.appendChild(card)
        })
      }
    }

    function closeDisplay(){
      const pW = document.querySelector('.partyDisplay-wrapper')
      document.querySelector("body").style.overflowY= ""
      document.querySelector("body").style.marginRight= ""
      const pC = document.querySelector('.close-display')
      const wrapper1 = document.querySelector(".important-figures");
      wrapper1.innerHTML = ""
      const pD = document.querySelector('.partyDisplay')
      pW.style.backgroundColor = "rgb(0,0,0,0)"
        pD.style.opacity = "0"
        pC.style.top = "-100px"
      setTimeout(function(){
        pW.style.display = "none" 
      }, 300);
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
              </div>
              

                {article.politics ? (
                  <div className="fonctionnement country-div I">
                    <h1 className="country-title">Régime politique</h1>
                  </div>
                ) : (
                  <></>
                )}

                {article.executif ? (
                  <div className="gouvernement country-div II">
                  <h1 className="country-title">Exécutif actuel</h1>
                  <div className="display-government">
                    {article.executif.head.map((e) => {
                      return(
                        <div className="head-State">
                          <div className="state-figure-pic" style={{backgroundImage : `url(${e.img})`}}></div>
                          <div className="state-figure-data">
                            <h2>{e.name} <span>{e.job}</span></h2>
                            <p>{e.dates}</p>
                            <p onClick={() => {scrollinto(e.polShort)}}>Parti politique : {e.pol}</p>
                            <p>Date de naissance : {e.birth}</p>
                            <p>Ancienne(s) profession(s) : {e.oldJobs} </p>
                          </div>  
                        </div>
                      )
                      })}
                    <div className="ministers">
                    {article.executif.ministers.map((i) => {
                      return(
                        <div className="minister">
                          <div className="left-minister">
                            <h2>{i.name}</h2>
                            <span>{i.job}</span>
                          </div>
                          <div className="right-minister">
                            <div className="minister-logo" style={{backgroundImage : `url(${i.logo})`}}></div>
                          </div>
                      </div>
                      )
                      })}
                     
                    </div>
                  </div>
                </div>
                ) : (
                  <>
                  </>
                )}

                {article.votes ? (
                  <div className="votes III country-div">
                    <h1 className="country-title">Composition des Parlements</h1>

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
                  </div>
                ) : (
                  <></>
                )
                }
                
                {article.partis ? (
                  <div className="partis IV country-div">
                    <h1 className="country-title">Liste des différents partis politiques</h1>
                    <div className="allparties">
                      
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
                          <div className="close-display" onClick={() => {closeDisplay()}}>
                            <h3>fermer</h3>
                          </div>
                          <div className="partyDisplay">
                            <div className="partyHeader">
                              <div className="party-logo">
                                <img></img>
                              </div>
                              <h1 className="party-name"></h1>
                            </div>
                            <h3>Histoire</h3><p className="party-history"></p>
                            <h3>Idées principales</h3><p className="party-ideas"></p>
                            <h3>Union Européenne</h3>
                            <div className="euroWrapper">
                              <div className="topEuro">
                                <p className="party-euro"></p>
                                <div className="euro-logo"></div>
                              </div>
                              <div className="bottomEuro">
                                <p>L'Alliance progressiste des socialistes et démocrates au Parlement européen (S&D) est un groupe politique du Parlement européen annoncé le 12 juin 2009, après les élections européennes de 2009 par Poul Nyrup Rasmussen, le président du Parti socialiste européen (PSE). Il résulte de la volonté d'intégrer le Parti démocrate italien au sein du groupe du PSE et d'éviter ainsi son éparpillement entre deux groupes comme pendant la législature 2004-2009, durant laquelle les élus de l'Olivier faisaient partie soit de l'ADLE pour les anciens députés de la Marguerite, soit du groupe PSE pour les anciens membres des Démocrates de gauche et des Socialistes démocrates italiens. Depuis juillet 2019, il est présidé par Iratxe García.</p>
                              </div>
                            </div>

                            <h3>Figures importantes</h3>
                              <div className="important-figures">
                              </div>
                              
                          </div>
                        </div>
                      
                    </div>
                 </div>
                ) : (
                  <></>
                )
                }

                {article.actu ? (
                  <div className="actu V country-div">
                    <h1 className="country-title">Commentaire sur l'actualité</h1>
                  </div>
                ) : (
                  <></>
                )}
            </>
          ) : (
            <p>à remplir</p>
          )}
        </div>
        <p style={{fontFamily: "rowan", marginLeft: "10px"}}>NA*: non affilié; Partis classés du plus à gauche en haut au plus à droite en bas; <span>★</span> : partis au gouvernement</p>
      </>
    );
  }