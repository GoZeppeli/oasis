import { Link } from "react-router-dom";

export default function Headers(props) {

    return(
        <>
            
            <div className="header-div">
                <img src={window.location.origin + '/img/protest-crop.png'} alt="header"></img>
                <Link to={"/"}><h1 className="title">Oasis.</h1></Link>
                <div className="menuLink">
                    <svg id="menu" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 316.7 326.17"><defs></defs><path class="cls-1" d="M412.22,216.4c-7.85-26.84-31.41-45.83-61.47-53.39-7.31-41.08-33.47-72.92-68.58-78-30.37-4.39-60,12.36-79.49,41.13-30.52-8.1-60.87-2.65-80.8,17.59-24.59,25-26.39,65.51-8,102.31-19.85,33.53-21.5,71.81-.74,98.24s58.73,34,96.21,22.38c22,32.05,55.86,49.67,88.52,42.08,36.74-8.54,60.81-46.36,62.19-91.5C400.58,294.17,423.08,253.52,412.22,216.4Z" transform="translate(-98.24 -84.33)"/></svg>
                    <h3 className="menuH">menu</h3>
                </div>
            </div>
            <div className="relative">

            </div>
        </>
    )
}