import React from "react";
import "../css/mainBanner.css";
import ImgBanner from  "../assets/bannerPrincipal.jpg";
import BannerText from "./BannerText";

const MainBanner = () => {
    return(
        <div id="inicio" className="banner-container">
            <div className="banner-image">
            <img className="background-image" src={ImgBanner} alt="" />
            </div>
            <BannerText />
        </div>
    )
}

export default MainBanner;