import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import Admin from "./Admin";
import Header from "./Header";



export default function About() {

    return (
      <>
        <Header  bottom="95px" right="470px"></Header>
        <div style={{width: "60%", margin: "100px auto", textAlign: "justify", fontFamily: "generalSans", fontSize: "16px", fontWeight: "500", color: "var(--red-bordeaux)", display: 'flex', flexDirection: "column", alignItems: "center"}}>
          <p>Oasis est l'aboutissement d'un long projet qui a duré plus d'un an. Avec comme simple idée de créer une plateforme de partage de mes différentes passions, j'ai appris pendant la phase de développement à designer un site et à le coder. Ce site, réalisé seul, me permet aujourd'hui de publier des articles sur des sujets variés ou des livres et essais qui m'ont marqué,mais aussi de publier des articles écrits par d'autres passionées et curieux. De plus, je l'espère Oasis ne se limitera pas à quelques articles écrits mais pourra héberger des podcasts ou des vidéos. Ainsi, n'hésitez pas à vous manifester sur les réseaux d'Oasis pour nous faire parvenir vos idées de projets. </p>
          <p>Ce projet a connu différentes étapes et refontes totales. Naviguant entre difficultés techniques et choix esthétiques, le site a vu sa forme changer à plusieurs réprises. Au début, le nom en devait même pas être Oasis mais Die Welt car je souhaitais orienter ce projet autour de cartes du monde.</p>
          <figure>
            <img src={window.location.origin + '/img/home-dw.png'} alt="diewelt" style={{maxWidth: "500px"}}></img>
            <figcaption style={{opacity: "0.7", fontSize: "12px", color: "var(--red-red)"}}>Page d'accueil du premier design du site</figcaption>
          </figure>
          <p>Plusieurs ébauches de site ont vu le jour puis après quelques mois, j'ai réalisé que le nom et le thème des cartes m'imposaient trop de contraintes sur les thèmes abordés. C'est pourquoi je me suis tournée vers le nom Oasis.</p> 
          <figure>
            <img src={window.location.origin + '/img/home-grunge.png'} alt="diewelt" style={{maxWidth: "500px"}}></img>
            <figcaption style={{opacity: "0.7", fontSize: "12px", color: "var(--red-red)"}}>Page d'accueil du deuxième design du site</figcaption>
          </figure>
          <p>Une oasis est un endroit paisible dans un désert hostile. De la même manière, la liberté d'apprendre est, à mon sens, le seul moyen d'échapper à des déterminants contraignants et de parvenir à, selon les mots de Frantz Fanon, "faire triompher l'homme de partout". Fanon rappelle bien que pour parvenir à cette idéal il faut que les "citoyens [aient] la possibilité de parler, de s'exprimer, d'inventer". Ainsi éduquons-nous entre nous, suscitons la curiosité de l'autre, car "la recherched de la vérité est une affaire collective".</p> 
          <p>Finalement, l'objectif de ce site peut être résumé en quelques mots : "la culture ou la mort".</p>
          <h3>Qui suis-je ?</h3><p>Je m'appelle Célian Chauveau, j'ai 17 ans et suis actuellement en Terminale ay lycée Notre Dame de Saint-Germain-en-Laye. Passionné par les maths, je me suis motivé à apprendre à coder notamment en Javascript. Grâce à ces compétences et ma curiosité pour l'histoire, la politique ou la philosphie, je me suis décidé en octobre 2022 à coder entièrement ce site qui est enfin publié en décembre 2023.</p>
        </div>
      </>
    );
  }