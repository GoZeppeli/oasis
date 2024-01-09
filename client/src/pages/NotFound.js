import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import Admin from "./Admin";
import Header from "./Header";



export default function NotFound() {

    return (
      <>
        <Header></Header>
        <h1 className="pending">page inexistante</h1>
      </>
    );
  }