import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import Admin from "./Admin";
import Header from "./Header";



export default function NotFound() {

    return (
      <>
        <Header  bottom="100px" right="490px"></Header>
        <h1 className="pending">page inexistante</h1>
      </>
    );
  }