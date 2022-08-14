import React from "react";
import './Navbar.css'
import WonderLogo from "../Logo/WonderLogo";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
function Navbar(){
    return(
        <div className='navbar'>
            <WonderLogo />
            
            <HamburgerMenu />
        </div>
    )
}
export default Navbar;