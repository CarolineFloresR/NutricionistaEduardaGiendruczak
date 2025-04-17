import React from "react";
import ImagemLogo from "../assets/logo.png"
import ImgNutri from "../assets/Eduarda.jpeg"
import "../css/about.css";


const About = () => {
    return(
      <div id="sobreMim" className="about-section">
  <div className="container">
    <div className="content">
     
      <div className="image-container">
        <img className="imgNutri" src={ImgNutri} alt="Nutricionista Eduarda" />
      </div>

      
      <div className="text-container">
        <h2 className="title-about">Sobre mim</h2>
        <p className="description-about">
          Olá! Me chamo Eduarda Giendruczak, sou nutricionista 
          formada pela PUC-RS e apaixonada pelo cuidado integrativo. 
          Acredito que a nutrição vai muito além da contagem de calorias
          — é sobre equilíbrio, saúde e bem-estar. Meu objetivo é te 
          ajudar a criar uma relação mais leve e sustentável com a comida,
          focando na reeducação alimentar e em mudanças reais no seu estilo
          de vida.
        </p>
        <img className="image-logo" src={ImagemLogo} alt="Imagem logo" />
      </div>
    </div>
  </div>
</div>

    )
}

export default About;