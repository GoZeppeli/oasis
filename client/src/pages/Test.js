import React, { useState, useEffect,  useRef } from "react";
import {useParams} from "react-router-dom";
import Admin from "./Admin";
import Header from "./Header";



export default function Test() {

  

  function scrollinto(x){
    var number = x.innerHTML.replace("[", "").replace("]", "")
    var foot = document.querySelector(`#foot${number}`)
    if(foot){
        foot.scrollIntoView({behavior: 'smooth'})
    }
  }

  function scrollback(x){
    var number = x.id.replace("foot", "")
    var note = document.querySelector(`#note${number}`)
    if(note){
        note.scrollIntoView({behavior: 'smooth'})
    }
  }

  setTimeout(()=>{
    var spans = [...document.querySelectorAll('span.scroll')]
    var backs = [...document.querySelectorAll('p.scrollback-wrapper')]
    spans.map((s, index) => {
      var number = index + 1
      s.id = `note${number}`
      s.innerHTML = `[${number}] `
      s.addEventListener("click", () => {
        scrollinto(s)
      })
    })

    backs.map((b, index) => {
      var number = index + 1
      b.id = `foot${number}`
      b.firstChild.innerHTML = `[${number}] `
      if(b.querySelector("span.scrollback")){
        b.querySelector("span.scrollback").addEventListener("click", () => {
        scrollback(b)
        })
      }
      
    })
  }, 2)

  function inputRange(){
    var val = document.querySelector(".slider").value
    var disP = [...document.querySelectorAll("#display p")]
    var disH1 = [...document.querySelectorAll("#display h1")]
    var disBQ = [...document.querySelectorAll("#display blockquote")]
    var disH2 = [...document.querySelectorAll("#display h2")]
    var disFOOT = [...document.querySelectorAll("#display span.scroll")]
    var val50 = val - 50
    if(val50 >= 0){
        var addP = val50 * (1/100) * 24 + 24
        disP.map((dp) => {
            dp.style.fontSize = `${addP}px`
        })
        var addH1 = val50 * (1/100) * 45 + 45
        disH1.map((dh1) => {
            dh1.style.fontSize = `${addH1}px`
        })
        var addBQ = val50 * (1/100) * 20 + 20
        disBQ.map((dbq) => {
            dbq.style.fontSize = `${addBQ}px`
        })
        var addH2 = val50 * (1/100) * 25 + 25
        disH2.map((dh2) => {
            dh2.style.fontSize = `${addH2}px`
        })
    } else {
        var addP = val50 * (1/150)* 24 + 24
        disP.map((dp) => {
            dp.style.fontSize = `${addP}px`
        })
        var addH1 = val50 * (1/150) * 45 + 45
        disH1.map((dh1) => {
            dh1.style.fontSize = `${addH1}px`
        })
        var addBQ = val50 * (1/150) * 20 + 20
        disBQ.map((dbq) => {
            dbq.style.fontSize = `${addBQ}px`
        })
        var addH2 = val50 * (1/150) * 25 + 25
        disH2.map((dh2) => {
            dh2.style.fontSize = `${addH2}px`
        })
    }

    if(window.innerWidth <= 600){
        var arr = [{'name': "p", "px": "24"}, {'name': "h1", "px": "45"}, {'name': "blockquote", "px": "20"}, {'name': "h2", "px": "25"}]
        arr.map((a) => {
            if(document.querySelector(`#display ${a.name}`)){
                window['dis' + a.name] = [...document.querySelectorAll(`#display ${a.name}`)];
                window['style' + a.name] = getComputedStyle(document.querySelector(`#display ${a.name}`)).fontSize
                window['nopx' + a.name] = window['style' + a.name].replace("px", "")
                window['dis' + a.name].map((d) => {
                    d.style.fontSize = `${window['nopx' + a.name] - (a.px /2)}px` 
                })
            }
        })
    }

    
    
      

    disFOOT.map((df) => {
        var base = getComputedStyle(document.querySelector(`#display p`)).fontSize
        var nopx = base.replace("px", "")
        if((nopx - 8) >= 8) {
            df.style.fontSize = `${nopx - 8}px`
        } else {
            df.style.fontSize = `${nopx - 2}px`
        }
    })
}
  

    return (
      <>  
        <h1 className="page-title"><svg id="page-flower" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 316.7 326.17"><defs></defs><path class="cls-1" d="M412.22,216.4c-7.85-26.84-31.41-45.83-61.47-53.39-7.31-41.08-33.47-72.92-68.58-78-30.37-4.39-60,12.36-79.49,41.13-30.52-8.1-60.87-2.65-80.8,17.59-24.59,25-26.39,65.51-8,102.31-19.85,33.53-21.5,71.81-.74,98.24s58.73,34,96.21,22.38c22,32.05,55.86,49.67,88.52,42.08,36.74-8.54,60.81-46.36,62.19-91.5C400.58,294.17,423.08,253.52,412.22,216.4Z" transform="translate(-98.24 -84.33)"/></svg> Un aspect de l’oppression nazie souvent oublié</h1>
        <div className="font-size">
            <h3 className="begin">A</h3>
            <input type="range" onChange={() => inputRange()} className="slider"></input>
            <h3 className="end">A</h3>
        </div>
        <div id="display">
            <div class="page-body">
              <p id="d17565ac-6f4a-4f72-8864-39544f940549" class="">Cet évènement historique tragique constituant le cœur de la Seconde Guerre mondiale qui alimente nos mémoires encore aujourd’hui reste tout de même centré sur le génocide des juifs. L’atrocité du processus d’extermination des juifs n’est en aucun cas remise en cause, il conviendrait néanmoins de se pencher sur un autre aspect de cette doctrine nazie. Mais d’abord à quoi correspond-elle ? Le nazisme désigne l’idéologie totalitaire et expansionniste, accompagnée d’un racisme et d’un antisémitisme virulent, au pouvoir de 1933 à 1945. Ce régime politique a marqué l’Histoire, il peut être plus connu sous les noms de « Troisième Reich » (Troisième empire) ou « Allemagne nazie ». L’Allemagne a-t-elle donc été complètement convertie au régime nazi de manière radicale ? Les Allemands ont-ils tous été nazis ?</p><p id="6ef7e1ff-19cc-4574-85fc-8e3a0c46faaa" class="">Il s’agit donc ici d’étudier la résistance allemande face à la propagation du nazisme.</p><p id="b85c42be-1e04-48ce-aa23-6e6311871373" class=""><em>« L’Église n&#x27;est réellement Église, que quand elle existe pour ceux qui n&#x27;en font pas partie » </em>affirme Dietrich Bonhoeffer. Ce pasteur allemand s’est plongé dans la religion afin de participer à la résistance de son pays auquel il tenait tant. En effet, selon son point de vue, l’idéologie nazie constituait une grande menace pour les chrétiens mais également pour l’Allemagne et finalement pour toute l’Humanité. Bonhoeffer va donc rejoindre l’Eglise confessante, une série d’églises protestantes s’opposant activement au régime naissant dans les années 1930. </p><figure id="68eb181d-338a-4813-8e29-564643c0eba0" class="image"><img src="https://imgur.com/tpyZi6R.png"/></figure><p id="b13496fe-0899-45e9-8e5a-4846d3ce1b05" class="">Ce dernier alimente l’esprit des fidèles et des protestants sur l’ampleur que pourrait prendre ces changements. Afin d’exemplifier et de clarifier notre propos, nous pouvons nous appuyer sur une action de la part de la religion dans cette résistance : le 5 novembre 1934, grâce au combat de Bonhoeffer, les Eglises allemandes de Londres se détachent des Eglises du Reich. Cela symboliserait donc le commencement d’une rébellion mais également l’arrêt d’un soutien forcé. L’Eglise a effectivement participer grandement à l’opposition de l’extermination des handicapés mentaux ou physiques.</p><p id="431a7180-3741-4c11-8abf-9bcd5351b767" class="">De plus, cette résistance s’est propagée sur toutes les générations, affectant ainsi les plus expérimentés comme les nouveaux arrivants dans un monde de violence et de haine. La volonté de grandir selon sa propre volonté et d’agir a frappé la jeunesse allemande. Même si la plupart de ces enfants ou adolescents étaient embrigadés dans les Jeunesses Hitlériennes, les <em>Hitlerjugend</em>, d’autres ont décidé de mener leur vie contre le Reich. Nous pouvons prendre l’exemple de la création, en 1942, d’un groupe d’étudiants résistants surnommé « La Rose Blanche ». Ce groupe fut formé par la famille Scholl et soutenu par leur professeur Kurt Huber. Leurs missions étaient principalement la rédaction et la distribution de tracts antinazis au sein de la ville de Munich notamment. Ils dénoncent la violence de la politique nazie ainsi que celle de la guerre. Nous pouvons prendre appui notamment sur le 5ème tract prônant le fédéralisme allemand : <em>« Prouvez par l&#x27;action que vous pensez autrement ! Déchirez le manteau d&#x27;indifférence dont vous avez recouvert votre cœur ! Décidez-vous avant qu&#x27;il ne soit trop tard ». </em>Il constitue un véritable appel à une coopération entre les peuples européens permettant de fonder un nouvel ordre. </p><figure id="917612e2-b5dc-415f-80cc-fde7fbba4a3d" class="image"><img src="https://imgur.com/UOXOd1k.png"/></figure><p id="8f2c1911-35b4-405d-bc64-0828f6061e18" class="">Ce tract fut publié dans des milliers d’exemplaires à travers le Sud de l’Allemagne et l’Autriche. Lorsque le groupe sera anéanti par la Gestapo, l’aviation anglaise larguera des nouveaux autres milliers de tracts sur le territoire allemand, révélant ainsi l’œuvre de la résistance. Le mouvement de la Rose Blanche a réussi à instaurer un climat d’espoir et de croyance au retour de la paix en Europe. Inge Scholl nous le décrit parfaitement dans son œuvre <span style={{"border-bottom":"0.05em solid"}}>La Rose Blanche</span><em> : « Autre chose nous séduisit, qui revêtait pour nous une puissance mystérieuse : la jeunesse défilant en rangs serrés, drapeaux flottants, au son des roulements de tambour et des chants. Cette communauté n’avait-elle pas quelque chose d’invincible ? ». </em>Nous en déduisons donc la fascination que ces mouvements généraient chez les jeunes allemands.</p><p id="0c0171d7-ce94-4630-acaa-8dc94050405b" class="">Ce qui constitua le cœur de la résistance allemande fut principalement des petites actions de différents mouvements que l’on pourrait comparer à celles de la résistance française sous l’occupation allemande. L’amour de leur pays est une valeur que les Allemands ont défendue coûte que coûte, malgré leurs nombreuses humiliations et malgré la honte des crimes du régime nazi. Nous devons retenir qu’une partie du peuple a gardé la foi en la paix dans le monde grâce à l’Eglise mais également grâce à leur nature et leur humanité. Le peuple allemand s’est dévoué à une cause, c’est cela qui fait sa grandeur et sa force.</p>
            </div>
            <div className="credentials">
            <div className="credentials-wrapper">
                <svg className="slide-arrow" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44.66 28.18"><defs></defs><path class="cls-1" d="M229.73,263.64c6.11-1.61,13.17-2.49,17.58-7.47a17.17,17.17,0,0,0,3.88-7.39c.59-2.51.86-5.77-.5-8.09a3.89,3.89,0,0,0-6.86,0,7.84,7.84,0,0,0-.11,7.35c2.58,5.44,9.73,6.35,14.94,4.82,6.22-1.83,11.31-8.17,8.9-14.83-.65-1.8-3.55-1-2.89.8,1.54,4.25-1,8.44-4.82,10.36-3.59,1.81-9.05,2.16-12.18-.75a5.54,5.54,0,0,1-1.75-4.89c.1-.58.49-1.9,1.19-2,1.12-.19,1.42,1.76,1.48,2.48a13.71,13.71,0,0,1-4.15,10.79,15,15,0,0,1-6.64,3.56c-2.94.84-5.91,1.57-8.87,2.34a1.51,1.51,0,0,0,.8,2.9Z" transform="translate(-227.87 -235.51)"/><path class="cls-1" d="M261,244a9.2,9.2,0,0,0,3.55-2.93,10.35,10.35,0,0,0,.87-2c0-.06.05-.13.08-.19s-.16.36,0,.07a2.38,2.38,0,0,1,.2-.39,2.12,2.12,0,0,1,.12-.2c.15-.24-.24.27-.05.06s.48-.42.09-.13a1.59,1.59,0,0,0,.69-.9,1.5,1.5,0,0,0-.15-1.15,1.52,1.52,0,0,0-2-.54,4.46,4.46,0,0,0-1.49,1.84c-.16.38-.31.76-.46,1.15l-.16.42c.13-.42.08-.17,0-.07l-.11.22a3.26,3.26,0,0,1-.24.4c-.19.28.12-.13,0,0l-.14.16a4.31,4.31,0,0,1-.37.37l-.2.17-.06.06.09-.07a2.63,2.63,0,0,0-.4.28l-.42.26-.93.53a1.51,1.51,0,0,0-.54,2A1.54,1.54,0,0,0,261,244Z" transform="translate(-227.87 -235.51)"/><path class="cls-1" d="M264.38,238.42c.5.21,1,.52,1.44.77a9,9,0,0,0,1.78.7,9.34,9.34,0,0,0,3.83.19,1.5,1.5,0,0,0,.89-.69,1.57,1.57,0,0,0,.16-1.16,1.59,1.59,0,0,0-.69-.9,1.79,1.79,0,0,0-1.16-.15c.46-.06,0,0-.11,0l-.35,0c-.26,0-.51,0-.77,0l-.3,0c.23,0,.26,0,.1,0l-.2,0c-.24,0-.47-.1-.7-.17a5.3,5.3,0,0,1-.67-.23c-.15-.06-.13-.05.07,0l-.18-.09-.27-.14c-.46-.24-.88-.52-1.36-.72a1.59,1.59,0,0,0-1.15-.15,1.49,1.49,0,0,0-.9.69,1.52,1.52,0,0,0,.54,2Z" transform="translate(-227.87 -235.51)"/></svg>
                <h3>Lili Arnaud</h3>
            </div>
        </div>
          <div>
            <p class="scrollback-wrapper">
              <span class="footnote-number"></span>
              <a target="_blank" href="https://laviedesidees.fr/-Livres-etudes-">Recensions - La Vie des idées (laviedesidees.fr)</a>
            </p>
            <p class="scrollback-wrapper">
              <span class="footnote-number"></span>
              <a target="_blank" href="https://news.un.org/fr/story/2019/02/1035522">Holocauste : « J’ai survécu à tout cela avec de la chance » | ONU Info (un.org)</a>
            </p>
            <p class="scrollback-wrapper">
              <span class="footnote-number"></span>
              <a target="_blank" href="https://encyclopedia.ushmm.org/tags/fr/tag/anti-nazi-opposition">opposition anti-nazie | Encyclopédie multimédia de la Shoah (ushmm.org)</a>
            </p>
            <p class="scrollback-wrapper">
              <span class="footnote-number"></span>
              <a target="_blank" href="https://fr.wikipedia.org/wiki/Nazisme">Nazisme — Wikipédia (wikipedia.org)</a>
            </p>
            <p class="scrollback-wrapper">
              <span class="footnote-number"></span>
              <a target="_blank" href="https://fr.wikipedia.org/wiki/La_Rose_blanche">La Rose blanche — Wikipédia (wikipedia.org)</a>
            </p>
            <p class="scrollback-wrapper">
              <span class="footnote-number"></span>
              <a target="_blank" href="https://museeprotestant.org/notice/dietrich-bonhoeffer-1906-1945/">Dietrich Bonhœffer (1906-1945) | Musée protestant (museeprotestant.org)</a>
            </p>
          </div>
        </div>
      </>
    );
  }