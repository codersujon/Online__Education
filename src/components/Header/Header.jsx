import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Bars from "./Bars";


function Header(){
    return(
        <header>
            <div className="header">
                <Logo companyLogo="logo"/>
                <Navbar />
                <Bars />
            </div>
        </header>
    );
}


export default Header;