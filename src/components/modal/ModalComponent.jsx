import React from "react";
import styled, { keyframes } from "styled-components";

const ShowModal = keyframes`
  0% {
    transform: Scale(0);
  }

  50% {
    transform: Scale(1.1);
  }
  100%{
    transform: Scale(1);
  }
`;

// Container do modal
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const ModalContent = styled.div`
  background: transparent;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
  padding: 2rem 1.5rem;
  min-width: 320px;
  max-width: 95vw;
  max-height: 90vh;
  overflow-y: auto;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  animation: ${ShowModal} 0.9s linear;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10rem;
  right: 33rem;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;
  z-index: 1000;

`;

const ModalComponent = ({ children, onClose }) => {
  return (
    <ModalOverlay>
      <ModalContent onClick={onClose}>
        <CloseButton onClick={onClose} aria-label="Fechar">
          X
        </CloseButton>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

export default ModalComponent;