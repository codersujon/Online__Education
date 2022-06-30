import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(){
    return(
        <div className="header__navbar" >
            <nav>
                <NavLink to="/" className="header__navbar-link header__navbar-item ">Home</NavLink>
                <NavLink to="/about" className="header__navbar-link header__navbar-item ">About</NavLink>
                <NavLink to="/teacher" className="header__navbar-link header__navbar-item">Teacher</NavLink>
                <NavLink to="/course" className="header__navbar-link header__navbar-item">Course</NavLink>
                <NavLink to="/review" className="header__navbar-link header__navbar-item">Review</NavLink>
                <NavLink to="/contact" className="header__navbar-link header__navbar-item">Contact</NavLink>
            </nav>
        </div>
    );
}

export default Navbar;

