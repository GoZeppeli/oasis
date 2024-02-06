import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import Header from "./Header";
import { Link } from "react-router-dom";

export default function Pages() {
    const [article, setArticle] = useState(null);
    const [reco, setReco] = useState(null);
    let id = useParams()
    const string = JSON.stringify(id)
    const parsed = JSON.parse(string)
    const params = parsed.id

    function scrollinto(x){
        console.log(x)
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

    async function grab(){
        const response = await fetch(`/api/grabOne/${params}`,
                {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                }
                }
            );
        const data = await response.json()
        setArticle(data.content)


        const response2 = await fetch(`/api/grab3`,
                    {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    }
        );
        const data2 = await response2.json()
        setReco(data2.content)
    }

    useEffect( () => {
        grab()
        window.scrollTo(0, 0)
    }, [id])

    var doc = ''
    var refs = ""
    if(article){
        doc = new DOMParser().parseFromString(article.content, "text/html");
        refs = new DOMParser().parseFromString(article.references, "text/html");
        document.querySelector("#display").innerHTML = ""
        document.querySelector("#display").classList.remove("animation")
        document.querySelector(".page-title").classList.remove("animation")
        document.querySelector("#display").appendChild(doc.querySelector('.page-body'))
        document.querySelector(".credentials-wrapper h3").innerHTML = `${article.author}`
        document.querySelector(".page-title").innerHTML = `<svg id="page-flower" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 316.7 326.17"><defs></defs><path class="cls-1" d="M412.22,216.4c-7.85-26.84-31.41-45.83-61.47-53.39-7.31-41.08-33.47-72.92-68.58-78-30.37-4.39-60,12.36-79.49,41.13-30.52-8.1-60.87-2.65-80.8,17.59-24.59,25-26.39,65.51-8,102.31-19.85,33.53-21.5,71.81-.74,98.24s58.73,34,96.21,22.38c22,32.05,55.86,49.67,88.52,42.08,36.74-8.54,60.81-46.36,62.19-91.5C400.58,294.17,423.08,253.52,412.22,216.4Z" transform="translate(-98.24 -84.33)"/></svg> ${article.title}`
        if(article.references){
            document.querySelector("#refs").innerHTML = ""
            document.querySelector('#refs').appendChild(refs.querySelector('div'))
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
                    })}
                })
              }, 200)
        }
    }

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
        <Header></Header>
        <h1 className="page-title animation"><span style={{"visibility": "hidden"}}>blah</span></h1>
        <div className="font-size">
            <h3 className="begin">A</h3>
            <input type="range" onChange={() => inputRange()} className="slider"></input>
            <h3 className="end">A</h3>
        </div>
        <div id="display" className="animation"><p  style={{"visibility": "hidden"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum felis mauris, et suscipit mi hendrerit vitae. Curabitur dignissim felis non lacus pulvinar feugiat. Praesent pharetra eros at pellentesque tempor. Ut aliquam ex quis lacus malesuada venenatis. Sed ex ligula, faucibus ut metus ut, ultrices molestie libero. Donec semper, ipsum nec imperdiet ornare, leo leo tristique dui, eget vestibulum mi sapien at sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla tempus odio, et porta risus placerat at. Nulla facilisis, augue in lacinia lacinia, dui neque fringilla augue, et interdum sapien diam et arcu. Suspendisse ut diam in ante luctus efficitur eget in dolor. Sed vitae nulla in felis elementum ornare sit amet nec lectus. Praesent maximus libero nulla, vel congue justo tempor posuere. Proin pulvinar magna vel sem sollicitudin vulputate. Sed non sagittis nibh.

Proin a mi libero. Ut mattis dictum ex, nec sagittis sem aliquam et. Morbi fermentum molestie dictum. Maecenas suscipit risus sed tincidunt accumsan. Etiam purus nunc, bibendum ornare elit nec, consectetur suscipit ex. Mauris ut orci id felis fringilla rhoncus sit amet eu felis. Morbi tincidunt vitae tortor vel blandit. Maecenas in metus lobortis, ultrices sem id, dictum tortor. Morbi ipsum lacus, porttitor a libero eu, sagittis tincidunt mi. Aliquam volutpat nulla pellentesque augue lobortis bibendum. Nunc rutrum velit nec bibendum pharetra. Nullam at dui sit amet sem cursus lobortis. Nam tristique, ipsum in scelerisque dictum, lacus metus faucibus libero, id semper felis nisi at ligula.

Morbi tempor risus nisl, vel auctor tellus suscipit in. Donec ornare purus eu erat eleifend, a vehicula urna interdum. Donec vestibulum sodales tortor, nec placerat nibh gravida eu. Nunc vel elit consequat, tempus justo eu, cursus sapien. Cras id euismod arcu, et cursus metus. Sed a tortor a sapien scelerisque ullamcorper. Fusce lobortis nisl et eros pharetra, ut cursus augue consequat. Donec tempor fringilla turpis, et ultricies enim condimentum eu. Pellentesque venenatis gravida mi, nec consequat lectus congue eget. Nunc ornare justo ut velit congue, ut imperdiet ante fermentum. In hac habitasse platea dictumst. Donec fermentum felis sit amet tortor tristique volutpat. Morbi ornare varius magna id lobortis. Aenean at massa fermentum, tincidunt odio ac, aliquet mi. Pellentesque cursus mauris id tincidunt elementum.

Maecenas lacinia felis sit amet ante tristique, vel semper ante bibendum. Phasellus in commodo lectus. Aenean at lorem iaculis lectus rhoncus porta sit amet in tortor. Nullam ut rhoncus elit, nec aliquet elit. Morbi tortor tortor, eleifend sed tellus non, rutrum ultricies nibh. Duis vestibulum congue imperdiet. Suspendisse potenti. Sed vitae dui leo.

Praesent porttitor arcu lorem, id dignissim nisl egestas et. Aliquam cursus felis ut nisi scelerisque consectetur. Etiam laoreet posuere ullamcorper. Vivamus eget sem tortor. Cras pretium sagittis neque vestibulum dignissim. Praesent vel ipsum feugiat, malesuada neque in, tincidunt ligula. Integer laoreet ligula id dolor consectetur tincidunt. Aenean vel aliquet justo. Suspendisse nec consequat magna. Nunc elementum facilisis odio at malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum felis mauris, et suscipit mi hendrerit vitae. Curabitur dignissim felis non lacus pulvinar feugiat. Praesent pharetra eros at pellentesque tempor. Ut aliquam ex quis lacus malesuada venenatis. Sed ex ligula, faucibus ut metus ut, ultrices molestie libero. Donec semper, ipsum nec imperdiet ornare, leo leo tristique dui, eget vestibulum mi sapien at sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla tempus odio, et porta risus placerat at. Nulla facilisis, augue in lacinia lacinia, dui neque fringilla augue, et interdum sapien diam et arcu. Suspendisse ut diam in ante luctus efficitur eget in dolor. Sed vitae nulla in felis elementum ornare sit amet nec lectus. Praesent maximus libero nulla, vel congue justo tempor posuere. Proin pulvinar magna vel sem sollicitudin vulputate. Sed non sagittis nibh.

Proin a mi libero. Ut mattis dictum ex, nec sagittis sem aliquam et. Morbi fermentum molestie dictum. Maecenas suscipit risus sed tincidunt accumsan. Etiam purus nunc, bibendum ornare elit nec, consectetur suscipit ex. Mauris ut orci id felis fringilla rhoncus sit amet eu felis. Morbi tincidunt vitae tortor vel blandit. Maecenas in metus lobortis, ultrices sem id, dictum tortor. Morbi ipsum lacus, porttitor a libero eu, sagittis tincidunt mi. Aliquam volutpat nulla pellentesque augue lobortis bibendum. Nunc rutrum velit nec bibendum pharetra. Nullam at dui sit amet sem cursus lobortis. Nam tristique, ipsum in scelerisque dictum, lacus metus faucibus libero, id semper felis nisi at ligula.

Morbi tempor risus nisl, vel auctor tellus suscipit in. Donec ornare purus eu erat eleifend, a vehicula urna interdum. Donec vestibulum sodales tortor, nec placerat nibh gravida eu. Nunc vel elit consequat, tempus justo eu, cursus sapien. Cras id euismod arcu, et cursus metus. Sed a tortor a sapien scelerisque ullamcorper. Fusce lobortis nisl et eros pharetra, ut cursus augue consequat. Donec tempor fringilla turpis, et ultricies enim condimentum eu. Pellentesque venenatis gravida mi, nec consequat lectus congue eget. Nunc ornare justo ut velit congue, ut imperdiet ante fermentum. In hac habitasse platea dictumst. Donec fermentum felis sit amet tortor tristique volutpat. Morbi ornare varius magna id lobortis. Aenean at massa fermentum, tincidunt odio ac, aliquet mi. Pellentesque cursus mauris id tincidunt elementum.

Maecenas lacinia felis sit amet ante tristique, vel semper ante bibendum. Phasellus in commodo lectus. Aenean at lorem iaculis lectus rhoncus porta sit amet in tortor. Nullam ut rhoncus elit, nec aliquet elit. Morbi tortor tortor, eleifend sed tellus non, rutrum ultricies nibh. Duis vestibulum congue imperdiet. Suspendisse potenti. Sed vitae dui leo.

Praesent porttitor arcu lorem, id dignissim nisl egestas et. Aliquam cursus felis ut nisi scelerisque consectetur. Etiam laoreet posuere ullamcorper. Vivamus eget sem tortor. Cras pretium sagittis neque vestibulum dignissim. Praesent vel ipsum feugiat, malesuada neque in, tincidunt ligula. Integer laoreet ligula id dolor consectetur tincidunt. Aenean vel aliquet justo. Suspendisse nec consequat magna. Nunc elementum facilisis odio at malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum felis mauris, et suscipit mi hendrerit vitae. Curabitur dignissim felis non lacus pulvinar feugiat. Praesent pharetra eros at pellentesque tempor. Ut aliquam ex quis lacus malesuada venenatis. Sed ex ligula, faucibus ut metus ut, ultrices molestie libero. Donec semper, ipsum nec imperdiet ornare, leo leo tristique dui, eget vestibulum mi sapien at sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla tempus odio, et porta risus placerat at. Nulla facilisis, augue in lacinia lacinia, dui neque fringilla augue, et interdum sapien diam et arcu. Suspendisse ut diam in ante luctus efficitur eget in dolor. Sed vitae nulla in felis elementum ornare sit amet nec lectus. Praesent maximus libero nulla, vel congue justo tempor posuere. Proin pulvinar magna vel sem sollicitudin vulputate. Sed non sagittis nibh.

Proin a mi libero. Ut mattis dictum ex, nec sagittis sem aliquam et. Morbi fermentum molestie dictum. Maecenas suscipit risus sed tincidunt accumsan. Etiam purus nunc, bibendum ornare elit nec, consectetur suscipit ex. Mauris ut orci id felis fringilla rhoncus sit amet eu felis. Morbi tincidunt vitae tortor vel blandit. Maecenas in metus lobortis, ultrices sem id, dictum tortor. Morbi ipsum lacus, porttitor a libero eu, sagittis tincidunt mi. Aliquam volutpat nulla pellentesque augue lobortis bibendum. Nunc rutrum velit nec bibendum pharetra. Nullam at dui sit amet sem cursus lobortis. Nam tristique, ipsum in scelerisque dictum, lacus metus faucibus libero, id semper felis nisi at ligula.

Morbi tempor risus nisl, vel auctor tellus suscipit in. Donec ornare purus eu erat eleifend, a vehicula urna interdum. Donec vestibulum sodales tortor, nec placerat nibh gravida eu. Nunc vel elit consequat, tempus justo eu, cursus sapien. Cras id euismod arcu, et cursus metus. Sed a tortor a sapien scelerisque ullamcorper. Fusce lobortis nisl et eros pharetra, ut cursus augue consequat. Donec tempor fringilla turpis, et ultricies enim condimentum eu. Pellentesque venenatis gravida mi, nec consequat lectus congue eget. Nunc ornare justo ut velit congue, ut imperdiet ante fermentum. In hac habitasse platea dictumst. Donec fermentum felis sit amet tortor tristique volutpat. Morbi ornare varius magna id lobortis. Aenean at massa fermentum, tincidunt odio ac, aliquet mi. Pellentesque cursus mauris id tincidunt elementum.

Maecenas lacinia felis sit amet ante tristique, vel semper ante bibendum. Phasellus in commodo lectus. Aenean at lorem iaculis lectus rhoncus porta sit amet in tortor. Nullam ut rhoncus elit, nec aliquet elit. Morbi tortor tortor, eleifend sed tellus non, rutrum ultricies nibh. Duis vestibulum congue imperdiet. Suspendisse potenti. Sed vitae dui leo.

Praesent porttitor arcu lorem, id dignissim nisl egestas et. Aliquam cursus felis ut nisi scelerisque consectetur. Etiam laoreet posuere ullamcorper. Vivamus eget sem tortor. Cras pretium sagittis neque vestibulum dignissim. Praesent vel ipsum feugiat, malesuada neque in, tincidunt ligula. Integer laoreet ligula id dolor consectetur tincidunt. Aenean vel aliquet justo. Suspendisse nec consequat magna. Nunc elementum facilisis odio at malesuada.</p></div>
        <div className="credentials">
            <div className="credentials-wrapper">
                <svg className="slide-arrow" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44.66 28.18"><defs></defs><path class="cls-1" d="M229.73,263.64c6.11-1.61,13.17-2.49,17.58-7.47a17.17,17.17,0,0,0,3.88-7.39c.59-2.51.86-5.77-.5-8.09a3.89,3.89,0,0,0-6.86,0,7.84,7.84,0,0,0-.11,7.35c2.58,5.44,9.73,6.35,14.94,4.82,6.22-1.83,11.31-8.17,8.9-14.83-.65-1.8-3.55-1-2.89.8,1.54,4.25-1,8.44-4.82,10.36-3.59,1.81-9.05,2.16-12.18-.75a5.54,5.54,0,0,1-1.75-4.89c.1-.58.49-1.9,1.19-2,1.12-.19,1.42,1.76,1.48,2.48a13.71,13.71,0,0,1-4.15,10.79,15,15,0,0,1-6.64,3.56c-2.94.84-5.91,1.57-8.87,2.34a1.51,1.51,0,0,0,.8,2.9Z" transform="translate(-227.87 -235.51)"/><path class="cls-1" d="M261,244a9.2,9.2,0,0,0,3.55-2.93,10.35,10.35,0,0,0,.87-2c0-.06.05-.13.08-.19s-.16.36,0,.07a2.38,2.38,0,0,1,.2-.39,2.12,2.12,0,0,1,.12-.2c.15-.24-.24.27-.05.06s.48-.42.09-.13a1.59,1.59,0,0,0,.69-.9,1.5,1.5,0,0,0-.15-1.15,1.52,1.52,0,0,0-2-.54,4.46,4.46,0,0,0-1.49,1.84c-.16.38-.31.76-.46,1.15l-.16.42c.13-.42.08-.17,0-.07l-.11.22a3.26,3.26,0,0,1-.24.4c-.19.28.12-.13,0,0l-.14.16a4.31,4.31,0,0,1-.37.37l-.2.17-.06.06.09-.07a2.63,2.63,0,0,0-.4.28l-.42.26-.93.53a1.51,1.51,0,0,0-.54,2A1.54,1.54,0,0,0,261,244Z" transform="translate(-227.87 -235.51)"/><path class="cls-1" d="M264.38,238.42c.5.21,1,.52,1.44.77a9,9,0,0,0,1.78.7,9.34,9.34,0,0,0,3.83.19,1.5,1.5,0,0,0,.89-.69,1.57,1.57,0,0,0,.16-1.16,1.59,1.59,0,0,0-.69-.9,1.79,1.79,0,0,0-1.16-.15c.46-.06,0,0-.11,0l-.35,0c-.26,0-.51,0-.77,0l-.3,0c.23,0,.26,0,.1,0l-.2,0c-.24,0-.47-.1-.7-.17a5.3,5.3,0,0,1-.67-.23c-.15-.06-.13-.05.07,0l-.18-.09-.27-.14c-.46-.24-.88-.52-1.36-.72a1.59,1.59,0,0,0-1.15-.15,1.49,1.49,0,0,0-.9.69,1.52,1.52,0,0,0,.54,2Z" transform="translate(-227.87 -235.51)"/></svg>
                <h3></h3>
            </div>
        </div>
        <div id="refs">

        </div>
        <div className="reco-wrapper">
        {reco ? (
            reco.map((r) => {
                if(r._id != id.id){
                    return(
                        <Link to={`/page/${r._id}`}>
                            <div className="box-reco">
                                <p>{r.title}</p>
                            </div>
                        </Link>
                    )
                } else {
                    return
                }
              
            })
            
          ) : (
            <p></p>
          )}
          </div>
      </>
    );
  }