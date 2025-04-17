import React, { useState } from "react";
import "../css/sideBar.css";

const textOptions = [
  { nome: "Início", link: "#inicio" },
  { nome: "Sobre Mim", link: "#sobreMim" },
  { nome: "Atuações", link: "#atuacoes" },
  { nome: "Contato", link: "#contato" }
];

const SideBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div>
      <button className="button-menu" onClick={openMenu}>
        &#9776;
      </button>

      <nav className={`side-menu ${menuOpen ? "ativo" : ""}`}>
        <button className="close-button" onClick={closeMenu}>
          &times;
        </button>
        <ul className="menu-list">
          {textOptions.map((option, index) => (
            <li key={index}>
              <a className="menu-link" href={option.link} onClick={closeMenu}>
                {option.nome}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className={`overlay ${menuOpen ? "ativo" : ""}`} onClick={closeMenu}></div>

    </div>
  );
};

export default SideBar;

