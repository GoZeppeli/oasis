import Menu from "../Menu";
import React, { useState, useEffect, useRef } from "react";
import {Outlet} from "react-router-dom";
export default function Layout() {
  const [countries, setCountries] = useState(null);
  const [articles, setArticles] = useState(null);

  
  useEffect(()=>{
    fetch('data/articles.json'
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
          setArticles(myJson);
        });

        fetch('data/countries.json'
          , {
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
          }
        )
          .then(function (response) {
            return response.json();
          })
          .then(function (myJson) {

            setCountries(myJson)
          });
  },[])
  
  return (
    <main>
      <Menu />
      <Outlet context={{allarticles: articles, allcountries: countries}}/>
    </main>
  );
}