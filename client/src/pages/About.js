import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import Admin from "./Admin";
import Header from "./Header";



export default function About() {

    return (
      <>
        <Header  bottom="95px" right="470px"></Header>
        <h4 className="pending">page en rédaction ...</h4>
      </>
    );
  }