import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Admin from "./Admin";
import Header from "./Header";
import Dot from "./Dot";
import { useOutletContext } from "react-router-dom";
import { isMobile } from "react-device-detect";



export default function Countries() {
  const { allarticles, allcountries } = useOutletContext();
  let id = useParams()
  const [article, setArticle] = useState(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (allcountries) {
      setArticle(allcountries.filter(item => item.alpha2Code === `${id.code}`)[0])
    }

    if(article) {
      fetch('data/map.json'
      ,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
      )
        .then(function(response){
          return response.json();
        })
        .then(function(myJson) {
          const ms = myJson.filter(item => item.country === article.name)[0]
          if(ms){
            setMap(ms.svg);
          }
        });
    }
    
  })
  var mapSVG = ""
  if(map) {
    mapSVG = new DOMParser().parseFromString(map, "text/html")

    setTimeout(() => {
      if (document.querySelector(".mapsvgs")) {

      } else {
        document.querySelector(".map-svg-wrapper").appendChild(mapSVG.querySelector('.mapsvgs'))
      }
    }, 10)
  }

  var pol = ""
  var comm = ""
  if (article) {
    if (article.politics) {
      pol = new DOMParser().parseFromString(article.politics, "text/html")
      setTimeout(() => {
        if (document.querySelector(".fct")) {

        } else {
          document.querySelector(".fonctionnement").appendChild(pol.querySelector('.fct'))
        }
      }, 10)

    }
    if (article.actu) {
      comm = new DOMParser().parseFromString(article.actu, "text/html")
      setTimeout(() => {
        if (document.querySelector('.comm')) {

        } else {
          document.querySelector('.actu').appendChild(comm.querySelector('.comm'))
        }
      }, 10)
    }
  }


  function scrollinto(x) {
    var w = x.replace('.', '');
    const y = w.split(" ");
    const z = document.querySelector(`.${y[0]}`)
    if (z) {
      if (z.classList[0] === "partyCard") {
        z.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' })
        z.classList.add('card-scroll')
        setTimeout(() => {

          z.classList.remove('card-scroll')

        }, 1000)
      } else {
        z.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  function openDisplay(x) {
    <div className="percentage-parent">
      <h3>Sénat : <span>18 / 348 (+1)</span></h3>
      <div className="percentage-wrapper">
        < div className="percentage"></div>
      </div>
    </div>
    if (x.seats) {
      document.querySelector(".seats-data").innerHTML = ""
      x.seats.map((s) => {
        const wrapper = document.querySelector(".seats-data");
        const card = document.createElement('div')
        card.classList.add("percentage-parent")
        card.innerHTML = `<h3>${s.name} : <span>${s.seats}/${s.total}</span></h3>
                              <div class="percentage-wrapper">
                                <div class="percentage" style="width:${Math.round(s.seats / s.total * 1000) / 10}%"></div>
                              </div>`

        wrapper.appendChild(card)
      })
    } else {
      document.querySelector(".seats-data").innerHTML = ""

    }

    if (x.notes) {
      document.querySelector(".notes").style.display = "block"
      document.querySelector(".notes").innerHTML = "<h2>Notes personnelles</h2>"
      comm = new DOMParser().parseFromString(x.notes, "text/html")
      console.log(x.notes, comm.querySelector('.notes-content'))
      if (document.querySelector('.notes-content')) {
        
      } else {
        document.querySelector('.notes').appendChild(comm.querySelector('.notes-content'))
      }
    } else {
      document.querySelector(".notes").style.display = "none"
    }

    const pW = document.querySelector('.partyDisplay-wrapper')
    const pD = document.querySelector('.partyDisplay')
    const pC = document.querySelector('.close-display')
    pW.style.display = "flex"
    setTimeout(function () {
      document.querySelector("body").style.overflowY = "hidden"
      document.querySelector("body").style.marginRight = "0.5em"
      pW.style.backgroundColor = "rgb(0,0,0, 0.25)"
      pC.style.top = "45px"
      pD.style.opacity = "1"
    }, 200);
    pW.querySelector('.party-name').innerHTML = x.name;
    pW.querySelector('.party-logo img').src = x.logo;
    pW.querySelector('.party-logo img').scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' })
    pW.querySelector('.party-logo img').alt = x.IDs[0];

    if (x.fig) {
      x.fig.map((fH) => {
        const wrapper = document.querySelector(".important-figures");
        wrapper.style.display = "block"
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

    } else {
      document.querySelector(".important-figures").style.display = "none"
    }
  }

  function closeDisplay() {
    const pW = document.querySelector('.partyDisplay-wrapper')
    document.querySelector("body").style.overflowY = ""
    document.querySelector("body").style.marginRight = ""
    const pC = document.querySelector('.close-display')
    const wrapper1 = document.querySelector(".important-figures");
    wrapper1.innerHTML = ""
    const pD = document.querySelector('.partyDisplay')
    pW.style.backgroundColor = "rgb(0,0,0,0)"
    pD.style.opacity = "0"
    pC.style.top = "-100px"
    setTimeout(function () {
      pW.style.display = "none"
    }, 300);
  }

  

  return (
    <>
      <Header></Header>
      <div className="return" onClick={() => {
        window.location.replace(
          window.location.origin + '/#/maps',
        );
      }}><span>←</span> Retourner sur la carte</div>
      <div className="country">
        {article ? (
          <>
            <div className="country-header">
              <div className="flag">
                <img src={window.location.origin + '/img/flags/' + id.code.toLowerCase() + ".png"} alt="diewelt"></img>
              </div>
              <h1>{article.translations.fr}</h1>
            </div>
            {map ? (
<div className="national-map">
            <div className="map-svg-wrapper"></div>

              <div className="map-option-wrapper">
                <div id="cities" className="map-option">
                  <div className="rounded-toggle-wrapper" onClick={() => {
                    document.querySelector('#cities .rounded-toggle').classList.toggle("translate-toggle")
                    document.querySelector('.cities').classList.toggle("hide-cities")
                    document.querySelector('#cities .rounded-toggle-wrapper').classList.toggle("translate-toggle-wrapper")
                  }}>
                    <div className="rounded-toggle"></div>
                  </div>
                  <span>montrer les grandes villes</span>
                </div>
                <div id="regions" className="map-option">
                  <div className="rounded-toggle-wrapper" onClick={() => {
                    document.querySelector('#regions .rounded-toggle').classList.toggle("translate-toggle")
                    document.querySelector('.regions').classList.toggle("hide-cities")
                    document.querySelector('#regions .rounded-toggle-wrapper').classList.toggle("translate-toggle-wrapper")
                  }}>
                    <div className="rounded-toggle"></div>
                  </div>
                  <span>montrer les régions (ou équivalents du pays)</span>
                </div>
                <div id="regions-names" className="more-map-option">
                  <div className="angle">

                  </div>
                  <div className="rounded-toggle-wrapper" onClick={() => {
                    document.querySelector('#regions-names .rounded-toggle').classList.toggle("translate-toggle")
                    document.querySelector('.regions-name').classList.toggle("hide-cities")
                    document.querySelector('#regions-names .rounded-toggle-wrapper').classList.toggle("translate-toggle-wrapper")
                  }}>
                    <div className="rounded-toggle"></div>
                  </div>
                  <span>et les noms des régions</span>
                </div>
                <div id="water" className="map-option">
                  <div className="rounded-toggle-wrapper" onClick={() => {
                    document.querySelector('#water .rounded-toggle').classList.toggle("translate-toggle")
                    document.querySelector('.water').classList.toggle("hide-cities")
                    document.querySelector('#water .rounded-toggle-wrapper').classList.toggle("translate-toggle-wrapper")
                  }}>
                    <div className="rounded-toggle"></div>
                  </div>
                  <span>montrer les fleuves principaux</span>
                </div>
                <div id="water-names" className="more-map-option">
                  <div className="angle">

                  </div>
                  <div className="rounded-toggle-wrapper" onClick={() => {
                    document.querySelector('#water-names .rounded-toggle').classList.toggle("translate-toggle")
                    document.querySelector('.water-name').classList.toggle("hide-cities")
                    document.querySelector('#water-names .rounded-toggle-wrapper').classList.toggle("translate-toggle-wrapper")
                  }}>
                    <div className="rounded-toggle"></div>
                  </div>
                  <span>et les noms des fleuves</span>
                </div>
              </div>
            
              

            </div>
            ) : (
              <></>
            )

            }
            
            <div className="table-of-contents">
              {article.data ? (
                <>
                  {article.data.map((d) => {
                    return (<h3 onClick={() => { scrollinto(d) }}>{d}</h3>)
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
                    return (
                      <div className="head-State">
                        <div className="state-figure-pic" style={{ backgroundImage: `url(${e.img})` }}></div>
                        <div className="state-figure-data">
                          <h2>{e.name} <span>{e.job}</span></h2>
                          <p>{e.dates}</p>
                          <p onClick={() => { scrollinto(e.polShort) }}>Parti politique : {e.pol}</p>
                          <p>Date de naissance : {e.birth}</p>
                          <p>Ancienne(s) profession(s) : {e.oldJobs} </p>
                        </div>
                      </div>
                    )
                  })}
                  <div className="ministers">
                    {article.executif.ministers.map((i) => {
                      return (
                        <div className="minister">
                          <div className="left-minister">
                            <h2>{i.name}</h2>
                            <span>{i.job}</span>
                          </div>
                          <div className="right-minister">
                            <div className="minister-logo" style={{ backgroundImage: `url(${i.logo})` }}></div>
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
                  return (<div className="chamber">
                    <h2>{v.name} ({v.totalSeats} sièges)</h2>
                    {v.composition.map((w) => {
                      return (
                        <div className="vote-display">
                          {w.gouvernement ? (
                            <><p className="parti" onClick={() => { scrollinto(w.name) }}>{w.name}<span>★</span></p></>
                          ) : (
                            <p className="parti" onClick={() => { scrollinto(w.name) }}>{w.name}</p>
                          )
                          }
                          <div className="dot-wrapper">
                            {Array.from({ length: w.seats }).map(() => {
                              return (<div className="dot" style={{ backgroundColor: `${w.color}` }}></div>)
                            })}
                          </div>
                          <div className="seats-number"><p>{w.seats}</p> <p>{Math.round(w.seats / 348 * 1000) / 10}%</p></div>
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
                    return (<div className={"partyCard" + " " + p.IDs[0] + " " + p.IDs[1] + " " + p.IDs[2]} onClick={() => { openDisplay(p) }}>
                      <div className="partyLogo" style={{ backgroundImage: `url(${p.logo})` }}>
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
                    <div className="close-display" onClick={() => { closeDisplay() }}>
                      <h3>fermer</h3>
                    </div>
                    <div className="partyDisplay">
                      <div className="partyHeader">
                        <div className="party-logo">
                          <img></img>
                        </div>
                        <h1 className="party-name"></h1>
                      </div>
                      <div className="seats-data"></div>

                      <div className="notes">

                      </div>

                      <h2>Figures importantes</h2>
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
      <p style={{ fontFamily: "rowan", marginLeft: "10px" }}>NA*: non affilié; Partis classés du plus à gauche en haut au plus à droite en bas; <span>★</span> : partis au gouvernement</p>
    </>
  );
}