import React from "react";
import "../css/contact.css";
import Laranjas from "../assets/laranjas.jpg";
import ContactWpp from "./ContactWpp";
import ContactEmail from "./ContactEmail";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault(); 
    const formData = new FormData(event.target);

    formData.append("access_key", process.env.REACT_APP_WEB3FORMS_KEY);

    const object = Object.fromEntries(formData); 
    const json = JSON.stringify(object); 
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await res.json(); 

      if (result.success) {
        console.log("Success", result);
      } else {
        console.error("Error", result);
      }
    } catch (error) {
      console.error("Request failed", error);
    }
  };

  return (
    <div id="contato" className="contact-section">
      <div className="background-image">
        <img className="image-fruits" src={Laranjas} alt="Imagem de frutas" />
      </div>
      <div className="container">             
          <h2 className="title-contact">Contato</h2>
        <div className="content">
          <ContactEmail onSubmit={onSubmit} />
          <ContactWpp />
        </div>
      </div>
    </div>
  );
};

export default Contact;
