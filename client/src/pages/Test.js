import React, { useState, useEffect,  useRef } from "react";
import {useParams} from "react-router-dom";
import Admin from "./Admin";
import Header from "./Header";



export default function Test() {
  function scrollinto(x){
    var number = x.target.innerHTML.replace("[", "").replace("]", "")
    var foot = document.querySelector(`#foot${number}`)
    if(foot){
        foot.scrollIntoView({behavior: 'smooth'})
    }
  }

  function scrollback(x){
    var number = x.target.parentElement.id.replace("foot", "")
    var note = document.querySelector(`#note${number}`)
    if(note){
        note.scrollIntoView({behavior: 'smooth'})
    }
  }

    return (
      <>   
        <p>blah<span class="scroll" id="note1" onClick={(e)=>scrollinto(e)}>[1]</span> blah<span class="scroll" id="two" onClick={(e)=>scrollinto(e)}>[2]</span> blah<span class="scroll" id="three" onClick={(e)=>scrollinto(e)}>[3]</span></p>
        <div style={{ height: '150rem' }} />
        <p id="foot1"><span style={{color: "var(--red-red"}}>[1]</span> blah <span className="scrollback"  onClick={(e)=>scrollback(e)}>↩</span></p>
        <p id="foot2">2. blah</p>
        <div style={{ height: '150rem' }} />
      </>
    );
  }