import React from "react";
import "../css/bannerText.css"; 

const BannerText = () => {
  return (
    <div className="banner-text-container">
      <div className="banner-overlay">
        <div className="content-wrapper">
          <div className="text-container">
            <h1>Seja Bem-Vindo(a)</h1>
            <p>
              Uma alimentação equilibrada é a chave para uma vida 
              mais saudável. Vamos juntos transformar seus hábitos
               e alcançar o seu melhor!
            </p>
            <h2>Nutricionista Eduarda Giendruczak</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerText;

