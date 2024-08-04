import Menu from "../Menu";
import React, { useState, useEffect, useRef } from "react";
import {Outlet} from "react-router-dom";
export default function Layout() {
  const [countries, setCountries] = useState(null);
  const [articles, setArticles] = useState(null);
  const [europe, setEurope] = useState(null);
  const [map, setMap] = useState(null);

  
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

          fetch('data/europe.json'
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
  
              setEurope(myJson)
            });

            fetch('data/map.json'
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
                  setMap(myJson);
              });
  },[])
  
  return (
    <main>
      <Menu />
      <Outlet context={{allarticles: articles, allcountries: countries, alleurope: europe, allmaps: map}}/>
    </main>
  );
}