import React from "react";

export default function Logo(props){
    return(
        <a href="/" class="header__logo">
            <i className="fas fa-graduation-cap"></i>{props.companyLogo}
        </a> 
    );
}