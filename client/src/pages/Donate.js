import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import Admin from "./Admin";
import Header from "./Header";



export default function Donate() {

    return (
      <>
        <Header  bottom="10px" right="390px"></Header>
        <p className="donate-text">Actuellement le site web est hébergé gratuitement sur Render. Cependant cela entraine une limitation du nombre de visites du site et des ralentissements lors des chargements de l'interface. A l'aide de dons, il sera possible de payer un meilleur serveur et donc d'améliorer la qualité du site en permettant, par exemple, de créer un compte, d'enregistrer des articles, de rajouter des commentaires... Pour cela, nous avons besoin d'aide c'est pourquoi une page <a target="_blank" href="https://www.buymeacoffee.com/oasis.media" style={{"color": "var(--red-bordeaux)"}}><u>Buy Me A Coffee</u></a> est ouverte pour permettre à chacun de faire un don s'il le peut. Merci à tous et bonne lecture ! </p>
        <a target="_blank" href="https://www.buymeacoffee.com/oasis.media">
          <div className="buy-me">
            <h1>📖</h1>
            <h2>Buy me a book</h2>
          </div>
        </a>
      </>
    );
  }