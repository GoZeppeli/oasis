import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import Admin from "./Admin";
import Header from "./Header";



export default function Refs() {
    function openRef(x){
        x.target.style.display = "none"
        x.target.nextSibling.nextSibling.nextSibling.style.display = "block";
        x.target.nextSibling.style.display = "block";
        setTimeout(()=> {

            x.target.parentElement.style.height = "fit-content";
        }, 2)
    }
    function closeRef(x){
        x.target.style.display = "none"
        x.target.nextSibling.nextSibling.style.display = "none";
        x.target.previousSibling.style.display = "block";
        x.target.parentElement.style.height = "30px";
    }
    return (
      <>
        <Header bottom="170px" right="580px"></Header>
        <div className="intro">
            <p>sur cette page, vous retrouverez toutes nos recommandations de lecture : des articles de presse, des romans, ou des essais... mais aussi des recommandations de vidéos, de podcasts, de personnalités intéressantes sur une multitude de sujet.</p>
        </div>
        <article>
            <div className="allrefs-wrapper">
                <div className="references" id="écologie">
                    <div className="title-references">
                        <h1>écologie</h1>
                        <div className="arrow-results-wrapper"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>7-Arrow Up</title><g id="_7-Arrow_Up" data-name="7-Arrow Up"><path d="M3.41,2H16V0H1A1,1,0,0,0,0,1V17H2V3.41L30.29,31.71l1.41-1.41Z"/></g></svg></div></div>
                    </div>
                    <div className="toggle-wrapper">
                        <div className="toggle-arrow" onClick={(e)=>openRef(e)}>+</div>
                        <div className="toggle-arrow" id="minus" onClick={(e)=>closeRef(e)}>-</div>
                        <h5>Energie et équité, Ivan Illich (1973)</h5>
                        <p>Texte précurseur qui pose les fondamentaux de l'écologie et dénonce la surconsommation d'énergie qui se fait au détriment de l'équité provoquant une dégradation des systèmes politiques, sociaux et culturels et l'apparition des inégalités. Dans Énergie et équité, Illich se livre à une analyse des transports motorisés comme d'un service qui, loin de se substituer à la consommation de marchandises, provoque au contraire une dépendance accrue à leur égard et n'apparaît en réalité que comme un songe creux, une aporie, un sac de néant. Dans ce texte visionnaire il établit les fondements de ce que sera la pensée écologique moderne.Penseur de l'écologie politique, Ivan Illich met en garde ses contemporains contre la crise de l'énergie qui les menace et contre les dérives de la productivité galopante, incontrôlable et dévastatrice pour les structures sociales. Reproduit à l'échelle planétaire, ce modèle énergivore constitue une spirale infernale et aliénante tant sur le plan social que sur le plan environnemental.</p>
                    </div>
                </div>
            </div>
        </article>
      </>
    );
  }