import React from "react";
import "../css/logo.css";
import ImgLogo from '../assets/logoPrincipal.png';

const Logo = () => {
    return(
        <div className="container_logo">
            <img className="img_logo" src={ImgLogo} alt="Imagem da logo" />
        </div>
    )

}

export default Logo;