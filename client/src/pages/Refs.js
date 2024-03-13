import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import Admin from "./Admin";
import Header from "./Header";



export default function Refs() {
    function openRef(x){
        var element = document.querySelector(`#${x}`)
        element.querySelector(".toggle-arrow").style.display = "none"
        element.querySelector("p").style.display = "block";
        element.querySelector("#minus").style.display = "block";
    }
    function closeRef(x){
        x.target.style.display = ""
        x.target.parentElement.nextSibling.style.display = "none";
        x.target.previousSibling.style.display = "block";
    }
    return (
      <>
        <Header bottom="170px" right="580px"></Header>
        <div className="intro">
            <p>sur cette page, vous retrouverez toutes nos recommandations de lecture : des articles de presse, des romans, ou des essais... mais aussi des recommandations de vidéos, de podcasts, de personnalités intéressantes sur une multitude de sujets.</p>
        </div>
        <article>
            <div className="allrefs-wrapper">
                <div className="references" id="écologie">
                    <div className="title-references">
                        <h1>écologie</h1>
                        <div className="arrow-results-wrapper"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>7-Arrow Up</title><g id="_7-Arrow_Up" data-name="7-Arrow Up"><path d="M3.41,2H16V0H1A1,1,0,0,0,0,1V17H2V3.41L30.29,31.71l1.41-1.41Z"/></g></svg></div></div>
                    </div>
                    <div className="toggle-wrapper" id="energie_et_équité-Ivan_ILLICH">
                        <div className="top-of-toggle">
                            <div className="toggle-arrow"  onClick={()=>openRef("energie_et_équité-Ivan_ILLICH")}>+</div>
                            <div className="toggle-arrow" id="minus" onClick={(e)=>closeRef(e)}>-</div>
                            <h5  onClick={()=>openRef("energie_et_équité-Ivan_ILLICH")}>Energie et équité, Ivan Illich (1973)</h5>
                        </div>
                        <p>Texte précurseur qui pose les fondamentaux de l'écologie et dénonce la surconsommation d'énergie, qui se fait au détriment de l'équité, provoquant une dégradation des systèmes politiques, sociaux et culturels et l'apparition des inégalités. Dans Énergie et équité, Illich se livre à une analyse des transports motorisés comme d'un service qui, loin de se substituer à la consommation de marchandises, provoque au contraire une dépendance accrue à leur égard et n'apparaît en réalité que comme un songe creux, une aporie, un sac de néant. Dans ce texte visionnaire il établit les fondements de ce que sera la pensée écologique moderne.Penseur de l'écologie politique, Ivan Illich met en garde ses contemporains contre la crise de l'énergie qui les menace et contre les dérives de la productivité galopante, incontrôlable et dévastatrice pour les structures sociales. Reproduit à l'échelle planétaire, ce modèle énergivore constitue une spirale infernale et aliénante tant sur le plan social que sur le plan environnemental.</p>
                    </div>
                </div>
                <div className="references" id="colonialisme">
                    <div className="title-references">
                        <h1>colonialisme</h1>
                        <div className="arrow-results-wrapper"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>7-Arrow Up</title><g id="_7-Arrow_Up" data-name="7-Arrow Up"><path d="M3.41,2H16V0H1A1,1,0,0,0,0,1V17H2V3.41L30.29,31.71l1.41-1.41Z"/></g></svg></div></div>
                    </div>
                    <div className="toggle-wrapper" id="damnés_de_la_terre-FANON">
                        <div className="top-of-toggle">
                            <div className="toggle-arrow"  onClick={()=>openRef("damnés_de_la_terre-FANON")}>+</div>
                            <div className="toggle-arrow" id="minus" onClick={(e)=>closeRef(e)}>-</div>
                            <h5  onClick={()=>openRef("damnés_de_la_terre-FANON")}>Les Damnés de la Terre, Frantz Fanon (1961)</h5>
                        </div>
                        <p>Publié en pleine guerre d’Algérie, le livre du psychiatre antillais, Frantz Fanon, est devenu aujourd’hui un livre référence pour la pensée anticoloniale. Il y fait une analyse profonde de ce que sont le colonialisme et les luttes de libération. Préfacé par Jean-Paul Sartre, le livre nous aide  à comprendre les tenants et aboutissant des luttes anticoloniales du XXème siècle mais aussi les ressorts actuels de l’impérialisme occidental. En effet, l’antillais décrit que le colonialisme continue même après que les colons sont partis du pays. Il écrit : “<i>après la libération nationale, on [le peuple, ndlr] le convie à lutter contre la misère, l’analphabétisme, le sous développement. La lutte, affirme-t-on continue.</i>” Ici Fanon parle bien de lutte car il insiste bien sur le fait qu’il n’y a pas de lutte anticoloniale pacifique. Cette analyse de l’utilisation de la violence a par exemple inspiré Bobby Seale à fonder le Black Panther Party. Une phrase du texte m’a particulièrement marquée et a soulignée l’humanisme de Fanon : “<i>Ce qu’il [le tiers monde, ndlr] attend de ceux qui l’ont maintenu en esclavage pendant des siècles, c’est qu’ils l’aident à <b>réhabiliter l’homme, à faire triompher l’homme partout, une fois pour toutes</b></i>.”</p>
                    </div>
                    <div className="toggle-wrapper" id="discours-sur-le-colonialisme_Aimé-Césaire">
                        <div className="top-of-toggle">
                            <div className="toggle-arrow"  onClick={()=>openRef("discours-sur-le-colonialisme_Aimé-Césaire")}>+</div>
                            <div className="toggle-arrow" id="minus" onClick={(e)=>closeRef(e)}>-</div>
                            <h5  onClick={()=>openRef("discours-sur-le-colonialisme_Aimé-Césaire")}>Discours sur le colonialisme, Aimé Césaire (1950)</h5>
                        </div>
                        <p>...en rédaction</p>
                    </div>
                </div>
            </div>
        </article>
      </>
    );
  }