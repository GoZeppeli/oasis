import { useState, useEffect } from "react";

const Dot = (props) => {

  return(
    <>
        <svg height="55"  width="55" xmlns="http://www.w3.org/2000/svg">
            <circle r="20" cx="27.5" cy="27.5" fill={props.color}/>
        </svg>
    </>
  );
};

export default Dot;