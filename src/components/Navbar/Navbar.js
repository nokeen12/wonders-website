// import React from "react";
import './Navbar.css'
import WonderLogo from "../Logo/WonderLogo";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { Link } from "react-router-dom";
function Navbar(){
    return(
        <div className='navbar'>
            <div className="leftSide">
                <WonderLogo />
            </div>
            <div className="rightSide">
                <Link to="/wonders-website/home">Home</Link>
                <Link to="/wonders-website/book-now">Booking</Link>
                <Link to="/wonders-website/about">About</Link>
                <HamburgerMenu />
            </div>
        </div>
    )
}
export default Navbar;