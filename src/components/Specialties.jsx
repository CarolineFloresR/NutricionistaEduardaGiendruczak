import React from "react";
import "../css/specialties.css";

const Specialties = () =>{
    return(
        <div id="atuacoes" className="specialties-section">
    <div className="container">
      <h2 className="title-specialties">Atuações</h2>
      <div className="grid">
        <div className="specialty-card">
          <div className="icon">🏋️‍♂️</div>
          <h3 className="description-specialties">Nutrição Esportiva e Estética</h3>
        </div>
        <div className="specialty-card">
          <div className="icon">🥗</div>
          <h3 className="description-specialties">Reeducação alimentar, emagrecimento e hipertrofia </h3>
        </div>
        <div className="specialty-card">
          <div className="icon">🏥</div>
          <h3 className="description-specialties">Ênfase em Doenças Crônicas e Bariátrica</h3>
        </div>
        <div className="specialty-card">
          <div className="icon">⚕️</div>
          <h3 className="description-specialties">Nutrição Clínica</h3>
        </div>
      </div>
    </div>
  </div>

    )
}

export default Specialties;