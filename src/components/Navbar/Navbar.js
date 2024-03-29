// import React from "react";
import './Navbar.css'
import WonderLogo from "../Logo/WonderLogo";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { Link } from "react-router-dom";
function Navbar(){
    return(
        <div className='navbar'>
            <div className="leftSide">
                <Link to="/"><WonderLogo /></Link>
            </div>
            <div className="rightSide">
                <Link to="/home">Home</Link>
                <Link to="/book-now">Booking</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <HamburgerMenu />
            </div>
        </div>
    )
}
export default Navbar;