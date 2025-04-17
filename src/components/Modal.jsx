import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import "../css/modal.css";

const Modal = ({ isModalOpen, setIsModalOpen }) => {
  if (!isModalOpen) return null; 

  return (
    <div className="modal ativo">
      <div className="modal-content">
        <div className="modal-icon">
          <FaCheckCircle />
        </div>
        <div className="modal-message">Mensagem enviada com sucesso!</div>
        <button className="modal-close-btn" onClick={() => setIsModalOpen(false)}>
          Fechar
        </button>
      </div>
    </div>
  );
};

export default Modal;
