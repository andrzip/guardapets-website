import React, { useState } from "react";
import { ModalBackground, ModalContent } from "./ContactStyles";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { ModalButton } from "./ContactStyles";

const ContactModal = ({ isOpen, onClose, contact }) => {
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [pendingLink, setPendingLink] = useState(null);

  const handleContactClick = (e) => {
    e.preventDefault();
    setPendingLink(e.currentTarget.href);
    setShowSecondModal(true);
  };

  const handleSecondModalConfirm = () => {
    if (pendingLink) {
      window.open(pendingLink, "_blank");
      setPendingLink(null);
    }
    setShowSecondModal(false);
    onClose();
  };

  const handleSecondModalCancel = () => {
    setPendingLink(null);
    setShowSecondModal(false);
    onClose();
  };

  if (!isOpen && !showSecondModal) return null;

  return (
    <>
      {isOpen && !showSecondModal && (
        <ModalBackground>
          <ModalContent>
            <h1>Quer adotar?</h1>
            <p>Para adotar esse pet ou saber mais sobre ele, entre em contato:</p>
            {contact.email && (
              <a
                href={`mailto:${contact.email}`}
                onClick={handleContactClick}
              >
                <FaEnvelope style={{ color: "#FF9800", marginRight: "8px", fontSize: "1.2rem" }} />
                {contact.email}
              </a>
            )}
            {contact.phone && (
              <a
                href={`https://wa.me/${contact.phone.replace(/\D/g, "")}`}
                onClick={handleContactClick}
              >
                <FaWhatsapp style={{ color: "#FF9800", marginRight: "8px", fontSize: "1.2rem" }} />
                {contact.phone}
              </a>
            )}
            <ModalButton onClick={onClose}>Cancelar</ModalButton>
          </ModalContent>
        </ModalBackground>
      )}
      {showSecondModal && (
        <ModalBackground>
          <ModalContent>
            <h1>Atenção!</h1>
            <p>
            A venda de animais não é permitida em nosso site. Porém, alguns protetores podem pedir uma 
            taxa de adoção para ajudar com custos de resgate e cuidados. Em caso de dúvida, escreva para
              <strong> andrweb876@gmail.com</strong>.
            </p>
            <p>Aubrigado! 🐶</p>
            <h1>Antes de adotar, lembre-se:</h1>
            <p>
            Animais têm sentimentos e precisam de cuidados diários. Ao adotar, você assume a responsabilidade 
            de cuidar e amar o pet por toda a vida!
            </p>
            <div style={{ display: "flex", marginTop: "1rem", gap: "1rem" }}>
              <ModalButton primary onClick={handleSecondModalConfirm}>Ok</ModalButton>
              <ModalButton onClick={handleSecondModalCancel}>Cancelar</ModalButton>
            </div>
          </ModalContent>
        </ModalBackground>
      )}
    </>
  );
};

export default ContactModal;
