import React from "react";
import "../css/contactWpp.css"

const ContactWpp = () => {
    return(
        <div className="info-container">
            
            <div className="info">
              <div className="info-item">
                <span className="icon">💻</span>
                <span className="info-label">Consultas 100% online</span>
              </div>
              <div className="info-item">
                <span className="icon">⏰</span>
                <span className="info-label">Horário Flexível</span>
              </div>
            </div>
            <a
               href={`https://wa.me/${import.meta.env.VITE_PHONE_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              Agendar Consulta via WhatsApp
            </a>
          </div>
    )
}

export default ContactWpp;