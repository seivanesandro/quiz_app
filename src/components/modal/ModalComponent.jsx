import React from "react";
import styled, { keyframes } from "styled-components";
//import { devices } from "../../utils/constantes";
import Button from "../common/Button";
import { devices } from "../../utils/constantes";

const EffectSmooth = keyframes`
  0% {
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;


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
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;

  &.isOpen {
    opacity: 1;
    z-index: 999;
  }
`;

const ModalContent = styled.div`
  width: 38%;
  min-width: 20rem;
  max-width: 60%;
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid rgba(108, 99, 255, 0.68);
  border-radius: 0.5rem;
  background: rgba(0, 0, 0, 68%);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
  color: #fff;
  box-shadow: 0 0.1rem 0.6rem rgba(108, 99, 255, 0.48) !important;
  animation: ${EffectSmooth} 1.5s ease-out;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
  text-align: center;

  overflow-y: auto;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  animation: ${ShowModal} 0.9s linear;

  @media only screen and (${devices.fourk}) {
    width: 45%;
  }
  @media only screen and (${devices.portatilL}) {
    width: 56%;
  }
  @media only screen and (${devices.portatilS}) {
    width: 56%;
  }
  @media only screen and (${devices.portatil}) {
    width: 56%;
  }
  @media only screen and (${devices.tablet}) {
    width: 60%;
  }
  @media only screen and (${devices.mobileP}) {
    min-width: 19rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 2rem;
`;

/*FIXME: const CloseButton = styled.button`
  position: absolute;
  top: 3rem !important;
  right: 37rem;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;
  z-index: 1000;

  @media only screen and (${devices.fourk}) {
    right: 41rem;
  }
  @media only screen and (${devices.portatilL}) {
    right: 23rem;
  }
  @media only screen and (${devices.portatilS}) {
    right: 17rem;
  }
  @media only screen and (${devices.portatil}) {
    right: 17rem;
  }
  @media only screen and (${devices.tablet}) {
    right: 6rem;
  }
  @media only screen and (${devices.iphone14}) {
    right: 3rem;
  }
  @media only screen and (${devices.mobileG}) {
    right: 3rem;
  }
  @media only screen and (${devices.mobileM}) {
    right: 2rem !important;
  }
`; */

const ModalComponent = ({ children, onClose }) => {
  return (
    <>
      <ModalOverlay className="modal-overlay isOpen">
        <ModalContent onClick={onClose} className="modal-content">
          <h3 className="modal-title">Congrats!!!</h3>
          <p>Your answered N Questions Correctly </p>
          <ButtonContainer>
            <Button $variant="close">play Again</Button>
          </ButtonContainer>

          {children}
        </ModalContent>
      </ModalOverlay>
    </>
  );
};

export default ModalComponent;