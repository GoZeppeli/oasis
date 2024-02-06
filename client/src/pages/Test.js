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

    
    // <span class="scroll"></span>
    // <span class="scrollback"> ↩</span>
      

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
        <h1 className="page-title"><svg id="page-flower" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 316.7 326.17"><defs></defs><path class="cls-1" d="M412.22,216.4c-7.85-26.84-31.41-45.83-61.47-53.39-7.31-41.08-33.47-72.92-68.58-78-30.37-4.39-60,12.36-79.49,41.13-30.52-8.1-60.87-2.65-80.8,17.59-24.59,25-26.39,65.51-8,102.31-19.85,33.53-21.5,71.81-.74,98.24s58.73,34,96.21,22.38c22,32.05,55.86,49.67,88.52,42.08,36.74-8.54,60.81-46.36,62.19-91.5C400.58,294.17,423.08,253.52,412.22,216.4Z" transform="translate(-98.24 -84.33)"/></svg>La polarisation sociale et politique, une menace pour les démocraties et les sociétés actuelles</h1>
        <div className="font-size">
            <h3 className="begin">A</h3>
            <input type="range" onChange={() => inputRange()} className="slider"></input>
            <h3 className="end">A</h3>
        </div>
        <div id="display">
            		<div class="page-body">
                  <p id="ecd3e342-1f33-46d6-866f-eaf1d1727608" class="">Le 16 janvier 2024, le <em>Forum Économique Mondial de Davos</em> a publié comme chaque année son rapport sur les Risques Mondiaux<span class="scroll"></span>. Parmi les plus grands périls à court terme, la <strong>polarisation sociale et politique</strong> a été classée 3e menace mondiale. Montée des extrêmes, populisme, exposition sélective sur les réseaux sociaux, division sociale, crise des institutions politiques… La polarisation est partout et continue de se développer.</p><p id="a675eda0-0823-4503-9bc2-6154b47949bd" class="">Nous aborderons dans cet article les caractéristiques et les dangers de ce concept pour les démocraties et les sociétés de notre monde contemporain.</p><p id="81dc2a58-569c-40cf-92b4-52e355f1761c" class="">Ce terme désigne le <em>processus dans une démocratie ou d&#x27;une société, par lequel la population tend à se diviser entre deux pôles structurants la vie politique et les visions du monde, et qui pousse une partie de plus en plus significative de cette population à se diriger davantage vers les points de vue les plus radicaux ou les partis extrêmes au détriment du centre.</em></p><p id="ba53ea41-6337-4329-8544-0f026780976d" class="">En France selon un baromètre nommé l’Indice Dalton imaginé par des chercheurs de l&#x27;université <em>Charles III de Madrid</em><span class="scroll"></span>, la France est le pays le plus polarisé de l’UE. Mais pour quelles raisons notre pays en particulier est-il polarisé à ce point ?</p><p id="786036c4-12cd-4dd8-8357-1b89c32c3460" class="">La polarisation politique et sociale a plusieurs origines, la première est la faible plasticité des opinions portées par un groupe. La fermeture d’esprit, les conceptions obtuses et le refus du compromis sont des facteurs psychologiques de la polarisation. On retrouve notamment ce cas dans les débats culturels comme la question de l’IVG ou l’immigration, avec la distinction de pensée du “eux” et du “nous” comme le notait le philosophe <em>Bart Brandsma</em><span class="scroll"></span>. Nos émotions sont impliquées et une dualité de camps s&#x27;instaure, la partie adhérente à “la cause que JE soutiens” et les “autres”, les opposants.</p><p id="d093367a-60b5-4a4a-8f38-65ea2cb81b0a" class="">De plus, la polarisation est aussi due aux discours populistes (démagogie fondée sur la critique du système et de ses représentants, souvent des élites) des partis et de leurs leaders politiques. En effet ceux-ci sont faciles à entendre et aisément modelables, ils nous “caressent dans le sens du poil”. On remarque également très souvent une diabolisation de l&#x27;opposant politique et l&#x27;incitation à la haine d&#x27;un ennemi du parti que l&#x27;on soutient. Prenons l&#x27;exemple édifiant du discours exaltant du 6 février 2021 de Donald Trump qui a conduit à l’assaut du Capitole par ses partisans<span class="scroll"></span>.</p><p id="b42eaa9c-95aa-4f3e-a147-b9d8f1dab7fa" class="">Enfin, une des causes majeures de la polarisation est liée sans aucun doute à l’ère de la médiatisation que nous vivons. Au sein des médias et des réseaux sociaux, un phénomène d’exposition sélective contribue très fortement à la fragmentation des opinions et des individus. Cette exposition sélective consiste à se voir proposer du contenu avec lequel l&#x27;individu est en accord. Le contenu en question est souvent sans nuance, porteur d’informations courtes aux messages forts, régulièrement non sourcés et erronés.</p><p id="fa04e882-18e0-4358-8edf-bc5e334e6f4c" class="">Ces contenus mis en avant du fait de leur sensationnalisme ont un effet d&#x27;enclave pour ceux qui les écoutent et poussent encore plus vers une forte polarisation, en raison du biais de confirmation (mécanisme mental qui consiste à privilégier les informations confirmant ses idées préconçues) ainsi qu’à la difficulté de supporter la dissonance cognitive qui surviendrait en cas de contenu en inadéquation avec notre cohérence personnelle (notion évoquée dès 1957 par le psychologue <em>Leon Fistinger</em>). Ainsi, avec l’explosion des réseaux sociaux, l’exposition sélective renforcée par les algorithmes de recommandation accentue la polarisation sociale et politique.</p><p id="03863ad2-cea2-43aa-855f-e18680e3c0f3" class="">Ensuite, ce processus de polarisation a de multiples conséquences néfastes sur la société.</p><p id="e095c003-5348-4285-856e-6d2c33b8df11" class="">Tout d’abord, le clivage sur les deux bords politiques opposés et souvent extrêmes dans leurs positions peuvent impacter directement les organes politiques jusqu’à leur efficacité de décision. En effet, la polarisation politique s’accompagne souvent d’une montée des extrêmes, c’est-à-dire une installation de plus en plus marquée du soutien aux idéologies politiques radicales.</p><p id="fbfdb1d9-44c4-4ec0-8189-b53016821243" class="">Des idées extrêmes se frayent alors un chemin grâce à un phénomène de banalisation, ce qui peut menacer les droits et libertés des individus. Par exemple, sur les 3 dernières élections présidentielles françaises, l’extrême droite a augmenté de 12 points de pourcentage ses suffrages obtenus au premier tour . </p><p id="1e2fc065-2fe9-4203-8582-ea47d1e6c3e7" class="">En outre, cette montée des extrêmes a de nombreux autres effets sur la société : du fait de la radicalité qui augmente, la violence et l’activisme extrême augmentent également (les manifestations et autres formes d&#x27;engagement peuvent déborder) et la capacité de décision parlementaire est minée par le manque de consensus.</p><p id="b94e3386-d8ef-4579-b97b-519af8d314c2" class="">D’autre part, la polarisation a d’autres conséquences directes telles que la binarisation des prises de point de vue politique :nous avons vu un exemple récent avec le conflit entre Israël et le Hamas<span class="scroll"></span> : l’extrême-droite soutient Israël sous prétexte de défense face à <em>l’islamisme </em>dans le contexte de <em>guerre civilisationnelle,</em> face à l’extrême-gauche se tenant aux côtés des Palestiniens comme l’indique le choix des mots « <em>apartheid, génocide</em> » voire en allant jusqu’à réfuter la nature terroriste du Hamas.</p><p id="6d6a0a4f-fd4b-4e93-901a-89d11ab0e732" class="">Nous constatons aussi une hystérisation du débat politique et démocratique, c&#x27;est-à-dire des emportements excessifs et obsessionnels lors des discussions, l’accentuation des inégalités, la fragilisation de la cohésion sociale et le renforcement de la défiance politique (à titre d’illustration, la menace pour le projet européen des bords politiques extrêmes).</p><p id="c36a9652-5b1c-4beb-b893-ee4d4bc36659" class="">Pour finir, un problème séparation des pouvoirs apparaît lorsque la a polarisation pousse les politiques à interférer et remettre en cause l’indépendance de la justice en l’instrumentalisant, ce qui marque une sérieuse entorse aux principes démocratiques : le gouvernement <em>Maduro</em> au Vénézuela a utilisé la justice dans une logique de <em>lawfare </em>(stratégie de guerre juridique) afin d’écarter l&#x27;opposition de <em>Maria Corina Machado</em><span class="scroll"></span>.</p><p id="26d4622a-1b92-4602-a4fe-94908fe11f33" class="">Nous conclurons enfin avec une remarque inquiétante sur le fait ce phénomène de polarisation politique est auto-entretenu en cercle vicieux : il alimente la crise sociale et s’en nourrit, avec des conséquences qui empirent la polarisation comme par exemple en sapant la confiance du public envers les institutions politiques, alimentant encore plus la crise sociétale.</p><p id="133b5eb5-a153-4943-8c23-6030dcb4d209" class="">Il est donc urgent de prendre conscience du danger et d’agir pour lutter contre ce processus, de manière individuelle en travaillant sur son ouverture d’esprit et sa capacité de nuance, et collectivement en tentant d’imiter les bribes de solutions disponibles, comme la décentralisation inédite opérée par le Kenya<span class="scroll"></span> durant cette décennie, où la plus grande autonomie des régions a aidé à la réconciliation progressive des populations.</p>
                </div>
            <div className="credentials">
            <div className="credentials-wrapper">
                <svg className="slide-arrow" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44.66 28.18"><defs></defs><path class="cls-1" d="M229.73,263.64c6.11-1.61,13.17-2.49,17.58-7.47a17.17,17.17,0,0,0,3.88-7.39c.59-2.51.86-5.77-.5-8.09a3.89,3.89,0,0,0-6.86,0,7.84,7.84,0,0,0-.11,7.35c2.58,5.44,9.73,6.35,14.94,4.82,6.22-1.83,11.31-8.17,8.9-14.83-.65-1.8-3.55-1-2.89.8,1.54,4.25-1,8.44-4.82,10.36-3.59,1.81-9.05,2.16-12.18-.75a5.54,5.54,0,0,1-1.75-4.89c.1-.58.49-1.9,1.19-2,1.12-.19,1.42,1.76,1.48,2.48a13.71,13.71,0,0,1-4.15,10.79,15,15,0,0,1-6.64,3.56c-2.94.84-5.91,1.57-8.87,2.34a1.51,1.51,0,0,0,.8,2.9Z" transform="translate(-227.87 -235.51)"/><path class="cls-1" d="M261,244a9.2,9.2,0,0,0,3.55-2.93,10.35,10.35,0,0,0,.87-2c0-.06.05-.13.08-.19s-.16.36,0,.07a2.38,2.38,0,0,1,.2-.39,2.12,2.12,0,0,1,.12-.2c.15-.24-.24.27-.05.06s.48-.42.09-.13a1.59,1.59,0,0,0,.69-.9,1.5,1.5,0,0,0-.15-1.15,1.52,1.52,0,0,0-2-.54,4.46,4.46,0,0,0-1.49,1.84c-.16.38-.31.76-.46,1.15l-.16.42c.13-.42.08-.17,0-.07l-.11.22a3.26,3.26,0,0,1-.24.4c-.19.28.12-.13,0,0l-.14.16a4.31,4.31,0,0,1-.37.37l-.2.17-.06.06.09-.07a2.63,2.63,0,0,0-.4.28l-.42.26-.93.53a1.51,1.51,0,0,0-.54,2A1.54,1.54,0,0,0,261,244Z" transform="translate(-227.87 -235.51)"/><path class="cls-1" d="M264.38,238.42c.5.21,1,.52,1.44.77a9,9,0,0,0,1.78.7,9.34,9.34,0,0,0,3.83.19,1.5,1.5,0,0,0,.89-.69,1.57,1.57,0,0,0,.16-1.16,1.59,1.59,0,0,0-.69-.9,1.79,1.79,0,0,0-1.16-.15c.46-.06,0,0-.11,0l-.35,0c-.26,0-.51,0-.77,0l-.3,0c.23,0,.26,0,.1,0l-.2,0c-.24,0-.47-.1-.7-.17a5.3,5.3,0,0,1-.67-.23c-.15-.06-.13-.05.07,0l-.18-.09-.27-.14c-.46-.24-.88-.52-1.36-.72a1.59,1.59,0,0,0-1.15-.15,1.49,1.49,0,0,0-.9.69,1.52,1.52,0,0,0,.54,2Z" transform="translate(-227.87 -235.51)"/></svg>
                <h3>Timothé Dime</h3>
            </div>
          </div>
        </div>

          <div id="refs">
            <p class="scrollback-wrapper">
              <span class="footnote-number"></span>
              <a target="_blank" href="https://www3.weforum.org/docs/WEF_The_Global_Risks_Report_2024.pdf">World Economic Forum Global Risks</a>
              <span class="scrollback"> ↩</span>
            </p>
            <p class="scrollback-wrapper">
              <span class="footnote-number"></span>
              <a target="_blank" href="https://eupoliticalbarometer.uc3m.es/dashboard">Baromètre politique de l'UE | Université Carlos III Madrid</a>
              <span class="scrollback"> ↩</span>
            </p>
            <p class="scrollback-wrapper">
              <span class="footnote-number"></span>
              <a target="_blank" href="https://behorizon.org/polarisation-understanding-the-dynamics-of-us-versus-them/">Pensée du « eux et du nous » de Bart Brandsma - Be Horizon</a>
              <span class="scrollback"> ↩</span>
            </p>
            <p class="scrollback-wrapper">
              <span class="footnote-number"></span>
              <a target="_blank" href="https://theconversation.com/comment-le-discours-populiste-de-donald-trump-a-conduit-a-linsurrection-de-ses-troupes-153002">Discours populiste de Trump - The Conversation </a>
              <span class="scrollback"> ↩</span>
            </p>
            <p class="scrollback-wrapper">
              <span class="footnote-number"></span>
              <a target="_blank" href="https://www.lemonde.fr/idees/article/2023/10/26/israel-hamas-les-dangers-de-la-polarisation-politique-francaise_6196596_3232.html">Israël-Hamas : les dangers de la polarisation politique française — Le Monde</a>
              <span class="scrollback"> ↩</span>
            </p>
            <p class="scrollback-wrapper">
              <span class="footnote-number"></span>
              <a target="_blank" href="https://aoc.media/analyse/2024/01/23/le-retour-de-la-polarisation-politique-au-venezuela/">Le retour de la polarisation politique au Vénézuela - AOC Media</a>
              <span class="scrollback"> ↩</span>
            </p>
            <p class="scrollback-wrapper">
              <span class="footnote-number"></span>
              <a target="_blank" href="https://www.radiofrance.fr/franceculture/podcasts/le-tour-du-monde-des-idees/la-polarisation-croissante-du-debat-politique-fragilise-t-elle-la-democratie-1908200">Populisme et décentralisation kenyane - France Culture</a>
              <span class="scrollback"> ↩</span>
            </p>
            <p class="scrollback-wrapper">
              <span class="footnote-number"></span>
              <a target="_blank" href="https://fr.wikipedia.org/wiki/Polarisation_politique">Polarisation politique - Wikipédia</a>
            </p>
            <p class="scrollback-wrapper">
              <span class="footnote-number"></span>
              <a target="_blank" href="https://www.cairn.info/revue-francaise-de-science-politique-2003-6-page-941.htm">Revue française de science politique - Cairn</a>
            </p>
            <p class="scrollback-wrapper">
              <span class="footnote-number"></span>
              <a target="_blank" href="https://www.lemonde.fr/idees/article/2023/06/16/la-polarisation-fievre-des-societes-democratiques_6177875_3232.html">La polarisation, fièvre des sociétés démocratiques — Le Monde</a>
            </p>
            <p class="scrollback-wrapper">
              <span class="footnote-number"></span>
              <a target="_blank" href="https://www.institutmontaigne.org/expressions/polarisation-politique-et-radicalisation-des-debats-la-balle-aux-peripheries">Polarisation politique et radicalisation des débats : la balle aux périphéries ? - Institut Montaigne</a>
            </p>
          </div>
      </>
    );
  }