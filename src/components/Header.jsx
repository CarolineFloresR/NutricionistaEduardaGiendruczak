import React from "react";
import "../css/header.css";
import Logo from "./Logo";
import SideBar from "./SideBar";

const Header = () => {
    return(
        <div className="header_container">
            <Logo />
            <SideBar />
            
        </div>
    )
}

export default Header;