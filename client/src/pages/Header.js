import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {isMobile} from 'react-device-detect';
export default function Headers(props) {

    useEffect(() => {
        if(document.querySelector(".here")){
                    if(props.bottom && props.right){
                        var here = document.querySelector(".here")
                        here.style.bottom= `${props.bottom}`
                        here.style.right= `${props.right}`
                    } else {
                        document.querySelector(".here").style.display = "none"
                    }
                    
                }
    }, [props])
        
    
    function openMenu(){
        document.querySelector("#navPage").classList.add("showNav")
        setTimeout(function(){
            document.querySelector("body").style.overflowY= "hidden"
        }, 200);
        document.querySelector(".fixed").style.display = "none"

    }

    function hideMenu(){
        document.querySelector("#navPage").classList.remove("showNav")
        document.querySelector("body").style.overflowY= ""
        document.querySelector(".fixed").style.display = "block"

    }

    function scrollandresize() {
        var header = document.querySelector(".header-div")
        var menuH = document.querySelector(".menuH")
        var menu = document.querySelector(".menu")
        if(header && menuH){
        if(window.scrollY >=  55){
            if(window.innerWidth <= 600){
                menuH.style.right = "56px"
                menuH.style.top = "44px"
                menuH.style.fontSize = "11px" 
            } else {
                menuH.style.right = "66px"
                menuH.style.top = "64px"
                menuH.style.fontSize = "20px" 
            }
            
        } else {
            menuH.style.right = ""
            menuH.style.top = ""
            menuH.style.fontSize = ""
        }
    }
}   

    function hover() {
        var style = getComputedStyle(document.querySelector(".menuH"))
        var number = Number(style.right.replace('px', '')) - 3
        var final = number + "px"
        document.querySelector(".menuH").style.right = `${final}`
    }

    function closeBack() {
        var style = getComputedStyle(document.querySelector(".menuH"))
        var number = Number(style.right.replace('px', '')) + 3
        var final = number + "px"
        document.querySelector(".menuH").style.right = `${final}`
    }

    window.addEventListener("scroll", () => {
        scrollandresize()
    })
    window.addEventListener("resize", () => {
        scrollandresize()
    })


    return(
        <>
            <div className="relative"></div>
            <div id="navPage" className="NavRed">
                <div className="menuLink" onClick={() => hideMenu()}>
                    <svg className="menu" id="whiteMenu" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 316.7 326.17"><defs></defs><path class="cls-1" d="M412.22,216.4c-7.85-26.84-31.41-45.83-61.47-53.39-7.31-41.08-33.47-72.92-68.58-78-30.37-4.39-60,12.36-79.49,41.13-30.52-8.1-60.87-2.65-80.8,17.59-24.59,25-26.39,65.51-8,102.31-19.85,33.53-21.5,71.81-.74,98.24s58.73,34,96.21,22.38c22,32.05,55.86,49.67,88.52,42.08,36.74-8.54,60.81-46.36,62.19-91.5C400.58,294.17,423.08,253.52,412.22,216.4Z" transform="translate(-98.24 -84.33)"/></svg>
                    <div className="crossRectangle"></div>
                    <div className="crossRectangle moreDeg"></div>
                </div>
                <Link to={"/"}><h1 className="navTitle">Oasis.</h1></Link>
                <div className="contact-wrapper">
                    <h4>contact</h4>
                    <a href="https://www.instagram.com/oasis.media.web/" target="_blank">
                        <div className="contact-svg">
                            <img src={window.location.origin + '/img/ig.png'} alt="insta"></img>
                        </div>
                    </a>
                </div>
                <div className="navigation">
                    <Link to={"/"} onClick={() => hideMenu()}><h1 className="ul">ACCUEIL</h1></Link>
                    <Link to={"/browse"} onClick={() => hideMenu()}><h1 className="ul">PARCOURIR</h1></Link>
                    <Link to={"/maps"} onClick={() => hideMenu()}><h1 className="ul">CARTE</h1></Link>
                    <Link to={"/references"} onClick={() => hideMenu()}><h1 className="ul">REFERENCES</h1></Link>
                    <Link to={"/about-us"} onClick={() => hideMenu()}><h1 className="ul">A PROPOS</h1></Link>
                    <Link to={"/donate"} onClick={() => hideMenu()}><h1 className="ul">DON</h1></Link>
                    <div className="here">
                        <span>you're here !</span>
                        <svg id="arrow" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44.66 28.18"><defs></defs><path class="cls-1" d="M229.73,263.64c6.11-1.61,13.17-2.49,17.58-7.47a17.17,17.17,0,0,0,3.88-7.39c.59-2.51.86-5.77-.5-8.09a3.89,3.89,0,0,0-6.86,0,7.84,7.84,0,0,0-.11,7.35c2.58,5.44,9.73,6.35,14.94,4.82,6.22-1.83,11.31-8.17,8.9-14.83-.65-1.8-3.55-1-2.89.8,1.54,4.25-1,8.44-4.82,10.36-3.59,1.81-9.05,2.16-12.18-.75a5.54,5.54,0,0,1-1.75-4.89c.1-.58.49-1.9,1.19-2,1.12-.19,1.42,1.76,1.48,2.48a13.71,13.71,0,0,1-4.15,10.79,15,15,0,0,1-6.64,3.56c-2.94.84-5.91,1.57-8.87,2.34a1.51,1.51,0,0,0,.8,2.9Z" transform="translate(-227.87 -235.51)"/><path class="cls-1" d="M261,244a9.2,9.2,0,0,0,3.55-2.93,10.35,10.35,0,0,0,.87-2c0-.06.05-.13.08-.19s-.16.36,0,.07a2.38,2.38,0,0,1,.2-.39,2.12,2.12,0,0,1,.12-.2c.15-.24-.24.27-.05.06s.48-.42.09-.13a1.59,1.59,0,0,0,.69-.9,1.5,1.5,0,0,0-.15-1.15,1.52,1.52,0,0,0-2-.54,4.46,4.46,0,0,0-1.49,1.84c-.16.38-.31.76-.46,1.15l-.16.42c.13-.42.08-.17,0-.07l-.11.22a3.26,3.26,0,0,1-.24.4c-.19.28.12-.13,0,0l-.14.16a4.31,4.31,0,0,1-.37.37l-.2.17-.06.06.09-.07a2.63,2.63,0,0,0-.4.28l-.42.26-.93.53a1.51,1.51,0,0,0-.54,2A1.54,1.54,0,0,0,261,244Z" transform="translate(-227.87 -235.51)"/><path class="cls-1" d="M264.38,238.42c.5.21,1,.52,1.44.77a9,9,0,0,0,1.78.7,9.34,9.34,0,0,0,3.83.19,1.5,1.5,0,0,0,.89-.69,1.57,1.57,0,0,0,.16-1.16,1.59,1.59,0,0,0-.69-.9,1.79,1.79,0,0,0-1.16-.15c.46-.06,0,0-.11,0l-.35,0c-.26,0-.51,0-.77,0l-.3,0c.23,0,.26,0,.1,0l-.2,0c-.24,0-.47-.1-.7-.17a5.3,5.3,0,0,1-.67-.23c-.15-.06-.13-.05.07,0l-.18-.09-.27-.14c-.46-.24-.88-.52-1.36-.72a1.59,1.59,0,0,0-1.15-.15,1.49,1.49,0,0,0-.9.69,1.52,1.52,0,0,0,.54,2Z" transform="translate(-227.87 -235.51)"/></svg>                    </div>
                    </div>
            </div>
            <div className="header-div">
                <img src={window.location.origin + '/img/protest-crop.png'} alt="header" className="protest"></img>
                <Link to={"/"}><h1 className="title">Oasis.</h1></Link>
            </div>
            <div className="menuLink fixed" onMouseEnter={() => {hover()}} onMouseLeave={() => closeBack()} onClick={() => openMenu()}>
                    <svg className="menu" id="redMenu" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 316.7 326.17"><defs></defs><path class="cls-1" d="M412.22,216.4c-7.85-26.84-31.41-45.83-61.47-53.39-7.31-41.08-33.47-72.92-68.58-78-30.37-4.39-60,12.36-79.49,41.13-30.52-8.1-60.87-2.65-80.8,17.59-24.59,25-26.39,65.51-8,102.31-19.85,33.53-21.5,71.81-.74,98.24s58.73,34,96.21,22.38c22,32.05,55.86,49.67,88.52,42.08,36.74-8.54,60.81-46.36,62.19-91.5C400.58,294.17,423.08,253.52,412.22,216.4Z" transform="translate(-98.24 -84.33)"/></svg>
                    <h3 className="menuH">menu</h3>
            </div>
        </>
    )
}