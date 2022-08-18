// import React from "react";
import './WonderLogo.css'
import { Link } from 'react-router-dom';
function WonderLogo(){
    return(
        <Link to="/wonders-website/" className='wonderLogo'>
            <h1 className="wonders">Wonders</h1>
            <h3 className="nailsandspa">NAILS & SPA</h3>
        </Link>
    )
}

export default WonderLogo;